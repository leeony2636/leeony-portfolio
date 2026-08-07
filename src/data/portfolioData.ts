import { Project, TimelineItem, SkillCategory, SkillProofMetric } from '../types';

export const PERSONAL_INFO = {
  name: '하주성',
  englishName: 'Ha Ju-seong',
  title: 'AI Service Planner & Builder',
  subtitle: '현장 감각을 이제는 AI로 ! 변수 없는 AI같은 인재',
  badge: '⚡ THE PRACTICAL BUILDER',
  motto: '"책상 위의 완벽한 알고리즘보다 현장의 문제를 기어코 해결하는 정직한 실행력이 더 가치 있습니다."',
  email: 'leeony@naver.com',
  github: 'https://github.com/haju-seong-builder',
  blog: 'https://velog.io/@haju-seong',
  location: '대한민국 서울 (Seoul, S. Korea)',
  availableFor: 'AI 서비스 기획, LLM 에이전트 구축, B2B AI 솔루션 기획 & 빌딩, 풀스택 MVP 제작',
  coreValues: [
    {
      icon: '⚡',
      title: '부딪히면 해결해버리는 능력',
      desc: '문제가 발생하면 피하지 않고 현장 및 코드 수준에서 원인을 즉각 파악하고 해결책을 찾아냅니다.',
    },
    {
      icon: '💼',
      title: '업종을 가리지 않는 다양한 경험',
      desc: '다양한 산업 현장 실무 경험을 바탕으로, 비IT 현장 사용자의 니즈를 정확히 반영하는 기획을 합니다.',
    },
    {
      icon: '🏅',
      title: '성실과 실적으로 보답하는 인재',
      desc: '말뿐인 기획에 그치지 않고 작동하는 AI 코드와 명확한 수치 성과(KPI)로 결과물을 증명합니다.',
    },
  ],
};

export const PROJECTS: Project[] = [
  {
    id: 'ai-music-final',
    title: 'ai-music-final',
    subTitle: 'AI 음악 장르 예측 웹 애플리케이션',
    description: 'GTZAN 음악 데이터를 활용해 음악 장르를 분류하고 Streamlit에서 예측 결과를 확인할 수 있도록 구현한 프로젝트',
    fullDescription:
      '음악 장르 분류 모델을 단계적으로 개선한 프로젝트입니다. 기본 머신러닝 모델부터 ResNet18 기반 스펙트로그램 분류까지 확장했으며, 최종적으로 SpecAugment를 적용해 검증 정확도 82.32%를 기록했습니다.',
    category: 'AI / Deep Learning',
    techStack: ['Python', 'PyTorch', 'ResNet18', 'Streamlit', 'Librosa', 'Scikit-learn'],
    stars: 0,
    forks: 0,
    githubUrl: 'https://github.com/leeony2636/ai-music-final',
    liveUrl: '',
    metrics: [
      { label: 'Validation Accuracy', value: '82.32%' },
      { label: '분류 장르', value: '10 Genres' },
      { label: '오디오 분할', value: '3 sec' }
    ],
    keyFeatures: [
      'WAV 파일 업로드 기반 음악 장르 예측',
      'ResNet18 기반 Mel Spectrogram 이미지 분류',
      'SpecAugment 적용을 통한 모델 성능 개선',
      '예측 장르별 확률 시각화',
      'Streamlit 기반 웹 인터페이스 구현'
    ],
    architectureSummary:
      'WAV Upload → 3초 구간 분할 → Mel Spectrogram → ResNet18 → 장르 확률 평균 → Streamlit 결과 출력',
    fieldProblemSolved:
      '음원 파일을 업로드하면 특징 추출과 모델 추론 과정을 거쳐 음악 장르와 확률을 웹에서 확인할 수 있도록 구현했습니다.',
    featured: true
  }
];

