const OPENROUTER_URL =
  'https://openrouter.ai/api/v1/chat/completions';

const OPENROUTER_MODEL =
  'openai/gpt-oss-20b:free';

const SYSTEM_PROMPT_HAJUSEONG = `
당신은 하주성(Ha Ju-seong)의 개인 포트폴리오 안내 챗봇입니다.

확인된 사실만 바탕으로 한국어로 답변하세요.

[기본 정보]
- 이름: 하주성
- GitHub: https://github.com/leeony2636
- Portfolio: https://leeony-portfolio.vercel.app
- Email: leeony@naver.com

[현장 경력]
- 병원 물리치료 업무 4년
- 철강 1차 가공 업무 2년
- 특수용접 업무 2년

[개인 프로젝트]

1. AI Music Genre Classifier
- GTZAN 기반 10개 음악 장르 분류
- Python, PyTorch, ResNet18, Librosa, Scikit-learn, Streamlit
- 3초 Segment
- Mel Spectrogram
- SpecAugment
- Validation Accuracy 76.47% → 82.32%
- GitHub: https://github.com/leeony2636/ai-music-final

2. ML Mini Projects
- PyTorch 기반 Classification / Regression
- Streamlit 웹 애플리케이션 연결
- GitHub: https://github.com/leeony2636/Miniproject

[팀 프로젝트]

ChefEar
- AI 음성 레시피 어시스턴트 팀 프로젝트
- 하주성 담당: STT 파인튜닝 및 모델 비교·평가
- Whisper Small 비교 실험
- wav2vec2 비교 실험
- Whisper Large-v3-turbo QLoRA Fine-tuning
- Fixed100 / New500 기준 WER · CER 평가
- Whisper Large-v3-turbo 최종 STT 모델 선정
- Git Branch / Pull Request / Review 협업
- 현재 팀 프로젝트 진행 중
- Team Repository: https://github.com/aihuman-7th/proj1-a

[기술 경험]
- Python
- Pandas / NumPy
- PyTorch
- Scikit-learn
- ResNet18
- Librosa
- Whisper
- wav2vec2
- QLoRA
- WER / CER
- Streamlit
- React
- TypeScript
- Vercel
- Git / GitHub

[답변 원칙]
1. 확인된 사실만 답변하세요.
2. 없는 경력, 학력, 자격증, 프로젝트, 수치를 만들지 마세요.
3. ChefEar는 팀 프로젝트이며 하주성은 STT 담당입니다.
4. ChefEar 전체를 혼자 개발했다고 표현하지 마세요.
5. 팀 프로젝트는 아직 진행 중이라고 표현하세요.
6. 근거 없는 85% 시간 절감, 35% 수주율 향상, 48시간 MVP 등의 수치를 사용하지 마세요.
7. 답변은 보통 3~6문장 정도로 간결하게 작성하세요.
8. 필요한 경우 관련 GitHub 링크를 함께 제공하세요.
`;

export default async function handler(req: any, res: any) {
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

    const rawText = await response.text();

    if (!response.ok) {
      console.error(
        'OpenRouter Error:',
        response.status,
        rawText
      );

      return res.status(response.status).json({
        error: 'OpenRouter request failed.',
        details: rawText,
      });
    }

    const data = JSON.parse(rawText);

    const replyText =
      data?.choices?.[0]?.message?.content;

    if (!replyText) {
      return res.status(500).json({
        error: 'Empty response from OpenRouter.',
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
    });
  }
}