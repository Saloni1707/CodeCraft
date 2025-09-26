
export interface GradingResult {
    points:number;
    maxPoints:number;
    feedback:string;
    criteria:{
        correctness:number;
        codeQuality:number;
        effiency:number;
        completeness:number;
    };
}

export async function gradeSubmissionwithAI(
    code:string,
    challengeTitle:string,
    challengeDescription:string,
    maxPoints:number
){
    try{
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
            "totalPoints": <number>,
            "breakdown": {
                "correctness": <0-10>,
                "codeQuality": <0-10>,
                "efficiency": <0-10>,
                "completeness": <0-10>
            },
            "feedback": "<string>"
        }`;
    }catch(error){
        console.error("Error grading submission:", error);
        throw error;
    }
}