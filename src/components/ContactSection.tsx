"use client";

import { useState } from "react";
import Image from "next/image";
import {
  CheckCircle2,
  Clock,
  MapPin,
} from "lucide-react";
import {
  FacebookIcon,
  InstagramIcon,
  YoutubeIcon,
} from "./SocialIcons";
import {
  BRANCH_LOCATIONS,
  formatClp,
  SERVICES_DATA,
} from "@/data/clinic-data";
import { CtaButton } from "./CtaButton";

interface FormErrors {
  name?: string;
  email?: string;
  phone?: string;
  service?: string;
}

export function ContactSection() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [service, setService] = useState("");
  const [message, setMessage] = useState("");
  const [errors, setErrors] = useState<FormErrors>({});
  const [submitted, setSubmitted] = useState(false);

  const validate = (): FormErrors => {
    const next: FormErrors = {};
    if (!name.trim()) next.name = "Ingresa tu nombre completo.";
    if (!email.trim() || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email.trim())) {
      next.email = "Ingresa un correo electrónico válido.";
    }
    if (!phone.trim() || phone.trim().length < 8) {
      next.phone = "Ingresa un teléfono chileno válido (ej. +56 9 8420 3150).";
    }
    if (!service) next.service = "Selecciona el tratamiento de interés.";
    return next;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const nextErrors = validate();
    if (Object.keys(nextErrors).length > 0) {
      setErrors(nextErrors);
      return;
    }
    setErrors({});
    setSubmitted(true);
  };

  return (
    <section
      id="contacto"
      aria-label="Reserva de horas y sucursales"
      className="section-defer grid w-full grid-cols-1 lg:grid-cols-2"
    >
      {/* Left photo-backed booking form matching Beautiva Framer Contact */}
      <div className="relative flex flex-col justify-center overflow-hidden bg-black px-6 py-20 text-white sm:px-14 lg:px-20">
        <Image
          src="/images/blog-1.jpg"
          alt="Atención personalizada en Beautiva Chile"
          fill
          sizes="(max-width: 1024px) 100vw, 50vw"
          className="object-cover object-center opacity-40"
        />
        <div className="absolute inset-0 bg-gradient-to-br from-black/75 via-black/60 to-black/75" />

        <div className="relative z-10 mx-auto w-full max-w-[520px]">
          <h2 className="font-display text-[32px] sm:text-[42px] font-bold leading-[1.2] text-white">
            Comienza tu Transformación
            <span className="block">Agenda Hoy</span>
          </h2>
          <p className="mt-4 text-[14px] leading-[1.8] text-white/85">
            Nuestro equipo médico está listo para asesorarte con total
            confidencialidad. Solicita tu evaluación presencial en Providencia o
            Vitacura y conoce el plan ideal para ti.
          </p>

          {submitted ? (
            <div className="mt-8 rounded-2xl bg-white p-6 text-[#4A4A4B] shadow-xl">
              <div className="flex items-start gap-3">
                <CheckCircle2
                  className="mt-0.5 h-6 w-6 shrink-0 text-[#00A1BF]"
                  aria-hidden="true"
                />
                <div>
                  <h3 className="font-display text-xl font-bold text-[#4A4A4B]">
                    Solicitud recibida
                  </h3>
                  <p className="mt-2 text-sm leading-relaxed text-[#636363]">
                    Gracias, <strong>{name}</strong>. Coordinaremos tu hora para{" "}
                    <strong>{service}</strong> al teléfono{" "}
                    <strong>{phone}</strong> o al correo{" "}
                    <strong>{email}</strong> dentro del mismo día hábil.
                  </p>
                  <button
                    type="button"
                    onClick={() => {
                      setSubmitted(false);
                      setName("");
                      setEmail("");
                      setPhone("");
                      setService("");
                      setMessage("");
                    }}
                    className="mt-4 text-xs font-bold uppercase tracking-[1.8px] text-[#00A1BF] hover:text-[#007186] cursor-pointer"
                  >
                    Enviar otra consulta
                  </button>
                </div>
              </div>
            </div>
          ) : (
            <form onSubmit={handleSubmit} noValidate className="mt-8 space-y-4">
              <div>
                <label
                  htmlFor="contact-name"
                  className="mb-1.5 block text-xs font-bold text-white/95"
                >
                  Nombre
                </label>
                <input
                  id="contact-name"
                  type="text"
                  value={name}
                  onChange={(e) => {
                    setName(e.target.value);
                    if (errors.name) setErrors({ ...errors, name: undefined });
                  }}
                  placeholder="Camila González"
                  className="w-full rounded-full bg-white px-5 py-3 text-sm text-[#4A4A4B] placeholder:text-[#636363]/70 focus:outline-none"
                />
                {errors.name && (
                  <p className="mt-1 pl-4 text-xs font-bold text-[#FCA5A5]">
                    {errors.name}
                  </p>
                )}
              </div>

              <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
                <div>
                  <label
                    htmlFor="contact-email"
                    className="mb-1.5 block text-xs font-bold text-white/95"
                  >
                    Correo electrónico
                  </label>
                  <input
                    id="contact-email"
                    type="email"
                    value={email}
                    onChange={(e) => {
                      setEmail(e.target.value);
                      if (errors.email)
                        setErrors({ ...errors, email: undefined });
                    }}
                    placeholder="camila@correo.cl"
                    className="w-full rounded-full bg-white px-5 py-3 text-sm text-[#4A4A4B] placeholder:text-[#636363]/70 focus:outline-none"
                  />
                  {errors.email && (
                    <p className="mt-1 pl-4 text-xs font-bold text-[#FCA5A5]">
                      {errors.email}
                    </p>
                  )}
                </div>

                <div>
                  <label
                    htmlFor="contact-phone"
                    className="mb-1.5 block text-xs font-bold text-white/95"
                  >
                    Teléfono
                  </label>
                  <input
                    id="contact-phone"
                    type="tel"
                    value={phone}
                    onChange={(e) => {
                      setPhone(e.target.value);
                      if (errors.phone)
                        setErrors({ ...errors, phone: undefined });
                    }}
                    placeholder="+56 9 8420 3150"
                    className="w-full rounded-full bg-white px-5 py-3 text-sm text-[#4A4A4B] placeholder:text-[#636363]/70 focus:outline-none"
                  />
                  {errors.phone && (
                    <p className="mt-1 pl-4 text-xs font-bold text-[#FCA5A5]">
                      {errors.phone}
                    </p>
                  )}
                </div>
              </div>

              <div>
                <label
                  htmlFor="contact-service"
                  className="mb-1.5 block text-xs font-bold text-white/95"
                >
                  Servicio
                </label>
                <select
                  id="contact-service"
                  value={service}
                  onChange={(e) => {
                    setService(e.target.value);
                    if (errors.service)
                      setErrors({ ...errors, service: undefined });
                  }}
                  className="w-full rounded-full bg-white px-5 py-3 text-sm text-[#4A4A4B] focus:outline-none cursor-pointer"
                >
                  <option value="">Selecciona un tratamiento...</option>
                  {SERVICES_DATA.map((cat) => (
                    <option key={cat.id} value={cat.title}>
                      {cat.title} (Desde {formatClp(cat.startingPriceClp)})
                    </option>
                  ))}
                  <option value="Evaluación Médica Inicial">
                    Evaluación Médica Facial ($25.000 CLP abonables)
                  </option>
                </select>
                {errors.service && (
                  <p className="mt-1 pl-4 text-xs font-bold text-[#FCA5A5]">
                    {errors.service}
                  </p>
                )}
              </div>

              <div>
                <label
                  htmlFor="contact-message"
                  className="mb-1.5 block text-xs font-bold text-white/95"
                >
                  Mensaje
                </label>
                <textarea
                  id="contact-message"
                  rows={4}
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                  placeholder="Cuéntanos qué sede prefieres (Providencia o Vitacura) y tus horarios disponibles..."
                  className="w-full rounded-3xl bg-white px-5 py-3.5 text-sm text-[#4A4A4B] placeholder:text-[#636363]/70 focus:outline-none"
                />
              </div>

              <div className="pt-2">
                <CtaButton
                  type="submit"
                  label="Enviar Solicitud"
                  variant="cyan"
                />
              </div>
            </form>
          )}
        </div>
      </div>

      {/* Right grey panel: Chilean Locations & Opening Hours */}
      <div className="flex flex-col justify-center bg-[#DEDEDE] px-6 py-20 sm:px-14 lg:px-20">
        <div className="mx-auto flex w-full max-w-[540px] flex-col gap-12">
          <h2 className="font-display text-[32px] sm:text-[42px] font-bold leading-[1.2] text-[#4A4A4B]">
            Reserva tu hora
          </h2>

          {/* Sucursales */}
          <div className="flex flex-col gap-6">
            <div className="flex items-center gap-3.5">
              <span className="flex h-10 w-10 items-center justify-center rounded-full bg-[#00A1BF] text-white">
                <MapPin className="h-5 w-5" aria-hidden="true" />
              </span>
              <h3 className="font-display text-[24px] font-bold text-[#4A4A4B]">
                Sucursales en Santiago
              </h3>
            </div>

            <div className="grid grid-cols-1 gap-8 sm:grid-cols-2">
              {BRANCH_LOCATIONS.map((branch) => (
                <div key={branch.id} className="flex flex-col gap-2 text-sm">
                  <h4 className="text-[16px] font-bold text-[#4A4A4B]">
                    {branch.name}
                  </h4>
                  <p className="text-[#636363]">{branch.address}</p>
                  <p className="text-[#636363]">{branch.commune}</p>
                  <a
                    href={branch.phoneHref}
                    className="mt-1 font-bold text-[#4A4A4B] hover:text-[#00A1BF]"
                  >
                    {branch.phone}
                  </a>
                  <a
                    href={`mailto:${branch.email}`}
                    className="text-[#636363] hover:text-[#00A1BF]"
                  >
                    {branch.email}
                  </a>
                  <div className="mt-2 flex items-center gap-3 text-[#4A4A4B]">
                    <a
                      href="https://youtube.com"
                      target="_blank"
                      rel="noreferrer"
                      aria-label={`YouTube ${branch.name}`}
                      className="transition hover:text-[#00A1BF]"
                    >
                      <YoutubeIcon className="h-4 w-4" />
                    </a>
                    <a
                      href="https://facebook.com"
                      target="_blank"
                      rel="noreferrer"
                      aria-label={`Facebook ${branch.name}`}
                      className="transition hover:text-[#00A1BF]"
                    >
                      <FacebookIcon className="h-4 w-4" />
                    </a>
                    <a
                      href="https://instagram.com"
                      target="_blank"
                      rel="noreferrer"
                      aria-label={`Instagram ${branch.name}`}
                      className="transition hover:text-[#00A1BF]"
                    >
                      <InstagramIcon className="h-4 w-4" />
                    </a>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Horarios */}
          <div className="flex flex-col gap-6">
            <div className="flex items-center gap-3.5">
              <span className="flex h-10 w-10 items-center justify-center rounded-full bg-[#00A1BF] text-white">
                <Clock className="h-5 w-5" aria-hidden="true" />
              </span>
              <h3 className="font-display text-[24px] font-bold text-[#4A4A4B]">
                Horarios de Atención
              </h3>
            </div>

            <div className="grid grid-cols-1 gap-8 sm:grid-cols-2">
              {BRANCH_LOCATIONS.map((branch) => (
                <div
                  key={`${branch.id}-hours`}
                  className="flex flex-col gap-1.5 text-xs"
                >
                  <h4 className="mb-1 text-[16px] font-bold text-[#4A4A4B]">
                    {branch.name}
                  </h4>
                  <p className="font-bold tracking-[0.5px] text-[#636363]">
                    {branch.hoursWeek}
                  </p>
                  <p className="font-bold tracking-[0.5px] text-[#636363]">
                    {branch.hoursSaturday}
                  </p>
                  <p className="font-bold tracking-[0.5px] text-[#636363]">
                    {branch.hoursSunday}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
