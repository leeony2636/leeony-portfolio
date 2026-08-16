import { Project, TimelineItem, SkillCategory, SkillProofMetric } from '../types';

export const PERSONAL_INFO = {
  name: '하주성',
  englishName: 'Ha Ju-seong',
  title: 'Python · AI 프로젝트 구현 및 기록',
  subtitle: '현장 경험을 바탕으로 Python과 AI 프로젝트를 직접 구현하고 기록합니다.',
  badge: '⚡ PROJECT & FIELD EXPERIENCE',
  motto: '"배운 내용을 직접 구현하고 기록하며 하나씩 발전해 나가는 과정을 중요하게 생각합니다."',
  email: 'leeony@naver.com',
  github: 'https://github.com/leeony2636',
  blog: '',
  location: '대한민국 부산',
  availableFor: 'Python · AI 프로젝트 구현 및 포트폴리오 기록',

  coreValues: [
    {
      icon: '⚡',
      title: '다양한 현장에서 쌓은 경험',
      desc: '병원, 철강 가공, 특수용접 등 서로 다른 환경에서 업무를 수행하며 다양한 현장 경험을 쌓았습니다.',
    },
    {
      icon: '💻',
      title: '직접 구현하는 프로젝트',
      desc: 'Python과 AI 학습 내용을 코드로 구현하고 Streamlit 웹 애플리케이션으로 연결하고 있습니다.',
    },
    {
      icon: '📂',
      title: '기록하고 개선하는 과정',
      desc: 'GitHub와 웹 포트폴리오를 활용해 프로젝트 과정과 결과를 정리하고 지속적으로 개선하고 있습니다.',
    },
  ],
};

