"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import { ArrowUpRight, Clock, CreditCard, X } from "lucide-react";
import {
  formatClp,
  SERVICES_DATA,
  type ServiceCategory,
} from "@/data/clinic-data";
import { CtaButton } from "./CtaButton";
import { SectionHeading } from "./SectionHeading";

export function ServicesSection() {
  const [selectedService, setSelectedService] =
    useState<ServiceCategory | null>(null);
  const [showFullTable, setShowFullTable] = useState(false);

  useEffect(() => {
    if (!selectedService) return;
    const onKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") setSelectedService(null);
    };
    window.addEventListener("keydown", onKeyDown);
    return () => window.removeEventListener("keydown", onKeyDown);
  }, [selectedService]);

  return (
    <section id="servicios" className="w-full pt-8 pb-20">
      <div className="mx-auto flex max-w-[1220px] flex-col gap-6 px-5 pb-10 sm:flex-row sm:items-end sm:justify-between">
        <SectionHeading
          badge="Servicios Principales"
          title="Arte en Estética, Excelencia en Cada Cuidado"
          align="left"
          className="max-w-[660px]"
        />
        <button
          type="button"
          aria-expanded={showFullTable}
          onClick={() => setShowFullTable((prev) => !prev)}
          className="btn-press inline-flex items-center gap-2 self-start rounded-full border border-[#00A1BF] bg-white px-5 py-2.5 text-[11px] font-bold uppercase tracking-[2px] text-[#00A1BF] transition hover:bg-[#00A1BF] hover:text-white cursor-pointer sm:self-end scroll-mt-28"
        >
          <span>
            {showFullTable
              ? "Ocultar aranceles CLP"
              : "Ver aranceles en CLP"}
          </span>
          <ArrowUpRight className="h-3.5 w-3.5" aria-hidden="true" />
        </button>
      </div>

      {/* 4-column full-bleed strip replicating Beautiva Framer Services */}
      <div className="grid w-full grid-cols-1 sm:grid-cols-2 lg:grid-cols-4">
        {SERVICES_DATA.map((service) => (
          <button
            key={service.id}
            type="button"
            onClick={() => setSelectedService(service)}
            className="group relative flex h-[430px] sm:h-[490px] w-full flex-col items-center justify-center overflow-hidden bg-black px-6 text-center text-white cursor-pointer focus-visible:z-10"
          >
            <Image
              src={service.image}
              alt={service.title}
              fill
              sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
              className="object-cover object-center transition-transform duration-500 ease-out group-hover:scale-[1.04]"
            />
            <div className="absolute inset-0 bg-black/42 transition-colors duration-300 group-hover:bg-black/55" />

            <div className="relative z-10 flex flex-col items-center gap-3">
              <span className="text-[28px] font-normal tracking-[2px] text-white/85">
                {service.number}
              </span>
              <h3 className="font-display text-[22px] sm:text-[21px] lg:text-[20px] xl:text-[24px] font-bold uppercase leading-[1.32] tracking-[1px] xl:tracking-[1.5px] text-white">
                {service.title}
              </h3>
              <span className="mt-2 inline-flex items-center gap-1.5 rounded-full border border-white/45 bg-black/35 px-4 py-1 text-[11px] font-bold uppercase tracking-[1.6px] text-white backdrop-blur-sm transition-colors group-hover:border-[#00A1BF] group-hover:bg-[#00A1BF]">
                Desde {formatClp(service.startingPriceClp)}
              </span>
            </div>
          </button>
        ))}
      </div>

      {/* Optional expandable full CLP pricing matrix */}
      {showFullTable && (
        <div className="mx-auto mt-10 max-w-[1220px] px-5">
          <div className="rounded-[20px] bg-white p-6 sm:p-8 shadow-[0_12px_36px_rgba(0,0,0,0.05)] border border-[#DEDEDE]/80">
            <div className="flex flex-col gap-2 border-b border-[#DEDEDE] pb-5 sm:flex-row sm:items-center sm:justify-between">
              <div>
                <h3 className="font-display text-[24px] font-bold text-[#4A4A4B]">
                  Aranceles Referenciales en Pesos Chilenos (CLP)
                </h3>
                <p className="mt-1 text-sm text-[#636363]">
                  Valores con IVA incluido. Paga vía Webpay Plus hasta en 12
                  cuotas sin interés.
                </p>
              </div>
              <span className="inline-flex items-center gap-2 rounded-full bg-[#00A1BF]/10 px-4 py-1.5 text-xs font-bold text-[#007186]">
                <CreditCard className="h-4 w-4" aria-hidden="true" />
                Webpay · Redcompra · 12 Cuotas
              </span>
            </div>

            <div className="mt-6 grid grid-cols-1 gap-8 md:grid-cols-2">
              {SERVICES_DATA.map((cat) => (
                <div key={cat.id} className="flex flex-col gap-3">
                  <div className="flex items-center justify-between border-b border-[#DEDEDE]/70 pb-2">
                    <h4 className="font-display text-[19px] font-bold text-[#4A4A4B]">
                      {cat.number}. {cat.title}
                    </h4>
                  </div>
                  <ul className="flex flex-col divide-y divide-[#F5F5F5]">
                    {cat.treatments.map((t) => (
                      <li
                        key={t.name}
                        className="flex items-start justify-between gap-4 py-2.5 text-sm"
                      >
                        <div>
                          <p className="font-bold text-[#4A4A4B]">{t.name}</p>
                          <p className="text-xs text-[#636363]">{t.duration}</p>
                        </div>
                        <div className="shrink-0 text-right">
                          <p className="font-bold text-[#007186] tabular-nums">
                            {formatClp(t.priceClp)}
                          </p>
                          {t.priceNote && (
                            <p className="text-[11px] text-[#636363]">
                              {t.priceNote}
                            </p>
                          )}
                        </div>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        </div>
      )}

      {/* Interactive Service Detail Modal */}
      {selectedService && (
        <div
          role="dialog"
          aria-modal="true"
          aria-labelledby="modal-servicio-titulo"
          className="fixed inset-0 z-[80] flex items-center justify-center bg-black/65 p-4 backdrop-blur-xs"
          onClick={() => setSelectedService(null)}
        >
          <div
            className="relative max-h-[90vh] w-full max-w-[680px] overflow-y-auto rounded-[24px] bg-white p-6 sm:p-8 shadow-2xl"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              type="button"
              onClick={() => setSelectedService(null)}
              aria-label="Cerrar detalle de servicio"
              className="absolute right-5 top-5 flex h-10 w-10 items-center justify-center rounded-full border border-[#DEDEDE] text-[#4A4A4B] transition hover:border-[#00A1BF] hover:text-[#00A1BF] cursor-pointer"
            >
              <X className="h-5 w-5" aria-hidden="true" />
            </button>

            <span className="inline-block rounded-full border border-[#00A1BF]/50 px-3.5 py-1 text-[11px] font-bold uppercase tracking-[2px] text-[#00A1BF]">
              Servicio {selectedService.number}
            </span>
            <h3
              id="modal-servicio-titulo"
              className="mt-3 font-display text-[28px] sm:text-[34px] font-bold text-[#4A4A4B]"
            >
              {selectedService.title}
            </h3>
            <p className="mt-2 text-[15px] leading-relaxed text-[#636363]">
              {selectedService.description}
            </p>

            <div className="mt-6 flex flex-col divide-y divide-[#DEDEDE]/80 rounded-2xl border border-[#DEDEDE] bg-[#F5F5F5]/60 px-5">
              {selectedService.treatments.map((item) => (
                <div
                  key={item.name}
                  className="flex flex-col gap-1.5 py-4 sm:flex-row sm:items-center sm:justify-between"
                >
                  <div className="pr-4">
                    <p className="text-[15px] font-bold text-[#4A4A4B]">
                      {item.name}
                    </p>
                    <p className="mt-0.5 text-[13px] text-[#636363]">
                      {item.summary}
                    </p>
                    <span className="mt-1 inline-flex items-center gap-1 text-[11px] font-bold uppercase tracking-[1px] text-[#636363]">
                      <Clock className="h-3.5 w-3.5 text-[#00A1BF]" aria-hidden="true" />
                      {item.duration}
                    </span>
                  </div>
                  <div className="shrink-0 sm:text-right">
                    <p className="text-[16px] font-bold text-[#007186] tabular-nums">
                      {formatClp(item.priceClp)}
                    </p>
                    {item.priceNote && (
                      <p className="text-[11px] text-[#636363]">
                        {item.priceNote}
                      </p>
                    )}
                  </div>
                </div>
              ))}
            </div>

            <div className="mt-7 flex flex-wrap items-center justify-between gap-4">
              <p className="text-xs text-[#636363]">
                Aceptamos Webpay Plus, Redcompra y hasta 12 cuotas sin interés.
              </p>
              <CtaButton
                href="/#contacto"
                onClick={() => setSelectedService(null)}
                label="Agendar Evaluación"
                variant="cyan"
              />
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
