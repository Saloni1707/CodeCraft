import {Router} from "express";
import prisma from "../lib/client";
import {authenticateToken} from "../middleware/authMiddleware";
//import {evaluateSubmission,updateLeaderboard} from "../lib/scoringService"; this dummy score system 
import { createClient } from "redis";
import { gradeSubmissionwithAI } from "../services/aiGrading";
import { LeaderboardService } from "../services/LeaderboardService";

const router=Router();

const redis=createClient({
    url:process.env.REDIS_URL
});
redis.connect().catch(console.error);

router.get("/active",async(req,res)=>{
    try{
        const now=new Date();
        const contests=await prisma.contest.findMany({
            where:{
                startTime:{lte:now},
            },
            include:{
                contestToChallengeMapping:{
                    include:{
                        challenge:true,
                    }
                }
            }
        });
        return res.json({
            success:true,
            contests
        });
    }catch(err){
        console.error(err);
        return res.status(500).json({
            success:false,
            message:"Internal server error"
        });
    }
})

router.get("/finished",async(req,res)=>{
    try{
        const now=new Date();
        const contests=await prisma.contest.findMany({
            where:{
                startTime:{lt:now}
            }
        });
        return res.json({
            success:true,
            contests
        });
    }catch(err){
        console.error(err);
        return res.status(500).json({
            success:false,
            message:"Internal server error"
        })

    }
});

router.get("/:contestId",async(req,res)=>{
    try{
        const {contestId}=req.params;
        const contest=await prisma.contest.findUnique({
            where:{id:contestId},
            include:{
                contestToChallengeMapping:{
                    include:{
                        challenge:true
                    }
                },
                leaderboard:{
                    include:{
                        user:true
                    }
                }
            }
        });
        if(!contest){
            return res.status(404).json({
                success:false,
                message:"Contest not found"
            })
        }
        return res.json({
            success:true,
            contest
        })

    }catch(err){
        console.error(err);
        return res.status(500).json({
            success:false,
            message:"Internal server error"
        })
    }
})

router.get("/:contestId/challenges/:challengeId",async(req,res)=>{
    try{
        const{contestId,challengeId}=req.params;
        const mapping=await prisma.contestToChallengeMapping.findUnique({
            where:{
                contestId_challengeId:{
                    contestId,challengeId
                },
            },
            include:{
                challenge:true,
                contests:true
            }
        });
        if(!mapping){
            return res.status(404).json({
                success:false,
                message:"Challenge not found"
            })
        }
        if(mapping.contests.startTime>new Date()){
            return res.status(404).json({
                success:false,
                message:"Contest not started yet"
            })
        }
        return res.json({
            success:true,
            challenge:mapping.challenge
        })


    }catch(err){
        console.error(err);
        return res.status(500).json({
            success:false,
            message:"Internal server error"
        })
    }
})

router.post("/submit/:challengeId",authenticateToken,async(req,res)=>{
    try{
        const {challengeId}=req.params;
        const {submissions}=req.body;
        const user = (req as any).user;

        const mapping=await prisma.contestToChallengeMapping.findFirst({
            where:{challengeId},
            include:{contests:true,challenge:true}
        });
        if(!mapping){
            return res.status(404).json({
                success:false,
                message:"Challenge not found"
            })
        }
        if(mapping.contests.startTime>new Date()){
            return res.status(404).json({
                success:false,
                message:"Contest not started yet"
            })
        }
        //storing our submission first to db :)
        const newSubmission=await prisma.submission.create({
            data:{
                submissions:submissions,
                points:0,
                user:{connect:{id:user.id}},
                contestToChallengeMapping:{connect:{id:mapping.id}}
            },
        });
        
        // const points = await evaluateSubmission(submissions,mapping.challenge.maxPoints);
        // await prisma.submission.update({
        //     where:{id:newSubmission.id}, //this was our dummy point system
        //     data:{points}
        // });

        const grading =  await gradeSubmissionwithAI(
            submissions,
            mapping.challenge.title,
            mapping.challenge.description || "",
            mapping.challenge.maxPoints
        );

        await prisma.submission.update({
            where:{id:newSubmission.id},
            data:{points:grading.points}
        });

        await LeaderboardService.updateUserScore(mapping.contestId,user.id,grading.points);
        return res.status(200).json({
            success:true,
            submissionId:newSubmission.id,
            grading
        });
    }catch(err){
        console.error(err);
        return res.status(500).json({
            success:false,
            message:"Internal server error"
        });
    }
})

export default router;