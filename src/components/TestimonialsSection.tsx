"use client";

import { useState } from "react";
import Image from "next/image";
import { Pause, Play, Star } from "lucide-react";
import { TESTIMONIALS } from "@/data/clinic-data";
import { SectionHeading } from "./SectionHeading";

export function TestimonialsSection() {
  const [paused, setPaused] = useState(false);
  const repeated = [...TESTIMONIALS, ...TESTIMONIALS];

  return (
    <section id="testimonios" className="w-full py-20">
      <div className="mx-auto flex max-w-[1220px] flex-col gap-6 px-5 pb-12 sm:flex-row sm:items-end sm:justify-between">
        <SectionHeading
          badge="Testimonios"
          title="Transformaciones reales de nuestros pacientes"
          align="left"
          className="max-w-[660px]"
        />
        <button
          type="button"
          onClick={() => setPaused((prev) => !prev)}
          aria-pressed={paused}
          aria-label={
            paused
              ? "Reanudar carrusel de testimonios"
              : "Pausar carrusel de testimonios"
          }
          className="inline-flex items-center gap-2 self-start rounded-full border border-[#DEDEDE] bg-white px-4 py-2 text-[11px] font-bold uppercase tracking-[1.8px] text-[#4A4A4B] transition hover:border-[#00A1BF] hover:text-[#00A1BF] cursor-pointer sm:self-end"
        >
          {paused ? (
            <Play className="h-3.5 w-3.5" aria-hidden="true" />
          ) : (
            <Pause className="h-3.5 w-3.5" aria-hidden="true" />
          )}
          <span>{paused ? "Reanudar" : "Pausar"}</span>
        </button>
      </div>

      <div
        className={`marquee-wrapper overflow-hidden ${
          paused ? "marquee-paused" : ""
        }`}
      >
        <div className="animate-marquee-slow gap-5 px-3">
          {repeated.map((item, idx) => (
            <article
              key={`${item.id}-${idx}`}
              className="flex w-[330px] sm:w-[400px] shrink-0 flex-col justify-between gap-6 rounded-[14px] border-l-[5px] border-l-[#00A1BF] bg-white p-7 shadow-[0_10px_28px_rgba(0,0,0,0.04)]"
            >
              <p className="text-[14px] sm:text-[15px] leading-[1.85] text-[#636363]">
                &ldquo;{item.quote}&rdquo;
              </p>

              <div className="flex items-center gap-4">
                <div className="relative h-14 w-14 shrink-0 overflow-hidden rounded-full bg-[#DEDEDE]">
                  <Image
                    src={item.avatar}
                    alt={item.author}
                    width={56}
                    height={56}
                    className="h-full w-full object-cover"
                  />
                </div>
                <div className="flex flex-col gap-1">
                  <div
                    className="flex items-center gap-1"
                    aria-label={`${item.rating} de 5 estrellas`}
                  >
                    {Array.from({ length: item.rating }).map((_, i) => (
                      <Star
                        key={i}
                        className="h-4 w-4 fill-[#F59E0B] text-[#F59E0B]"
                        aria-hidden="true"
                      />
                    ))}
                  </div>
                  <p className="text-sm font-bold text-[#4A4A4B]">
                    – {item.author}{" "}
                    <span className="font-normal text-[#636363]">
                      · {item.commune}
                    </span>
                  </p>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
