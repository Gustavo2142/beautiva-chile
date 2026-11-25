import type { Metadata } from "next";
import { BlogFilterGrid } from "@/components/BlogFilterGrid";
import { Footer } from "@/components/Footer";
import { Navbar } from "@/components/Navbar";
import { BLOG_ARTICLES } from "@/data/clinic-data";

export const metadata: Metadata = {
  title: "Blog y Guías Clínicas | Beautiva Chile",
  description:
    "Artículos sobre medicina estética, cuidados de la piel, toxina botulínica, ácido hialurónico y cirugía plástica en Chile.",
  alternates: {
    canonical: "/blog",
  },
  openGraph: {
    title: "Blog y Guías Clínicas | Beautiva Chile",
    description:
      "Información médica clara sobre tratamientos estéticos, cuidados faciales y cirugía plástica en Santiago.",
    url: "/blog",
    type: "website",
    locale: "es_CL",
    images: [
      {
        url: "/images/blog-1.jpg",
        width: 1200,
        height: 800,
        alt: "Blog Clínico Beautiva Chile",
      },
    ],
  },
};

export default function BlogPage() {
  return (
    <>
      <Navbar />
      <main id="contenido-principal" className="flex-1">
        <section className="w-full bg-[#DEDEDE] py-16 sm:py-20">
          <div className="mx-auto max-w-[1220px] px-5">
            <span className="inline-flex items-center rounded-full border border-[#00A1BF]/55 bg-white px-4 py-1 text-[11px] font-bold uppercase tracking-[2.4px] text-[#00A1BF]">
              Blog Clínico
            </span>
            <h1 className="mt-4 font-display text-[36px] sm:text-[48px] font-bold text-[#4A4A4B]">
              Novedades y Guías Clínicas
            </h1>
            <p className="mt-3 max-w-[620px] text-[15px] leading-[1.8] text-[#636363]">
              Información clara elaborada por nuestro equipo médico en Santiago
              para resolver dudas reales sobre tratamientos estéticos y cuidados
              post-procedimiento.
            </p>
          </div>
        </section>

        <section className="mx-auto max-w-[1220px] px-5 py-16">
          <BlogFilterGrid articles={BLOG_ARTICLES} />
        </section>
      </main>
      <Footer />
    </>
  );
}
