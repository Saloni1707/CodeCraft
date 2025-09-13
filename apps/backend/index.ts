import express from "express";
import userRouter from "./routes/user";
import adminRouter from "./routes/admin";
import contestRouter from "./routes/contest";
import dotenv from "dotenv";
import prisma from "./lib/client";

dotenv.config();

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

app.listen(process.env.PORT ?? 4000,async() => {
    console.log(`Server running on port ${process.env.PORT}`);
    try{
        await prisma.$connect();
        console.log("Database connected");
    }catch(e){
        console.error("Failed to connect to database",e);
    }
});
