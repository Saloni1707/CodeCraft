import { GoogleGenerativeAI } from "@google/generative-ai"; 

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
            You are an expert code reviewer grading a programming submission. Please evaluate the following code submission:

            **Challenge**: ${challengeTitle}
            **Description**: ${challengeDescription}
            **Maximum Points**: ${maxPoints}

            **Code Submission**:
            \`\`\`
            ${code}
            \`\`\`

            Please grade this submission on a scale of 0 to ${maxPoints} points based on:
            1. Correctness (40%)
            2. Code Quality (25%)
            3. Efficiency (20%)
            4. Completeness (15%)

            Respond in this JSON format:
            {
            "points": <number>,
            "maxPoints": <number>,
            "feedback": "<string>",
            "criteria": {
                "correctness": <number>,
                "codeQuality": <number>,
                "efficiency": <number>,
                "completeness": <number>
            }
            }
        `;

        const genAI = new GoogleGenerativeAI(process.env.GEMINI_API_KEY!);
        const model = genAI.getGenerativeModel({ model: "gemini-pro" });
        const result = await model.generateContent(prompt);
        const response = await result.response.text();
        const grading: GradingResult = JSON.parse(response);

        return grading;
    } catch (error) {
        console.error("Error grading submission:", error);
        throw error;
    }
}