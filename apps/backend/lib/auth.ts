import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";

export async function hashPassword(password:string){
    const saltRounds=5;
    return await bcrypt.hash(password,saltRounds);
}

export async function comparePassword(password:string,hashPassword:string){
    return await bcrypt.compare(password,hashPassword);
}

export function generateToken(payload: any) { //tokens are stateless
    const secret = process.env.JWT_SECRET;
    if(!secret){
        throw new Error("JWT_SECRET is not defined");
    }
    return jwt.sign(payload,secret,{
        expiresIn:"1h"
    });
};