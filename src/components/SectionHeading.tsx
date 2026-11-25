interface SectionHeadingProps {
  badge: string;
  title: string;
  align?: "center" | "left";
  theme?: "light" | "on-accent";
  className?: string;
}

export function SectionHeading({
  badge,
  title,
  align = "center",
  theme = "light",
  className = "",
}: SectionHeadingProps) {
  const alignClass =
    align === "center" ? "items-center text-center" : "items-start text-left";

  const badgeClass =
    theme === "on-accent"
      ? "border-white/70 bg-white/10 text-white"
      : "border-[#00A1BF]/55 bg-white text-[#00A1BF]";

  const titleClass =
    theme === "on-accent" ? "text-white" : "text-[#4A4A4B]";

  return (
    <div className={`flex flex-col gap-4 ${alignClass} ${className}`}>
      <span
        className={`inline-flex items-center rounded-full border px-4 py-1 text-[11px] font-bold uppercase tracking-[2.4px] ${badgeClass}`}
      >
        {badge}
      </span>
      <h2
        className={`font-display text-[32px] sm:text-[42px] lg:text-[48px] font-bold leading-[1.28] tracking-[1.6px] ${titleClass}`}
      >
        {title}
      </h2>
    </div>
  );
}
