import express from 'express';
import path from 'path';
import { SYSTEM_PROMPT_HAJUSEONG } from './src/data/portfolioData';

const app = express();
const PORT = 3000;

app.use(express.json());

const OPENROUTER_URL = 'https://openrouter.ai/api/v1/chat/completions';

// 정확한 모델 ID는 OpenRouter 모델 페이지에서 최종 확인 후 바꾸면 됩니다.
const OPENROUTER_MODEL = 'openai/gpt-oss-20b:free';

// Health Check
app.get('/api/health', (_req, res) => {
  res.json({
    status: 'ok',
    timestamp: new Date().toISOString(),
  });
});

// Chat API
app.post('/api/chat', async (req, res) => {
  try {
    const { message, history } = req.body;

    if (!message || typeof message !== 'string') {
      res.status(400).json({
        error: 'Message string is required.',
      });
      return;
    }

    const apiKey = process.env.OPENROUTER_API_KEY;

    // API 키가 아직 설정되지 않은 경우
    if (!apiKey) {
      const fallbackText = `안녕하세요! 하주성 AI 포트폴리오 안내 챗봇입니다. ⚡

현재 AI 챗봇 API 설정 대기 상태입니다.

• 현재 방향: Python · AI 프로젝트 구현 및 기록
• 주요 프로젝트: AI Music Genre Classifier, ML Mini Projects, ChefEar
• 협업 경험: Git Branch · Pull Request · Review
• 이메일 문의: leeony@naver.com`;

      res.json({
        text: fallbackText,
      });

      return;
    }

    const messages: {
      role: 'system' | 'user' | 'assistant';
      content: string;
    }[] = [
      {
        role: 'system',
        content: SYSTEM_PROMPT_HAJUSEONG,
      },
    ];

    // 이전 대화 기록 추가
    if (Array.isArray(history)) {
      history.forEach(
        (msg: { sender: string; text: string }) => {
          messages.push({
            role: msg.sender === 'user' ? 'user' : 'assistant',
            content: msg.text,
          });
        }
      );
    }

    // 현재 사용자 질문 추가
    messages.push({
      role: 'user',
      content: message,
    });

    const response = await fetch(OPENROUTER_URL, {
      method: 'POST',
      headers: {
        Authorization: `Bearer ${apiKey}`,
        'Content-Type': 'application/json',
        'HTTP-Referer': 'https://leeony-portfolio.vercel.app',
        'X-Title': 'Ha Ju-seong Portfolio',
      },
      body: JSON.stringify({
        model: OPENROUTER_MODEL,
        messages,
        temperature: 0.5,
        max_tokens: 500,
      }),
    });

    if (!response.ok) {
      const errorText = await response.text();

      console.error(
        'OpenRouter API Error:',
        response.status,
        errorText
      );

      throw new Error(
        `OpenRouter request failed: ${response.status}`
      );
    }

    const data = await response.json();

    const replyText =
      data?.choices?.[0]?.message?.content ||
      '죄송합니다. 답변을 생성하지 못했습니다. 다시 시도해 주세요.';

    res.json({
      text: replyText,
    });
  } catch (error: any) {
    console.error('Error in /api/chat:', error);

    res.status(500).json({
      error: 'Failed to process AI chat request.',
      details: error?.message || String(error),
      fallbackText:
        'AI 포트폴리오 챗봇 응답 중 일시적인 오류가 발생했습니다. 잠시 후 다시 시도해 주세요.',
    });
  }
});

// Dev / Production Server
async function startServer() {
  if (process.env.NODE_ENV !== 'production') {
    const { createServer: createViteServer } = await import('vite');

    const vite = await createViteServer({
      server: {
        middlewareMode: true,
      },
      appType: 'spa',
    });

    app.use(vite.middlewares);
  } else {
    const distPath = path.join(process.cwd(), 'dist');

    app.use(express.static(distPath));

    app.get('*', (_req, res) => {
      res.sendFile(
        path.join(distPath, 'index.html')
      );
    });
  }

  app.listen(PORT, '0.0.0.0', () => {
    console.log(
      `Server running on http://0.0.0.0:${PORT}`
    );
  });
}

startServer();