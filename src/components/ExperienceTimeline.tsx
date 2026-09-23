import { useState } from 'react';
import {
  Briefcase,
  GraduationCap,
  Globe,
  MapPin,
  Calendar,
  BookOpen,
  ArrowUpRight,
  ChevronDown,
  ChevronUp,
} from 'lucide-react';
import { experiences } from '../data/experience';
import type { Publication } from '../data/types';
import { SectionHeading } from './ui/SectionHeading';
import { TechTag } from './ui/TechTag';
import { useScrollReveal } from '../hooks/useScrollReveal';

function getMilestoneIcon(type: 'education' | 'work' | 'exchange') {
  switch (type) {
    case 'work':
      return <Briefcase className="w-4 h-4" />;
    case 'exchange':
      return <Globe className="w-4 h-4" />;
    case 'education':
    default:
      return <GraduationCap className="w-4 h-4" />;
  }
}

function highlightAuthor(authors: string) {
  const parts = authors.split(/(Chaitanya M\. Nawale|Navale C\.M)/g);
  return parts.map((part, idx) =>
    part === 'Chaitanya M. Nawale' || part === 'Navale C.M' ? (
      <strong
        key={idx}
        className="font-semibold text-accent underline decoration-accent/30 decoration-1 underline-offset-2"
      >
        {part}
      </strong>
    ) : (
      <span key={idx}>{part}</span>
    )
  );
}

