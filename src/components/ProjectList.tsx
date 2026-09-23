import { projects } from '../data/projects';
import { ProjectCard } from './ProjectCard';
import { useScrollReveal } from '../hooks/useScrollReveal';

export function ProjectList() {
  const revealRef = useScrollReveal();

  return (
    <section
      id="projects"
      className="min-h-[calc(100vh-4rem)] md:min-h-[calc(100vh-4.5rem)] flex flex-col justify-center pt-14 sm:pt-20 pb-32 sm:pb-40 md:pb-52 px-6 md:px-12 lg:px-16 scroll-mt-16 md:scroll-mt-18 overflow-hidden"
    >
      <div ref={revealRef} className="max-w-6xl mx-auto w-full my-auto">
        {/* Header matching Featured Projects design */}
        <div className="reveal mb-12 md:mb-16">
          <h2 className="text-3xl md:text-4xl font-heading font-bold text-text mb-2 flex items-center gap-3">
            <span className="text-accent font-mono font-normal">/</span>
            Featured Projects
          </h2>
          <p className="text-text-secondary font-body text-sm max-w-md leading-relaxed">
            A showcase of software craftsmanship, product design, and ambitious experimentation.
          </p>
        </div>

        {/* 3-Column Grid for Project Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8 items-stretch">
          {projects.map((project, idx) => (
            <div
              key={project.title}
              className="reveal flex"
              style={{ transitionDelay: `${(idx % 3) * 150}ms` }}
            >
              <ProjectCard project={project} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
