
import { GoogleGenAI } from "@google/genai";
import { ITINERARY_DATA } from '../constants';

const apiKey = import.meta.env?.VITE_GOOGLE_API_KEY || ''; 
const ai = new GoogleGenAI({ apiKey });

const SYSTEM_INSTRUCTION = `
你是「釜山之旅」的 AI 專屬導遊。你的使用者是「弈辰」一家人與「筑婷」。
成員：弈辰、筑婷、弈辰爸、弈辰媽。

你的語氣應該：熱情、活潑、充滿大海的活力且簡單易懂。

你擁有以下的釜山行程資訊：
${JSON.stringify(ITINERARY_DATA)}

請根據使用者的問題回答。
1. 行程諮詢：參考上述資料，強調釜山的海景、咖啡廳與美食。
2. 地區特色：如海雲台、甘川洞、南浦洞、廣安里。
3. 釜山必吃：強力推薦「豬肉湯飯」、「盲鰻」、「糖餅」、「海鮮大餐」、「冷麵」。
4. 長輩關懷：針對弈辰爸與弈辰媽，推薦 Spa Land 汗蒸幕，提醒海邊風大要注意保暖。
5. 翻譯輔助：提供韓文點餐或日常對話翻譯。
回答請保持簡短，適合手機閱讀。
`;

export const chatWithGemini = async (userMessage: string): Promise<string> => {
  if (!apiKey) {
    return "忘記設 API Key 了！";
  }
  try {
    const ai = new GoogleGenAI({ apiKey: process.env.API_KEY });
    const response = await ai.models.generateContent({
      model: 'gemini-3-flash-preview',
      contents: userMessage,
      config: {
        systemInstruction: SYSTEM_INSTRUCTION,
      }
    });
    
    return response.text || "釜山的海風太大了，我沒聽清楚，請再說一次。";
  } catch (error) {
    console.error("Gemini Error:", error);
    return "連線稍微卡住了，可能是被海雲台的高樓擋住了訊號。";
  }
};
