import {createClient} from "redis";
import prisma from "../lib/client";

const redis = createClient({
    url:process.env.REDIS_URL
});
redis.connect().catch(console.error);

export async function getLeaderboardFromRedis(contestId:string, topN:number): Promise<{userId: string, score: number}[]> {
    const key = `leaderboard:${contestId}`;
    const cached = await redis.zRangeWithScores(key, 0, topN-1, {REV: true});
    return cached.map(entry => ({
        userId: entry.value,
        score: entry.score
    }));
}

export async function cacheLeaderboardInRedis(contestId:string,leaderboard:{score:number,userId:string}[],expiry:number){
    const key = `leaderboard:${contestId}`;
    await redis.zAdd(key,leaderboard.map((entry)=>({score:entry.score,value:entry.userId})));
    await redis.expire(key,expiry);
}

export async function getLeaderboardFromDB(contestId:string,topN:number){
    return await prisma.leaderBoard.findMany({
        where:{contestId},
        orderBy:{score:"desc"},
        take:topN,
        include:{user:{select:{id:true,email:true}}}
    });
}

export async function updateScoreInDB(contestId:string,userId:string,score:number){
    const existing = await prisma.leaderBoard.findUnique({
        where:{contestId_userId:{contestId,userId}},
    });
    if(existing){
        await prisma.leaderBoard.update({
            where:{contestId_userId:{contestId,userId}},
            data:{score:existing.score+score},
        });
    }else{
        await prisma.leaderBoard.create({
            data:{contestId,userId,score},
        });
    }
}

export async function updateScoreInRedis(contestId:string,userId:string,score:number){
    const key = `leaderboard:${contestId}`;
    await redis.zIncrBy(key,score,userId);
}

export async function getUserEmailsByIds(userIds:string[]){
    return await prisma.user.findMany({
        where:{id:{in:userIds}},
        select:{id:true,email:true}
    });
}

