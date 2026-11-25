import { CtaButton } from "@/components/CtaButton";
import { Footer } from "@/components/Footer";
import { Navbar } from "@/components/Navbar";

export default function NotFoundPage() {
  return (
    <>
      <Navbar />
      <main
        id="contenido-principal"
        className="flex flex-1 flex-col items-center justify-center px-5 py-24 text-center"
      >
        <p className="font-display text-[120px] sm:text-[180px] lg:text-[220px] font-semibold leading-none tracking-[8px] text-[#00A1BF]/20 select-none">
          404
        </p>
        <h1 className="mt-2 font-display text-[32px] sm:text-[44px] font-bold text-[#4A4A4B]">
          Página no encontrada
        </h1>
        <p className="mt-3 max-w-[480px] text-[15px] leading-[1.8] text-[#636363]">
          El enlace que buscas pudo haber cambiado o ya no está disponible.
          Vuelve al inicio para conocer nuestros tratamientos y horarios.
        </p>
        <div className="mt-8">
          <CtaButton href="/" label="Volver al Inicio" variant="cyan" />
        </div>
      </main>
      <Footer />
    </>
  );
}
