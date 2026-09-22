interface TechTagProps {
  children: React.ReactNode;
}

export function TechTag({ children }: TechTagProps) {
  return (
    <span className="inline-block rounded-md px-2.5 py-1 text-[11px] font-mono font-medium tracking-wide bg-accent/8 text-accent border border-accent/15 transition-colors hover:border-accent/30 hover:bg-accent/12">
      {children}
    </span>
  );
}
