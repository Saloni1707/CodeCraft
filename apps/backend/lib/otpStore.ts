import Redis from "ioredis";
import crypto from "crypto";

interface VerifyResult{
    success:boolean;
    message:string;
}