export const PROJECTS: Project[] = [
  {
    id: 'ai-music-final',
    title: 'ai-music-final',
    subTitle: 'AI 음악 장르 예측 웹 애플리케이션',
    description:
      'GTZAN 음악 데이터를 활용해 음악 장르를 분류하고 Streamlit에서 예측 결과를 확인할 수 있도록 구현한 프로젝트',
    fullDescription:
      '음악 장르 분류 모델을 단계적으로 개선한 프로젝트입니다. 기본 머신러닝 모델부터 ResNet18 기반 스펙트로그램 분류까지 확장했으며, SpecAugment를 적용한 모델에서 검증 정확도 82.32%를 기록했습니다.',

    category: 'AI / Deep Learning',

    techStack: [
      'Python',
      'PyTorch',
      'ResNet18',
      'Streamlit',
      'Librosa',
      'Scikit-learn',
    ],

    stars: 0,
    forks: 0,

    githubUrl: 'https://github.com/leeony2636/ai-music-final',
    liveUrl: 'https://ai-music-final-mj2gmrph3khrrncd5dbsgb.streamlit.app/',

    metrics: [
      { label: 'Validation Accuracy', value: '82.32%' },
      { label: '분류 장르', value: '10 Genres' },
      { label: '오디오 분할', value: '3 sec' },
    ],

    keyFeatures: [
      'WAV 파일 업로드 기반 음악 장르 예측',
      'ResNet18 기반 Mel Spectrogram 이미지 분류',
      'SpecAugment 적용을 통한 모델 성능 개선',
      '예측 장르별 확률 시각화',
      'Streamlit 기반 웹 인터페이스 구현',
    ],

    architectureSummary:
      'WAV Upload → 3초 구간 분할 → Mel Spectrogram → ResNet18 → 장르 확률 평균 → Streamlit 결과 출력',

    fieldProblemSolved:
      '음원 파일을 업로드하면 특징 추출과 모델 추론을 거쳐 음악 장르와 확률을 웹에서 확인할 수 있도록 구현했습니다.',

    featured: true,
  },

  {
    id: 'ml-mini-projects',
    title: 'ML Mini Projects',
    subTitle: '분류 · 회귀 모델 Streamlit 웹앱',
    description:
      'PyTorch로 구현한 분류·회귀 모델을 Streamlit 웹 애플리케이션으로 연결한 미니 프로젝트 모음',

    fullDescription:
      '분류와 회귀 문제를 각각 모델링하고 학습된 모델을 Streamlit 웹앱과 연결하여 입력값에 따른 예측 결과를 확인할 수 있도록 구현한 미니 프로젝트입니다.',

    category: 'Learning & Practice',

    techStack: [
      'Python',
      'PyTorch',
      'Streamlit',
    ],

    stars: 0,
    forks: 0,

    githubUrl: 'https://github.com/leeony2636/Miniproject',
    liveUrl: 'https://miniproject-6m88p7gplkcxxrdbxxhvsq.streamlit.app',
    metrics: [
      { label: '구성', value: 'Classification + Regression' },
    ],

    keyFeatures: [
      'PyTorch 기반 분류 모델 구현',
      'PyTorch 기반 회귀 모델 구현',
      '학습된 모델 저장 및 불러오기',
      'Streamlit 웹 인터페이스 연결',
      '사용자 입력에 따른 예측 결과 출력',
    ],

    architectureSummary:
      'User Input → Streamlit → Trained PyTorch Model → Prediction → Result Display',

    fieldProblemSolved:
      '모델 학습 결과를 코드에서만 확인하지 않고 웹 인터페이스에 연결해 직접 입력하고 예측 결과를 확인할 수 있도록 구현했습니다.',

    featured: false,
  },
  {
    id: 'chefear',
    title: 'ChefEar',
    subTitle: 'AI 음성 레시피 어시스턴트 팀 프로젝트',
    description:
      '음성으로 레시피를 조회하고 조리 단계를 진행할 수 있도록 STT·TTS·오케스트레이션을 결합하는 팀 프로젝트',

    fullDescription:
      'ChefEar는 요리 중 화면 조작을 최소화하고 음성으로 레시피를 진행할 수 있도록 설계한 팀 프로젝트입니다. 저는 STT 파트를 담당하여 Whisper Small과 wav2vec2를 비교하고, Whisper Large-v3-turbo QLoRA 파인튜닝과 WER·CER 평가를 수행해 최종 STT 모델을 선정했습니다.',

    category: 'AI / Deep Learning',

    techStack: [
      'Python',
      'PyTorch',
      'Whisper',
      'wav2vec2',
      'QLoRA',
      'Streamlit',
    ],

    stars: 0,
    forks: 0,

    githubUrl: 'https://github.com/aihuman-7th/proj1-a',
    liveUrl: '',

    metrics: [
      { label: '담당', value: 'STT Fine-tuning' },
      { label: '비교 모델', value: '3 Models' },
      { label: '평가', value: 'WER / CER' },
    ],

    keyFeatures: [
      'Whisper Small 기반 초기 STT 실험',
      'wav2vec2 비교 실험',
      'Whisper Large-v3-turbo QLoRA 파인튜닝',
      'Fixed100 / New500 기준 WER·CER 평가',
      '최종 STT 모델 선정',
      'Git Branch / Pull Request / Review 기반 팀 협업',
    ],

    architectureSummary:
      'Voice Input → Whisper STT → Intent / Recipe Processing → TTS → Voice Response',

    fieldProblemSolved:
      '요리 중 손을 사용하기 어려운 상황에서 음성으로 레시피 진행을 이어갈 수 있도록 STT 인식 성능과 서비스 통합 가능성을 검증하고 있습니다.',

    featured: true,
  },
];

export const TIMELINE: TimelineItem[] = [
  {
    period: '2026.06.23 ~ 현재',
    role: 'AI · Deep Learning 교육 과정',
    company: 'AI 교육 과정',
    tag: 'AI 학습 · 프로젝트 구현',

    description:
      'Python, 머신러닝, 딥러닝, Streamlit, GitHub 등을 활용해 실습과 개인 프로젝트를 진행하고 있습니다.',

    achievements: [
      'Python 기반 머신러닝·딥러닝 실습',
      'PyTorch 기반 분류·회귀 모델 구현',
      'Streamlit 기반 예측 웹 애플리케이션 제작',
      'ResNet18 기반 음악 장르 분류 프로젝트 구현',
      'ChefEar 팀 프로젝트에서 STT 파인튜닝 및 모델 비교·평가 담당',
      'Git Branch / Pull Request / Review 기반 협업 경험',
      'GitHub를 활용한 프로젝트 기록',
      'Vercel을 활용한 웹 포트폴리오 배포',
    ],
  },

  {
    period: '4년',
    role: '물리치료 업무',
    company: '병원',
    tag: '의료 현장 실무',

    description:
      '병원 현장에서 환자 상태를 확인하고 상황에 맞게 대응하며 실무 경험을 쌓았습니다.',

    achievements: [
      '환자 상태와 상황을 확인하며 업무 수행',
      '다양한 상황에서의 판단 및 대응 경험',
      '환자 및 의료진과의 협업 경험',
    ],
  },

  {
    period: '2년',
    role: '철강 1차 가공 업무',
    company: '철강 제조 현장',
    tag: '제조 현장 실무',

    description:
      '철강 가공 현장에서 생산 과정과 작업 흐름을 경험하며 현장 실무를 수행했습니다.',

    achievements: [
      '철강 1차 가공 업무 수행',
      '생산 현장 작업 흐름 경험',
      '현장 상황에 따른 대응 경험',
    ],
  },

  {
    period: '2년',
    role: '특수용접 업무',
    company: '용접 현장',
    tag: '전문 기술 실무',

    description:
      '특수용접 업무를 수행하며 작업 정확도와 현장 대응 경험을 쌓았습니다.',

    achievements: [
      '특수용접 업무 수행',
      '작업 절차와 품질 기준에 맞춘 업무 경험',
      '작업 환경 변화에 대응하며 실무 수행',
    ],
  },
];

