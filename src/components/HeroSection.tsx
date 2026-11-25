"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import { HERO_SLIDES } from "@/data/clinic-data";
import { CtaButton } from "./CtaButton";

export function HeroSection() {
  const [activeIndex, setActiveIndex] = useState(0);

  useEffect(() => {
    const timer = window.setInterval(() => {
      setActiveIndex((prev) => (prev + 1) % HERO_SLIDES.length);
    }, 5500);
    return () => window.clearInterval(timer);
  }, []);

  return (
    <section
      aria-label="Presentación principal"
      className="relative flex min-h-dvh w-full flex-col items-center justify-center overflow-hidden bg-black pt-40 pb-24 text-white"
    >
      {/* Background crossfade slider */}
      <div className="absolute inset-0 z-0">
        {HERO_SLIDES.map((slide, idx) => (
          <div
            key={slide.src}
            className={`absolute inset-0 transition-opacity duration-1000 ${
              idx === activeIndex ? "opacity-100" : "opacity-0"
            }`}
          >
            <Image
              src={slide.src}
              alt={slide.alt}
              fill
              priority={idx === 0}
              sizes="100vw"
              className="object-cover object-center"
            />
          </div>
        ))}
        <div className="absolute inset-0 bg-gradient-to-b from-black/55 via-black/45 to-black/75" />
      </div>

      {/* Subtle 6-column vertical hairlines matching Beautiva Framer template */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 z-[1] mx-auto grid max-w-[1400px] grid-cols-3 md:grid-cols-6 px-5"
      >
        <div className="border-l border-white/15 h-full" />
        <div className="border-l border-white/15 h-full" />
        <div className="border-l border-white/15 h-full" />
        <div className="hidden md:block border-l border-white/15 h-full" />
        <div className="hidden md:block border-l border-white/15 h-full" />
        <div className="hidden md:block border-x border-white/15 h-full" />
      </div>

      {/* Centered Hero Copy */}
      <div className="relative z-10 mx-auto flex max-w-[920px] flex-col items-center px-5 text-center">
        <h1 className="font-display text-[36px] sm:text-[50px] lg:text-[60px] font-bold leading-[1.25] lg:leading-[1.32] tracking-[2px] lg:tracking-[3px] text-white drop-shadow-[0_2px_18px_rgba(0,0,0,0.35)]">
          Tu Espacio de Medicina Estética y Cirugía de Precisión
        </h1>
        <p className="mt-5 max-w-[780px] text-[11px] sm:text-[13px] font-normal uppercase tracking-[2.4px] leading-[1.7] text-white/90">
          Rejuvenecimiento Facial · Toxina Botulínica &amp; Ácido Hialurónico ·
          Contorno Corporal · Cirugía Mamaria
        </p>

        <div className="mt-9 flex flex-wrap items-center justify-center gap-4">
          <CtaButton
            href="/#contacto"
            label="Agendar Evaluación"
            variant="cyan"
          />
        </div>
      </div>

      {/* Mouse Scroll indicator */}
      <a
        href="#nosotros"
        aria-label="Bajar a sección Nosotros"
        className="absolute bottom-7 left-1/2 z-10 flex -translate-x-1/2 flex-col items-center gap-2.5 text-white/85 transition-opacity hover:text-white"
      >
        <span className="flex h-9 w-6 items-start justify-center rounded-full border-2 border-white/80 p-1.5">
          <span className="h-1.5 w-1.5 rounded-full bg-white animate-scroll-wheel" />
        </span>
        <span className="text-[10px] font-bold uppercase tracking-[2.6px]">
          Scroll
        </span>
      </a>
    </section>
  );
}
