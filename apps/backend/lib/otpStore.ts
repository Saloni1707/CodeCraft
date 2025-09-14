// lib/otpService.ts - Alternative with fetch API
import { createClient, RedisClientType } from 'redis';
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

class OTPService {
    private redisClient: RedisClientType;
    private brevoApiKey: string;
    private config: OTPConfig;
    private senderEmail: string;
    private senderName: string;

    constructor(brevoApiKey: string, redisConfig: RedisConfig = {}) {
        if (!brevoApiKey) {
            throw new Error('Brevo API key is required');
        }

        this.brevoApiKey = brevoApiKey;

        this.redisClient = createClient({
            url: redisConfig.url || process.env.REDIS_URL,
            socket: {
                tls: redisConfig.socket?.tls !== false,
                rejectUnauthorized: redisConfig.socket?.rejectUnauthorized || false
            },
            ...redisConfig
        });
        
        this.redisClient.on('error', (err: Error) => {
            console.error('Redis Client Error:', err);
        });

        this.redisClient.on('connect', () => {
            console.log('✅ Connected to Redis');
        });

        this.redisClient.on('disconnect', () => {
            console.log('Disconnected from Redis');
        });

        this.senderEmail = process.env.SENDER_EMAIL || "noreply@yourapp.com";
        this.senderName = process.env.SENDER_NAME || "Your App";
        
        if (!process.env.SENDER_EMAIL) {
            console.warn('⚠️  SENDER_EMAIL not set, using default:', this.senderEmail);
        }

        this.config = {
            otpLength: 6,
            otpExpiry: 300,
            maxAttempts: 5,
            rateLimitWindow: 3600,
            maxRequestsPerHour: 5
        };

        console.log('✅ OTP Service initialized successfully');
    }

    async connect(): Promise<void> {
        if (!this.redisClient.isOpen) {
            await this.redisClient.connect();
        }
    }

    async disconnect(): Promise<void> {
        if (this.redisClient.isOpen) {
            await this.redisClient.disconnect();
        }
    }

    private async ensureConnection(): Promise<void> {
        if (!this.redisClient.isOpen) {
            await this.connect();
        }
    }

    private generateOTP(length: number = this.config.otpLength): string {
        const digits = '0123456789';
        let otp = '';
        
        for (let i = 0; i < length; i++) {
            const randomIndex = randomInt(0, digits.length);
            otp += digits[randomIndex];
        }
        
        return otp;
    }

    private async checkAndUpdateRateLimit(email: string): Promise<boolean> {
        await this.ensureConnection();
        
        const rateLimitKey = `rate_limit:${email}`;
        
        try {
            const multi = this.redisClient.multi();
            
            const currentCount = await this.redisClient.get(rateLimitKey);
            
            if (currentCount) {
                const count = parseInt(currentCount);
                if (count >= this.config.maxRequestsPerHour) {
                    return false;
                }
                multi.incr(rateLimitKey);
            } else {
                multi.setEx(rateLimitKey, this.config.rateLimitWindow, '1');
            }
            
            await multi.exec();
            return true;
            
        } catch (error) {
            console.error('Rate limit check error:', error);
            throw new Error('Rate limit check failed');
        }
    }

    private async sendBrevoEmail(email: string, otp: string, purpose: string): Promise<any> {
        const emailData = {
            to: [{
                email: email,
                name: email.split('@')[0]
            }],
            subject: `Your OTP for ${purpose}`,
            htmlContent: this.generateOTPEmailHTML(otp, purpose),
            textContent: this.generateOTPEmailText(otp, purpose),
            sender: {
                name: this.senderName,
                email: this.senderEmail
            }
        };

        const response = await fetch('https://api.brevo.com/v3/smtp/email', {
            method: 'POST',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json',
                'api-key': this.brevoApiKey
            },
            body: JSON.stringify(emailData)
        });

        if (!response.ok) {
            const errorData = await response.json().catch(() => ({}));
            throw new Error(`Brevo API error: ${response.status} ${response.statusText} - ${JSON.stringify(errorData)}`);
        }

        return await response.json();
    }

    async sendOTP(email: string, purpose: string = 'verification'): Promise<SendOTPResult> {
        try {
            if (!this.isValidEmail(email)) {
                throw new Error('Invalid email format');
            }

            const canSend = await this.checkAndUpdateRateLimit(email);
            if (!canSend) {
                throw new Error('Rate limit exceeded. Too many OTP requests.');
            }
            
            const otp = this.generateOTP();
            const otpKey = `otp:${email}`;
            const attemptsKey = `attempts:${email}`;

            await this.ensureConnection();

            await this.redisClient.setEx(otpKey, this.config.otpExpiry, otp);
            await this.redisClient.setEx(attemptsKey, this.config.otpExpiry, '0');

            console.log('📧 Sending OTP email to:', email);
            const result = await this.sendBrevoEmail(email, otp, purpose);
            console.log('✅ OTP email sent successfully');

            return {
                success: true,
                message: 'OTP sent successfully',
                messageId: result.messageId || undefined,
                expiresIn: this.config.otpExpiry
            };

        } catch (error) {
            console.error('❌ Error sending OTP:', error);
            
            const errorMessage = error instanceof Error ? error.message : 'Unknown error';
            throw new Error(`Failed to send OTP: ${errorMessage}`);
        }
    }

    async verifyOTP(email: string, inputOTP: string | number): Promise<VerifyOTPResult> {
        try {
            await this.ensureConnection();
            
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
                
                return {
                    success: true,
                    message: 'OTP verified successfully'
                };
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

    private isValidEmail(email: string): boolean {
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return emailRegex.test(email);
    }

    private generateOTPEmailHTML(otp: string, purpose: string): string {
        return `
            <!DOCTYPE html>
            <html>
            <head>
                <meta charset="utf-8">
                <meta name="viewport" content="width=device-width, initial-scale=1.0">
                <title>Your OTP Code</title>
                <style>
                    body { font-family: Arial, sans-serif; line-height: 1.6; color: #333; margin: 0; padding: 0; }
                    .container { max-width: 600px; margin: 0 auto; padding: 20px; }
                    .otp-box { 
                        background: #f8f9fa; 
                        border: 2px solid #007bff; 
                        border-radius: 8px; 
                        padding: 20px; 
                        text-align: center; 
                        margin: 20px 0; 
                    }
                    .otp-code { 
                        font-size: 32px; 
                        font-weight: bold; 
                        color: #007bff; 
                        letter-spacing: 5px; 
                        margin: 10px 0; 
                        font-family: monospace;
                    }
                    .warning { color: #dc3545; font-size: 14px; margin-top: 15px; }
                    .expiry { color: #6c757d; font-size: 14px; }
                </style>
            </head>
            <body>
                <div class="container">
                    <h2>Your OTP for ${purpose}</h2>
                    <p>Use the following One-Time Password to complete your ${purpose}:</p>
                    
                    <div class="otp-box">
                        <div class="otp-code">${otp}</div>
                        <p class="expiry">This code will expire in ${Math.floor(this.config.otpExpiry / 60)} minutes.</p>
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

    async getOTPStatus(email: string): Promise<OTPStatus> {
        await this.ensureConnection();
        
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
        console.log('OTP cleanup completed (Redis handles TTL automatically)');
    }
}

export default OTPService;