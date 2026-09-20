interface SectionHeaderProps {
  number: string;
  title: string;
  className?: string;
}

export function SectionHeader({ number, title, className = "" }: SectionHeaderProps) {
  return (
    <div className={`flex items-center gap-4 mb-16 ${className}`}>
      <span className="text-[10px] font-mono tracking-widest text-gold">
        {number}
      </span>
      <div className="h-px flex-1 bg-border" />
      <h2 className="text-xs tracking-[0.3em] uppercase text-text-secondary whitespace-nowrap">
        {title}
      </h2>
      <div className="h-px flex-1 bg-border" />
    </div>
  );
}