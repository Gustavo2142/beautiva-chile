"use client";

import { useState } from "react";
import Image from "next/image";
import { ArrowRight, CheckCircle2 } from "lucide-react";

export function NewsletterSection() {
  const [email, setEmail] = useState("");
  const [error, setError] = useState("");
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const trimmed = email.trim();
    if (!trimmed || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(trimmed)) {
      setError("Ingresa un correo electrónico válido.");
      return;
    }
    setError("");
    setSubmitted(true);
  };

  return (
    <section
      aria-label="Suscripción al boletín"
      className="grid w-full grid-cols-1 lg:grid-cols-2"
    >
      {/* Left grey block matching Framer Newsletter */}
      <div className="flex flex-col justify-center bg-[#DEDEDE] px-6 py-20 sm:px-14 lg:px-20">
        <div className="mx-auto w-full max-w-[460px]">
          <h2 className="font-display text-[32px] sm:text-[40px] font-bold leading-[1.25] text-[#4A4A4B]">
            Suscríbete a nuestro boletín
          </h2>
          <p className="mt-4 text-[15px] leading-[1.7] text-[#636363]">
            y accede a una Evaluación Facial + Diagnóstico de Piel de cortesía
            al realizar tu primer tratamiento (valorada en{" "}
            <strong className="text-[#4A4A4B]">$65.000 CLP</strong>).
          </p>

          {submitted ? (
            <div className="mt-8 flex items-center gap-3 rounded-2xl bg-white p-4 text-sm text-[#4A4A4B] shadow-sm">
              <CheckCircle2
                className="h-5 w-5 shrink-0 text-[#00A1BF]"
                aria-hidden="true"
              />
              <p>
                Listo. Enviamos tu código de cortesía a{" "}
                <strong className="text-[#007186]">{email}</strong>.
              </p>
            </div>
          ) : (
            <form onSubmit={handleSubmit} noValidate className="mt-8">
              <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:rounded-full sm:bg-white sm:p-1.5 sm:shadow-sm">
                <label htmlFor="newsletter-email" className="sr-only">
                  Correo electrónico
                </label>
                <input
                  id="newsletter-email"
                  type="email"
                  value={email}
                  onChange={(e) => {
                    setEmail(e.target.value);
                    if (error) setError("");
                  }}
                  placeholder="tu.nombre@correo.cl"
                  className="w-full rounded-full bg-white px-5 py-3 text-sm text-[#4A4A4B] placeholder:text-[#636363]/70 focus:outline-none"
                />
                <button
                  type="submit"
                  className="btn-press inline-flex shrink-0 items-center justify-center gap-2 rounded-full bg-[#00A1BF] px-6 py-3 text-[11px] font-bold uppercase tracking-[2px] text-white transition hover:bg-[#007186] min-h-[44px] cursor-pointer"
                >
                  <span>Suscribirme</span>
                  <ArrowRight className="h-3.5 w-3.5" aria-hidden="true" />
                </button>
              </div>
              {error && (
                <p className="mt-2.5 pl-4 text-xs font-bold text-[#9B1C1C]">
                  {error}
                </p>
              )}
            </form>
          )}
        </div>
      </div>

      {/* Right full-bleed specialist photo */}
      <div className="relative min-h-[360px] lg:min-h-[480px] w-full bg-[#4A4A4B]">
        <Image
          src="/images/newsletter-specialist.jpg"
          alt="Especialista médica en Beautiva Chile"
          fill
          sizes="(max-width: 1024px) 100vw, 50vw"
          className="object-cover object-top"
        />
      </div>
    </section>
  );
}
