import Image from "next/image";
import { CtaButton } from "./CtaButton";
import { SectionHeading } from "./SectionHeading";

export function AboutSection() {
  return (
    <section id="nosotros" className="w-full pt-20 pb-10">
      <div className="mx-auto flex max-w-[1220px] flex-col items-center gap-14 px-5">
        <div className="flex max-w-[680px] flex-col items-center gap-7 text-center">
          <SectionHeading
            badge="Nosotros"
            title="Donde la Belleza se Une con la Precisión Médica"
            align="center"
          />
          <p className="text-[15px] leading-[1.9] text-[#636363]">
            Bienvenido a Beautiva Chile. Nuestro equipo médico combina criterio
            anatómico, tecnología de vanguardia e insumos certificados para
            acompañar cada procedimiento con cercanía, seguridad clínica y
            resultados armónicos que respetan tus rasgos naturales.
          </p>
          <CtaButton
            href="/#contacto"
            label="Agendar Evaluación"
            variant="cyan"
          />
        </div>

        {/* Asymmetric 2-column media layout matching Framer About Us */}
        <div className="grid w-full grid-cols-1 items-center gap-8 md:grid-cols-12">
          <div className="relative aspect-[4/5] w-full overflow-hidden rounded-2xl bg-[#DEDEDE] md:col-span-6">
            <Image
              src="/images/about-video-poster.jpg"
              alt="Tratamiento médico facial de alta precisión en Beautiva Chile"
              fill
              sizes="(max-width: 768px) 100vw, 50vw"
              className="object-cover object-center"
            />
          </div>
          <div className="relative aspect-[4/3] w-full overflow-hidden rounded-2xl bg-[#DEDEDE] md:col-span-6">
            <Image
              src="/images/about-clinic.jpg"
              alt="Recepción clínica moderna en Beautiva Chile Santiago"
              fill
              sizes="(max-width: 768px) 100vw, 50vw"
              className="object-cover"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
