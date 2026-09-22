# Chaitanya Nawale — Portfolio

[![Vite](https://img.shields.io/badge/Vite-8.x-646CFF?logo=vite&logoColor=white)](https://vitejs.dev/)
[![React](https://img.shields.io/badge/React-19.x-61DAFB?logo=react&logoColor=black)](https://react.dev/)
[![TypeScript](https://img.shields.io/badge/TypeScript-5.x%20%2F%206.x-3178C6?logo=typescript&logoColor=white)](https://www.typescriptlang.org/)
[![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-v4-06B6D4?logo=tailwindcss&logoColor=white)](https://tailwindcss.com/)
[![License](https://img.shields.io/badge/License-MIT-green.svg)](LICENSE)

Personal portfolio website for **Chaitanya Nawale**, Software Engineer and M.Sc. Data Science student at RWTH Aachen University, working at the intersection of **Software Engineering**, **Machine Learning**, and **Agentic AI**.

Live deployment: [cnawale.me](https://cnawale.me/)

---

## ✨ Design & Features

- **Editorial Minimalism**: Clean, warm ivory and sage aesthetic (`#FAF8F5`, `#1A1A1A`, `#5A7A64`) inspired by high-discipline editorial benchmarks like MeisterUp.
- **Dynamic Header & Navigation**: Segmented pill navigation that slides into the sticky blurred navbar once scrolling past the Hero section, equipped with active section scrollspy tracking.
- **Hero Presentation**: Framed portrait, live status indicator, and hand-drawn sketch underline powered by [`rough-notation`](https://roughnotation.com/).
- **Section Dividers**: Subtle, dim horizontal hairlines between sections providing visual structure without clutter.
- **Full-Viewport Contact Experience**: Centered, dedicated contact screen with direct communication channels for Email, LinkedIn, and GitHub.
- **Content-First Architecture**: Strictly separated content layer in `src/data/content.ts` for clean, single-point updates.
- **Speed & Accessibility**: Ultra-fast bundle built with Vite and Tailwind v4 `@theme`, zero layout shifts (CLS), and full support for reduced-motion preferences.

---

## 🛠️ Tech Stack

| Technology | Purpose |
|---|---|
| **React 19** | Modern component-driven UI architecture |
| **TypeScript** | Strict type safety and predictable interfaces |
| **Vite 8** | Next-generation frontend tooling and instant HMR |
| **Tailwind CSS v4** | CSS-first styling using `@theme` in `src/index.css` |
| **rough-notation** | Hand-drawn SVG animated annotations |
| **lucide-react** | Clean, lightweight interface icons |
| **oxlint** | High-performance Rust-based linter |

---

## 📁 Project Structure

```
cnawale-website/
├── public/                      # Static assets (favicons, brand logo, profile image)
├── src/
│   ├── assets/                  # Bundled assets
│   ├── components/              # Core page sections
│   │   ├── Navbar.tsx           # Sticky blurred header with dynamic navigation
│   │   ├── Hero.tsx             # Two-column editorial introduction with CTA
│   │   ├── RoughUnderline.tsx   # Hand-drawn animated underline wrapper
│   │   ├── ExperienceTimeline.tsx # Chronological experience timeline
│   │   ├── ProjectList.tsx      # Curated project cards with tech tags and links
│   │   ├── Skills.tsx           # Skill categories in 2-column grid
│   │   ├── Contact.tsx          # Full-viewport contact screen
│   │   ├── Footer.tsx           # Minimalist footer with brand mark & socials
│   │   └── ui/                  # Reusable UI primitives (SectionHeading, TechTag, SocialIcon)
│   ├── data/
│   │   └── content.ts           # Single source of truth for all portfolio data
│   ├── hooks/
│   │   ├── useScrollSpy.ts      # Active section tracking
│   │   └── useScrollReveal.ts   # Scroll-triggered fade-in reveal animations
│   ├── index.css                # Design tokens, `@theme`, and global styles
│   ├── App.tsx                  # Main layout composer with divide-y dividers
│   └── main.tsx                 # Application mount point
├── index.html                   # HTML shell, metadata, and font declarations
├── vite.config.ts               # Vite configuration with @tailwindcss/vite
└── package.json                 # Project scripts and dependencies
```

---

## 🚀 Getting Started

### Prerequisites

- [Node.js](https://nodejs.org/) (version 18+ recommended)
- `npm` (comes with Node.js)

### Installation

1. Clone the repository:
   ```bash
   git clone https://github.com/Chaitanya-nawale/cnawale-website.git
   cd cnawale-website
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

### Development

Run the development server locally:

```bash
npm run dev
```

Open [http://localhost:5173/](http://localhost:5173/) in your browser.

### Scripts

| Command | Action |
|---|---|
| `npm run dev` | Starts Vite dev server with hot module replacement |
| `npm run build` | Compiles TypeScript and builds production bundle to `dist/` |
| `npm run preview` | Locally serves and previews the production build |
| `npm run lint` | Runs `oxlint` for fast code quality checks |

---

## 📝 Customizing Content

All personal data, links, projects, and work history live in [`src/data/content.ts`](src/data/content.ts):

- **Personal Information**: Edit `personalInfo` (name, tagline, bio, CV URL, email).
- **Experiences**: Update the `experiences` array (education, roles, companies, dates, tech stacks).
- **Projects**: Manage entries in `projects` (titles, descriptions, repo links, live URLs).
- **Skills**: Adjust categories and tech badges in `skillGroups`.
- **Social Links**: Configure active handles in `socialLinks`.

---

## 📄 License

This project is open-source and available under the [MIT License](LICENSE).
