import type { Experience } from './types';

export const experiences: Experience[] = [
  {
    title: 'M.Sc. Data Science',
    organization: 'RWTH Aachen University',
    location: 'Aachen, Germany',
    roleType: "Master's Degree",
    period: 'Oct 2024 – Present',
    description:
      'Specializing in Deep Learning, Large Language Models, and Agentic AI workflows, designing and deploying robust data-driven solutions.',
    technologies: ['Python', 'Machine Learning', 'Deep Learning', 'NLP', 'Computer Vision', 'Agentic AI'],
    type: 'education',
    isCurrent: true,
  },
  {
    title: 'Erasmus Exchange in Computer Science',
    organization: 'EPFL — École Polytechnique Fédérale de Lausanne',
    location: 'Lausanne, Switzerland',
    roleType: 'Academic Exchange',
    period: 'Sep 2025 – Jan 2026',
    description:
      'Developed strong mathematical foundations in modern AI, with hands-on experience designing and improving AI products.',
    technologies: ['AI Product Management', 'Generative AI', 'RAG', 'Agentic AI', 'n8n', 'Supabase'],
    type: 'exchange',
  },
  {
    title: 'Software Engineer',
    organization: 'Interactive Brokers Software Services (India) Private Limited',
    location: 'Mumbai, India',
    roleType: 'Full-time',
    period: 'July 2021 – July 2024',
    description:
      'Engineered software services in Java and Spring Boot, automating transaction reconciliation and core workflows across Treasury and IPO systems.',
    technologies: [
      'Java',
      'Spring Boot',
      'REST APIs',
      'Oracle SQL',
      'Docker',
      'Git',
      'Bash',
    ],
    type: 'work',
  },
  {
    title: 'B.E. Computer Engineering',
    organization: 'University of Pune',
    location: 'Pune, India',
    roleType: "Bachelor's Degree",
    period: 'Aug 2017 – May 2021',
    description:
      'Built a solid foundation in computer engineering and systems, complemented by undergraduate research in computer vision and single-image dehazing resulting in three peer-reviewed publications.',
    publications: [
      {
        title:
          'Weighted Fusion of Pre‑processing Techniques for Neural Network‑based Image Haze Removal',
        authors:
          'Sudeep D. Thepade, Kamal Shah, Satpalsingh Rajput, Patil A.A, Navale C.M, Taralkar C.D, Suryavanshi M.V',
        venue: 'International Research Journal of Multidisciplinary Technovation (IRJMT)',
        year: '2024',
        doi: '10.54392/irjmt2421',
        url: 'https://doi.org/10.54392/irjmt2421',
      },
      {
        title:
          'Single Image Dehazing using a Weighted Fusion of Dark and Bright Channel Prior with Gamma Correction',
        authors:
          'Sudeep D. Thepade, Chaitanya M. Nawale, Mehul V. Suryavanshi, Chinmayee D. Taralkar, Ajinkya A. Patil',
        venue: '2nd International Conference for Emerging Technology (INCET)',
        year: '2021',
        doi: '10.1109/incet51464.2021.9456422',
        url: 'https://doi.org/10.1109/incet51464.2021.9456422',
      },
      {
        title:
          'Appraise of Deep Learning and Image Processing based Single Image Dehazing Algorithm',
        authors:
          'Sudeep D. Thepade, Ajinkya A. Patil, Chaitanya M. Nawale, Chinmayee D. Taralkar, Mehul V. Suryavanshi',
        venue: '2nd International Conference for Emerging Technology (INCET)',
        year: '2021',
        doi: '10.1109/incet51464.2021.9456139',
        url: 'https://doi.org/10.1109/incet51464.2021.9456139',
      },
    ],
    technologies: [
      'Computer Vision',
      'Deep Learning',
      'Image Dehazing',
      'Python',
      'C++',
      'DSA',
      'DBMS',
    ],
    type: 'education',
  },
];
