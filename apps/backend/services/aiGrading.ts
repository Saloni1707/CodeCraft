import { GoogleGenerativeAI } from "@google/generative-ai";
import * as dotenv from "dotenv";
dotenv.config();

export interface GradingResult {
    points: number;
    maxPoints: number;
    feedback: string;
    criteria: {
        correctness: number;
        codeQuality: number;
        efficiency: number;
        completeness: number;
    };
}

export async function gradeSubmissionwithAI(
    code: string,
    challengeTitle: string,
    challengeDescription: string,
    maxPoints: number
): Promise<GradingResult> {
    try {
        const prompt = `
            You are a strict programming contest judge evaluating a code submission. Grade harshly and objectively.

            **Challenge Title**: ${challengeTitle}
            **Challenge Description**: ${challengeDescription}
            **Maximum Points**: ${maxPoints}

            **Submitted Code**:
            \`\`\`
            ${code}
            \`\`\`

            ## Grading Criteria (be strict):

            1. **Correctness (40% of ${maxPoints} points)**
            - Does the code actually solve the stated problem?
            - If the code doesn't attempt to solve the problem: score 0-10%
            - If the code partially solves it: score 10-25%
            - If the code solves it with bugs: score 25-35%
            - If the code fully solves it correctly: score 35-40%

            2. **Code Quality (25% of ${maxPoints} points)**
            - Is the code readable, well-structured, and maintainable?
            - Are variable names meaningful?
            - Is there proper error handling?
            - Score 0% if code is unreadable, 25% if excellent

            3. **Efficiency (20% of ${maxPoints} points)**
            - Is the solution optimized for time/space complexity?
            - Only score high if the code both solves the problem AND is efficient
            - If code doesn't solve the problem, efficiency is irrelevant: score 0-5%

            4. **Completeness (15% of ${maxPoints} points)**
            - Does it handle edge cases?
            - Does it meet all requirements?
            - Is the solution thorough?

            ## Critical Rules:
            - Code that doesn't attempt to solve the problem should score ≤ 30/100 total
            - Syntactically correct but irrelevant code deserves low scores
            - Be harsh: this is a competition, not a participation award
            - Efficiency only matters if correctness is achieved

            ## Calculation Instructions:
            For each criterion, determine a percentage score (0-100%), then:
            - correctness = (correctness_percentage / 100) × ${maxPoints} × 0.40
            - codeQuality = (quality_percentage / 100) × ${maxPoints} × 0.25
            - efficiency = (efficiency_percentage / 100) × ${maxPoints} × 0.20
            - completeness = (completeness_percentage / 100) × ${maxPoints} × 0.15
            - points = correctness + codeQuality + efficiency + completeness (round to nearest integer)

            ## Response Format:
            Respond with ONLY valid JSON (no markdown, no code blocks):
            {
            "points": <total score as integer>,
            "maxPoints": ${maxPoints},
            "feedback": "<2-3 sentence honest assessment>",
            "criteria": {
                "correctness": <number with 1 decimal>,
                "codeQuality": <number with 1 decimal>,
                "efficiency": <number with 1 decimal>,
                "completeness": <number with 1 decimal>
            }
            }
            `;
        
                    

        // FIX: Use environment variable instead of hardcoded key
        const apiKey = process.env.GEMINI_KEY!;
                
        if (!apiKey) {
            throw new Error("GEMINI_API_KEY not found in environment variables");
        }

        const genAI = new GoogleGenerativeAI(apiKey);
        console.log("API Key loaded successfully");
        
        const model = genAI.getGenerativeModel({ model: "gemini-2.5-flash" });
        const result = await model.generateContent(prompt);
        const response = await result.response.text();
        
        // FIX: Clean the response to remove markdown code fences
        let cleanedResponse = response.trim();
        
        // Remove ```json and ``` if present
        if (cleanedResponse.startsWith('```json')) {
            cleanedResponse = cleanedResponse.replace(/^```json\s*/, '');
        }
        if (cleanedResponse.startsWith('```')) {
            cleanedResponse = cleanedResponse.replace(/^```\s*/, '');
        }
        if (cleanedResponse.endsWith('```')) {
            cleanedResponse = cleanedResponse.replace(/\s*```$/, '');
        }
        
        console.log("AI Response:", cleanedResponse);
        
        const grading: GradingResult = JSON.parse(cleanedResponse);
            const totalCriteria = 
                grading.criteria.correctness + 
                grading.criteria.codeQuality + 
                grading.criteria.efficiency + 
                grading.criteria.completeness;

            if (Math.abs(totalCriteria - grading.points) > 0.5) {
                console.warn(`Criteria sum (${totalCriteria}) doesn't match points (${grading.points}). Adjusting...`);
                grading.points = Math.round(totalCriteria);
            }

            console.log("AI grading successful");
            return grading;
    } catch (error) {
        console.error("Error grading submission:", error);
        throw error;
    }
}