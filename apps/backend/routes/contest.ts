import {Router} from "express";
const router=Router();

// pagination here needed
router.get("/active",(req,res) => {
    const {offset,page} = req.query;

})

router.get("/finished",(req,res) => {
    const{offset,page} = req.query;
})

router.get("/:contestId",(req,res)=>{
    const contestId = req.params.contestId;

})
router.get(":contestId/:challengeId",(req,res) => {
    //@ts-ignore
    const contestId = req.params.contestId;
})
router.get("/leaderboard/:contestId",(req,res)=>{

})

router.post("/submit/:challengeId",(req,res) =>{
    //rate limiting
    //max 20 problems per problem
    //forward the request to AI
    //store the response in sorted set and then DB
    //return the response
})

export default router;
