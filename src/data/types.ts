export interface Publication {
  title: string;
  authors: string;
  venue: string;
  year: string;
  doi: string;
  url: string;
}

export interface Experience {
  title: string;
  organization: string;
  period: string;
  location?: string;
  roleType?: string;
  description: string;
  highlights?: string[];
  technologies: string[];
  publications?: Publication[];
  type: 'education' | 'work' | 'exchange';
  isCurrent?: boolean;
}

export interface Project {
  title: string;
  category: string;
  description: string;
  images: string[];
  tech: string[];
  platforms: string[];
  link: string;
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

export interface PersonalInfo {
  name: string;
  title: string;
  tagline: string;
  location: string;
  email: string;
  cvUrl: string;
}