function PublicationsList({ publications }: { publications: Publication[] }) {
  const [isExpanded, setIsExpanded] = useState(true);

  return (
    <div className="mt-4 pt-3.5 border-t border-border/50">
      <button
        type="button"
        onClick={() => setIsExpanded((prev) => !prev)}
        className="group/btn flex items-center justify-between w-full py-1 text-left cursor-pointer"
        aria-expanded={isExpanded}
      >
        <span className="flex items-center gap-2 text-xs font-semibold text-text group-hover/btn:text-accent transition-colors">
          <BookOpen className="w-3.5 h-3.5 text-accent" />
          <span>Peer-Reviewed Publications</span>
          <span className="rounded-full bg-accent/10 px-2 py-0.5 text-[10px] font-mono text-accent">
            {publications.length}
          </span>
        </span>
        <span className="text-[11px] font-mono text-text-tertiary flex items-center gap-1 group-hover/btn:text-text-secondary">
          {isExpanded ? (
            <>
              Hide <ChevronUp className="w-3 h-3" />
            </>
          ) : (
            <>
              Show <ChevronDown className="w-3 h-3" />
            </>
          )}
        </span>
      </button>

      {isExpanded && (
        <div className="mt-3 space-y-2.5">
          {publications.map((pub, pIdx) => (
            <div
              key={pIdx}
              className="rounded-xl border border-border/60 bg-bg/60 p-3 sm:p-3.5 transition-colors hover:border-accent/30 hover:bg-bg/90"
            >
              <div className="flex flex-col sm:flex-row sm:items-start justify-between gap-2">
                <h4 className="text-xs sm:text-sm font-semibold leading-snug">
                  <a
                    href={pub.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-text hover:text-accent transition-colors"
                  >
                    {pub.title}
                  </a>
                </h4>
                <a
                  href={pub.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1 text-[11px] font-mono text-accent hover:text-accent-hover bg-accent/8 hover:bg-accent/15 border border-accent/20 px-2 py-0.5 rounded shrink-0 transition-colors self-start"
                  aria-label={`View DOI for ${pub.title}`}
                >
                  <span>DOI</span>
                  <ArrowUpRight className="w-3 h-3" />
                </a>
              </div>

              <p className="mt-1.5 text-[11px] sm:text-xs text-text-tertiary leading-relaxed">
                {highlightAuthor(pub.authors)}
              </p>

              <div className="mt-2 flex flex-wrap items-center gap-2 text-[11px] text-text-secondary font-mono">
                <span className="text-accent/90">{pub.venue}</span>
                <span className="text-text-tertiary">·</span>
                <span className="text-text-tertiary">{pub.year}</span>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}

export function ExperienceTimeline() {
  const revealRef = useScrollReveal();

  return (
    <section
      id="experience"
      className="pt-12 sm:pt-16 pb-20 md:pb-28 px-6 md:px-12 lg:px-16 scroll-mt-16 md:scroll-mt-18 overflow-hidden"
    >
      <div ref={revealRef} className="max-w-4xl mx-auto w-full">
        {/* Section Heading */}
        <div className="reveal mb-12 sm:mb-16">
          <SectionHeading subtitle="A chronological view of my academic foundation, global exchange, and engineering career">
            Experience
          </SectionHeading>
        </div>

        {/* Timeline Container */}
        <div className="relative">
          {/* Vertical Connecting Track */}
          <div
            className="absolute left-[17px] sm:left-[21px] top-6 bottom-6 w-px bg-gradient-to-b from-accent/60 via-border to-border/20 pointer-events-none"
            aria-hidden="true"
          />

          <div className="space-y-8 sm:space-y-10">
            {experiences.map((exp, idx) => (
              <div
                key={`${exp.title}-${idx}`}
                className="reveal group relative pl-11 sm:pl-16"
                style={{ transitionDelay: `${idx * 100}ms` }}
              >
                {/* Milestone Node on Track */}
                <div
                  className={`absolute left-0 sm:left-1 top-1.5 flex h-9 w-9 items-center justify-center rounded-xl border transition-all duration-300 ring-4 ring-bg ${
                    exp.isCurrent
                      ? 'border-accent bg-accent/10 text-accent shadow-xs'
                      : 'border-border/80 bg-bg text-text-tertiary group-hover:border-accent/40 group-hover:text-accent group-hover:bg-accent/5'
                  }`}
                  aria-hidden="true"
                >
                  {getMilestoneIcon(exp.type)}
                </div>

                {/* Experience Card */}
                <div className="relative rounded-2xl border border-border/80 bg-bg-secondary/30 hover:bg-bg-secondary/60 hover:border-accent/40 p-5 sm:p-7 transition-all duration-300 shadow-xs hover:shadow-sm">
                  {/* Top Bar: Title & Status/Type Badges */}
                  <div className="flex flex-col sm:flex-row sm:items-start justify-between gap-3 sm:gap-4">
                    <div>
                      <div className="flex flex-wrap items-center gap-2">
                        <h3 className="text-lg sm:text-xl font-heading font-bold text-text group-hover:text-accent transition-colors">
                          {exp.title}
                        </h3>

                        {exp.isCurrent && (
                          <span className="inline-flex items-center gap-1.5 rounded-full bg-accent/10 border border-accent/25 px-2.5 py-0.5 text-[11px] font-medium text-accent">
                            <span className="relative flex h-1.5 w-1.5">
                              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-accent opacity-75" />
                              <span className="relative inline-flex rounded-full h-1.5 w-1.5 bg-accent" />
                            </span>
                            Current
                          </span>
                        )}

                        {exp.roleType && (
                          <span className="inline-flex items-center rounded-full bg-bg border border-border/80 px-2.5 py-0.5 text-[11px] font-medium text-text-secondary">
                            {exp.roleType}
                          </span>
                        )}
                      </div>

                      <p className="text-sm sm:text-base font-medium text-accent mt-1">
                        {exp.organization}
                      </p>
                    </div>

                    {/* Period & Location Metadata */}
                    <div className="flex sm:flex-col items-start sm:items-end gap-2 sm:gap-1 text-xs text-text-tertiary shrink-0">
                      <span className="inline-flex items-center gap-1.5 font-mono text-[11px] sm:text-xs text-text-secondary font-medium bg-bg/80 border border-border/60 rounded-md px-2.5 py-1">
                        <Calendar className="w-3 h-3 text-accent" />
                        {exp.period}
                      </span>
                      {exp.location && (
                        <span className="inline-flex items-center gap-1 text-[11px] sm:text-xs text-text-tertiary px-1">
                          <MapPin className="w-3 h-3" />
                          {exp.location}
                        </span>
                      )}
                    </div>
                  </div>

                  {/* Summary Description */}
                  <p className="mt-3 text-xs sm:text-sm text-text-secondary leading-relaxed">
                    {exp.description}
                  </p>

                  {/* Publications */}
                  {exp.publications && exp.publications.length > 0 && (
                    <PublicationsList publications={exp.publications} />
                  )}

                  {/* Tech Stack Pills */}
                  {exp.technologies && exp.technologies.length > 0 && (
                    <div className="mt-5 pt-3.5 border-t border-border/40 flex flex-wrap items-center gap-1.5">
                      <span className="text-[10px] font-mono uppercase tracking-wider text-text-tertiary mr-1">
                        Tech:
                      </span>
                      {exp.technologies.map((tech) => (
                        <TechTag key={tech}>{tech}</TechTag>
                      ))}
                    </div>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

