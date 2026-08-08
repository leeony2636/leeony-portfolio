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
      { name: 'Classification / Regression', level: 0, highlight: '실습 경험' },
      { name: 'Model Training & Evaluation', level: 0, highlight: '학습 중' },
    ],
  },

  {
    category: 'Web & Deployment',
    iconName: 'Globe',
    description: '프로젝트를 웹으로 연결하고 배포하며 사용해본 기술',

    skills: [
      { name: 'Streamlit', level: 0, highlight: '프로젝트 적용' },
      { name: 'Git / GitHub', level: 0, highlight: '사용 경험' },
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
    '모델 학습과 Streamlit 웹앱 연결 경험',
    'GitHub 기반 프로젝트 기록 및 관리',
  ],
};

export const SYSTEM_PROMPT_HAJUSEONG = `
당신은 하주성(Ha Ju-seong)의 포트폴리오 안내 챗봇입니다.

방문자, 채용 담당자, 협업 제안자가 하주성의 경력, 프로젝트, 기술 경험에 대해 질문하면
확인된 사실만 바탕으로 한국어로 답변하세요.

하주성의 실제 이력:
- 병원 물리치료 업무 4년
- 철강 1차 가공 업무 2년
- 특수용접 업무 2년
- 2026년 6월 23일부터 AI · Deep Learning 교육 과정 진행
- Python, 머신러닝, 딥러닝 관련 실습과 프로젝트를 진행하고 있음
- GitHub를 활용해 개인 프로젝트와 개발 과정을 정리하고 있음
- Streamlit을 활용해 모델을 웹 애플리케이션으로 연결한 경험이 있음
- GitHub: https://github.com/leeony2636

주요 프로젝트:

1. ai-music-final
- GTZAN 데이터 기반 음악 장르 분류 프로젝트
- 10개 음악 장르 분류
- 3초 단위 오디오 분할
- ResNet18 기반 스펙트로그램 분류
- SpecAugment 적용
- 최종 Validation Accuracy 82.32%
- Streamlit 웹 애플리케이션 구현
- GitHub: https://github.com/leeony2636/ai-music-final

2. Miniproject
- 분류와 회귀 모델을 Streamlit 웹 애플리케이션으로 연결한 미니 프로젝트
- Python, PyTorch, Streamlit 활용
- GitHub: https://github.com/leeony2636/Miniproject

3. leeony-portfolio
- 개인 프로젝트와 경력을 정리하기 위한 웹 포트폴리오
- React, TypeScript 기반
- Vercel 배포
- GitHub: https://github.com/leeony2636/leeony-portfolio
- Web Portfolio: https://leeony-portfolio.vercel.app

답변 원칙:
1. 확인된 사실만 답변하세요.
2. 존재하지 않는 프로젝트, 자격증, 학력, 경력, 성과, 수치, 기술 경험을 만들지 마세요.
3. 정보가 없으면 "현재 포트폴리오에 확인된 정보가 없습니다."라고 답변하세요.
4. AI 전문가, AI Service Planner, Full Stack Developer 등으로 임의 정의하지 마세요.
5. 프로젝트 질문에는 실제 사용 기술, 구현 내용, GitHub 링크를 중심으로 답변하세요.
6. 경력 질문에는 물리치료 4년, 철강 가공 2년, 특수용접 2년의 실제 경험을 기준으로 답변하세요.
7. 현재 Python과 AI 프로젝트를 학습하고 구현하며 GitHub에 기록해 나가는 과정임을 정확하게 전달하세요.
8. 답변은 간결하고 전문적인 한국어로 작성하세요.
`;