export const TIMELINE: TimelineItem[] = [
  {
    period: '2025.01 ~ 현재',
    role: 'AI Service Planner & Builder',
    company: '독립 프랙티셔너 & 프로젝트 리드',
    tag: 'AI 혁신 & 실행',
    description: 'LLM(Gemini API 등)을 기반으로 한 현장 밀착형 AI 서비스 기획 및 프론트엔드/백엔드 MVP 직접 구축.',
    achievements: [
      '수작업 현장 지시서 자동화 AI 서비스 (ai-field-ops-agent) 기획 및 개발 ➔ 작업시간 85% 절감',
      '실시간 VOC 감정분석 및 CS 추천 시스템 기획 ➔ 응대 대기시간 45% 단축',
      'Gemini API 기반 멀티턴 에이전트 및 Structured Output 가드레일 설계 전문성 확보',
      '아이디어 단계부터 48시간 내 작동하는 AI 프로토타입 전개 역량 보유'
    ],
  },
  {
    period: '2023.03 ~ 2024.12',
    role: '현장 프로세스 혁신 & 데이터 기획',
    company: '서비스 & 물류 현장 파트',
    tag: '현장 실무 & 프로세스',
    description: '다양한 현장 업무의 병목 구간을 발굴하고 비정형 업무 절차를 데이터 중심 정형 프로세스로 재설계.',
    achievements: [
      '현장 수기 서식의 디지털화(OCR 파이프라인) 도입 ➔ 데이터 입력 오탈자 0.3% 미만 달성',
      '비IT 부서 작업자를 위한 쉬운 UI/UX 가이드 작성 및 현장 교육',
      '돌발 공정 변수 발생 시 즉각 대처하는 실전 문제 해결 능력 체득',
      '현장 사용자 요구사항 100+ 건 수집 및 기획서 반영'
    ],
  },
  {
    period: '2021.06 ~ 2023.02',
    role: '서비스 기획 & 운영 지원',
    company: '고객 경험 및 사업 운영팀',
    tag: '서비스 기획 & CS',
    description: '사용자 동선 분석, 고객 서비스 매뉴얼 작성, 서비스 개편에 따른 사용자 반응 모니터링.',
    achievements: [
      '고객 접점 채널 운영 효율화 ➔ 고객 만족도 지수(CSAT) 18% 향상',
      '운영 매뉴얼 및 QA 체크리스트 작성으로 서비스 안정성 확보',
      '다양한 대내외 이해관계자와의 원활한 소통 및 협업 주도'
    ],
  },
  {
    period: '2019.03 ~ 2021.05',
    role: '다양한 산업 현장 실무 및 정직한 실행',
    company: '다양한 분야 실무 현장',
    tag: '현장 경험 단련',
    description: '업종을 가리지 않고 현장에서 사람들과 호흡하며 성실함과 단단한 체력, 부딪히는 실행력을 증명함.',
    achievements: [
      '책상 위 이론에 머물지 않고 실제 현장의 작동 원리와 사람들의 니즈를 직접 경험',
      '"변수 없이 성실하고 막힘없이 문제를 풀어내는 인재"라는 신뢰 구축'
    ],
  },
];

export const SKILL_CATEGORIES: SkillCategory[] = [
  {
    category: 'AI Service Planning & Architecture',
    iconName: 'BrainCircuit',
    description: '현장의 문제를 LLM 서비스로 전환하는 종합 기획 역량',
    skills: [
      { name: 'LLM Service Concept Design (LLM 서비스 기획)', level: 95, highlight: '핵심 역량' },
      { name: 'Prompt Engineering & Guardrails (프롬프트 설계)', level: 95, highlight: '핵심 역량' },
      { name: 'Structured Output & JSON Schema Definition', level: 92 },
      { name: 'Multi-Agent Workflow Orchestration', level: 88 },
      { name: 'User Scenario & PRD Writing (기획서 작성)', level: 94 },
    ],
  },
  {
    category: 'Practical Full-Stack Building',
    iconName: 'Code',
    description: '기획한 아이디어를 48시간 내 작동하는 코드로 구현하는 빌딩 능력',
    skills: [
      { name: 'React 19 / TypeScript / Vite', level: 90, highlight: '핵심 역량' },
      { name: 'Node.js / Express Server Development', level: 88 },
      { name: 'Gemini API (@google/genai SDK)', level: 96, highlight: '전문' },
      { name: 'Tailwind CSS & Modern UI Components', level: 92 },
      { name: 'RESTful API Proxy & Security Standards', level: 88 },
    ],
  },
  {
    category: 'Data & Process Automation',
    iconName: 'Database',
    description: '현장 비정형 데이터를 가치 있는 정형 데이터로 정제하는 파이프라인',
    skills: [
      { name: 'Python / Multimodal OCR Processing', level: 85 },
      { name: 'SQL & Data Schema Modeling', level: 84 },
      { name: 'Automation Workflows & Integration', level: 90 },
      { name: 'Recharts & Data Visualization', level: 87 },
    ],
  },
  {
    category: 'Field Leadership & Execution',
    iconName: 'Zap',
    description: '어떤 현장 변수에도 굴하지 않는 솔루션 지향 마인드세트',
    skills: [
      { name: 'Field Problem Solving (현장 문제 즉시 해결)', level: 98, highlight: '최상' },
      { name: 'Cross-functional Communication (이해관계자 소통)', level: 95 },
      { name: 'Agile MVP Iteration (빠른 피드백 반영)', level: 92 },
      { name: 'Sincerity & Accountability (성실과 책임감)', level: 100, highlight: '신조' },
    ],
  },
];

