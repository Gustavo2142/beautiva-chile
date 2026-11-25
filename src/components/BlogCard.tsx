import Image from "next/image";
import Link from "next/link";
import type { BlogArticle } from "@/data/clinic-data";

export function BlogCard({ article }: { article: BlogArticle }) {
  return (
    <Link
      href={`/blog/${article.slug}`}
      className="group flex flex-col justify-between gap-5 rounded-[20px] bg-white p-6 shadow-[0_10px_28px_rgba(0,0,0,0.04)] transition-transform duration-200 hover:-translate-y-0.5"
    >
      <div className="flex flex-col gap-3.5">
        <div className="flex flex-wrap gap-2">
          {article.categories.map((cat) => (
            <span
              key={cat}
              className="rounded-full bg-[#F5F5F5] px-3 py-1 text-[11px] font-bold text-[#636363]"
            >
              {cat}
            </span>
          ))}
        </div>

        <h3 className="text-[18px] font-bold leading-[1.45] text-[#4A4A4B] transition-colors group-hover:text-[#00A1BF]">
          {article.title}
        </h3>

        <p className="text-xs font-medium text-[#636363]">
          {article.date} · {article.readTime}
        </p>
      </div>

      <div className="relative aspect-[16/10] w-full overflow-hidden rounded-xl bg-[#DEDEDE]">
        <Image
          src={article.image}
          alt={article.title}
          fill
          sizes="(max-width: 768px) 100vw, 33vw"
          className="object-cover object-center transition-transform duration-500 ease-out group-hover:scale-[1.03]"
        />
      </div>
    </Link>
  );
}
