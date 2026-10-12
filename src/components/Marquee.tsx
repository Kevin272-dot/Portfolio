interface MarqueeProps {
  items: string[];
  reverse?: boolean;
  className?: string;
}

export function Marquee({ items, reverse = false, className = "" }: MarqueeProps) {
  const row = [...items, ...items];

  return (
    <div className={`overflow-hidden select-none ${className}`}>
      <div
        className={`flex w-max items-center gap-10 whitespace-nowrap ${
          reverse ? "animate-marquee-reverse" : "animate-marquee"
        }`}
      >
        {row.map((item, i) => (
          <span
            key={i}
            className="flex items-center gap-10 text-sm sm:text-base font-semibold uppercase tracking-[0.18em] text-text-tertiary"
          >
            {item}
            <span className="text-gold">&#x2715;</span>
          </span>
        ))}
      </div>
    </div>
  );
}