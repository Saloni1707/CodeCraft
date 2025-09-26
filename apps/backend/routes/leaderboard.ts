import {Router} from "express";
import prisma from "../lib/client";
import {createClient} from "redis";
const router = Router();

const redis = createClient({
    url:process.env.REDIS_URL
});

redis.on('error',(err)=>{console.error("Redis connection error",err)});
redis.on('connect',()=>{console.log("Redis connected")});
redis.on('disconnect',()=>{console.log("Redis disconnected")});

redis.connect().catch((err)=>{
    console.error("Redis connection error",err)
    process.exit(1);
});

process.on('SIGINT',async()=>{
    console.log("Redis disconnected");
    await redis.quit();
    process.exit(0);
});

interface LeaderboardEntry {
    userId:string;
    email:string;
    score:number;
    rank:number;
}

router.get("/:contestId",async(req,res)=>{
    const {contestId} = req.params;
    const key = `leaderboard:${contestId}`;
    const CACHE_EXPIRY  =300;
    const TOP_N = 10;

    try{
        const cached = await redis.zRangeWithScores(key,0,TOP_N-1,{REV:true});
        if(cached.length > 0 ){
            const userIds: string[] = cached.map((entry)=>entry.value);
            const users = await prisma.user.findMany({
                where:{id:{in:userIds}},
                select:{id:true,email:true}
            });

            const userMap = Object.fromEntries(users.map((user)=>[user.id,user]));
            const leaderboard:LeaderboardEntry[] = cached.map((c,index) => ({
                userId:c.value as string,
                email:userMap[c.value as string]?.email,
                score:c.score,
                rank:index + 1
            }));
            return res.json({success:true,source:"cache",leaderboard});
        }
        const leaderboardDB = await prisma.leaderBoard.findMany({
            where:{contestId},
            orderBy:{score:"desc"},
            take:TOP_N,
            include:{user:{select:{id:true,email:true}}}
        });
        if(leaderboardDB.length > 0 ){
            try{
                await redis.zAdd(
                    key,
                    leaderboardDB.map((entry)=>({score:entry.score,value:entry.userId}))
                );
                await redis.expire(key,CACHE_EXPIRY);
            }catch(redisError){
                console.error("Redis error",redisError);
            }
        }
        const leaderboard:LeaderboardEntry[] = leaderboardDB.map((entry,index)=>({
            userId:entry.userId,
            email:entry.user.email,
            score:entry.score,
            rank:index + 1
        }));
        return res.json({success:true,source:"db",leaderboard});
    }catch(error){
        console.error("Database error",error);
        return res.status(500).json({success:false,message:"Internal server error"});
    }
    
});
export default router;