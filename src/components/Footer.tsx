import Link from "next/link";
import { Phone } from "lucide-react";
import { FacebookIcon, InstagramIcon, YoutubeIcon } from "./SocialIcons";
import { BRANCH_LOCATIONS, CLINIC_INFO, NAV_LINKS } from "@/data/clinic-data";
import { BeautivaLogo } from "./BeautivaLogo";
import { CtaButton } from "./CtaButton";

export function Footer() {
  const mainBranch = BRANCH_LOCATIONS[0];
  const quickLinks = [{ label: "Inicio", href: "/" }, ...NAV_LINKS];

  return (
    <footer className="w-full bg-black text-white">
      <div className="mx-auto max-w-[1220px] px-5 pt-20 pb-10">
        {/* Top Footer CTA */}
        <div className="flex flex-col items-center gap-8 pb-16 text-center">
          <h2 className="font-display max-w-[620px] text-[32px] sm:text-[42px] font-bold leading-[1.28] text-white">
            ¡Agenda tu evaluación en Beautiva Chile hoy!
          </h2>

          <div className="flex flex-wrap items-center justify-center gap-4">
            <a
              href={CLINIC_INFO.phoneHref}
              className="btn-press inline-flex min-h-[44px] items-center gap-3 rounded-full bg-white px-5 py-2.5 text-xs font-bold tracking-[1.2px] text-[#4A4A4B] transition hover:bg-[#F5F5F5]"
            >
              <span className="flex h-7 w-7 items-center justify-center rounded-full bg-black text-white">
                <Phone className="h-3.5 w-3.5" aria-hidden="true" />
              </span>
              <span>{CLINIC_INFO.phoneDisplay}</span>
            </a>

            <CtaButton
              href="/#contacto"
              label="Agendar Hora"
              variant="dark-outline"
            />
          </div>
        </div>

        <hr className="border-white/15" />

        {/* Middle 3-column Info */}
        <div className="grid grid-cols-1 gap-12 py-14 md:grid-cols-12">
          {/* Logo + Chilean Payment Options */}
          <div className="flex flex-col gap-8 md:col-span-4">
            <BeautivaLogo variant="light" />

            <div>
              <p className="text-xs font-bold uppercase tracking-[1.8px] text-white/70">
                Medios de Pago en Chile
              </p>
              <div className="mt-3 flex flex-wrap items-center gap-2.5">
                <span className="rounded-lg border border-white/20 bg-white/5 px-3 py-1.5 text-[11px] font-bold tracking-[0.8px] text-white">
                  Webpay Plus
                </span>
                <span className="rounded-lg border border-white/20 bg-white/5 px-3 py-1.5 text-[11px] font-bold tracking-[0.8px] text-white">
                  Redcompra
                </span>
                <span className="rounded-lg border border-white/20 bg-white/5 px-3 py-1.5 text-[11px] font-bold tracking-[0.8px] text-white">
                  Visa / Mastercard
                </span>
                <span className="rounded-lg border border-[#00A1BF]/50 bg-[#00A1BF]/15 px-3 py-1.5 text-[11px] font-bold tracking-[0.6px] text-[#7BE3F5]">
                  Hasta 12 cuotas sin interés
                </span>
              </div>
            </div>
          </div>

          {/* Quick Links 2-col grid */}
          <div className="md:col-span-4">
            <p className="text-sm font-bold text-white">Accesos Rápidos</p>
            <ul className="mt-4 grid grid-cols-2 gap-x-6 gap-y-2.5">
              {quickLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-xs text-white/70 transition-colors hover:text-[#00A1BF]"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Santiago Address */}
          <div className="flex flex-col gap-2 text-xs text-white/70 md:col-span-4">
            <p className="text-sm font-bold text-white">Casa Matriz Santiago</p>
            <p className="mt-1">{mainBranch.address}</p>
            <p>{mainBranch.commune}</p>
            <a
              href={CLINIC_INFO.phoneHref}
              className="mt-1 font-bold text-white hover:text-[#00A1BF]"
            >
              {CLINIC_INFO.phoneDisplay}
            </a>
            <a
              href={`mailto:${CLINIC_INFO.email}`}
              className="hover:text-[#00A1BF]"
            >
              {CLINIC_INFO.email}
            </a>
          </div>
        </div>

        <hr className="border-white/15" />

        {/* Bottom Copyright & Socials */}
        <div className="flex flex-col items-center justify-between gap-4 pt-8 text-xs text-white/60 sm:flex-row">
          <p>
            © 2026 Beautiva Chile · Clínica de Medicina
            Estética y Cirugía Plástica. Todos los derechos reservados.
          </p>
          <div className="flex items-center gap-4 text-white/75">
            <a
              href="https://youtube.com"
              target="_blank"
              rel="noreferrer"
              aria-label="Beautiva Chile en YouTube"
              className="transition hover:text-[#00A1BF]"
            >
              <YoutubeIcon className="h-4 w-4" />
            </a>
            <a
              href="https://facebook.com"
              target="_blank"
              rel="noreferrer"
              aria-label="Beautiva Chile en Facebook"
              className="transition hover:text-[#00A1BF]"
            >
              <FacebookIcon className="h-4 w-4" />
            </a>
            <a
              href="https://instagram.com"
              target="_blank"
              rel="noreferrer"
              aria-label="Beautiva Chile en Instagram"
              className="transition hover:text-[#00A1BF]"
            >
              <InstagramIcon className="h-4 w-4" />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
