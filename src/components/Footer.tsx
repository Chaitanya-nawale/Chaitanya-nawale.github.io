import { personalInfo } from '../data/content';

export function Footer() {
  return (
    <footer className="w-full pt-8 pb-1 text-center text-xs sm:text-sm text-text-tertiary">
      <div className="max-w-7xl mx-auto">
        {personalInfo.name} © {new Date().getFullYear()}
      </div>
    </footer>
  );
}
