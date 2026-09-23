import type { SkillGroup } from './types';

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
