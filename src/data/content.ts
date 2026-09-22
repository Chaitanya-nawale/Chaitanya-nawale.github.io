// ===== Types =====

export interface Experience {
  title: string;
  organization: string;
  period: string;
  description: string;
  technologies: string[];
  type: 'education' | 'work' | 'exchange';
  isCurrent?: boolean;
}

export interface Project {
  id: string;
  title: string;
  category: string;
  description: string;
  technologies: string[];
  url?: string;
  github?: string;
  status?: string;
}

export type SkillLevel = 'expert' | 'proficient' | 'beginner';

export interface Skill {
  name: string;
  level: SkillLevel;
  icon?: string;
}

export interface SkillGroup {
  name: string;
  skills: Skill[];
}

export interface SocialLink {
  platform: string;
  url: string;
  label: string;
}

// ===== Personal Info =====

export const personalInfo = {
  name: 'Chaitanya Nawale',
  title: 'Software Engineer & Data Science Graduate Student',
  tagline: 'Engineering AI Beyond the Hype.',
  location: 'Aachen, Germany · RWTH Aachen University',
  email: 'chaitanya6.nawale@gmail.com',
  cvUrl:
    'https://drive.google.com/file/d/1Cbkv5ttDiRC9i65lhy3SrSg0wRiwbgrX/view?usp=sharing',
};

// ===== Social Links =====

export const socialLinks: SocialLink[] = [
  {
    platform: 'GitHub',
    url: 'https://github.com/Chaitanya-nawale',
    label: 'GitHub profile',
  },
  {
    platform: 'LinkedIn',
    url: 'https://linkedin.com/in/chaitanyanawale',
    label: 'LinkedIn profile',
  },
  {
    platform: 'Email',
    url: 'mailto:chaitanya6.nawale@gmail.com',
    label: 'Send email',
  },
];

// ===== Experience =====

export const experiences: Experience[] = [
  {
    title: 'M.Sc. Data Science',
    organization: 'RWTH Aachen University',
    period: 'Oct 2024 – Present',
    description:
      'Specialized in Machine Learning, Deep Learning, and Agentic AI, with hands-on experience designing and deploying data-driven solutions.',
    technologies: ['Python', 'FastAPI', 'PyTorch', 'Deep Learning', 'LLMs', 'RAG'],
    type: 'education',
    isCurrent: true,
  },
  {
    title: 'Erasmus Exchange in Computer Science',
    organization: 'EPFL — École Polytechnique Fédérale de Lausanne',
    period: 'Sep 2025 – Jan 2026',
    description:
      'Built strong mathematical foundations in modern AI, with experience designing, building, and iterating an AI product using user feedback.',
    technologies: ['AI Product Management', 'GenAI', 'Agentic AI', 'n8n', 'Supabase'],
    type: 'exchange',
  },
  {
    title: 'Software Engineer',
    organization: 'Interactive Brokers Software Services (India) Private Limited',
    period: 'Jul 2021 – Sep 2024',
    description:
      'Developed and optimized scalable backend systems for financial applications, focusing on performance, reliability, and automation.',
    technologies: [
      'Java',
      'Spring Boot',
      'REST APIs',
      'Oracle SQL',
      'Git',
      'Docker',
      'JavaScript',
      'HTML',
      'CSS',
      'Bash',
    ],
    type: 'work',
  },
  {
    title: 'B.E. Computer Engineering',
    organization: 'University of Pune',
    period: 'Aug 2017 – May 2021',
    description:
      'Built a strong foundation in programming, data structures and algorithms, databases, object-oriented programming, and software engineering.',
    technologies: ['C', 'C++', 'DSA', 'DBMS', 'OOP', 'Problem Solving'],
    type: 'education',
  },
];

// ===== Projects =====

export const projects: Project[] = [
  {
    id: '01',
    title: 'XpertsAI',
    category: 'AI Platform',
    description:
      'Built an AI platform enabling experts to share and monetize their niche knowledge at scale.',
    technologies: ['FastAPI', 'n8n', 'Supabase', 'vLLM'],
    status: 'Completed',
  },
  {
    id: '02',
    title: 'Chasing Birds',
    category: 'Deep Learning Lab',
    description:
      'Developed a multimodal diffusion system that generates bird audio from images or text.',
    technologies: ['PyTorch', 'Deep Learning', 'Data Preprocessing'],
  },
  {
    id: '03',
    title: 'SnitchAI',
    category: 'Desktop Application',
    description:
      'Engineered an AI platform delivering financial insights and detecting anomalous transactions.',
    technologies: ['Oracle', 'WayFlowCore', 'Ollama', 'Streamlit'],
  },
];

// ===== Skills =====

export const skillGroups: SkillGroup[] = [
  {
    name: 'Programming Languages',
    skills: [
      { name: 'Python', level: 'expert', icon: 'skill-icons:python-dark' },
      { name: 'Java', level: 'expert', icon: 'skill-icons:java-dark' },
      { name: 'TypeScript', level: 'expert', icon: 'skill-icons:typescript' },
      { name: 'C++', level: 'proficient', icon: 'skill-icons:cpp' },
      { name: 'JavaScript', level: 'proficient', icon: 'skill-icons:javascript' },
    ],
  },
  {
    name: 'Backend & Database Systems',
    skills: [
      { name: 'FastAPI', level: 'expert', icon: 'skill-icons:fastapi' },
      { name: 'PostgreSQL', level: 'expert', icon: 'skill-icons:postgresql-dark' },
      { name: 'pgvector', level: 'proficient', icon: 'skill-icons:postgresql-dark' },
      { name: 'MongoDB', level: 'proficient', icon: 'skill-icons:mongodb' },
      { name: 'Spring', level: 'proficient', icon: 'skill-icons:spring-dark' },
    ],
  },
  {
    name: 'AI & Machine Learning',
    skills: [
      { name: 'PyTorch', level: 'expert', icon: 'skill-icons:pytorch-dark' },
      { name: 'LangGraph', level: 'expert', icon: 'simple-icons:langgraph' },
      { name: 'LangChain', level: 'expert', icon: 'simple-icons:langchain' },
      { name: 'Transformers', level: 'proficient', icon: 'simple-icons:huggingface' },
      { name: 'Scikit-Learn', level: 'proficient', icon: 'skill-icons:scikitlearn-dark' },
    ],
  },
  {
    name: 'Tools and Infrastructure',
    skills: [
      { name: 'Git', level: 'expert', icon: 'skill-icons:git' },
      { name: 'Docker', level: 'expert', icon: 'skill-icons:docker' },
      { name: 'Claude Code', level: 'expert', icon: 'simple-icons:claudecode' },
      { name: 'Kubernetes', level: 'proficient', icon: 'skill-icons:kubernetes' },
      { name: 'AWS', level: 'proficient', icon: 'skill-icons:aws-dark' },
    ],
  },
  {
    name: 'Frontend Engineering',
    skills: [
      { name: 'React', level: 'proficient', icon: 'skill-icons:react-dark' },
      { name: 'HTML', level: 'expert', icon: 'skill-icons:html' },
      { name: 'CSS', level: 'proficient', icon: 'skill-icons:css' },
      { name: 'Tailwind CSS', level: 'beginner', icon: 'skill-icons:tailwindcss-dark' },
      { name: 'TanStack', level: 'beginner', icon: 'simple-icons:tanstack' },
    ],
  },
];
