import type { PersonalInfo, SocialLink } from './types';

export const personalInfo: PersonalInfo = {
  name: 'Chaitanya Nawale',
  title: 'Software Engineer & Data Science Graduate Student',
  tagline: 'Engineering AI Beyond the Hype.',
  location: 'Aachen, Germany · RWTH Aachen University',
  email: 'chaitanya6.nawale@gmail.com',
  cvUrl:
    'https://drive.google.com/file/d/1Cbkv5ttDiRC9i65lhy3SrSg0wRiwbgrX/view?usp=sharing',
};

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
