// Load environment variables FIRST - before any other imports
import dotenv from "dotenv";
dotenv.config();

// Now import everything else
import express from "express";
import userRouter from "./routes/user";
import adminRouter from "./routes/admin";
import contestRouter from "./routes/contest";
import prisma from "./lib/client";

// Add this debugging section - remove after confirming it works
console.log('🔧 Environment Variables Check:');
console.log('PORT:', process.env.PORT || 'Not set (using default 4000)');
console.log('DATABASE_URL:', process.env.DATABASE_URL ? 'Set' : 'Missing');
console.log('BREVO_API_KEY:', process.env.BREVO_API_KEY ? 'Set' : 'Missing');
console.log('REDIS_URL:', process.env.REDIS_URL ? 'Set' : 'Missing');
console.log('SENDER_EMAIL:', process.env.SENDER_EMAIL || 'Missing');
console.log('SENDER_NAME:', process.env.SENDER_NAME || 'Missing');
console.log('---');

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