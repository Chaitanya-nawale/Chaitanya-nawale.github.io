import { experiences } from '../data/content';
import { SectionHeading } from './ui/SectionHeading';
import { TechTag } from './ui/TechTag';
import { useScrollReveal } from '../hooks/useScrollReveal';

export function ExperienceTimeline() {
  const revealRef = useScrollReveal();

  return (
    <section id="experience" className="py-20 md:py-28 px-6">
      <div ref={revealRef} className="max-w-2xl mx-auto">
        <div className="reveal">
          <SectionHeading subtitle="A glimpse into my academic and professional journey">
            Experience
          </SectionHeading>
        </div>

        <div className="space-y-0">
          {experiences.map((exp, idx) => (
            <div
              key={idx}
              className="reveal group relative border-b border-border last:border-b-0 py-8 first:pt-0"
            >
              {/* Date */}
              <span className="font-mono text-xs tracking-widest uppercase text-text-tertiary">
                {exp.period}
              </span>

              {/* Title + Org */}
              <h3 className="mt-2 text-lg font-semibold text-text flex items-center gap-2">
                {exp.title}
                {exp.isCurrent && (
                  <span className="inline-block w-2 h-2 rounded-full bg-accent animate-pulse" />
                )}
              </h3>
              <p className="text-sm text-accent mt-0.5">{exp.organization}</p>

              {/* Description */}
              <p className="mt-3 text-sm text-text-secondary leading-relaxed">
                {exp.description}
              </p>

              {/* Technologies */}
              <div className="mt-4 flex flex-wrap gap-1.5">
                {exp.technologies.map((tech) => (
                  <TechTag key={tech}>{tech}</TechTag>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
