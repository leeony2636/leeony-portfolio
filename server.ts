import express from 'express';
import path from 'path';
import { fileURLToPath } from 'url';
import { GoogleGenAI } from '@google/genai';
import { SYSTEM_PROMPT_HAJUSEONG } from './src/data/portfolioData.js';

const app = express();
const PORT = 3000;

app.use(express.json());

// Initialize Gemini AI client lazily
let aiClient: GoogleGenAI | null = null;
function getGenAI(): GoogleGenAI | null {
  const apiKey = process.env.GEMINI_API_KEY;
  if (!apiKey || apiKey === 'MY_GEMINI_API_KEY') {
    return null;
  }
  if (!aiClient) {
    aiClient = new GoogleGenAI({
      apiKey,
      httpOptions: {
        headers: {
          'User-Agent': 'aistudio-build',
        },
      },
    });
  }
  return aiClient;
}

// API Health Check
app.get('/api/health', (_req, res) => {
  res.json({ status: 'ok', timestamp: new Date().toISOString() });
});

// AI Chatbot API Endpoint
app.post('/api/chat', async (req, res) => {
  try {
    const { message, history } = req.body;
    if (!message || typeof message !== 'string') {
      res.status(400).json({ error: 'Message string is required.' });
      return;
    }

    const ai = getGenAI();
    if (!ai) {
      // Friendly fallback if GEMINI_API_KEY is not set yet
      const fallbackText = `안녕하세요! 하주성 AI 분신입니다. ⚡\n\n현재 백엔드 Gemini API 키 설정 대기 상태입니다. 하주성에 대한 주요 안내:\n\n• **이름**: 하주성 (AI Service Planner & Builder)\n• **핵심 신조**: "책상 위의 완벽한 알고리즘보다 현장의 문제를 해결하는 정직한 실행력"\n• **주요 강점**: 부딪히면 해결하는 압도적 실행력, 다양한 현장 경험, 85% 시간 절감 프로젝트 성과\n• **이메일 문의**: leeony@naver.com\n\n질문해 주셔서 감사합니다! 상단 메뉴 및 프로젝트 카드를 통해 더 많은 성과를 확인하실 수 있습니다.`;
      res.json({ text: fallbackText });
      return;
    }

    // Prepare contents array for chat history
    const contents: any[] = [];
    
    // Convert previous chat history if provided
    if (Array.isArray(history)) {
      history.forEach((msg: { sender: string; text: string }) => {
        contents.push({
          role: msg.sender === 'user' ? 'user' : 'model',
          parts: [{ text: msg.text }],
        });
      });
    }

    // Append current user message
    contents.push({
      role: 'user',
      parts: [{ text: message }],
    });

    const response = await ai.models.generateContent({
      model: 'gemini-3.6-flash',
      contents: contents,
      config: {
        systemInstruction: SYSTEM_PROMPT_HAJUSEONG,
        temperature: 0.7,
      },
    });

    const replyText = response.text || '죄송합니다, 답변을 생성하지 못했습니다. 다시 시도해 주세요.';
    res.json({ text: replyText });
  } catch (error: any) {
    console.error('Error in /api/chat:', error);
    res.status(500).json({
      error: 'Failed to process AI chat request.',
      details: error?.message || String(error),
      fallbackText: '안녕하세요! AI 분신 응답 중 일시적인 오류가 발생했습니다. 하주성에 대해 궁금하신 사항은 이메일(leeony@naver.com)로 문의해주시면 감사하겠습니다.',
    });
  }
});

// Express & Vite setup
async function startServer() {
  if (process.env.NODE_ENV !== 'production') {
    const { createServer: createViteServer } = await import('vite');
    const vite = await createViteServer({
      server: { middlewareMode: true },
      appType: 'spa',
    });
    app.use(vite.middlewares);
  } else {
    const distPath = path.join(process.cwd(), 'dist');
    app.use(express.static(distPath));
    app.get('*', (_req, res) => {
      res.sendFile(path.join(distPath, 'index.html'));
    });
  }

  app.listen(PORT, '0.0.0.0', () => {
    console.log(`Server running on http://0.0.0.0:${PORT}`);
  });
}

startServer();
