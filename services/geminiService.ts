
import { GoogleGenAI } from "@google/genai";

if (!process.env.API_KEY) {
    throw new Error("API_KEY environment variable is not set");
}

const ai = new GoogleGenAI({ apiKey: process.env.API_KEY });

export const generateCareerObjective = async (keywords: string): Promise<string> => {
    if (!keywords.trim()) {
        return "Please enter some keywords to generate a career objective.";
    }

    const prompt = `
        You are a professional career coach specializing in the AI and Machine Learning fields. 
        Your task is to write a concise and compelling career objective for a portfolio based on the following keywords.
        The objective should be professional, aspirational, and tailored for AI/ML positions.
        It should be a single paragraph, no more than 3-4 sentences long.

        Keywords: "${keywords}"

        Generate the career objective:
    `;

    try {
        const response = await ai.models.generateContent({
            model: 'gemini-2.5-flash',
            contents: prompt,
            config: {
                temperature: 0.7,
                maxOutputTokens: 150,
            }
        });
        
        return response.text.trim();
    } catch (error) {
        console.error("Error generating career objective:", error);
        return "Sorry, I couldn't generate a career objective at this time. Please try again later.";
    }
};