export const SKILL_PROOF_METRICS: SkillProofMetric[] = [
  {
    title: '현장 지시서 자동화',
    value: '85% 시간 절감',
    description: '복잡한 엑셀 서식을 3초 AI 자동화로 대체하여 업무 속도 극대화',
    badge: '⚡ 실행력',
  },
  {
    title: 'B2B 제안서 수주율',
    value: '+35% 향상',
    description: '영업 미팅 당일 1분 제안서 전달 시스템으로 신속한 고객 확보',
    badge: '🏆 실적',
  },
  {
    title: '현장 만족도 점수',
    value: '4.9 / 5.0',
    description: '비IT 직무 작업자들도 누구나 1분만에 익히는 직관적 UX 설계',
    badge: '🎯 현장감각',
  },
  {
    title: '프로젝트 기한 엄수',
    value: '100% 달성',
    description: '어떠한 돌발 변수에도 약속된 기한 내 완성품 출시',
    badge: '🏅 신뢰성',
  },
];

export const RESUME_DATA = {
  name: '하주성',
  englishName: 'Ha Ju-seong',
  contact: {
    email: 'leeony@naver.com',
    phone: '010-XXXX-XXXX (문의 시 공개)',
    github: 'https://github.com/haju-seong-builder',
    location: '서울특별시',
  },
  summary:
    '현장의 문제점을 피부로 느끼고, 이를 최신 AI(LLM)와 풀스택 기술로 직접 기획하고 해결하는 AI Service Planner & Builder입니다. 기획서에 머무르는 아이디어가 아닌, 실제로 현장 사용자의 손에서 3초만에 작동하고 가치를 만들어내는 서비스를 만듭니다. 성실함과 어떤 변수도 뚫고 나가는 실행력으로 증명합니다.',
  education: [
    {
      degree: '서비스 기획 및 AI 어플리케이션 빌딩 전문 과정 이수',
      period: '2024',
      details: 'LLM 프롬프트 엔지니어링, 에이전트 시스템, React/TypeScript 기반 MVP 구축',
    },
    {
      degree: '학사 및 실무 전문 과정',
      period: '2015 ~ 2021',
      details: '현장 프로세스 관리 및 데이터 분석 실무 습득',
    },
  ],
  certifications: [
    'AI Service Engineering & Prompt Specialization',
    'SQL Data Analytics Practitioner',
    'Agile Service Planning Certification',
  ],
  strengths: [
    '현장 중심의 명확한 문제 정의 및 요구사항 도출',
    'Gemini API 등 최신 LLM을 결합한 48시간 MVP 자체 개발 능력',
    '비개발자/현장 작업자 대상 친화적 UX 설계',
    '약속된 일정과 요구사항을 반드시 사수하는 책임감',
  ],
};

export const SYSTEM_PROMPT_HAJUSEONG = `
당신은 '하주성(Ha Ju-seong)'의 official AI 분신 챗봇입니다.
방문자, 채용 담당자, 협업 제안자가 하주성에 대해 궁금한 점을 질문하면, 친절하고 전문적이며 자신감 있는 톤으로 한국어로 답변하세요.

하주성의 프로필 데이터:
- 이공계/현장 감각과 AI 기술을 결합한 "AI Service Planner & Builder"입니다.
- 신조: "책상 위의 완벽한 알고리즘보다 현장의 문제를 기어코 해결하는 정직한 실행력이 더 가치 있습니다."
- 핵심 강점:
  1. 부딪히면 해결해버리는 압도적 실행력
  2. 업종을 가리지 않는 풍부한 현장 감각
  3. 성실과 실적으로 보답하는 신뢰감
- 주요 프로젝트:
  - ai-field-ops-agent: 현장 지시서 85% 시간 절감 AI 에이전트
  - smart-voc-analyzer: 실시간 고객 VOC 감정 분석 및 대응 시스템
  - field-to-data-pipeline: 비정형 손글씨/영수증 OCR SQL 자동 적재
  - auto-proposal-generator: 1분 B2B 제안서 및 견적 자동 생성기
- 기술 스택: React 19, TypeScript, Node.js, Express, Gemini API (@google/genai), Tailwind CSS, Python, SQL
- 연락처: leeony@naver.com

답변 지침:
1. 답변은 정중하면서도 당당하고 솔직한 어조(해요체)로 작성하세요.
2. 하주성의 실행력, 현장 감각, AI 빌딩 능력을 잘 부각시켜주세요.
3. 질문자가 프로젝트나 이력서에 대해 물어보면 관련 구체적 수치(예: 85% 시간 절감, 수주율 35% 상승 등)를 함께 언급하세요.
4. 필요시 협업 제안이나 문의 이메일(leeony@naver.com)로 연락하도록 안내하세요.
`;
