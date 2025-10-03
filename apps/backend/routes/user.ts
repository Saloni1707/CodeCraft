import { Router } from "express";
import rateLimit from 'express-rate-limit';
import { z } from 'zod';
import OTPService from "../lib/otpStore";
import dotenv from "dotenv";
import prisma from "../lib/client";
import {hashPassword,comparePassword,generateToken} from "../lib/auth";
import {authenticateToken, authorizeRole } from "../middleware/authMiddleware";
import { gradeSubmissionwithAI } from "../services/aiGrading";
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
        }else{
        const hashedPassword=await hashPassword(password);
        const user = await prisma.user.create({
            data:{
                email,
                password:hashedPassword
            }
        });
        return res.status(201).json({success:true,message:"User created successfully",user})
        }
    }catch(error){
        if(error instanceof z.ZodError){
            return res.status(400).json({success:false,errors:error.errors})
        }
        console.error(error);
        return res.status(500).json({success:false,message:"Internal server error"})
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
        const token=await generateToken({id:user.id,role:user.role});
        return res.status(200).json({success:true,message:"User signed in successfully",user:{id:user.id,email:user.email,role:user.role},token})

    }catch(error){
        if(error instanceof z.ZodError){
            return res.status(400).json({success:false,errors:error.errors})
        }
        console.error(error);
        return res.status(500).json({success:false,message:"Internal server error"})
    }
});

router.get("/profile",authenticateToken,async(req,res)=>{
    const user=(req as any).user;
    res.json({success:true,user});
});

router.get("/admin/dashboard", 
    authenticateToken, 
    authorizeRole("Admin"), 
    (req, res) => {
      res.json({ success: true, message: "Welcome Admin!" });
  });

router.post('/send-otp', otpRateLimiting, async (req, res) => {
    try {
        const { email } = sendOTPSchema.parse(req.body);
        const result = await otpService.sendOTP(email);
        return res.json(result);
    } catch (error) {
        if (error instanceof z.ZodError) {
            return res.status(400).json({
                success: false,
                errors: error.errors
            });
        }
        const message = error instanceof Error ? error.message : 'Unknown error';
        return res.status(500).json({
            success: false,
            message
        });
    }
});

router.post('/verify-otp', async (req, res) => {
    try {
        const { email, otp } = verifyOTPSchema.parse(req.body);
        const result = await otpService.verifyOTP(email, otp);
        return res.json(result);
    } catch (error) {
        if (error instanceof z.ZodError) {
            return res.status(400).json({
                success: false,
                errors: error.errors
            });
        }
        const message = error instanceof Error ? error.message : 'Unknown error';
        return res.status(500).json({ 
            success: false, 
            message 
        });
    }
});

router.get("/challenges",async(req,res)=>{
    try{
        const challenges=await prisma.challenge.findMany({
            include:{
                contestToChallengeMapping:{
                    include:{
                        contests:true,
                    }
                }
            }
        });
        return res.status(200).json({success:true,challenges});
    }catch(err){
        console.log(err);
        return res.status(500).json({success:false,message:"Internal server error"});
    }
});
//we get here the single challenge
router.get("/challenges/:challengeId",async(req,res)=>{
    try{
        const{challengeId}=req.params;
        const challenge=await prisma.challenge.findUnique({
            where:{id:challengeId},
            include:{
                contestToChallengeMapping:{
                    include:{
                        contests:true,
                    }

                }
            }
        });
        if(!challenge){
            return res.status(404).json({success:false,message:"Challenge not found"})
        }
        const now=new Date();
        const contest = challenge.contestToChallengeMapping[0]?.contests;
        if(!contest){
            return res.status(404).json({success:false,message:"Contest not found"});
        }
        if(contest.startTime>now){
            return res.status(404).json({success:false,message:"Contest not started yet"});
        }
        return res.status(200).json({success:true,challenge});
    }catch(err){
        console.log(err);
        return res.status(500).json({success:false,message:"Internal server error"});
    }
});

router.post("/challenges/:challengeId/submit", authenticateToken, async(req, res) => {
    try {
        const { challengeId } = req.params;
        const { submissions } = req.body;
        const user = (req as any).user;

        if (!submissions || typeof submissions !== 'string') {
            return res.status(400).json({
                success: false,
                message: "Invalid submission format"
            });
        }

        const mapping = await prisma.contestToChallengeMapping.findFirst({
            where: {
                challengeId: challengeId
            },
            include: {
                contests: true
            }
        });

        if (!mapping) {
            return res.status(400).json({
                success: false,
                message: "Challenge not found in any contest"
            });
        }

        const now = new Date();
        const contest = mapping.contests;
        
        if (contest.startTime > now) {
            return res.status(403).json({
                success: false,
                message: "Contest has not started yet"
            });
        }

        if (contest.endTime < now) {
            return res.status(403).json({
                success: false,
                message: "Contest has ended"
            });
        }

        const challenge = await prisma.challenge.findUnique({
            where: { id: challengeId }
        });

        if (!challenge) {
            return res.status(404).json({
                success: false,
                message: "Challenge not found"
            });
        }

        const gradingResult = await gradeSubmissionwithAI(
            submissions,
            challenge.title,
            challenge.description || "",
            challenge.maxPoints
        );

      
        const submission = await prisma.submission.create({
            data: {
                userId: user.id,
                submissions,
                contestToChallengeMappingId: mapping.id,
                points: gradingResult.points,
            }
        });

        
        return res.status(200).json({
            success: true,
            submission: {
                id: submission.id,
                points: gradingResult.points,
                maxPoints: gradingResult.maxPoints,
                submittedAt: submission.createdAt
            },
            grading: {
                feedback: gradingResult.feedback,
                criteria: gradingResult.criteria
            }
        });

    } catch (err) {
        console.error("Submission error:", err);
        
        if (err instanceof Error && err.message.includes("API")) {
            return res.status(503).json({
                success: false,
                message: "Grading service temporarily unavailable"
            });
        }

        return res.status(500).json({
            success: false,
            message: "Internal server error"
        });
    }
});

export default router;