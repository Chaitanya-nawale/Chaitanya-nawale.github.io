import { ArrowUpRight, ChevronDown } from 'lucide-react';
import { personalInfo, socialLinks } from '../data/content';
import { SocialIcon } from './ui/SocialIcon';
import { useScrollReveal } from '../hooks/useScrollReveal';
import { RoughUnderline } from './RoughUnderline';

export function Hero() {
  const revealRef = useScrollReveal();

  return (
    <section
      id="home"
      className="relative min-h-[100dvh] flex flex-col justify-center px-6 md:px-12 lg:px-16 pt-28 pb-20 overflow-hidden"
    >
      <div
        ref={revealRef}
        className="mx-auto w-full max-w-7xl grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center my-auto"
      >
        {/* Left Column: Framed Portrait Image */}
        <div className="lg:col-span-5 flex justify-center lg:justify-start reveal">
          <div className="relative w-full max-w-[340px] sm:max-w-[380px] lg:max-w-[420px]">
            <div className="relative aspect-square rounded-3xl lg:rounded-[32px] overflow-hidden border border-border/80 bg-gradient-to-b from-bg-secondary to-bg-secondary/50 shadow-lg">
              <img
                src="/profile.png"
                alt={personalInfo.name}
                className="w-full h-full object-cover object-top scale-105 transition-transform duration-500 hover:scale-110"
                loading="eager"
              />
            </div>
          </div>
        </div>

        {/* Right Column: Editorial Headline & Bio */}
        <div className="lg:col-span-7 text-left reveal-stagger">
          {/* Availability Kicker */}
          <div className="reveal mb-5">
            <span className="inline-flex items-center gap-2.5 rounded-full border border-border bg-bg-secondary/80 px-3.5 py-1.5 text-xs sm:text-sm font-medium text-text-secondary shadow-xs">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-accent opacity-70"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-accent"></span>
              </span>
              <span>Available for hire</span>
            </span>
          </div>

          {/* Headline */}
          <h1 className="reveal font-sans text-4xl sm:text-5xl lg:text-[56px] font-bold tracking-tight text-text leading-[1.15]">
            Engineering AI
            <span className="block mt-2 sm:mt-2.5">
              <RoughUnderline>
                Beyond the Hype.
              </RoughUnderline>
            </span>
          </h1>

          {/* Introduction Paragraph */}
          <p className="reveal mt-6 sm:mt-7 text-text-secondary text-base sm:text-lg leading-relaxed max-w-xl text-justify">
            Software Engineer with 3 years of experience building scalable systems for critical financial applications. Currently pursuing an M.Sc. in Data Science at RWTH Aachen, with a focus on machine learning, deep learning, and generative AI.
          </p>

          {/* Action CTAs */}
          <div className="reveal mt-8 sm:mt-9 flex flex-wrap items-center gap-4">
            <a
              href={personalInfo.cvUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="group inline-flex items-center gap-2 rounded-full bg-accent hover:bg-accent-hover px-7 py-3 text-sm sm:text-base font-medium text-white transition-all duration-200 shadow-sm hover:shadow-md"
              aria-label="View Resume (PDF)"
            >
              View Resume
              <ArrowUpRight className="w-4 h-4 text-white/90 transition-transform duration-200 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
            </a>

            <a
              href="#projects"
              onClick={(e) => {
                e.preventDefault();
                document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' });
              }}
              className="inline-flex items-center gap-2 rounded-full border border-border bg-bg-secondary/40 hover:bg-bg-secondary hover:border-accent/40 px-6 py-3 text-sm sm:text-base font-medium text-text transition-all duration-200"
            >
              View Projects
            </a>
          </div>

          {/* Social Links & Location Stamp */}
          <div className="reveal mt-10 pt-6 border-t border-border/60 flex flex-wrap items-center justify-between gap-4 max-w-xl">
            <span className="font-mono text-xs text-text-tertiary">
              {personalInfo.location}
            </span>
            <div className="flex items-center gap-1 text-text-tertiary">
              {socialLinks.map((link) => (
                <SocialIcon key={link.platform} link={link} size="sm" />
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* MeisterUp Scroll Down Indicator */}
      <div className="absolute bottom-6 sm:bottom-8 left-1/2 -translate-x-1/2 animate-bounce opacity-40 transition-opacity hover:opacity-100">
        <a
          href="#experience"
          onClick={(e) => {
            e.preventDefault();
            document.getElementById('experience')?.scrollIntoView({ behavior: 'smooth' });
          }}
          aria-label="Scroll down to Experience section"
          className="text-text-secondary hover:text-text flex flex-col items-center p-2 transition-colors"
        >
          <ChevronDown className="h-6 w-6" />
        </a>
      </div>
    </section>
  );
}
