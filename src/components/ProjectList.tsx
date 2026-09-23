import projectsData from '../data/projects.json';
import { ProjectCard, type ProjectItem } from './ProjectCard';
import { useScrollReveal } from '../hooks/useScrollReveal';

export function ProjectList() {
  const revealRef = useScrollReveal();
  const projects = projectsData as ProjectItem[];

  return (
    <section
      id="projects"
      className="pt-12 sm:pt-16 pb-20 md:pb-28 px-6 md:px-12 lg:px-16 scroll-mt-16 md:scroll-mt-18 overflow-hidden"
    >
      <div ref={revealRef} className="max-w-6xl mx-auto w-full">
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
