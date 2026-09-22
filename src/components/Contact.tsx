import { Mail, ArrowUpRight } from 'lucide-react';
import { personalInfo } from '../data/content';
import { SectionHeading } from './ui/SectionHeading';
import { useScrollReveal } from '../hooks/useScrollReveal';

export function Contact() {
  const revealRef = useScrollReveal();

  return (
    <section
      id="contact"
      className="min-h-screen flex flex-col justify-center py-20 md:py-28 px-6 scroll-mt-20 md:scroll-mt-24"
    >
      <div ref={revealRef} className="max-w-2xl mx-auto w-full">
        <div className="reveal">
          <SectionHeading className="mb-8">
            Contact
          </SectionHeading>
        </div>

        <div className="reveal">
          <h3 className="text-2xl sm:text-3xl font-semibold text-text tracking-tight leading-snug">
            Let&apos;s build something{' '}
            <span className="text-accent">great together.</span>
          </h3>
          <p className="mt-3 text-text-secondary text-sm sm:text-base leading-relaxed max-w-lg">
            Feel free to reach out if you want to create products that people genuinely love to use.
          </p>
        </div>

        {/* Contact Channels Grid */}
        <div className="reveal mt-8 grid grid-cols-1 sm:grid-cols-3 gap-3.5">
          {/* Email Card */}
          <a
            href={`mailto:${personalInfo.email}`}
            className="group relative flex flex-col justify-between rounded-xl border border-border bg-bg-secondary/40 hover:bg-bg-secondary hover:border-accent/40 p-4 sm:p-5 transition-all duration-200 shadow-xs hover:shadow-sm"
            aria-label={`Send email to ${personalInfo.email}`}
          >
            <div className="flex items-center justify-between">
              <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-accent/10 text-accent">
                <Mail className="h-4.5 w-4.5" />
              </div>
              <ArrowUpRight className="h-3.5 w-3.5 text-text-tertiary transition-transform duration-200 group-hover:text-accent group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
            </div>
            <div className="mt-5">
              <p className="text-sm font-semibold text-text group-hover:text-accent transition-colors duration-150">
                Direct Email
              </p>
            </div>
          </a>

          {/* LinkedIn Card */}
          <a
            href="https://linkedin.com/in/chaitanyanawale"
            target="_blank"
            rel="noopener noreferrer"
            className="group relative flex flex-col justify-between rounded-xl border border-border bg-bg-secondary/40 hover:bg-bg-secondary hover:border-accent/40 p-4 sm:p-5 transition-all duration-200 shadow-xs hover:shadow-sm"
            aria-label="Visit LinkedIn profile"
          >
            <div className="flex items-center justify-between">
              <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-accent/10 text-accent">
                <svg viewBox="0 0 24 24" fill="currentColor" className="h-4.5 w-4.5" aria-hidden="true">
                  <path d="M20.45 20.45h-3.55v-5.57c0-1.33-.02-3.04-1.85-3.04-1.85 0-2.14 1.45-2.14 2.94v5.67H9.36V9h3.41v1.56h.05c.48-.9 1.64-1.85 3.37-1.85 3.6 0 4.27 2.37 4.27 5.45v6.29ZM5.34 7.43a2.06 2.06 0 1 1 0-4.12 2.06 2.06 0 0 1 0 4.12ZM7.12 20.45H3.56V9h3.56v11.45ZM22.22 0H1.77C.79 0 0 .77 0 1.73v20.54C0 23.23.79 24 1.77 24h20.45c.98 0 1.78-.77 1.78-1.73V1.73C24 .77 23.2 0 22.22 0Z" />
                </svg>
              </div>
              <ArrowUpRight className="h-3.5 w-3.5 text-text-tertiary transition-transform duration-200 group-hover:text-accent group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
            </div>
            <div className="mt-5">
              <p className="text-sm font-semibold text-text group-hover:text-accent transition-colors duration-150">
                LinkedIn Profile
              </p>
            </div>
          </a>

          {/* GitHub Card */}
          <a
            href="https://github.com/Chaitanya-nawale"
            target="_blank"
            rel="noopener noreferrer"
            className="group relative flex flex-col justify-between rounded-xl border border-border bg-bg-secondary/40 hover:bg-bg-secondary hover:border-accent/40 p-4 sm:p-5 transition-all duration-200 shadow-xs hover:shadow-sm"
            aria-label="Visit GitHub profile"
          >
            <div className="flex items-center justify-between">
              <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-accent/10 text-accent">
                <svg viewBox="0 0 24 24" fill="currentColor" className="h-4.5 w-4.5" aria-hidden="true">
                  <path d="M12 2C6.48 2 2 6.58 2 12.25c0 4.54 2.86 8.37 6.84 9.73.5.1.68-.22.68-.49 0-.24-.01-1.03-.01-1.88-2.78.62-3.37-1.36-3.37-1.36-.45-1.18-1.11-1.49-1.11-1.49-.91-.64.07-.63.07-.63 1.01.07 1.55 1.06 1.55 1.06.9 1.56 2.36 1.11 2.93.85.09-.66.35-1.11.64-1.37-2.22-.25-4.56-1.14-4.56-5.07 0-1.12.39-2.04 1.03-2.76-.1-.26-.45-1.29.1-2.7 0 0 .84-.27 2.75 1.02A9.56 9.56 0 0 1 12 6.8c.85.004 1.71.12 2.5.35 1.91-1.3 2.75-1.02 2.75-1.02.55 1.41.2 2.44.1 2.7.64.72 1.03 1.64 1.03 2.76 0 3.94-2.35 4.82-4.58 5.07.36.31.68.94.68 1.9 0 1.37-.01 2.48-.01 2.81 0 .27.18.59.69.49A10.01 10.01 0 0 0 22 12.25C22 6.58 17.52 2 12 2Z" />
                </svg>
              </div>
              <ArrowUpRight className="h-3.5 w-3.5 text-text-tertiary transition-transform duration-200 group-hover:text-accent group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
            </div>
            <div className="mt-5">
              <p className="text-sm font-semibold text-text group-hover:text-accent transition-colors duration-150">
                GitHub Profile
              </p>
            </div>
          </a>
        </div>
      </div>
    </section>
  );
}
