interface SectionHeadingProps {
  index: string;
  title: string;
  className?: string;
}

export function SectionHeading({ index, title, className = "" }: SectionHeadingProps) {
  return (
    <div className={`flex items-center gap-5 mb-14 ${className}`}>
      <span className="font-mono text-xs font-semibold text-gold tracking-widest">
        ({index})
      </span>
      <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-off-white">
        {title}
      </h2>
    </div>
  );
}