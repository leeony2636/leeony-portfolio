# 하주성 Portfolio

Python · AI · Deep Learning 프로젝트를 직접 구현하고 기록하는 개인 포트폴리오입니다.

병원, 철강 가공, 특수용접 등 다양한 현장 경험을 바탕으로  
**실험 → 성능 비교 → 개선 → 문서화 → 배포** 과정을 프로젝트에 적용하고 있습니다.

---

## 🌐 Live Portfolio

👉 https://leeony-portfolio.vercel.app

---

## About Me

다양한 현장에서 직접 문제를 해결해 온 경험을 바탕으로  
현재 Python과 AI 기술을 활용한 프로젝트를 구현하고 있습니다.

모델 학습 결과만 남기는 것이 아니라  
실험 과정, 성능 비교, 개선 내용, 코드 구조, 배포 과정을 GitHub에 기록하며  
프로젝트의 완성도를 높여가는 것을 목표로 하고 있습니다.

### Career

- 🏥 병원 물리치료 업무 — 4년
- 🏭 철강 1차 가공 업무 — 2년
- 🔧 특수용접 업무 — 2년
- 💻 Python · AI 프로젝트 개발 및 학습

---

## Featured Projects

### 🎵 AI Music Genre Classifier

WAV 음악 데이터를 분석하여 **10개 음악 장르를 분류하는 AI 프로젝트**입니다.

**Tech**

`Python` `PyTorch` `ResNet18` `Librosa` `Scikit-learn` `Streamlit`

**Development**

- RandomForest 기반 기본 장르 예측 모델 구현
- WAV 파일 기반 음악 장르 예측
- Mel Spectrogram 기반 데이터 처리
- 3초 Segment 기반 학습 데이터 확장
- ResNet18 Fine-tuning
- Backbone / FC Learning Rate 분리
- SpecAugment 적용
- Epoch별 학습 과정 시각화
- Streamlit 웹 애플리케이션 구현

**Result**

- Validation Accuracy: **76.47% → 82.32%**
- Model Improvement: **+5.85%p**
- 10개 음악 장르 분류
- Streamlit 배포 완료

**GitHub**

https://github.com/leeony2636/ai-music-final

**Live Demo**

https://ai-music-final-mj2gmrph3khrrncd5dbsgb.streamlit.app/

---

### 👨‍🍳 ChefEar

음성으로 레시피를 조회하고 조리 단계를 진행할 수 있도록 설계한  
**AI 음성 레시피 어시스턴트 팀 프로젝트**입니다.

**Tech**

`Python` `PyTorch` `Whisper` `wav2vec2` `QLoRA` `Qwen3-TTS` `Streamlit`

### My Role — STT Fine-tuning

- Whisper Small 기반 초기 STT 실험
- wav2vec2 비교 실험
- `openai/whisper-large-v3-turbo` QLoRA Fine-tuning
- Fixed100 / New500 기준 WER · CER 평가
- 모델 비교를 통한 최종 STT 모델 선정
- Git Branch / Pull Request / Review 기반 팀 협업
- STT / TTS 서비스 통합 테스트 진행

**Current Status**

- Whisper Small / wav2vec2 / Whisper Large 비교 실험 완료
- Whisper Large-v3-turbo 최종 STT 모델 선정
- TTS 생성 음성 검증 및 서비스 통합 작업 진행 중

**Team Repository**

https://github.com/aihuman-7th/proj1-a

---

### 📊 ML Mini Projects

PyTorch 기반 분류·회귀 모델을  
Streamlit 웹 애플리케이션으로 연결한 학습 프로젝트입니다.

**Tech**

`Python` `PyTorch` `Streamlit`

**Development**

- Classification 모델 구현
- Regression 모델 구현
- 학습된 모델 저장 및 불러오기
- Streamlit 기반 사용자 입력 처리
- 예측 결과 웹 출력

**GitHub**

https://github.com/leeony2636/Miniproject

---

## 🤖 Portfolio AI Chatbot

포트폴리오 방문자가 프로젝트, 기술 경험, 현장 경력, 협업 경험 등을 질문할 수 있도록  
**OpenRouter 기반 AI 챗봇**을 연결했습니다.

