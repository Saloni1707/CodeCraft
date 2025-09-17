import {Router} from "express";
import prisma from "../lib/client";
import { createClient } from "redis";

const router=Router();

const redis=createClient({
    url:process.env.REDIS_URL
})
redis.connect().catch(console.error);

router.get("/:contestId",async(req,res)=>{
    const {contestId} = req.params;
    const key=`leaderboard:${contestId}`;
    try{
        const cached=await redis.zRangeWithScores(key,0,9,{REV:true});
        if(cached.length>0){
            const userId=cached.map(c=>c.value);
            const users=await prisma.user.findMany({
                where:{id:{in:userId}},
                select:{id:true,email:true}
            });
            const userMap=Object.fromEntries(users.map(user=>[user.id,user]));
            const leaderboard=cached.map((c,index)=>({
                userId:c.value,
                email:userMap[c.value]?.email || null,
                score:c.score,
                rank:index+1
            }));
            return res.json({success:true,source:"cache",leaderboard})
        }
        //nothing in cache we go to prisma db
        const leaderboardDB=await prisma.leaderBoard.findMany({
            where:{contestId},
            orderBy:{score:"desc"},
            take:10,
            include:{user:{select:{email:true}}}
        });
        //Hydrate Redis for future requests
        if(leaderboardDB.length>0){
            await redis.zAdd(
                key,
                leaderboardDB.map(entry => ({score:entry.score,value:entry.userId}))
            );
        }
        const leaderboard=leaderboardDB.map((entry,index) =>({
            userId:entry.userId,
            email:entry.user.email,
            score:entry.score,
            rank:index+1
        }));

        return res.json({success:true,source:"db",leaderboard});
    }catch(err){
        console.error(err);
        return res.status(500).json({success:false,message:"Internal server error"})
    }

})

export default router;