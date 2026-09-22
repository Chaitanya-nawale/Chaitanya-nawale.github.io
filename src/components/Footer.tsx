import { socialLinks } from '../data/content';
import { SocialIcon } from './ui/SocialIcon';

export function Footer() {
  return (
    <footer className="border-t border-border/60 py-5 px-6">
      <div className="max-w-7xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-3 text-xs text-text-tertiary">
        <div className="flex items-center gap-2">
          <img
            src="/logo.png"
            alt="CN Logo"
            className="site-logo h-4 w-4 object-contain opacity-60"
          />
          <span>© {new Date().getFullYear()} Chaitanya Nawale</span>
        </div>

        <div className="flex items-center gap-1">
          {socialLinks.map((link) => (
            <SocialIcon key={link.platform} link={link} size="sm" />
          ))}
        </div>
      </div>
    </footer>
  );
}