export const SKILL_CATEGORIES: SkillCategory[] = [
  {
    category: 'Python & Data',
    iconName: 'Code',
    description: '교육 과정과 프로젝트에서 직접 사용해본 기술',

    skills: [
      { name: 'Python', level: 0, highlight: '프로젝트 적용' },
      { name: 'Pandas / NumPy', level: 0, highlight: '사용 경험' },
      { name: 'Matplotlib', level: 0, highlight: '사용 경험' },
      { name: 'Scikit-learn', level: 0, highlight: '프로젝트 적용' },
    ],
  },

  {
    category: 'AI & Deep Learning',
    iconName: 'BrainCircuit',
    description: '교육 과정과 프로젝트에서 학습하고 적용해본 기술',

    skills: [
      { name: 'PyTorch', level: 0, highlight: '프로젝트 적용' },
      { name: 'CNN', level: 0, highlight: '학습 · 적용' },
      { name: 'ResNet18', level: 0, highlight: '프로젝트 적용' },
      { name: 'Whisper STT', level: 0, highlight: '팀 프로젝트 적용' },
      { name: 'QLoRA Fine-tuning', level: 0, highlight: '실험 경험' },
      { name: 'WER / CER Evaluation', level: 0, highlight: '모델 평가' },
    ],
  },

  {
    category: 'Web & Deployment',
    iconName: 'Globe',
    description: '프로젝트를 웹으로 연결하고 배포하며 사용해본 기술',

    skills: [
      { name: 'Streamlit', level: 0, highlight: '프로젝트 적용' },
      { name: 'Git / GitHub', level: 0, highlight: 'Branch · PR · Review' },
      { name: 'Vercel', level: 0, highlight: '배포 경험' },
      { name: 'React / TypeScript', level: 0, highlight: '포트폴리오 제작 경험' },
    ],
  },

  {
    category: 'Field Experience',
    iconName: 'Zap',
    description: '이전 직무를 통해 쌓은 현장 실무 경험',

    skills: [
      { name: '병원 물리치료 업무', level: 0, highlight: '4년' },
      { name: '철강 1차 가공 업무', level: 0, highlight: '2년' },
      { name: '특수용접 업무', level: 0, highlight: '2년' },
      { name: '현장 업무 및 협업', level: 0, highlight: '실무 경험' },
    ],
  },
];

export const SKILL_PROOF_METRICS: SkillProofMetric[] = [
  {
    title: 'AI 음악 장르 분류',
    value: '82.32%',
    description:
      'ResNet18과 SpecAugment를 적용한 음악 장르 분류 프로젝트의 최종 검증 정확도',
    badge: '🎵 프로젝트 결과',
  },
  
  {
    title: 'ChefEar 팀 프로젝트',
    value: 'STT',
    description:
      'Whisper Small과 wav2vec2를 비교하고 Whisper Large-v3-turbo QLoRA 파인튜닝과 WER·CER 평가를 수행했습니다.',
    badge: '👨‍🍳 팀 프로젝트',
  },
  
  {
    title: '분류 · 회귀 웹앱',
    value: '2 Projects',
    description:
      '분류와 회귀 모델을 각각 Streamlit 웹 애플리케이션으로 연결해 구현',
    badge: '🧪 실습 프로젝트',
  },

  {
    title: 'AI 교육 과정',
    value: '2026.06.23 ~',
    description:
      'Python, 머신러닝, 딥러닝 실습과 개인 프로젝트를 진행하고 있습니다.',
    badge: '📚 학습 진행',
  },

  {
    title: '웹 포트폴리오',
    value: 'Vercel',
    description:
      'GitHub 저장소와 연결한 개인 웹 포트폴리오를 Vercel에 배포했습니다.',
    badge: '🌐 배포 경험',
  },
];

