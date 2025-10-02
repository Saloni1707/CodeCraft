import { NextFunction, Request, Response } from "express";
import jwt from "jsonwebtoken";

interface JwtPayload{
    id:string;
    role:string;
}

export function authenticateToken(req:Request,res:Response,next:NextFunction){
    const authHeader = req.headers.authorization;
    const token = authHeader?.split(" ")[1];
    if(!token){
        return res.status(401).json({success:false,message:"No token provided"})
    }
    const secret = process.env.JWT_SECRET;
    if(!secret){
        throw new Error("JWT_SECRET not defined");
    }
    try{
        const decoded = jwt.verify(token,secret) as JwtPayload;
        (req as any).user = decoded;
        next();
    }catch(e){
        return res.status(403).json({success:false,message:"Invalid token"})
    }
}

export function authorizeRole(RequiredRole:string){
    return (req:Request,res:Response,next:NextFunction)=>{
        const user = (req as any).user;
        if(user.role !== RequiredRole){
            return res.status(403).json({success:false,message:"Unauthorized"})
        }
        next();
    };
}