import {
    getLeaderboardFromRedis,
    cacheLeaderboardInRedis,
    getLeaderboardFromDB,
    updateScoreInDB,
    updateScoreInRedis,
    getUserEmailsByIds
  } from "../repositories/LeaderBoard";
  import prisma from "../lib/client";
  
  export interface LeaderboardEntry {
    userId: string;
    email?: string;
    score: number;
    rank?: number;
  }
  
  export class LeaderboardService {
    static TOP_N = 10;
    static CACHE_EXPIRY = 300;

    static async recalculateUserScoreForContest(contestId:string,userId:string){
      const mappings=await prisma.contestToChallengeMapping.findMany({
        where:{contestId},
        select:{id:true}
      });
      const mappingIds=mappings.map((m)=>m.id);
      let totalScore=0;
      for(const mappingId of mappingIds){
        const best = await prisma.submission.aggregate({
          where:{contestToChallengeMappingId:mappingId,userId},
          _max:{points:true}
        });
        totalScore +=best._max.points || 0;
      }
      await updateScoreInDB(contestId,userId,totalScore);
      await updateScoreInRedis(contestId,userId,totalScore);
    }

    static async handleSubmission(contestId:string,userId:string){
      await this.recalculateUserScoreForContest(contestId,userId);
    }
  
    static async getLeaderboard(contestId: string): Promise<LeaderboardEntry[]> {
      let cached:LeaderboardEntry[] = await getLeaderboardFromRedis(contestId, this.TOP_N);
  
      if (cached && cached.length > 0) {
        const userIds = cached.map(entry => entry.userId);
        const users = await getUserEmailsByIds(userIds);
        const userMap = Object.fromEntries(users.map((u: { id: any; email: any; }) => [u.id, u.email]));
        return cached.map((entry: LeaderboardEntry, idx: number) => ({
          userId: entry.userId,
          email: userMap[entry.userId],
          score: entry.score,
          rank: idx + 1
        }));
      }
  
      
      const leaderboardDB = await getLeaderboardFromDB(contestId, this.TOP_N);
      if (leaderboardDB.length > 0) {
        await cacheLeaderboardInRedis(
          contestId,
          leaderboardDB.map((entry: { score: any; userId: any; }) => ({ score: entry.score, userId: entry.userId })),
          this.CACHE_EXPIRY
        );
      }
      return leaderboardDB.map((entry: { userId: any; user: { email: any; }; score: any; }, idx: number) => ({
        userId: entry.userId,
        email: entry.user.email,
        score: entry.score,
        rank: idx + 1
      }));
    }
  
    static async updateUserScore(contestId: string, userId: string, score: number) {
      await updateScoreInDB(contestId, userId, score);
      await updateScoreInRedis(contestId, userId, score);
    }
  
    static async recalculateLeaderboard(contestId: string) {
      const mappings = await prisma.contestToChallengeMapping.findMany({
        where:{contestId},
        select:{id:true}
      });
      const mappingIds=mappings.map((m)=>m.id);
      const userIds = await prisma.submission.findMany({
        where:{contestToChallengeMappingId:{in:mappingIds}},
        distinct:["userId"],
        select:{userId:true}
      });
      for(const{userId} of userIds){
        await this.recalculateUserScoreForContest(contestId,userId);
      }
      const leaderboard = await getLeaderboardFromDB(contestId,this.TOP_N);
      await cacheLeaderboardInRedis(
        contestId,
        leaderboard.map(e=>({userId:e.userId,score:e.score})),
        this.CACHE_EXPIRY
      )
    }
  }