import { Heart, ShieldCheck, Smile } from "lucide-react";
import { WHY_CHOOSE_ITEMS } from "@/data/clinic-data";
import { SectionHeading } from "./SectionHeading";

const ICONS = {
  experts: Smile,
  care: Heart,
  results: ShieldCheck,
} as const;

export function WhyChooseSection() {
  return (
    <section id="por-que-elegirnos" className="w-full py-20">
      <div className="mx-auto flex max-w-[1220px] flex-col items-center gap-14 px-5">
        <div className="flex max-w-[660px] flex-col items-center gap-5 text-center">
          <SectionHeading
            badge="Por qué elegirnos"
            title="Resultados Armónicos, Respaldo Médico Real"
            align="center"
          />
          <p className="text-[15px] leading-[1.9] text-[#636363]">
            Nuestros profesionales trabajan con protocolos clínicos basados en
            evidencia, pensados para cuidar tu salud dérmica y lograr resultados
            sostenibles en el tiempo.
          </p>
        </div>

        <div className="grid w-full grid-cols-1 divide-y divide-[#DEDEDE] md:grid-cols-3 md:divide-x md:divide-y-0">
          {WHY_CHOOSE_ITEMS.map((item) => {
            const Icon = ICONS[item.id as keyof typeof ICONS];
            return (
              <div
                key={item.id}
                className="flex flex-col items-center px-6 py-8 text-center md:px-10 md:py-4"
              >
                <div className="mb-5 flex h-12 w-12 items-center justify-center rounded-full bg-[#00A1BF]/10 text-[#00A1BF]">
                  <Icon className="h-7 w-7 stroke-[1.75]" aria-hidden="true" />
                </div>
                <h3 className="text-[18px] font-bold text-[#4A4A4B]">
                  {item.title}
                </h3>
                <p className="mt-3 max-w-[290px] text-[14px] leading-[1.85] text-[#636363]">
                  {item.description}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
