import { SYSTEM_PROMPT_HAJUSEONG } from '../src/data/portfolioData';

const OPENROUTER_URL =
  'https://openrouter.ai/api/v1/chat/completions';

const OPENROUTER_MODEL =
  'openai/gpt-oss-20b:free';

export default async function handler(req: any, res: any) {
  // POST 요청만 허용
  if (req.method !== 'POST') {
    return res.status(405).json({
      error: 'Method not allowed',
    });
  }

  try {
    const { message, history } = req.body || {};

    if (!message || typeof message !== 'string') {
      return res.status(400).json({
        error: 'Message string is required.',
      });
    }

    const apiKey = process.env.OPENROUTER_API_KEY;

    if (!apiKey) {
      return res.status(500).json({
        error: 'OPENROUTER_API_KEY is not configured.',
        fallbackText:
          '현재 AI 챗봇 API 설정을 확인하고 있습니다. 잠시 후 다시 시도해주세요.',
      });
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

    // 이전 대화 기록
    if (Array.isArray(history)) {
      history.forEach(
        (msg: { sender: string; text: string }) => {
          if (!msg?.text) return;

          messages.push({
            role:
              msg.sender === 'user'
                ? 'user'
                : 'assistant',
            content: msg.text,
          });
        }
      );
    }

    // 현재 질문
    messages.push({
      role: 'user',
      content: message,
    });

    const response = await fetch(OPENROUTER_URL, {
      method: 'POST',

      headers: {
        Authorization: `Bearer ${apiKey}`,
        'Content-Type': 'application/json',
        'HTTP-Referer':
          'https://leeony-portfolio.vercel.app',
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
        'OpenRouter Error:',
        response.status,
        errorText
      );

      return res.status(response.status).json({
        error: 'OpenRouter request failed.',
        details: errorText,
        fallbackText:
          'AI 모델 응답 중 오류가 발생했습니다. 잠시 후 다시 시도해주세요.',
      });
    }

    const data = await response.json();

    const replyText =
      data?.choices?.[0]?.message?.content;

    if (!replyText) {
      return res.status(500).json({
        error: 'Empty response from OpenRouter.',
        fallbackText:
          '답변을 생성하지 못했습니다. 다시 질문해주세요.',
      });
    }

    return res.status(200).json({
      text: replyText,
    });
  } catch (error: any) {
    console.error('Chat API Error:', error);

    return res.status(500).json({
      error: 'Failed to process chat request.',
      details:
        error?.message || String(error),
      fallbackText:
        'AI 포트폴리오 챗봇 응답 중 일시적인 오류가 발생했습니다.',
    });
  }
}