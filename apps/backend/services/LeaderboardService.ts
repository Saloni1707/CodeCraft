import {
    getLeaderboardFromRedis,
    cacheLeaderboardInRedis,
    getLeaderboardFromDB,
    updateScoreInDB,
    updateScoreInRedis,
    getUserEmailsByIds
  } from "../lib/LeaderBoardRepo";
  
  export interface LeaderboardEntry {
    userId: string;
    email?: string;
    score: number;
    rank?: number;
  }
  
  export class LeaderboardService {
    static TOP_N = 10;
    static CACHE_EXPIRY = 300;
  
    static async getLeaderboard(contestId: string): Promise<LeaderboardEntry[]> {
      let cached:LeaderboardEntry[] = await getLeaderboardFromRedis(contestId, this.TOP_N);
  
      if (cached && cached.length > 0) {
        const userIds = cached.map(entry => entry.userId);
        const users = await getUserEmailsByIds(userIds);
        const userMap = Object.fromEntries(users.map(u => [u.id, u.email]));
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
          leaderboardDB.map(entry => ({ score: entry.score, userId: entry.userId })),
          this.CACHE_EXPIRY
        );
      }
      return leaderboardDB.map((entry, idx) => ({
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
      // post-contest recalculation here 
    }
  }