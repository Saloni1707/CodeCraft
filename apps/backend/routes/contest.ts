import {Router} from "express";
import prisma from "../lib/client";
import {authenticateToken} from "../middleware/authMiddleware";
const router=Router();

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
//challenge inside a contest
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

router.get("/leaderboard/:contestId",async(req,res)=>{
    //we read article here for leaderboard scaling

})

export default router;