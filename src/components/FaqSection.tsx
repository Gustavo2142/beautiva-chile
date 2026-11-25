"use client";

import { useState } from "react";
import Image from "next/image";
import { ChevronDown } from "lucide-react";
import { FAQ_ITEMS } from "@/data/clinic-data";
import { SectionHeading } from "./SectionHeading";

export function FaqSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <section id="faq" className="w-full py-20">
      <div className="mx-auto grid max-w-[1220px] grid-cols-1 items-start gap-12 px-5 lg:grid-cols-12">
        {/* Left portrait photo matching Framer FAQ */}
        <div className="relative aspect-[4/5] w-full overflow-hidden rounded-[20px] bg-[#DEDEDE] lg:col-span-5">
          <Image
            src="/images/faq-portrait.jpg"
            alt="Evaluación facial médica en Beautiva Chile"
            fill
            sizes="(max-width: 1024px) 100vw, 42vw"
            className="object-cover object-center"
          />
        </div>

        {/* Right FAQ list */}
        <div className="flex flex-col gap-8 lg:col-span-7">
          <SectionHeading
            badge="Preguntas"
            title="Preguntas Frecuentes"
            align="left"
          />

          <div className="flex flex-col divide-y divide-[#DEDEDE]">
            {FAQ_ITEMS.map((item, idx) => {
              const isOpen = openIndex === idx;
              return (
                <div key={item.number} className="py-4">
                  <button
                    type="button"
                    onClick={() => setOpenIndex(isOpen ? null : idx)}
                    aria-expanded={isOpen}
                    className="flex w-full items-center justify-between gap-4 py-2 text-left cursor-pointer group"
                  >
                    <div className="flex items-center gap-4">
                      <span
                        className={`flex h-9 w-9 shrink-0 items-center justify-center rounded-full text-sm font-bold transition-colors duration-200 ${
                          isOpen
                            ? "bg-[#00A1BF] text-white"
                            : "bg-[#DEDEDE] text-[#4A4A4B] group-hover:bg-[#00A1BF]/15"
                        }`}
                      >
                        {item.number}
                      </span>
                      <span className="text-[16px] font-bold text-[#4A4A4B] transition-colors group-hover:text-[#00A1BF]">
                        {item.question}
                      </span>
                    </div>
                    <ChevronDown
                      className={`h-5 w-5 shrink-0 text-[#636363] transition-transform duration-200 ${
                        isOpen ? "rotate-180 text-[#00A1BF]" : ""
                      }`}
                      aria-hidden="true"
                    />
                  </button>

                  {isOpen && (
                    <div className="pl-[52px] pr-6 pt-2 pb-2 text-[14px] leading-[1.85] text-[#636363]">
                      {item.answer}
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
