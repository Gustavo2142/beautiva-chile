"use client";

import { useState } from "react";
import Link from "next/link";
import { Menu, Phone, X } from "lucide-react";
import { CLINIC_INFO, NAV_LINKS } from "@/data/clinic-data";
import { BeautivaLogo } from "./BeautivaLogo";
import { CtaButton } from "./CtaButton";

export function Navbar({ overlayHero = false }: { overlayHero?: boolean }) {
  const [promoVisible, setPromoVisible] = useState(true);
  const [mobileOpen, setMobileOpen] = useState(false);

  const wrapperPosition = overlayHero
    ? "fixed top-0 inset-x-0 z-40"
    : "sticky top-0 z-40";

  return (
    <header className={`${wrapperPosition} w-full px-3 sm:px-5 pt-2`}>
      <div className="mx-auto max-w-[1440px]">
        {promoVisible && (
          <div className="relative flex items-center justify-center gap-3 rounded-t-[16px] bg-[#00A1BF] px-5 py-3 text-white shadow-[0_4px_16px_rgba(0,0,0,0.08)]">
            <div className="flex flex-wrap items-center justify-center gap-3 pr-8 text-center">
              <span className="rounded-full bg-white px-4 py-1 text-[12px] sm:text-[13px] font-bold text-[#4A4A4B] shadow-xs">
                {CLINIC_INFO.promoBadge}
              </span>
              <p className="text-[13px] sm:text-[15px] font-medium tracking-[0.2px]">
                {CLINIC_INFO.promoText}
              </p>
            </div>
            <button
              type="button"
              onClick={() => setPromoVisible(false)}
              aria-label="Cerrar aviso promocional"
              className="absolute right-4 top-1/2 -translate-y-1/2 rounded-full p-1.5 text-white/90 transition hover:bg-white/15 hover:text-white cursor-pointer"
            >
              <X className="h-5 w-5" aria-hidden="true" />
            </button>
          </div>
        )}

        <nav
          aria-label="Navegación principal"
          className={`flex items-center justify-between gap-4 bg-white/96 backdrop-blur-md px-5 sm:px-7 py-3.5 shadow-[0_10px_30px_rgba(0,0,0,0.08)] ${
            promoVisible ? "rounded-b-[22px]" : "rounded-[22px]"
          }`}
        >
          <BeautivaLogo variant="dark" />

          <ul className="hidden xl:flex items-center gap-5">
            {NAV_LINKS.map((item) => (
              <li key={item.href}>
                <Link
                  href={item.href}
                  className="text-[11px] font-bold uppercase tracking-[2px] text-[#4A4A4B] transition-colors duration-200 hover:text-[#00A1BF]"
                >
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>

          <div className="hidden lg:flex items-center gap-5">
            <a
              href={CLINIC_INFO.phoneHref}
              className="inline-flex items-center gap-2 text-xs font-bold tracking-[0.5px] text-[#636363] transition-colors hover:text-[#00A1BF]"
            >
              <Phone className="h-4 w-4 text-[#636363]" aria-hidden="true" />
              <span>{CLINIC_INFO.phoneDisplay}</span>
            </a>
            <CtaButton
              href="/#contacto"
              label="Agendar Hora"
              variant="dark"
            />
          </div>

          <button
            type="button"
            onClick={() => setMobileOpen((prev) => !prev)}
            aria-expanded={mobileOpen}
            aria-controls="menu-movil"
            aria-label={mobileOpen ? "Cerrar menú" : "Abrir menú"}
            className="inline-flex xl:hidden h-11 w-11 items-center justify-center rounded-full border border-[#DEDEDE] text-[#4A4A4B] transition hover:border-[#00A1BF] hover:text-[#00A1BF] cursor-pointer"
          >
            {mobileOpen ? (
              <X className="h-5 w-5" aria-hidden="true" />
            ) : (
              <Menu className="h-5 w-5" aria-hidden="true" />
            )}
          </button>
        </nav>

        {mobileOpen && (
          <div
            id="menu-movil"
            className="xl:hidden mt-2 rounded-[20px] bg-white p-6 shadow-[0_18px_40px_rgba(0,0,0,0.12)] border border-[#DEDEDE]/60"
          >
            <ul className="flex flex-col gap-1">
              {NAV_LINKS.map((item) => (
                <li key={item.href}>
                  <Link
                    href={item.href}
                    onClick={() => setMobileOpen(false)}
                    className="block rounded-xl px-3 py-3 text-xs font-bold uppercase tracking-[2px] text-[#4A4A4B] transition hover:bg-[#F5F5F5] hover:text-[#00A1BF]"
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
            <div className="mt-4 flex flex-col gap-3 border-t border-[#DEDEDE] pt-4">
              <a
                href={CLINIC_INFO.phoneHref}
                className="inline-flex items-center justify-center gap-2 rounded-full border border-[#DEDEDE] py-3 text-xs font-bold text-[#4A4A4B]"
              >
                <Phone className="h-4 w-4 text-[#00A1BF]" aria-hidden="true" />
                <span>{CLINIC_INFO.phoneDisplay}</span>
              </a>
              <CtaButton
                href="/#contacto"
                label="Agendar Hora"
                variant="cyan"
                className="w-full"
              />
            </div>
          </div>
        )}
      </div>
    </header>
  );
}
