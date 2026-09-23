import { useState, useEffect } from 'react';
import { resolveAssetImage } from '../utils/images';
import type { Project } from '../data/types';

export type ProjectItem = Project;

interface ProjectCardProps {
  project: Project;
}

function PlatformIcon({ platform }: { platform: string }) {
  const p = platform.toLowerCase();

  // Mobile / Phone / Smartphone / iOS / Android
  if (p === 'phone' || p === 'mobile' || p === 'cellphone' || p === 'ios' || p === 'android') {
    return (
      <svg viewBox="0 0 24 24" className="w-4 h-4" fill="currentColor" aria-label="Mobile">
        <path d="M17 19H7V5h10m0-4H7c-1.1 0-2 .9-2 2v18c0 1.1.9 2 2 2h10c1.1 0 2-.9 2-2V3c0-1.1-.9-2-2-2z" />
      </svg>
    );
  }

  // Web / Website
  if (p === 'web' || p === 'website') {
    return (
      <svg viewBox="0 0 24 24" className="w-4 h-4" fill="currentColor" aria-label="Web">
        <path d="M16.36 14c.08-.66.14-1.32.14-2s-.06-1.34-.14-2h3.38c.16.64.26 1.31.26 2s-.1 1.36-.26 2m-5.15 5.56c.6-1.11 1.06-2.31 1.38-3.56h2.95a8.03 8.03 0 0 1-4.33 3.56M14.34 14H9.66c-.1-.66-.16-1.32-.16-2s.06-1.35.16-2h4.68c.09.65.16 1.32.16 2s-.07 1.34-.16 2M12 19.96c-.83-1.2-1.5-2.53-1.91-3.96h3.82c-.41 1.43-1.08 2.76-1.91 3.96M8 8H5.08A7.92 7.92 0 0 1 9.4 4.44C8.8 5.55 8.35 6.75 8 8m-2.92 8H8c.35 1.25.8 2.45 1.4 3.56A8 8 0 0 1 5.08 16m-.82-2C4.1 13.36 4 12.69 4 12s.1-1.36.26-2h3.38c-.08.66-.14 1.32-.14 2s.06 1.34.14 2M12 4.03c.83 1.2 1.5 2.54 1.91 3.97h-3.82c.41-1.43 1.08-2.77 1.91-3.97M18.92 8h-2.95a15.7 15.7 0 0 0-1.38-3.56c1.84.63 3.37 1.9 4.33 3.56M12 2C6.47 2 2 6.5 2 12a10 10 0 0 0 10 10a10 10 0 0 0 10-10A10 10 0 0 0 12 2" />
      </svg>
    );
  }

  // Desktop Application
  if (p === 'application' || p === 'desktop' || p === 'app') {
    return (
      <svg viewBox="0 0 24 24" className="w-4 h-4" fill="currentColor" aria-label="Application">
        <path d="M21 2H3c-1.1 0-2 .9-2 2v16c0 1.1.9 2 2 2h18c1.1 0 2-.9 2-2V4c0-1.1-.9-2-2-2m0 5H3V4h18z" />
      </svg>
    );
  }

  // Tablet
  if (p === 'tablet') {
    return (
      <svg viewBox="0 0 24 24" className="w-4 h-4" fill="currentColor" aria-label="Tablet">
        <path d="M19 18H5V6h14m0-4H5c-1.1 0-2 .9-2 2v16c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V4c0-1.1-.9-2-2-2z" />
      </svg>
    );
  }

  // Generic fallback
  return (
    <svg viewBox="0 0 24 24" className="w-4 h-4" fill="currentColor" aria-label={platform}>
      <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm1 17.93c-3.95-.49-7-3.85-7-7.93 0-.62.08-1.21.21-1.79L9 15v1c0 1.1.9 2 2 2v1.93zm6.9-2.54c-.26-.81-1-1.39-1.9-1.39h-1v-3c0-.55-.45-1-1-1H8v-2h2c.55 0 1-.45 1-1V7h2c1.1 0 2-.9 2-2v-.41c2.93 1.19 5 4.06 5 7.41 0 2.08-.8 3.97-2.1 5.39z" />
    </svg>
  );
}

