import { GoogleGenAI } from "@google/genai";
import { ITINERARY_DATA } from '../constants';

// System instruction for the Busan trip guide
const SYSTEM_INSTRUCTION = `
你是「釜山海味之旅」的 AI 專屬導遊。你的使用者是一家人（包含父母）。
你的語氣應該：親切、明亮、有禮貌、簡單易懂。

你擁有以下的釜山行程資訊：
${JSON.stringify(ITINERARY_DATA)}

請根據使用者的問題回答。
1. 行程諮詢：參考上述資料，強調海景與舒適度。
2. 釜山特色：如海雲台、甘川洞文化村、札嘎其市場、影島。
3. 釜山美食：強力推薦「豬肉湯飯」、「堅果糖餅」、「烤貝類」、「生魚片」。
4. 長輩關懷：建議適當的體力消耗，例如松島纜車、Centum City 的 SPA LAND。
5. 翻譯輔助：可以提供簡單韓文翻譯幫助點餐。
回答請保持簡短，適合手機閱讀。
`;

// Fix: Refactor to use direct process.env.API_KEY and create instance inside function as per guidelines
export const chatWithGemini = async (userMessage: string): Promise<string> => {
  try {
    // Fix: Creating a new GoogleGenAI instance right before making an API call
    const ai = new GoogleGenAI({ apiKey: process.env.API_KEY });
    const response = await ai.models.generateContent({
      model: 'gemini-3-flash-preview',
      contents: userMessage,
      config: {
        systemInstruction: SYSTEM_INSTRUCTION,
      }
    });
    
    // Fix: Accessing response.text directly (it is a property, not a method)
    return response.text || "海風太大我沒聽清楚，請再說一次。";
  } catch (error) {
    console.error("Gemini Error:", error);
    return "連線稍微卡住了，釜山的網路可能正在吹海風。";
  }
};
