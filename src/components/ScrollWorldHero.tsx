"use client";

import { useEffect, useRef, useState } from "react";
import Image from "next/image";
import { ChevronDown } from "lucide-react";
import { CtaButton } from "./CtaButton";

interface WorldScene {
  id: string;
  step: string;
  eyebrow: string;
  headline: string;
  subtitle: string;
  src: string;
  alt: string;
  pills: string[];
  panX: number;
  panY: number;
}

const WORLD_SCENES: WorldScene[] = [
  {
    id: "escena-1",
    step: "01",
    eyebrow: "Beautiva Chile · Santiago",
    headline: "Tu Espacio de Medicina Estética y Cirugía de Precisión",
    subtitle:
      "Rejuvenecimiento Facial · Toxina Botulínica & Ácido Hialurónico · Contorno Corporal · Cirugía Mamaria",
    src: "/images/hero-1.jpg",
    alt: "Clínica Beautiva Chile en Santiago - Medicina estética de precisión",
    pills: ["Providencia & Vitacura", "Especialistas SIS / CONACEM"],
    panX: 0,
    panY: 0,
  },
  {
    id: "escena-2",
    step: "02",
    eyebrow: "02 · Diagnóstico y Planificación 3D",
    headline: "Evaluación Médica con Precisión Anatómica",
    subtitle:
      "Mapeo facial personalizado antes de cada procedimiento, con presupuesto cerrado en pesos chilenos (CLP).",
    src: "/images/about-clinic.jpg",
    alt: "Consulta médica y evaluación facial 3D en Beautiva Chile",
    pills: ["Evaluación Facial $25.000 CLP", "100% Abonable al tratamiento"],
    panX: -1.5,
    panY: -1,
  },
  {
    id: "escena-3",
    step: "03",
    eyebrow: "03 · Insumos Originales ISP",
    headline: "Toxina Botulínica y Bioestimuladores Certificados",
    subtitle:
      "Trazabilidad garantizada por lote ante el Instituto de Salud Pública de Chile, aplicados únicamente por médicos.",
    src: "/images/service-1.jpg",
    alt: "Procedimientos mínimamente invasivos con insumos certificados ISP",
    pills: ["Botox · Dysport · Juvederm", "Aplicación 100% médica"],
    panX: 1.5,
    panY: -0.8,
  },
  {
    id: "escena-4",
    step: "04",
    eyebrow: "04 · Armonía Natural y Decisión",
    headline: "Resultados Naturales en Pabellones Acreditados",
    subtitle:
      "Financiamiento transparente vía Webpay Plus hasta en 12 cuotas sin interés con tu banco chileno.",
    src: "/images/gallery-1.jpg",
    alt: "Resultados naturales de medicina estética y cirugía plástica",
    pills: ["12 Cuotas sin Interés", "Seguimiento post-procedimiento"],
    panX: 0,
    panY: -1.2,
  },
];

function clamp(val: number, min: number, max: number): number {
  return Math.min(max, Math.max(min, val));
}

