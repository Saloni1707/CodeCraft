import prisma from "./client";
import {createClient} from "redis";

const redis = createClient({
    url:process.env.REDIS_URL,
});
redis.connect().catch(console.error);


export async function evaluateSubmission(submissionId:string,maxPoints:number){
    return Math.floor(Math.random()*(maxPoints +1)); //later we add here AI logic
}

export async function updateLeaderboard(contestId:string,userId:string,score:number){
    //first update the db
    const existing=await prisma.leaderBoard.findUnique({
        where:{
            contestId_userId:{contestId,userId},
        },
    });
    if(existing){
        await prisma.leaderBoard.update({
            where:{contestId_userId:{contestId,userId}},
            data:{score:existing.score+score},
        });
    }else{
        await prisma.leaderBoard.create({
            data:{contestId,userId,score:score},
        });
    }
    //update the redis
    const key = `leaderboard:${contestId}`;
    await redis.zIncrBy(key,score,userId);
}
