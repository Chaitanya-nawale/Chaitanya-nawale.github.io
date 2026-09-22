interface SectionHeadingProps {
  children: React.ReactNode;
  subtitle?: string;
  className?: string;
  subtitleClassName?: string;
}

export function SectionHeading({
  children,
  subtitle,
  className = 'mb-12',
  subtitleClassName,
}: SectionHeadingProps) {
  return (
    <div className={className}>
      <h2 className="text-[clamp(1.5rem,3vw,2rem)] font-semibold tracking-tight text-text">
        <span className="text-accent font-mono font-normal mr-2">/</span>
        {children}
      </h2>
      {subtitle && (
        <p className={`mt-2 text-text-secondary text-sm ${subtitleClassName || 'max-w-2xl'}`}>
          {subtitle}
        </p>
      )}
    </div>
  );
}