현재 챗봇은 포트폴리오 정보를 System Prompt로 전달받아  
질문에 맞는 답변을 생성합니다.

### Architecture

```text
User Question
      ↓
React Chat UI
      ↓
/api/chat
      ↓
Vercel Serverless Function
      ↓
OpenRouter API
      ↓
openai/gpt-oss-20b:free
      ↓
Portfolio Context 기반 답변
```

### Implementation

- OpenRouter API 연동
- `openai/gpt-oss-20b:free` 모델 사용
- Vercel `/api/chat` Serverless Function 구현
- System Prompt 기반 포트폴리오 정보 제공
- 이전 대화 기록을 포함한 멀티턴 질의응답 구조
- API Key를 Vercel Environment Variables로 관리
- 실제 Vercel Production 환경에서 챗봇 동작 확인

> 실제 OpenRouter API Key는 GitHub에 업로드하지 않습니다.

---

## 📚 Paper Research Archive

AI / Deep Learning 관련 논문을 읽고  
직접 이해한 방식으로 정리하는 개인 연구 기록입니다.

**Repository**

https://github.com/leeony2636/read_and_chewed

---

## Tech Stack

### Language & Data

`Python` `Pandas` `NumPy`

### AI / Machine Learning

`PyTorch` `Scikit-learn` `CNN` `ResNet18`

### Voice / Audio AI

`Librosa` `Mel Spectrogram` `Whisper` `wav2vec2` `QLoRA`

### Model Training & Evaluation

`Fine-tuning` `WER` `CER` `Model Comparison`

### Web / Deployment

`React` `TypeScript` `Streamlit` `Vercel` `Vercel Serverless Functions`

### AI Integration

`OpenRouter` `GPT-OSS 20B` `REST API` `System Prompt`

### Development

`VS Code` `Google Colab` `Git` `GitHub`

---

## GitHub Workflow

프로젝트 작업 과정은 가능한 한 GitHub에 기록하고 있습니다.

### Commit Convention

- `feat` — 기능 추가
- `fix` — 오류 수정
- `docs` — 문서 수정
- `refactor` — 코드 개선
- `style` — 코드 정리

### Collaboration

팀 프로젝트에서는 다음 흐름을 경험하고 있습니다.

```text
Issue
  ↓
Branch
  ↓
Commit
  ↓
Pull Request
  ↓
Review
  ↓
Merge
```

---

## Portfolio Structure

```text
leeony-portfolio/
├─ api/
│  └─ chat.ts
│
├─ src/
│  ├─ components/
│  ├─ data/
│  │  └─ portfolioData.ts
│  ├─ App.tsx
│  ├─ main.tsx
│  ├─ index.css
│  └─ types.ts
│
├─ .env.example
├─ server.ts
├─ package.json
├─ vite.config.ts
└─ README.md
```

---

## Run Locally

### Install

```bash
npm install
```

### Environment

프로젝트 루트에 `.env.local` 파일을 만들고 OpenRouter API Key를 설정합니다.

```env
OPENROUTER_API_KEY="YOUR_OPENROUTER_API_KEY"
```

> 실제 API Key는 GitHub에 업로드하지 않습니다.

### Run

```bash
npm run dev
```

---

## Deployment

GitHub `main` 브랜치와 Vercel을 연결하여 자동 배포하고 있습니다.

```text
GitHub main
    ↓
Vercel Build
    ↓
Production Deployment
```

**Live Portfolio**

https://leeony-portfolio.vercel.app

---

## Current Status

- ✅ AI Music Genre Classifier 구현 및 배포
- ✅ ML Mini Projects 구현
- ✅ React / TypeScript 기반 개인 포트폴리오 구축
- ✅ GitHub ↔ Vercel 자동 배포 연결
- ✅ OpenRouter 기반 AI 포트폴리오 챗봇 연동
- ✅ Vercel Serverless Function `/api/chat` 구현
- 🚧 ChefEar 팀 프로젝트 진행 중
- 🚧 STT / TTS 서비스 통합 진행 중

---

## Contact

- GitHub: https://github.com/leeony2636
- Email: leeony@naver.com
