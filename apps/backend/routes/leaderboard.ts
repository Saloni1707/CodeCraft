import { Router } from "express";
import { LeaderboardService } from "../services/LeaderboardService";

const router = Router();

router.get("/:contestId",async (req,res) =>{
    const contestId = req.params.contestId;
    try{
        const leaderBoard = await LeaderboardService.getLeaderboard(contestId);
        return res.json({success:true,leaderBoard});
    }catch(error){
        console.error("Leaderboard error",error);
        return res.status(500).json({success:false,message:"Internal server error"});
    }
});

export default router;