export const RESUME_DATA = {
  name: '하주성',
  englishName: 'Ha Ju-seong',

  contact: {
    email: 'leeony@naver.com',
    phone: '010-XXXX-XXXX (문의 시 공개)',
    github: 'https://github.com/leeony2636',
    location: '대한민국 부산',
  },

  summary:
    '병원 물리치료, 철강 가공, 특수용접 등 다양한 현장에서 실무 경험을 쌓았으며 현재 Python과 AI 관련 교육을 통해 프로젝트를 구현하고 기록하고 있습니다. 학습한 모델을 Streamlit 웹앱과 GitHub 포트폴리오로 연결하며 구현 경험을 쌓고 있습니다.',

  education: [],

  certifications: [],

  strengths: [
    '다양한 현장 실무 경험',
    'Python · AI 프로젝트 구현 경험',
    '모델 학습 및 성능 비교·평가 경험',
    'Streamlit 기반 웹앱 구현 경험',
    'GitHub Branch · Pull Request · Review 기반 협업 경험',
  ],
};

export const SYSTEM_PROMPT_HAJUSEONG = `
당신은 하주성(Ha Ju-seong)의 개인 포트폴리오 안내 챗봇입니다.

방문자, 채용 담당자, 협업 제안자가 하주성의 경력, 프로젝트, 기술 경험에 대해 질문하면
아래에 확인된 사실만 바탕으로 한국어로 답변하세요.

[기본 정보]
- 이름: 하주성
- GitHub: https://github.com/leeony2636
- Portfolio: https://leeony-portfolio.vercel.app
- Email: leeony@naver.com
- 현재 Python · AI · Deep Learning 프로젝트를 직접 구현하고 기록하고 있음
- 모델 학습 결과만 남기지 않고 실험 → 성능 비교 → 개선 → 문서화 → 배포 과정을 중요하게 생각함

[현장 경력]
- 병원 물리치료 업무 4년
- 철강 1차 가공 업무 2년
- 특수용접 업무 2년
- 서로 다른 현장에서 문제를 직접 해결해 온 경험을 AI 프로젝트 구현 경험으로 확장하고 있음

[주요 개인 프로젝트]

1. AI Music Genre Classifier
- 개인 프로젝트
- GTZAN 음악 데이터를 활용한 10개 음악 장르 분류
- Python, PyTorch, ResNet18, Librosa, Scikit-learn, Streamlit 사용
- 3초 Segment 기반 오디오 데이터 처리
- Mel Spectrogram 기반 분류
- SpecAugment 적용
- Validation Accuracy 76.47% → 82.32%
- Model Improvement +5.85%p
- Streamlit 웹 애플리케이션 구현 및 배포
- GitHub: https://github.com/leeony2636/ai-music-final
- Live Demo: https://ai-music-final-mj2gmrph3khrrncd5dbsgb.streamlit.app/

2. ML Mini Projects
- 개인 학습 프로젝트
- PyTorch 기반 Classification / Regression 모델 구현
- 학습 모델을 Streamlit 웹 애플리케이션과 연결
- 사용자 입력값에 따른 예측 결과 출력
- GitHub: https://github.com/leeony2636/Miniproject

3. leeony-portfolio
- 하주성의 개인 웹 포트폴리오
- React, TypeScript 기반
- 프로젝트, 경력, 기술 경험을 웹으로 정리
- GitHub Repository와 Vercel을 연결하여 배포
- OpenRouter 기반 AI 포트폴리오 챗봇 연동 작업 진행
- GitHub: https://github.com/leeony2636/leeony-portfolio
- Live Portfolio: https://leeony-portfolio.vercel.app

[팀 프로젝트]

ChefEar
- AI 음성 레시피 어시스턴트 팀 프로젝트
- Team Repository: https://github.com/aihuman-7th/proj1-a
- 하주성 담당: STT 파인튜닝 및 모델 비교·평가

하주성의 STT 작업:
- Whisper Small 기반 초기 STT 실험
- wav2vec2 비교 실험
- openai/whisper-large-v3-turbo QLoRA Fine-tuning
- Fixed100 / New500 기준 WER · CER 평가
- 모델 비교를 통해 Whisper Large-v3-turbo를 최종 STT 모델로 선정
- Git Branch / Pull Request / Review 기반 협업 경험
- STT 관련 README 및 실험 기록 문서화

ChefEar 현재 상태:
- 팀 프로젝트는 아직 진행 중
- STT 최종 모델 선정 완료
- TTS 학습 및 검증 작업 진행 중
- TTS 생성 음성을 STT로 재인식하는 통합 검증 예정 또는 진행 중
- 최종 STT / TTS / 오케스트레이션 / Streamlit 서비스 통합 작업 진행 중
- 프로젝트가 아직 완성되지 않았으므로 최종 배포 완료라고 말하지 말 것
- 하주성의 역할은 팀 전체가 아니라 STT 파트 중심이라고 정확하게 설명할 것

[기술 경험]

Language / Data:
- Python
- Pandas
- NumPy

AI / Machine Learning:
- PyTorch
- Scikit-learn
- CNN
- ResNet18
- RandomForest
- Classification
- Regression

Voice / Audio AI:
- Librosa
- Mel Spectrogram
- Whisper
- wav2vec2
- QLoRA Fine-tuning
- WER
- CER
- STT 모델 비교 및 평가

Web / Deployment:
- Streamlit
- React
- TypeScript
- Vercel

Development / Collaboration:
- VS Code
- Google Colab
- Git
- GitHub
- Branch
- Commit
- Pull Request
- Review
- Merge

[GitHub 협업 경험]
- 팀 프로젝트에서 직접 개인 Branch를 생성하여 작업
- Commit Message를 작성하여 변경사항 기록
- Pull Request 생성
- 팀원 Review 및 Approve 경험
- 팀장 Merge 방식의 협업 흐름 경험
- main 브랜치와 작업 브랜치를 구분하여 사용

[현재 학습 및 개발 방향]
- Python · AI · Deep Learning 프로젝트 구현
- 모델 선택 이유와 실험 과정을 기록
- 성능 평가 결과를 비교하여 모델 개선
- 모델을 Streamlit 등 웹 인터페이스와 연결
- GitHub에 프로젝트 과정과 결과를 문서화
- 개인 프로젝트뿐 아니라 팀 협업 경험을 확장 중

[답변 원칙]
1. 위에 확인된 사실만 사용하세요.
2. 존재하지 않는 프로젝트, 경력, 학력, 자격증, 성과, 수치를 만들지 마세요.
3. 확인되지 않은 정보는 추측하지 마세요.
4. 정보가 없으면 "현재 포트폴리오에 확인된 정보가 없습니다."라고 답변하세요.
5. 하주성을 AI 전문가, Senior Developer, Full Stack Developer, AI Service Planner 등으로 임의 정의하지 마세요.
6. 현재 Python과 AI 프로젝트를 학습하고 직접 구현하며 경험을 쌓고 있는 개발자라는 방향으로 설명하세요.
7. ChefEar는 팀 프로젝트이며 하주성은 STT 파트를 담당했다고 정확하게 표현하세요.
8. ChefEar 전체 개발을 하주성 혼자 수행했다고 말하지 마세요.
9. ChefEar는 아직 진행 중이므로 완성·배포 완료라고 단정하지 마세요.
10. AI Music Genre Classifier와 ML Mini Projects는 개인 프로젝트로 구분하세요.
11. 프로젝트 질문에는 사용 기술, 구현 내용, 하주성의 역할, GitHub 링크를 중심으로 답변하세요.
12. 경력 질문에는 물리치료 4년, 철강 1차 가공 2년, 특수용접 2년을 기준으로 답변하세요.
13. 근거 없는 85% 작업시간 단축, 35% 수주율 향상, 48시간 MVP 등의 수치를 사용하지 마세요.
14. 포트폴리오 챗봇이므로 답변은 너무 길게 늘어놓지 말고 핵심 위주로 작성하세요.
15. 가능하면 3~6문장 정도로 답변하되, 사용자가 자세한 설명을 요청하면 더 구체적으로 답변하세요.
16. 한국어로 자연스럽고 전문적으로 답변하세요.
17. GitHub 또는 데모 링크가 도움이 되는 질문이면 관련 링크를 함께 제공하세요.
`;