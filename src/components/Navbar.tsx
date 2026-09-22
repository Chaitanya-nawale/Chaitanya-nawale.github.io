import { useState, useEffect } from 'react';
import { ArrowRight } from 'lucide-react';
import { useScrollSpy } from '../hooks/useScrollSpy';

const navItems = [
  { id: 'experience', label: 'Experience' },
  { id: 'projects', label: 'Projects' },
  { id: 'skills', label: 'Skills' },
];

const TRACKED_SECTIONS = ['experience', 'projects', 'skills', 'contact'];

export function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [showSectionNav, setShowSectionNav] = useState(false);
  const activeId = useScrollSpy(TRACKED_SECTIONS, 110);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);

      // Reveal section nav when user reaches the Experience section
      const experienceEl = document.getElementById('experience');
      if (experienceEl) {
        const rect = experienceEl.getBoundingClientRect();
        setShowSectionNav(rect.top <= 220);
      } else {
        setShowSectionNav(window.scrollY > window.innerHeight * 0.6);
      }
    };

    handleScroll();
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleBrandClick = (e: React.MouseEvent) => {
    e.preventDefault();
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleNavClick = (id: string) => {
    const el = document.getElementById(id);
    el?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-[background-color,border-color,box-shadow] duration-300 ease-in-out ${
        isScrolled
          ? 'bg-nav-bg backdrop-blur-xl border-b border-border shadow-xs'
          : 'bg-transparent backdrop-blur-xs border-b border-transparent shadow-none'
      }`}
    >
      <div
        className={`mx-auto flex max-w-7xl items-center justify-between px-6 md:px-10 transition-[height] duration-300 ease-in-out ${
          isScrolled ? 'h-16 md:h-18' : 'h-20 md:h-24'
        }`}
      >
        {/* Brand */}
        <div className="flex items-center">
          <a
            href="#home"
            onClick={handleBrandClick}
            className="group flex items-center"
            aria-label="Chaitanya Ships Intelligence - Back to top"
          >
            <span className="font-sans text-base sm:text-lg md:text-xl font-bold tracking-tight text-text group-hover:text-accent transition-colors duration-200">
              Chaitanya Ships Intelligence
            </span>
          </a>
        </div>

        {/* Center: Dynamic Pill Navigation (Reveals only when reaching About section) */}
        <div
          className={`hidden md:flex items-center transition-all duration-300 ease-out transform ${
            showSectionNav
              ? 'opacity-100 translate-y-0 scale-100 pointer-events-auto'
              : 'opacity-0 -translate-y-2.5 scale-95 pointer-events-none'
          }`}
        >
          <nav
            className="flex items-center gap-1.5 rounded-full border border-border/60 bg-bg-secondary/40 backdrop-blur-md p-1.5 shadow-xs"
            aria-label="Section navigation"
          >
            {navItems.map((item) => {
              const isActive = activeId === item.id;
              return (
                <a
                  key={item.id}
                  href={`#${item.id}`}
                  onClick={(e) => {
                    e.preventDefault();
                    handleNavClick(item.id);
                  }}
                  className={`relative rounded-full px-4 py-1.5 text-xs lg:text-sm font-medium transition-colors duration-200 border ${
                    isActive
                      ? 'bg-bg text-text shadow-xs border-border/60'
                      : 'border-transparent text-text-secondary hover:text-text hover:bg-bg/60'
                  }`}
                >
                  {item.label}
                </a>
              );
            })}
          </nav>
        </div>

        {/* Right Actions: MeisterUp-style Action Buttons */}
        <div className="flex items-center">
          {/* Get In Touch CTA Pill */}
          <a
            href="#contact"
            onClick={(e) => {
              e.preventDefault();
              handleNavClick('contact');
            }}
            className="group inline-flex items-center gap-1.5 sm:gap-2 rounded-full bg-accent hover:bg-accent-hover px-4 py-2 sm:px-5 sm:py-2.5 text-xs sm:text-sm md:text-base font-medium text-white transition-all duration-200 shadow-xs hover:shadow-sm"
            aria-label="Get in touch"
          >
            <span>Get in Touch</span>
            <ArrowRight className="h-3.5 w-3.5 sm:h-4 sm:w-4 text-white/85 transition-transform duration-200 group-hover:translate-x-0.5" />
          </a>
        </div>
      </div>
    </header>
  );
}
