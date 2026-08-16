# Ha Ju-seong AI Portfolio

React + TypeScript 기반으로 제작한 개인 포트폴리오 웹사이트입니다.

AI 프로젝트, 팀 프로젝트, 기술 경험을 한곳에 정리하고  
방문자가 포트폴리오 내용을 직접 질문할 수 있도록  
**OpenRouter 기반 AI 챗봇**도 연결했습니다.

---

## 🌐 Live Portfolio

👉 https://leeony-portfolio.vercel.app

---

## 주요 기능

- 개인 프로젝트 소개
- 팀 프로젝트 ChefEar 소개
- 기술 스택 및 경험 정리
- 프로젝트 상세 Modal
- 반응형 Portfolio UI
- OpenRouter 기반 AI 챗봇
- Vercel Serverless Function API
- GitHub `main` 브랜치 기반 자동 배포

---

## 🤖 Portfolio AI Chatbot

포트폴리오 방문자가 프로젝트, 기술 경험, 경력, 협업 경험 등을  
직접 질문할 수 있도록 AI 챗봇을 구현했습니다.

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
- `/api/chat` Serverless Function 구현
- System Prompt에 포트폴리오 정보 제공
- 이전 대화 History를 포함한 멀티턴 구조
- API Key를 Vercel Environment Variables로 관리
- Production 환경에서 실제 챗봇 동작 확인

> 실제 OpenRouter API Key는 GitHub Repository에 저장하지 않습니다.

---

## Portfolio에 포함된 프로젝트

### 🎵 AI Music Genre Classifier

음악 데이터를 분석하여 10개 장르를 분류하는 AI 프로젝트입니다.

- PyTorch / ResNet18 기반 분류
- Mel Spectrogram 사용
- SpecAugment 적용
- Validation Accuracy **76.47% → 82.32%**
- Streamlit 웹 애플리케이션 배포

GitHub  
https://github.com/leeony2636/ai-music-final

Live Demo  
https://ai-music-final-mj2gmrph3khrrncd5dbsgb.streamlit.app/

---

### 👨‍🍳 ChefEar

음성으로 레시피를 조회하고 조리 단계를 진행할 수 있도록 설계한  
AI 음성 레시피 어시스턴트 팀 프로젝트입니다.

**담당 역할: STT Fine-tuning**

- Whisper Small 비교 실험
- wav2vec2 비교 실험
- Whisper Large-v3-turbo QLoRA Fine-tuning
- Fixed100 / New500 기준 WER · CER 평가
- 모델 비교 및 최종 STT 모델 선정
- Git Branch / Pull Request / Review 기반 협업

현재 팀 프로젝트는 진행 중이며  
STT / TTS 서비스 통합 작업을 진행하고 있습니다.

Team Repository  
https://github.com/aihuman-7th/proj1-a

---

### 📊 ML Mini Projects

PyTorch 기반 Classification / Regression 모델을  
Streamlit 웹 애플리케이션으로 연결한 학습 프로젝트입니다.

GitHub  
https://github.com/leeony2636/Miniproject

---

## Tech Stack

### Frontend

`React` `TypeScript` `Vite`

### AI / Machine Learning

`Python` `PyTorch` `Scikit-learn` `ResNet18`

### Audio AI

`Librosa` `Whisper` `wav2vec2` `QLoRA`

### Web / Deployment

`Streamlit` `Vercel` `Vercel Serverless Functions`

### AI Integration

`OpenRouter` `GPT-OSS 20B` `REST API` `System Prompt`

### Development

`VS Code` `Google Colab` `Git` `GitHub`

---

## Project Structure

```text
leeony-portfolio/
├─ api/
│  └─ chat.ts
│
├─ src/
│  ├─ components/
│  │  ├─ AboutSection.tsx
│  │  ├─ ContactChatSection.tsx
│  │  ├─ HeroSection.tsx
│  │  ├─ Navbar.tsx
│  │  ├─ ProjectDetailModal.tsx
│  │  ├─ ProjectsSection.tsx
│  │  ├─ SkillsSection.tsx
│  │  └─ ...
│  │
│  ├─ data/
│  │  └─ portfolioData.ts
│  │
│  ├─ App.tsx
│  ├─ main.tsx
│  ├─ index.css
│  └─ types.ts
│
├─ .env.example
├─ server.ts
├─ package.json
├─ tsconfig.json
├─ vite.config.ts
└─ README.md
```

---

## Run Locally

### 1. Install

```bash
npm install
```

### 2. Environment Variable

프로젝트 루트에 `.env.local` 파일을 만들고  
OpenRouter API Key를 설정합니다.

```env
OPENROUTER_API_KEY="YOUR_OPENROUTER_API_KEY"
```

> 실제 API Key는 GitHub에 업로드하지 않습니다.

### 3. Run

```bash
npm run dev
```

---

## Deployment

GitHub Repository와 Vercel을 연결하여 배포하고 있습니다.

```text
GitHub main
    ↓
Vercel Build
    ↓
Production Deployment
```

Vercel 환경에서는 다음 값을 Environment Variables로 관리합니다.

```text
OPENROUTER_API_KEY
```

Live Portfolio  
https://leeony-portfolio.vercel.app

---

## 관련 기록

AI / Deep Learning 논문을 읽고 정리한 개인 기록:

https://github.com/leeony2636/read_and_chewed

---

## Contact

GitHub  
https://github.com/leeony2636

Email  
leeony@naver.com
