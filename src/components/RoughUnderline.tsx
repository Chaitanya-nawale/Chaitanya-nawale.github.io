import { useEffect, useRef } from 'react';
import { annotate } from 'rough-notation';

interface RoughUnderlineProps {
  children: React.ReactNode;
  className?: string;
  color?: string;
  strokeWidth?: number;
  animationDuration?: number;
  delay?: number;
}

export function RoughUnderline({
  children,
  className = '',
  color = 'var(--accent)',
  strokeWidth = 4,
  animationDuration = 800,
  delay = 700,
}: RoughUnderlineProps) {
  const textRef = useRef<HTMLSpanElement>(null);

  useEffect(() => {
    if (!textRef.current) return;

    let annotation: ReturnType<typeof annotate> | undefined;

    // Wait for entrance reveal transition to finish before calculating the bounding box
    const timer = setTimeout(() => {
      if (!textRef.current) return;
      annotation = annotate(textRef.current, {
        type: 'underline',
        color,
        strokeWidth,
        padding: [0, 0, 4, 0],
        iterations: 3,
        multiline: true,
        animationDuration,
      });
      annotation.show();
    }, delay);

    return () => {
      clearTimeout(timer);
      if (annotation) {
        annotation.remove();
      }
    };
  }, [color, strokeWidth, animationDuration, delay]);

  return (
    <span ref={textRef} className={`inline-block ${className}`}>
      {children}
    </span>
  );
}
