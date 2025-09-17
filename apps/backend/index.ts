import express from "express";
import userRouter from "./routes/user";
import adminRouter from "./routes/admin";
import contestRouter from "./routes/contest";
import prisma from "./lib/client";
import leaderboardRouter from "./routes/leaderboard";

const app = express();

app.get("/health",(req,res) => {
    res.json({
        status:"OK",
        message:"Server is running"
    })
})

app.use(express.json());
app.use("/user",userRouter);
app.use("/admin",adminRouter);
app.use("/contest",contestRouter);
app.use("/leaderboard",leaderboardRouter)

const PORT = process.env.PORT || 4000;

app.listen(PORT, async() => {
    console.log(`Server running on port ${PORT}`);
    try{
        await prisma.$connect();
        console.log("Database connected");
    }catch(e){
        console.error("Failed to connect to database",e);
    }
});