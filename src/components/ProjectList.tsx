import { ArrowUpRight } from 'lucide-react';
import { projects } from '../data/content';
import { TechTag } from './ui/TechTag';
import { SectionHeading } from './ui/SectionHeading';
import { useScrollReveal } from '../hooks/useScrollReveal';

function GithubSmallIcon({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" className={className} aria-hidden="true">
      <path d="M12 2C6.48 2 2 6.58 2 12.25c0 4.54 2.86 8.37 6.84 9.73.5.1.68-.22.68-.49 0-.24-.01-1.03-.01-1.88-2.78.62-3.37-1.36-3.37-1.36-.45-1.18-1.11-1.49-1.11-1.49-.91-.64.07-.63.07-.63 1.01.07 1.55 1.06 1.55 1.06.9 1.56 2.36 1.11 2.93.85.09-.66.35-1.11.64-1.37-2.22-.25-4.56-1.14-4.56-5.07 0-1.12.39-2.04 1.03-2.76-.1-.26-.45-1.29.1-2.7 0 0 .84-.27 2.75 1.02A9.56 9.56 0 0 1 12 6.8c.85.004 1.71.12 2.5.35 1.91-1.3 2.75-1.02 2.75-1.02.55 1.41.2 2.44.1 2.7.64.72 1.03 1.64 1.03 2.76 0 3.94-2.35 4.82-4.58 5.07.36.31.68.94.68 1.9 0 1.37-.01 2.48-.01 2.81 0 .27.18.59.69.49A10.01 10.01 0 0 0 22 12.25C22 6.58 17.52 2 12 2Z" />
    </svg>
  );
}

export function ProjectList() {
  const revealRef = useScrollReveal();

  return (
    <section
      id="projects"
      className="pt-8 sm:pt-10 pb-20 md:pb-28 px-6 scroll-mt-16 md:scroll-mt-18"
    >
      <div ref={revealRef} className="max-w-2xl mx-auto">
        <div className="reveal">
          <SectionHeading subtitle="Selected work across AI, software engineering, and product">
            Projects
          </SectionHeading>
        </div>

        <div className="space-y-0">
          {projects.map((project) => (
            <div
              key={project.id}
              className="reveal group relative border-b border-border last:border-b-0 py-8 first:pt-0 transition-all duration-300 hover:pl-2"
            >
              {/* Accent bar on hover */}
              <div className="absolute left-0 top-8 bottom-8 w-0.5 bg-accent scale-y-0 group-hover:scale-y-100 transition-transform duration-300 origin-top" />

              {/* Number + Category */}
              <div className="flex items-center gap-3 mb-3">
                <span className="font-mono text-sm text-accent/50 font-medium">
                  {project.id}
                </span>
                <span className="font-mono text-[10px] uppercase tracking-[0.15em] text-text-tertiary">
                  {project.category}
                </span>
                {project.status && (
                  <span className="font-mono text-[10px] uppercase tracking-[0.15em] text-accent/70 bg-accent/8 px-2 py-0.5 rounded-full">
                    {project.status}
                  </span>
                )}
              </div>

              {/* Title */}
              <h3 className="text-xl font-semibold text-text group-hover:text-accent transition-colors duration-200">
                {project.title}
              </h3>

              {/* Description */}
              <p className="mt-2 text-sm text-text-secondary leading-relaxed">
                {project.description}
              </p>

              {/* Technologies */}
              <div className="mt-4 flex flex-wrap gap-1.5">
                {project.technologies.map((tech) => (
                  <TechTag key={tech}>{tech}</TechTag>
                ))}
              </div>

              {/* Links */}
              {(project.url || project.github) && (
                <div className="mt-4 flex items-center gap-4">
                  {project.url && (
                    <a
                      href={project.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="group/link inline-flex items-center gap-1.5 text-sm text-accent link-underline"
                    >
                      View Project
                      <ArrowUpRight className="w-3.5 h-3.5 transition-transform group-hover/link:-translate-y-0.5 group-hover/link:translate-x-0.5" />
                    </a>
                  )}
                  {project.github && (
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="group/link inline-flex items-center gap-1.5 text-sm text-text-secondary hover:text-accent transition-colors"
                    >
                      <GithubSmallIcon className="w-3.5 h-3.5" />
                      Source
                    </a>
                  )}
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
