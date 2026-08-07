export type NavTab = 'about' | 'projects' | 'timeline' | 'skills' | 'contact';

export interface Project {
  id: string;
  title: string;
  subTitle: string;
  description: string;
  fullDescription: string;
  category: 'AI / Deep Learning' | 'Data / Streamlit' | 'Learning & Practice';
  techStack: string[];
  stars: number;
  forks: number;
  githubUrl: string;
  liveUrl?: string;
  metrics: { label: string; value: string }[];
  keyFeatures: string[];
  architectureSummary: string;
  fieldProblemSolved: string;
  featured?: boolean;
}

export interface TimelineItem {
  period: string;
  role: string;
  company: string;
  tag: string;
  description: string;
  achievements: string[];
}

export interface SkillCategory {
  category: string;
  iconName: string;
  description: string;
  skills: { name: string; level: number; highlight?: string }[];
}

export interface SkillProofMetric {
  title: string;
  value: string;
  description: string;
  badge: string;
}

export interface ChatMessage {
  id: string;
  sender: 'user' | 'assistant';
  text: string;
  timestamp: string;
  isError?: boolean;
}

export interface ContactFormData {
  name: string;
  email: string;
  company: string;
  category: string;
  message: string;
}
