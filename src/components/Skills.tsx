import { skillGroups } from '../data/content';
import { SectionHeading } from './ui/SectionHeading';
import { TechTag } from './ui/TechTag';
import { useScrollReveal } from '../hooks/useScrollReveal';

export function Skills() {
  const revealRef = useScrollReveal();

  return (
    <section id="skills" className="py-20 md:py-28 px-6">
      <div ref={revealRef} className="max-w-2xl mx-auto">
        <div className="reveal">
          <SectionHeading subtitle="Technologies and tools I work with">
            Skills
          </SectionHeading>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
          {skillGroups.map((group) => (
            <div key={group.name} className="reveal">
              <h3 className="font-mono text-xs uppercase tracking-[0.15em] text-text-tertiary mb-3">
                {group.name}
              </h3>
              <div className="flex flex-wrap gap-1.5">
                {group.skills.map((skill) => (
                  <TechTag key={skill}>{skill}</TechTag>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
