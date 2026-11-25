import { BLOG_ARTICLES } from "@/data/clinic-data";
import { BlogCard } from "./BlogCard";
import { CtaButton } from "./CtaButton";
import { SectionHeading } from "./SectionHeading";

export function BlogSection() {
  const featured = BLOG_ARTICLES.slice(0, 3);

  return (
    <section id="blog" className="section-defer w-full py-20">
      <div className="mx-auto flex max-w-[1220px] flex-col items-center gap-12 px-5">
        <SectionHeading
          badge="Blog"
          title="Novedades y Guías Clínicas"
          align="center"
        />

        <div className="grid w-full grid-cols-1 gap-6 md:grid-cols-3">
          {featured.map((article) => (
            <BlogCard key={article.slug} article={article} />
          ))}
        </div>

        <CtaButton
          href="/blog"
          label="Ver Todos los Artículos"
          variant="dark"
        />
      </div>
    </section>
  );
}
