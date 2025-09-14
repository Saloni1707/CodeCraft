import { Router } from "express";
import rateLimit from 'express-rate-limit';
import { z } from 'zod';
import OTPService from "../lib/otpStore";
import dotenv from "dotenv";
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

// Initialize OTP service - make sure env vars are loaded
let otpService: OTPService;
try {
    if (!process.env.BREVO_API_KEY) {
        throw new Error('BREVO_API_KEY environment variable is required');
    }
    // otpService = new OTPService(process.env.BREVO_API_KEY);
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

router.post("/signup", (req, res) => {
    // TODO: Implement signup logic
    res.json({ message: "Signup endpoint - not implemented yet" });
});

router.post("/signin", (req, res) => {
    // TODO: Implement signin logic
    res.json({ message: "Signin endpoint - not implemented yet" });
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
        // Fix: Use the existing otpService instance, not create a new one
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