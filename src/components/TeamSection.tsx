"use client";

import { useState } from "react";
import Image from "next/image";
import { ArrowLeft, ArrowRight } from "lucide-react";
import { TEAM_MEMBERS } from "@/data/clinic-data";
import { SectionHeading } from "./SectionHeading";

export function TeamSection() {
  const [index, setIndex] = useState(0);
  const current = TEAM_MEMBERS[index];

  const handlePrev = () => {
    setIndex((prev) => (prev - 1 + TEAM_MEMBERS.length) % TEAM_MEMBERS.length);
  };

  const handleNext = () => {
    setIndex((prev) => (prev + 1) % TEAM_MEMBERS.length);
  };

  return (
    <section id="equipo" className="w-full py-20">
      <div className="mx-auto grid max-w-[1220px] grid-cols-1 gap-10 px-5 lg:grid-cols-12 lg:gap-12">
        {/* Left Sticky Info Column */}
        <div className="flex flex-col justify-between gap-8 lg:col-span-4">
          <SectionHeading
            badge="Nuestros Médicos"
            title="Conoce a Nuestros Especialistas"
            align="left"
          />

          <div className="flex flex-col gap-3">
            <p className="text-[14px] leading-[1.85] text-[#636363]">
              Nuestros especialistas cuentan con acreditación vigente en la
              Superintendencia de Salud y certificaciones de postgrado,
              garantizando ética médica, criterio estético y seguridad clínica.
            </p>
            <div className="flex items-center gap-2 pt-2">
              {TEAM_MEMBERS.map((member, idx) => (
                <button
                  key={member.id}
                  type="button"
                  onClick={() => setIndex(idx)}
                  aria-label={`Ver a ${member.name}`}
                  className={`h-2.5 rounded-full transition-all duration-300 cursor-pointer ${
                    idx === index
                      ? "w-8 bg-[#00A1BF]"
                      : "w-2.5 bg-[#DEDEDE] hover:bg-[#00A1BF]/50"
                  }`}
                />
              ))}
            </div>
          </div>
        </div>

        {/* Right Carousel Card */}
        <div className="flex flex-col gap-5 lg:col-span-8">
          <div className="flex flex-col justify-between gap-2 sm:flex-row sm:items-baseline">
            <div>
              <h3 className="font-display text-[28px] sm:text-[32px] font-bold text-[#4A4A4B]">
                {current.name}
              </h3>
              <p className="mt-1 text-xs text-[#636363]">
                {current.registry} · {current.experience}
              </p>
            </div>
            <span className="text-[12px] font-bold uppercase tracking-[2.4px] text-[#4A4A4B]">
              {current.role}
            </span>
          </div>

          <div className="relative h-[360px] sm:h-[440px] w-full overflow-hidden rounded-[20px] bg-[#DEDEDE]">
            <Image
              key={current.image}
              src={current.image}
              alt={`${current.name} - ${current.role}`}
              fill
              sizes="(max-width: 1024px) 100vw, 66vw"
              className="object-cover object-top transition-opacity duration-300"
            />
            <div className="pointer-events-none absolute inset-x-0 bottom-0 bg-gradient-to-t from-black/65 via-black/20 to-transparent p-6 pt-16">
              <p className="max-w-[560px] text-sm leading-relaxed text-white/95">
                {current.bio}
              </p>
            </div>

            <button
              type="button"
              onClick={handlePrev}
              aria-label="Especialista anterior"
              className="btn-press absolute left-4 top-1/2 z-20 -translate-y-1/2 flex h-11 w-11 items-center justify-center rounded-full bg-white/85 text-[#4A4A4B] backdrop-blur-sm transition hover:bg-white cursor-pointer"
            >
              <ArrowLeft className="h-4 w-4" aria-hidden="true" />
            </button>
            <button
              type="button"
              onClick={handleNext}
              aria-label="Siguiente especialista"
              className="btn-press absolute right-4 top-1/2 z-20 -translate-y-1/2 flex h-11 w-11 items-center justify-center rounded-full bg-white/85 text-[#4A4A4B] backdrop-blur-sm transition hover:bg-white cursor-pointer"
            >
              <ArrowRight className="h-4 w-4" aria-hidden="true" />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
