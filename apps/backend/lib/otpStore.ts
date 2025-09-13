// lib/otpService.ts
import { createClient, RedisClientType } from 'redis';
import * as SibApiV3Sdk from 'sib-api-v3-sdk';
import { randomInt } from 'crypto';

interface RedisConfig {
    url?: string;
    socket?: {
        tls?: boolean;
        rejectUnauthorized?: boolean;
    };
    [key: string]: any;
}

interface OTPConfig {
    otpLength: number;
    otpExpiry: number; // in seconds
    maxAttempts: number;
    rateLimitWindow: number; // in seconds
    maxRequestsPerHour: number;
}

interface SendOTPResult {
    success: boolean;
    message: string;
    messageId?: string;
    expiresIn: number;
}

interface VerifyOTPResult {
    success: boolean;
    message: string;
    attemptsRemaining?: number;
}

interface OTPStatus {
    exists: boolean;
    expiresIn: number;
    attemptsUsed: number;
    attemptsRemaining: number;
}

interface EmailRecipient {
    email: string;
    name: string;
}

interface EmailSender {
    name: string;
    email: string;
}

class OTPService {
    private redisClient: RedisClientType;
    private transactionalEmailsApi: SibApiV3Sdk.TransactionalEmailsApi;
    private config: OTPConfig;

    constructor(brevoApiKey: string, redisConfig: RedisConfig = {}) {
        const redisUrl = redisConfig.url || process.env.REDIS_URL || "";
        const isTLS = redisUrl.startsWith("rediss://");

        // Initialize Redis client with auto TLS detection
        this.redisClient = createClient({
            url: redisUrl,
            socket: {
                tls: isTLS,
                rejectUnauthorized: isTLS ? true : undefined,
                ...redisConfig.socket
            },
            ...redisConfig
        });

        this.redisClient.on('error', (err: Error) => {
            console.error('Redis Client Error:', err);
        });

        this.redisClient.on('connect', () => {
            console.log('Connected to Redis');
        });

        // Initialize Brevo API
        const defaultClient = SibApiV3Sdk.ApiClient.instance;
        const apiKey = defaultClient.authentications['api-key'];
        apiKey.apiKey = brevoApiKey;

        this.transactionalEmailsApi = new SibApiV3Sdk.TransactionalEmailsApi();

        // Default OTP config
        this.config = {
            otpLength: 6,
            otpExpiry: 300, // 5 minutes
            maxAttempts: 5,
            rateLimitWindow: 3600, // 1 hour
            maxRequestsPerHour: 5
        };
    }

    async connect(): Promise<void> {
        await this.redisClient.connect();
    }

    async disconnect(): Promise<void> {
        await this.redisClient.disconnect();
    }

    // Generate secure OTP
    private generateOTP(length: number = this.config.otpLength): string {
        const digits = '0123456789';
        let otp = '';
        for (let i = 0; i < length; i++) {
            const randomIndex = randomInt(0, digits.length);
            otp += digits[randomIndex];
        }
        return otp;
    }

    // Check rate limiting (atomic)
    private async checkRateLimit(email: string): Promise<boolean> {
        const rateLimitKey = `rate_limit:${email}`;
        const currentCount = await this.redisClient.get(rateLimitKey);
        return !(
            currentCount &&
            parseInt(currentCount) >= this.config.maxRequestsPerHour
        );
    }

    // Update rate limit counter (atomic)
    private async updateRateLimit(email: string): Promise<void> {
        const rateLimitKey = `rate_limit:${email}`;

        const result = await this.redisClient.multi()
            .incr(rateLimitKey)
            .expire(rateLimitKey, this.config.rateLimitWindow)
            .exec();

        if (!result) {
            throw new Error("Failed to update rate limit");
        }
    }

    // Send OTP
    async sendOTP(email: string, purpose: string = 'verification'): Promise<SendOTPResult> {
        try {
            const canSend = await this.checkRateLimit(email);
            if (!canSend) {
                throw new Error('Rate limit exceeded. Too many OTP requests.');
            }

            const otp = this.generateOTP();
            const otpKey = `otp:${email}`;
            const attemptsKey = `attempts:${email}`;

            await this.redisClient.setEx(otpKey, this.config.otpExpiry, otp);
            await this.redisClient.setEx(attemptsKey, this.config.otpExpiry, '0');

            const sendSmtpEmail: SibApiV3Sdk.SendSmtpEmail = {
                to: [{
                    email: email,
                    name: email.split('@')[0]
                }] as EmailRecipient[],
                subject: `Your OTP for ${purpose}`,
                htmlContent: this.generateOTPEmailHTML(otp, purpose),
                textContent: this.generateOTPEmailText(otp, purpose),
                sender: {
                    name: process.env.SENDER_NAME || "Your App",
                    email: process.env.SENDER_EMAIL || "noreply@yourapp.com"
                } as EmailSender
            };

            const result = await this.transactionalEmailsApi.sendTransacEmail(sendSmtpEmail);

            await this.updateRateLimit(email);

            return {
                success: true,
                message: 'OTP sent successfully',
                messageId: (result as any).messageId, // SDK typing quirk
                expiresIn: this.config.otpExpiry
            };

        } catch (error) {
            console.error('Error sending OTP:', error);
            const errorMessage = error instanceof Error ? error.message : 'Unknown error';
            throw new Error(`Failed to send OTP: ${errorMessage}`);
        }
    }