export function ProjectCard({ project }: ProjectCardProps) {
  const [currentIndex, setCurrentIndex] = useState(0);

  // Map image filenames to resolved asset URLs
  const validImages = project.images
    .map((img) => resolveAssetImage(img))
    .filter((src): src is string => Boolean(src));

  // Automatic slideshow if multiple images exist (3500ms cycle)
  useEffect(() => {
    if (validImages.length <= 1) return;

    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % validImages.length);
    }, 3500);

    return () => clearInterval(interval);
  }, [validImages.length]);

  return (
    <div className="project-card group relative bg-accent/5 border border-accent/10 rounded-2xl overflow-hidden hover:border-accent/40 transition-all duration-500 flex flex-col h-full w-full">
      {/* Media Window */}
      <div className="aspect-video overflow-hidden relative bg-bg/50">
        <div className="absolute inset-0 bg-accent/10 group-hover:bg-transparent transition-colors duration-300 z-10 pointer-events-none" />

        <div className="w-full h-full relative">
          {validImages.length > 0 ? (
            validImages.map((src, index) => (
              <img
                key={src}
                src={src}
                alt={project.title}
                loading="lazy"
                decoding="async"
                className={`absolute inset-0 w-full h-full object-cover transition-all duration-1000 group-hover:scale-110 ${
                  index === currentIndex ? 'opacity-100 z-0' : 'opacity-0 z-[-1]'
                }`}
              />
            ))
          ) : (
            <div className="w-full h-full flex items-center justify-center bg-bg-secondary text-text-tertiary">
              <span className="text-sm font-mono">{project.title}</span>
            </div>
          )}
        </div>

        {/* Platform Badges */}
        {project.platforms && project.platforms.length > 0 && (
          <div className="absolute top-3 right-3 flex gap-2 z-20">
            {project.platforms.map((p) => (
              <div
                key={p}
                className="p-1.5 bg-bg/85 backdrop-blur-md rounded-lg border border-accent/10 text-text shadow-xs"
                title={p}
              >
                <PlatformIcon platform={p} />
              </div>
            ))}
          </div>
        )}
      </div>

      {/* Card Info */}
      <div className="p-5 sm:p-6 space-y-4 flex-1 flex flex-col justify-between">
        <div>
          <div className="flex justify-between items-start gap-4">
            <div>
              <span className="text-accent text-[10px] uppercase tracking-widest font-bold">
                {project.category}
              </span>
              <h3 className="text-lg sm:text-xl font-heading font-bold text-text mt-1">
                {project.title}
              </h3>
            </div>
            <a
              href={project.link}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={`Open ${project.title} repository or project`}
              className="text-accent/75 hover:text-accent transition-colors shrink-0 p-2 -m-2 sm:p-1 sm:-m-1"
            >
              <svg viewBox="0 0 24 24" className="w-5 h-5 sm:w-6 sm:h-6" fill="currentColor" aria-hidden="true">
                <path d="M14 3v2h3.59l-9.83 9.83l1.41 1.41L19 6.41V10h2V3m-2 16H5V5h7V3H5a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-7h-2z" />
              </svg>
            </a>
          </div>

          <p className="text-text-secondary text-xs sm:text-sm font-body line-clamp-3 mt-2.5 sm:mt-3 leading-relaxed">
            {project.description}
          </p>
        </div>

        {/* Tech Badges */}
        <div className="flex flex-wrap gap-1.5 sm:gap-2 pt-2">
          {project.tech.map((t) => (
            <span
              key={t}
              className="rounded-md text-[10px] px-2 sm:px-3 py-1 bg-accent/5 border border-accent/10 text-accent/80 group-hover:border-accent/40 group-hover:text-accent transition-colors"
            >
              {t}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
}
