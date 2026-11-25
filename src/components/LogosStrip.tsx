import { PARTNER_LOGOS } from "@/data/clinic-data";

export function LogosStrip() {
  const repeated = [...PARTNER_LOGOS, ...PARTNER_LOGOS];

  return (
    <section
      aria-label="Alianzas y respaldos médicos"
      className="w-full border-y border-[#DEDEDE]/80 bg-[#F5F5F5] py-7"
    >
      <div className="mx-auto flex max-w-[1280px] flex-col gap-5 px-5">
        <p className="text-[12px] font-bold uppercase tracking-[1.6px] text-[#636363]">
          Respaldo y Certificaciones
        </p>
        <div className="marquee-wrapper relative overflow-hidden">
          <div
            aria-hidden="true"
            className="pointer-events-none absolute inset-y-0 left-0 z-10 w-12 bg-gradient-to-r from-[#F5F5F5] to-transparent"
          />
          <div
            aria-hidden="true"
            className="pointer-events-none absolute inset-y-0 right-0 z-10 w-12 bg-gradient-to-l from-[#F5F5F5] to-transparent"
          />
          <div className="animate-marquee items-center gap-14">
            {repeated.map((partner, idx) => (
              <div
                key={`${partner.name}-${idx}`}
                className="flex shrink-0 items-center gap-3 px-2 opacity-75 transition-opacity hover:opacity-100"
              >
                <span className="h-2 w-2 rounded-full bg-[#00A1BF]" />
                <div className="flex flex-col">
                  <span className="font-display text-[17px] font-bold tracking-[0.8px] text-[#4A4A4B]">
                    {partner.name}
                  </span>
                  <span className="text-[10px] font-bold uppercase tracking-[1.8px] text-[#636363]">
                    {partner.subtitle}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
