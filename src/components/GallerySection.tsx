"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import { ArrowLeft, ArrowRight, X } from "lucide-react";
import { GALLERY_ITEMS } from "@/data/clinic-data";
import { SectionHeading } from "./SectionHeading";

export function GallerySection() {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);

  useEffect(() => {
    if (activeIndex === null) return;
    const onKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") setActiveIndex(null);
      if (e.key === "ArrowLeft") {
        setActiveIndex((prev) =>
          prev === null
            ? null
            : (prev - 1 + GALLERY_ITEMS.length) % GALLERY_ITEMS.length
        );
      }
      if (e.key === "ArrowRight") {
        setActiveIndex((prev) =>
          prev === null ? null : (prev + 1) % GALLERY_ITEMS.length
        );
      }
    };
    window.addEventListener("keydown", onKeyDown);
    return () => window.removeEventListener("keydown", onKeyDown);
  }, [activeIndex]);

  const activeItem =
    activeIndex !== null ? GALLERY_ITEMS[activeIndex] : null;

  return (
    <section
      id="galeria"
      className="section-contain w-full bg-[#00A1BF] py-20 text-white"
    >
      <div className="mx-auto flex max-w-[1220px] flex-col items-center gap-12 px-5">
        <SectionHeading
          badge="Galería"
          title="Diseño Preciso. Resultados Reales"
          align="center"
          theme="on-accent"
        />

        {/* Bento collage matching Framer Gallery */}
        <div className="grid w-full grid-cols-1 gap-4 sm:grid-cols-2 md:grid-cols-12 md:auto-rows-[220px]">
          {GALLERY_ITEMS.map((item, idx) => (
            <button
              key={item.id}
              type="button"
              onClick={() => setActiveIndex(idx)}
              aria-label={`Ampliar imagen: ${item.title}`}
              className={`group relative min-h-[220px] w-full overflow-hidden rounded-2xl bg-[#007186] cursor-pointer ${item.spanClass}`}
            >
              <Image
                src={item.src}
                alt={item.alt}
                fill
                decoding="async"
                sizes="(max-width: 768px) 100vw, (max-width: 1220px) 33vw, 400px"
                className="object-cover object-center transition-transform duration-300 ease-out group-hover:scale-[1.03]"
              />
              <div className="absolute inset-0 bg-black/0 transition-colors duration-200 group-hover:bg-black/20" />
            </button>
          ))}
        </div>
      </div>

      {/* Lightbox Modal */}
      {activeItem && activeIndex !== null && (
        <div
          role="dialog"
          aria-modal="true"
          aria-label={activeItem.title}
          className="fixed inset-0 z-[80] flex items-center justify-center bg-black/85 p-4 backdrop-blur-xs"
          onClick={() => setActiveIndex(null)}
        >
          <div
            className="relative flex w-full max-w-[900px] flex-col items-center gap-4"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              type="button"
              onClick={() => setActiveIndex(null)}
              aria-label="Cerrar galería"
              className="self-end flex h-11 w-11 items-center justify-center rounded-full bg-white/15 text-white transition hover:bg-white/25 cursor-pointer"
            >
              <X className="h-5 w-5" aria-hidden="true" />
            </button>

            <div className="relative aspect-[16/10] w-full overflow-hidden rounded-2xl bg-black">
              <Image
                src={activeItem.src}
                alt={activeItem.alt}
                fill
                sizes="90vw"
                className="object-contain"
              />
            </div>

            <div className="flex w-full items-center justify-between gap-4 px-2 text-white">
              <div>
                <p className="text-[11px] font-bold uppercase tracking-[2px] text-[#00A1BF]">
                  {activeItem.category}
                </p>
                <p className="font-display text-xl font-bold">
                  {activeItem.title}
                </p>
              </div>
              <div className="flex items-center gap-2">
                <button
                  type="button"
                  onClick={() =>
                    setActiveIndex(
                      (activeIndex - 1 + GALLERY_ITEMS.length) %
                        GALLERY_ITEMS.length
                    )
                  }
                  aria-label="Imagen anterior"
                  className="flex h-11 w-11 items-center justify-center rounded-full bg-white/15 text-white transition hover:bg-white/25 cursor-pointer"
                >
                  <ArrowLeft className="h-4 w-4" aria-hidden="true" />
                </button>
                <button
                  type="button"
                  onClick={() =>
                    setActiveIndex((activeIndex + 1) % GALLERY_ITEMS.length)
                  }
                  aria-label="Siguiente imagen"
                  className="flex h-11 w-11 items-center justify-center rounded-full bg-white/15 text-white transition hover:bg-white/25 cursor-pointer"
                >
                  <ArrowRight className="h-4 w-4" aria-hidden="true" />
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
