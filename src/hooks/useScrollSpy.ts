import { useState, useEffect } from 'react';

export function useScrollSpy(sectionIds: string[], offset = 100) {
  const [activeId, setActiveId] = useState<string>(sectionIds[0] || '');
  const idsKey = sectionIds.join(',');

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY < offset) {
        setActiveId('');
        return;
      }

      // Check if user is near the bottom of the page (e.g. contact section or footer)
      const contactEl = document.getElementById('contact');
      if (contactEl) {
        const rect = contactEl.getBoundingClientRect();
        if (rect.top <= window.innerHeight * 0.7) {
          setActiveId('contact');
        }
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll();

    const elements = sectionIds
      .map((id) => document.getElementById(id))
      .filter(Boolean) as HTMLElement[];

    const observer = new IntersectionObserver(
      (entries) => {
        if (window.scrollY >= offset) {
          const visibleEntries = entries.filter((e) => e.isIntersecting);
          if (visibleEntries.length > 0) {
            const sorted = visibleEntries.sort(
              (a, b) => a.boundingClientRect.top - b.boundingClientRect.top
            );
            setActiveId(sorted[0].target.id);
          } else {
            // If all tracked sections are scrolled above the viewport, clear activeId
            const allAbove = elements.every(
              (el) => el.getBoundingClientRect().bottom < offset
            );
            if (allAbove) {
              setActiveId('');
            }
          }
        }
      },
      {
        rootMargin: `-${offset}px 0px -40% 0px`,
        threshold: 0,
      }
    );

    elements.forEach((el) => observer.observe(el));

    return () => {
      window.removeEventListener('scroll', handleScroll);
      observer.disconnect();
    };
  }, [idsKey, offset]);

  return activeId;
}
