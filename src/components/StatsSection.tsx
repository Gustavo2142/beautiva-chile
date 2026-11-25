"use client";

import { useEffect, useRef, useState } from "react";
import { CLINIC_STATS } from "@/data/clinic-data";

function StatCounter({
  target,
  prefix,
  suffix,
  label,
}: {
  target: number;
  prefix: string;
  suffix: string;
  label: string;
}) {
  const [display, setDisplay] = useState(target);
  const [hasAnimated, setHasAnimated] = useState(false);
  const ref = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el || hasAnimated) return;

    const prefersReduced = window.matchMedia(
      "(prefers-reduced-motion: reduce)"
    ).matches;
    if (prefersReduced) {
      return;
    }

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (!entry.isIntersecting) return;
        setHasAnimated(true);
        const start = performance.now();
        const duration = 900;

        const tick = (now: number) => {
          const progress = Math.min((now - start) / duration, 1);
          const eased = 1 - Math.pow(1 - progress, 3);
          setDisplay(Math.max(1, Math.round(eased * target)));
          if (progress < 1) {
            requestAnimationFrame(tick);
          }
        };
        requestAnimationFrame(tick);
        observer.disconnect();
      },
      { threshold: 0.35 }
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, [hasAnimated, target]);

  return (
    <div
      ref={ref}
      className="flex flex-col items-center px-6 py-8 text-center md:px-10 md:py-6"
    >
      <p className="font-display text-[40px] sm:text-[46px] font-bold leading-none tracking-[1px] text-[#4A4A4B] tabular-nums">
        {prefix}
        {display}
        {suffix}
      </p>
      <p className="mt-4 max-w-[260px] text-[14px] leading-[1.7] text-[#636363]">
        {label}
      </p>
    </div>
  );
}

export function StatsSection() {
  return (
    <section aria-label="Cifras de trayectoria" className="w-full pb-16">
      <div className="mx-auto max-w-[1220px] px-5">
        <div className="grid grid-cols-1 divide-y divide-[#DEDEDE] rounded-[20px] bg-white py-4 shadow-[0_12px_36px_rgba(0,0,0,0.04)] md:grid-cols-3 md:divide-x md:divide-y-0">
          {CLINIC_STATS.map((stat) => (
            <StatCounter
              key={stat.label}
              target={stat.value}
              prefix={stat.prefix}
              suffix={stat.suffix}
              label={stat.label}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