    // Verify OTP
    async verifyOTP(email: string, inputOTP: string | number): Promise<VerifyOTPResult> {
        try {
            const otpKey = `otp:${email}`;
            const attemptsKey = `attempts:${email}`;

            const storedOTP = await this.redisClient.get(otpKey);
            if (!storedOTP) {
                throw new Error('OTP expired or not found');
            }

            const attempts = parseInt(await this.redisClient.get(attemptsKey) || '0');
            if (attempts >= this.config.maxAttempts) {
                await this.redisClient.del(otpKey);
                await this.redisClient.del(attemptsKey);
                throw new Error('Maximum verification attempts exceeded');
            }

            if (storedOTP === inputOTP.toString()) {
                await this.redisClient.del(otpKey);
                await this.redisClient.del(attemptsKey);
                return { success: true, message: 'OTP verified successfully' };
            } else {
                await this.redisClient.incr(attemptsKey);
                return {
                    success: false,
                    message: 'Invalid OTP',
                    attemptsRemaining: this.config.maxAttempts - attempts - 1
                };
            }

        } catch (error) {
            console.error('Error verifying OTP:', error);
            throw error;
        }
    }

    // Email templates
    private generateOTPEmailHTML(otp: string, purpose: string): string {
        return `
            <!DOCTYPE html>
            <html>
            <head>
                <meta charset="utf-8">
                <title>Your OTP Code</title>
                <style>
                    body { font-family: Arial, sans-serif; line-height: 1.6; color: #333; }
                    .container { max-width: 600px; margin: 0 auto; padding: 20px; }
                    .otp-box { background: #f8f9fa; border: 2px solid #007bff; border-radius: 8px; padding: 20px; text-align: center; margin: 20px 0; }
                    .otp-code { font-size: 32px; font-weight: bold; color: #007bff; letter-spacing: 5px; margin: 10px 0; }
                    .warning { color: #dc3545; font-size: 14px; margin-top: 15px; }
                </style>
            </head>
            <body>
                <div class="container">
                    <h2>Your OTP for ${purpose}</h2>
                    <p>Use the following One-Time Password to complete your ${purpose}:</p>
                    
                    <div class="otp-box">
                        <div class="otp-code">${otp}</div>
                        <p>This code will expire in ${Math.floor(this.config.otpExpiry / 60)} minutes.</p>
                    </div>
                    
                    <p class="warning">
                        <strong>Security Notice:</strong> Never share this code with anyone. 
                        If you didn't request this code, please ignore this email.
                    </p>
                </div>
            </body>
            </html>
        `;
    }

    private generateOTPEmailText(otp: string, purpose: string): string {
        return `
Your OTP for ${purpose}

Your One-Time Password: ${otp}

This code will expire in ${Math.floor(this.config.otpExpiry / 60)} minutes.

Security Notice: Never share this code with anyone. If you didn't request this code, please ignore this email.
        `.trim();
    }

    // Debug method
    async getOTPStatus(email: string): Promise<OTPStatus> {
        const otpKey = `otp:${email}`;
        const attemptsKey = `attempts:${email}`;
        
        const ttl = await this.redisClient.ttl(otpKey);
        const attempts = await this.redisClient.get(attemptsKey);
        
        return {
            exists: ttl > 0,
            expiresIn: ttl > 0 ? ttl : 0,
            attemptsUsed: parseInt(attempts || '0'),
            attemptsRemaining: this.config.maxAttempts - parseInt(attempts || '0')
        };
    }

    async cleanup(): Promise<void> {
        console.log('OTP cleanup completed (Redis TTL handles expiration)');
    }
}

export default OTPService;

// Example usage
async function example(): Promise<void> {
    const otpService = new OTPService(
        process.env.BREVO_API_KEY || 'your-brevo-api-key',
        { url: process.env.REDIS_URL }
    );

    try {
        await otpService.connect();
        const sendResult = await otpService.sendOTP('user@example.com', 'account verification');
        console.log('OTP sent:', sendResult);
    } catch (error) {
        console.error('Error:', error instanceof Error ? error.message : 'Unknown error');
    } finally {
        await otpService.disconnect();
    }
}
