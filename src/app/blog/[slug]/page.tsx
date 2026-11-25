import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowLeft } from "lucide-react";
import { BlogCard } from "@/components/BlogCard";
import { CtaButton } from "@/components/CtaButton";
import { Footer } from "@/components/Footer";
import { Navbar } from "@/components/Navbar";
import { BLOG_ARTICLES } from "@/data/clinic-data";

export function generateStaticParams() {
  return BLOG_ARTICLES.map((article) => ({ slug: article.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const article = BLOG_ARTICLES.find((a) => a.slug === slug);
  if (!article) return { title: "Artículo no encontrado | Beautiva Chile" };
  return {
    title: `${article.title} | Beautiva Chile`,
    description: article.excerpt,
    alternates: {
      canonical: `/blog/${article.slug}`,
    },
    openGraph: {
      title: `${article.title} | Beautiva Chile`,
      description: article.excerpt,
      url: `/blog/${article.slug}`,
      type: "article",
      locale: "es_CL",
      images: [
        {
          url: article.image,
          width: 1200,
          height: 800,
          alt: article.title,
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title: `${article.title} | Beautiva Chile`,
      description: article.excerpt,
      images: [article.image],
    },
  };
}

export default async function BlogDetailPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const article = BLOG_ARTICLES.find((a) => a.slug === slug);

  if (!article) {
    notFound();
  }

  const related = BLOG_ARTICLES.filter((a) => a.slug !== article.slug).slice(
    0,
    3
  );

  return (
    <>
      <Navbar />
      <main id="contenido-principal" className="flex-1">
        <article className="mx-auto max-w-[880px] px-5 pt-14 pb-20">
          <Link
            href="/blog"
            className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-[2px] text-[#00A1BF] transition hover:text-[#007186]"
          >
            <ArrowLeft className="h-4 w-4" aria-hidden="true" />
            <span>Volver al Blog</span>
          </Link>

          <div className="mt-7 flex flex-wrap items-center gap-2.5">
            {article.categories.map((cat) => (
              <span
                key={cat}
                className="rounded-full bg-white px-3.5 py-1 text-xs font-bold text-[#4A4A4B] shadow-xs"
              >
                {cat}
              </span>
            ))}
            <span className="text-xs font-medium text-[#636363]">
              · {article.date} · {article.readTime}
            </span>
          </div>

          <h1 className="mt-5 font-display text-[32px] sm:text-[44px] font-bold leading-[1.25] text-[#4A4A4B]">
            {article.title}
          </h1>

          <p className="mt-4 text-[16px] leading-[1.85] text-[#636363]">
            {article.excerpt}
          </p>

          <div className="relative mt-8 aspect-[16/9] w-full overflow-hidden rounded-[20px] bg-[#DEDEDE]">
            <Image
              src={article.image}
              alt={article.title}
              fill
              priority
              sizes="(max-width: 880px) 100vw, 880px"
              className="object-cover object-center"
            />
          </div>

          <div className="mt-10 flex flex-col gap-8 rounded-[20px] bg-white p-6 sm:p-10 shadow-[0_10px_28px_rgba(0,0,0,0.04)]">
            {article.sections.map((section, idx) => (
              <section key={idx} className="flex flex-col gap-3">
                {section.heading && (
                  <h2 className="font-display text-[22px] sm:text-[26px] font-bold text-[#4A4A4B]">
                    {section.heading}
                  </h2>
                )}
                {section.paragraphs?.map((p, pIdx) => (
                  <p
                    key={pIdx}
                    className="text-[15px] leading-[1.9] text-[#636363]"
                  >
                    {p}
                  </p>
                ))}
                {section.bullets && (
                  <ul className="mt-1 flex flex-col gap-2.5 pl-5 list-disc text-[15px] leading-[1.85] text-[#636363]">
                    {section.bullets.map((b, bIdx) => (
                      <li key={bIdx}>
                        {b.label && (
                          <strong className="text-[#4A4A4B]">
                            {b.label}{" "}
                          </strong>
                        )}
                        {b.text}
                      </li>
                    ))}
                  </ul>
                )}
              </section>
            ))}

            <div className="mt-4 flex flex-col items-start justify-between gap-4 rounded-2xl bg-[#F5F5F5] p-6 sm:flex-row sm:items-center">
              <div>
                <p className="font-display text-lg font-bold text-[#4A4A4B]">
                  ¿Tienes dudas sobre este tratamiento?
                </p>
                <p className="text-sm text-[#636363]">
                  Agenda tu evaluación médica en Providencia o Vitacura.
                </p>
              </div>
              <CtaButton
                href="/#contacto"
                label="Agendar Evaluación"
                variant="cyan"
              />
            </div>
          </div>
        </article>

        <section className="w-full border-t border-[#DEDEDE] bg-white/50 py-16">
          <div className="mx-auto max-w-[1220px] px-5">
            <h2 className="font-display text-[28px] font-bold text-[#4A4A4B]">
              Artículos Relacionados
            </h2>
            <div className="mt-8 grid grid-cols-1 gap-6 md:grid-cols-3">
              {related.map((item) => (
                <BlogCard key={item.slug} article={item} />
              ))}
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
