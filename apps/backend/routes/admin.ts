import {Router} from "express";
import { comparePassword, generateToken, hashPassword } from "../lib/auth";
import {z} from "zod";
import prisma from "../lib/client";
import { authenticateToken, authorizeRole } from "../middleware/authMiddleware";
const router=Router();
router.use(authenticateToken,authorizeRole("Admin"));

router.post("/signup",async (req,res) =>{
    try{
        const{email,password}=req.body;
        const existingUser=await prisma.user.findUnique({where:{email}});
        if(existingUser){
            return res.status(400).json({success:false,message:"User already exists"});
        }
        const hashedPasswords = await hashPassword(password);
        const user = await prisma.user.create({
            data:{
                email,
                password:hashedPasswords,
                role:"Admin"
            }
        })
        return res.status(200).json({success:true,message:"Admin created successfully here"});
    }catch(error){
        if(error instanceof z.ZodError){
            return res.status(400).json({success:false,errors:error.errors})
        }
        console.error(error);
        return res.status(500).json({success:false,message:"Internal server error"})
    }
})

router.post("/signin",async (req,res)=>{
    try{
        const {email,password}=req.body;
        const user=await prisma.user.findUnique({where:{email}});
        if(!user){
            return res.status(200).json({success:false,message:"Invalid Credentials"})
        }
        const Match = await comparePassword(password,user.password);
        if(!Match){
            return res.status(200).json({success:false,message:"Invalid Credentials"})
        }
        const token = await generateToken({id:user.id,role:user.role});
        return res.status(200).json({success:true,message:"Admin signed in successfully",user:{id:user.id,email:user.email,role:user.role},token});

    }catch(error){
        if(error instanceof z.ZodError){
            return res.status(400).json({success:false,errors:error.errors})
        }
        console.error(error);
        return res.status(500).json({success:false,message:"Internal server error"})
    }
})

//create a contest
const createContestSchema = z.object({
    title:z.string().min(1),
    startTime:z.date(),
})
router.post("/contest",async (req,res)=>{
    try{
        const{title,startTime}=createContestSchema.parse(req.body);
        const contest = await prisma.contest.create({
            data:{
                title,
                startTime:new Date(startTime)
            }
        });
        return res.status(200).json({success:true,message:"Contest created successfully",contest});
    }catch(err){
        if(err instanceof z.ZodError){
            return res.status(400).json({success:false,message:"Invalid request",errors:err.errors});
        }
        console.error(err);
        return res.status(500).json({success:false,message:"Internal server error"});
    }
})

const addChallengeSchema=z.object({
    title:z.string().min(1),
    notionDocId:z.string().optional().nullable(),
    maxPoints:z.number().int().min(0)
});

router.post("/contest/:contestId/challenge",async (req,res) => {
    try{
        const {contestId}=req.params;
        const {title,notionDocId,maxPoints}=addChallengeSchema.parse(req.body);
        const contest = await prisma.contest.findUnique({where:{id:contestId}});
        if(!contest){
            return res.status(401).json({success:false,message:"Contest not found"})
        }
        const challenge=await prisma.challenge.create({
            data:{
                title,
                notionDocId:notionDocId??"",
                contestId:contestId,
                maxPoints
            }
        });

        const mappingCount = await prisma.contestToChallengeMapping.count({where:{contestId:contestId}});
        const mapping=await prisma.contestToChallengeMapping.create({
            data:{
                contestId:contestId,
                challengeId:challenge.id,
                index:mappingCount
            }
        })
        return res.status(200).json({success:true,message:"Challege added successfully",challenge,mapping})
    }catch(err){
        if(err instanceof z.ZodError){
            return res.status(400).json({success:false,message:"Invalid request",errors:err.errors})
        }
        console.error(err);
        return res.status(500).json({success:false,message:"Internal server error"})
    }
})
export default router;
