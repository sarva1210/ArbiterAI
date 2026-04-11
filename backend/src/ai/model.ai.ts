import { ChatGoogle } from "@langchain/google";
import { ChatMistralAI } from "@langchain/mistralai";
import config from "../config/config.js";

export const geminiModel = new ChatGoogle({
    model: "gemini-flash-latest",
    apiKey: config.GOOGLE_API_KEY,
})
export const mistralAIModel = new ChatMistralAI({
    model: "mistral-medium-latest",
    apiKey: config.MISTRALAI_API_KEY,
})
