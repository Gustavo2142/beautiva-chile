import Link from "next/link";
import { ArrowUpRight } from "lucide-react";

interface CtaButtonProps {
  href?: string;
  onClick?: () => void;
  label: string;
  variant?: "cyan" | "dark" | "dark-outline" | "white";
  showArrow?: boolean;
  type?: "button" | "submit";
  className?: string;
}

export function CtaButton({
  href,
  onClick,
  label,
  variant = "cyan",
  showArrow = true,
  type = "button",
  className = "",
}: CtaButtonProps) {
  const variantStyles: Record<NonNullable<CtaButtonProps["variant"]>, string> = {
    cyan: "bg-[#00A1BF] hover:bg-[#007186] text-white shadow-[0_6px_18px_rgba(0,161,191,0.28)]",
    dark: "bg-black hover:bg-[#1E1E1F] text-white shadow-[0_6px_18px_rgba(0,0,0,0.18)]",
    "dark-outline":
      "bg-black border border-white/25 hover:border-[#00A1BF] hover:bg-[#0B0B0C] text-white",
    white:
      "bg-white hover:bg-[#F5F5F5] text-[#4A4A4B] shadow-[0_6px_18px_rgba(0,0,0,0.08)]",
  };

  const iconBubbleStyles: Record<
    NonNullable<CtaButtonProps["variant"]>,
    string
  > = {
    cyan: "bg-white/20 text-white",
    dark: "bg-white/15 text-white",
    "dark-outline": "bg-white/15 text-white",
    white: "bg-[#4A4A4B]/10 text-[#4A4A4B]",
  };

  const inner = (
    <>
      <span>{label}</span>
      {showArrow && (
        <span
          className={`inline-flex h-7 w-7 items-center justify-center rounded-full transition-transform duration-200 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 ${iconBubbleStyles[variant]}`}
        >
          <ArrowUpRight className="h-3.5 w-3.5" aria-hidden="true" />
        </span>
      )}
    </>
  );

  const baseClass = `group btn-press inline-flex items-center justify-center gap-3 whitespace-nowrap shrink-0 rounded-full pl-5 ${
    showArrow ? "pr-2.5 py-2" : "px-6 py-3"
  } text-[11px] sm:text-[12px] font-bold uppercase tracking-[2.4px] min-h-[44px] cursor-pointer ${variantStyles[variant]} ${className}`;

  if (href) {
    return (
      <Link href={href} className={baseClass}>
        {inner}
      </Link>
    );
  }

  return (
    <button type={type} onClick={onClick} className={baseClass}>
      {inner}
    </button>
  );
}
