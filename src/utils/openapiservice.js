// src/lib/openaiService.js
import { OpenAI } from "openai";

const openai = new OpenAI({
  apiKey: import.meta.env.VITE_OPENAI_API_KEY, // or REACT_APP_... for CRA
  dangerouslyAllowBrowser: true, // for client-side (only for mock/demo use)
});

export async function askAI(message) {
  const response = await openai.chat.completions.create({
    model: "gpt-3.5-turbo",
    messages: [{ role: "user", content: message }],
  });

  return response.choices[0].message.content;
}
