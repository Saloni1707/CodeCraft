import { Router } from "express";
import rateLimit from 'express-rate-limit';
import { z } from 'zod';
import OTPService from "../lib/otpStore";
import dotenv from "dotenv";
import prisma from "../lib/client";
import {hashPassword,comparePassword,generateToken} from "../lib/auth";
dotenv.config();

const router = Router();

const otpRateLimiting = rateLimit({
    windowMs: 15 * 60 * 1000,
    max: 5,
    message: "Too many OTP requests from this IP, please try again after 15 minutes"
});

const sendOTPSchema = z.object({
    email: z.string().email('Invalid email')
});

const verifyOTPSchema = z.object({
    email: z.string().email('Invalid email'),
    otp: z.string().min(6, 'OTP must be 6 digits')
});

let otpService: OTPService;
try {
    if (!process.env.BREVO_API_KEY) {
        throw new Error('BREVO_API_KEY environment variable is required');
    }
    otpService = new OTPService(process.env.BREVO_API_KEY, {
        url: process.env.REDIS_URL || 'redis://localhost:6379',
        socket: {
            tls: process.env.NODE_ENV === 'production',
            rejectUnauthorized: false
        }
    });
    otpService.connect().catch(console.error);
} catch (error) {
    console.error('Failed to initialize OTP service:', error);
    process.exit(1);
}
const signupSchema=z.object({
    email:z.string().email("Invalid email"),
    password:z.string().min(4,"Password must be at least 4 characters")    
})

router.post("/signup", async(req, res) => {
    try{
        const{email,password}=signupSchema.parse(req.body);
        const existingUser=await prisma.user.findUnique({where:{email}})
        if(existingUser){
            return res.status(400).json({success:false,message:"User already exists"})
        }
        const hashedPassword=await hashPassword(password);
        const user = await prisma.user.create({
            data:{
                email,
                password:hashedPassword
            }
        });
        res.status(201).json({success:true,message:"User created successfully",user})
    }catch(error){
        if(error instanceof z.ZodError){
            return res.status(400).json({success:false,errors:error.errors})
        }
        console.error(error);
        res.status(500).json({success:false,message:"Internal server error"})
    }
});
const signinSchema=z.object({
    email:z.string().email("Invalid email"),
    password:z.string().min(4,"Password must be at least 4 characters")    
})

router.post("/signin",async (req, res) => {
    try{
        const{email,password}=signinSchema.parse(req.body);
        const user=await prisma.user.findUnique({where:{email}});
        if(!user){
            return res.status(400).json({success:false,message:"Invalid credentials"})
        }
        const isMatch=await comparePassword(password,user.password);
        if(!isMatch){
            return res.status(400).json({success:false,message:"Invalid credentials"})
        }
        const token=generateToken(user.id,user.role);
        res.status(200).json({success:true,message:"User signed in successfully",token})

    }catch(error){
        if(error instanceof z.ZodError){
            return res.status(400).json({success:false,errors:error.errors})
        }
        console.error(error);
        res.status(500).json({success:false,message:"Internal server error"})
    }
});

router.post('/send-otp', otpRateLimiting, async (req, res) => {
    try {
        const { email } = sendOTPSchema.parse(req.body);
        const result = await otpService.sendOTP(email);
        res.json(result);
    } catch (error) {
        if (error instanceof z.ZodError) {
            return res.status(400).json({
                success: false,
                errors: error.errors
            });
        }
        const message = error instanceof Error ? error.message : 'Unknown error';
        res.status(500).json({
            success: false,
            message
        });
    }
});

router.post('/verify-otp', async (req, res) => {
    try {
        const { email, otp } = verifyOTPSchema.parse(req.body);
        const result = await otpService.verifyOTP(email, otp);
        res.json(result);
    } catch (error) {
        if (error instanceof z.ZodError) {
            return res.status(400).json({
                success: false,
                errors: error.errors
            });
        }
        const message = error instanceof Error ? error.message : 'Unknown error';
        res.status(500).json({ 
            success: false, 
            message 
        });
    }
});

export default router;