export function ScrollWorldHero() {
  const containerRef = useRef<HTMLElement | null>(null);
  const [progress, setProgress] = useState(0);
  const [reducedMotion, setReducedMotion] = useState(false);

  useEffect(() => {
    const mq = window.matchMedia("(prefers-reduced-motion: reduce)");
    setReducedMotion(mq.matches);
    const onChange = (e: MediaQueryListEvent) => setReducedMotion(e.matches);
    mq.addEventListener("change", onChange);
    return () => mq.removeEventListener("change", onChange);
  }, []);

  useEffect(() => {
    let rafId = 0;

    const updateProgress = () => {
      const el = containerRef.current;
      if (!el) return;
      const rect = el.getBoundingClientRect();
      const totalScrollable = el.offsetHeight - window.innerHeight;
      if (totalScrollable <= 0) {
        setProgress(0);
        return;
      }
      const nextProgress = clamp(-rect.top / totalScrollable, 0, 1);
      setProgress(nextProgress);
    };

    const onScroll = () => {
      if (rafId) cancelAnimationFrame(rafId);
      rafId = requestAnimationFrame(updateProgress);
    };

    updateProgress();
    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onScroll, { passive: true });

    return () => {
      if (rafId) cancelAnimationFrame(rafId);
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onScroll);
    };
  }, []);

  const totalScenes = WORLD_SCENES.length;
  const activeIndex = Math.min(
    totalScenes - 1,
    Math.floor(progress * totalScenes)
  );

  const jumpToScene = (idx: number) => {
    const el = containerRef.current;
    if (!el) return;
    const totalScrollable = el.offsetHeight - window.innerHeight;
    const targetProgress = (idx + 0.08) / totalScenes;
    const targetY =
      el.getBoundingClientRect().top +
      window.scrollY +
      targetProgress * totalScrollable;
    window.scrollTo({
      top: idx === 0 ? 0 : targetY,
      behavior: reducedMotion ? "auto" : "smooth",
    });
  };

  return (
    <section
      ref={containerRef}
      aria-label="Recorrido inmersivo por Beautiva Chile"
      className="relative w-full bg-black text-white h-[360vh]"
    >
      <div className="sticky top-0 flex h-dvh w-full flex-col items-center justify-center overflow-hidden bg-black pt-32 pb-20">
        {/* Continuous Camera Fly-Through Layers */}
        <div className="absolute inset-0 z-0 overflow-hidden">
          {WORLD_SCENES.map((scene, idx) => {
            const segment = 1 / totalScenes;
            const start = idx * segment;
            const end = (idx + 1) * segment;
            const fadeSpan = 0.07;

            // Smooth crossfade envelope with zero hard cuts
            let opacity = 0;
            if (idx === 0 && progress < end + fadeSpan) {
              opacity =
                progress <= end - fadeSpan
                  ? 1
                  : clamp(1 - (progress - (end - fadeSpan)) / (fadeSpan * 2), 0, 1);
            } else if (idx === totalScenes - 1 && progress >= start - fadeSpan) {
              opacity =
                progress >= start + fadeSpan
                  ? 1
                  : clamp((progress - (start - fadeSpan)) / (fadeSpan * 2), 0, 1);
            } else if (progress >= start - fadeSpan && progress <= end + fadeSpan) {
              if (progress < start + fadeSpan) {
                opacity = clamp(
                  (progress - (start - fadeSpan)) / (fadeSpan * 2),
                  0,
                  1
                );
              } else if (progress > end - fadeSpan) {
                opacity = clamp(
                  1 - (progress - (end - fadeSpan)) / (fadeSpan * 2),
                  0,
                  1
                );
              } else {
                opacity = 1;
              }
            }

            // Local progress inside this scene's camera flight [0 -> 1]
            const localProgress = clamp(
              (progress - (start - fadeSpan)) / (segment + fadeSpan * 2),
              0,
              1
            );

            const scale = reducedMotion ? 1 : 1.0 + localProgress * 0.22;
            const tx = reducedMotion ? 0 : scene.panX * localProgress;
            const ty = reducedMotion ? 0 : scene.panY * localProgress;

            return (
              <div
                key={scene.id}
                aria-hidden={idx !== activeIndex}
                style={{
                  opacity,
                  transform: `translate3d(${tx}%, ${ty}%, 0) scale(${scale})`,
                  willChange: opacity > 0 ? "transform, opacity" : "auto",
                }}
                className="pointer-events-none absolute inset-0"
              >
                <Image
                  src={scene.src}
                  alt={scene.alt}
                  fill
                  priority={idx === 0}
                  decoding={idx === 0 ? "sync" : "async"}
                  sizes="100vw"
                  className="object-cover object-center"
                />
              </div>
            );
          })}
          <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/45 to-black/80" />
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

        {/* Synchronized Story Beat Content */}
        <div className="relative z-10 mx-auto flex w-full max-w-[920px] flex-col items-center px-5 text-center">
          <div className="relative min-h-[250px] sm:min-h-[280px] w-full flex items-center justify-center">
            {WORLD_SCENES.map((scene, idx) => {
              const isCurrent = idx === activeIndex;
              const TitleTag = idx === 0 ? "h1" : "h2";

              return (
                <div
                  key={scene.id}
                  style={{
                    opacity: isCurrent ? 1 : 0,
                    transform: isCurrent
                      ? "translate3d(0, 0, 0)"
                      : "translate3d(0, 14px, 0)",
                    pointerEvents: isCurrent ? "auto" : "none",
                  }}
                  className="absolute inset-x-0 flex flex-col items-center transition-all duration-500 ease-out"
                >
                  <span className="inline-flex items-center rounded-full border border-white/25 bg-black/35 px-4 py-1 text-[10px] sm:text-[11px] font-bold uppercase tracking-[2.4px] text-[#00A1BF]">
                    {scene.eyebrow}
                  </span>

                  <TitleTag className="mt-4 font-display text-[32px] sm:text-[48px] lg:text-[56px] font-bold leading-[1.22] lg:leading-[1.28] tracking-[1.5px] lg:tracking-[2.5px] text-white drop-shadow-[0_2px_18px_rgba(0,0,0,0.45)]">
                    {scene.headline}
                  </TitleTag>

                  <p className="mt-4 max-w-[720px] text-[12px] sm:text-[14px] font-normal tracking-[1.2px] leading-[1.7] text-white/90">
                    {scene.subtitle}
                  </p>

                  <div className="mt-4 flex flex-wrap items-center justify-center gap-2">
                    {scene.pills.map((pill) => (
                      <span
                        key={pill}
                        className="rounded-full bg-white/12 px-3.5 py-1 text-[11px] font-bold tracking-wide text-white/95"
                      >
                        {pill}
                      </span>
                    ))}
                  </div>
                </div>
              );
            })}
          </div>

          {/* Always-accessible Conversion CTA */}
          <div className="mt-8 flex flex-wrap items-center justify-center gap-4">
            <CtaButton
              href="/#contacto"
              label="Agendar Evaluación"
              variant="cyan"
            />
            <a
              href="#nosotros"
              className="inline-flex items-center gap-1.5 rounded-full border border-white/30 bg-black/30 px-5 py-3 text-[11px] font-bold uppercase tracking-[2px] text-white/90 transition hover:border-white hover:bg-white/10"
            >
              <span>Saltar recorrido</span>
              <ChevronDown className="h-3.5 w-3.5" aria-hidden="true" />
            </a>
          </div>
        </div>

        {/* Scene Step Selector & Progress Rail */}
        <div className="absolute bottom-6 inset-x-0 z-20 mx-auto flex max-w-[680px] flex-col items-center gap-3 px-5">
          <div className="flex items-center gap-2 sm:gap-3">
            {WORLD_SCENES.map((scene, idx) => {
              const isCurrent = idx === activeIndex;
              return (
                <button
                  key={scene.id}
                  type="button"
                  onClick={() => jumpToScene(idx)}
                  aria-label={`Ir a escena ${scene.step}: ${scene.eyebrow}`}
                  aria-current={isCurrent ? "step" : undefined}
                  className={`cursor-pointer rounded-full px-3 py-1 text-[10px] font-bold uppercase tracking-[2px] transition-all ${
                    isCurrent
                      ? "bg-[#00A1BF] text-white shadow-sm"
                      : "bg-white/12 text-white/70 hover:bg-white/25 hover:text-white"
                  }`}
                >
                  {scene.step}
                </button>
              );
            })}
          </div>

          <div
            aria-hidden="true"
            className="h-[2px] w-full max-w-[320px] overflow-hidden rounded-full bg-white/20"
          >
            <div
              className="h-full bg-[#00A1BF] transition-[width] duration-75"
              style={{ width: `${Math.max(8, progress * 100)}%` }}
            />
          </div>
        </div>
      </div>
    </section>
  );
}
