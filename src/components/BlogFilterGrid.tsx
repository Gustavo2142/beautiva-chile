"use client";

import { useState } from "react";
import type { BlogArticle } from "@/data/clinic-data";
import { BlogCard } from "./BlogCard";

export function BlogFilterGrid({ articles }: { articles: BlogArticle[] }) {
  const categories = [
    "Todos",
    ...Array.from(new Set(articles.flatMap((a) => a.categories))),
  ];
  const [selected, setSelected] = useState("Todos");

  const filtered =
    selected === "Todos"
      ? articles
      : articles.filter((a) => a.categories.includes(selected));

  return (
    <div className="flex flex-col gap-10">
      <div
        role="tablist"
        aria-label="Filtrar artículos por categoría"
        className="flex flex-wrap items-center gap-2.5"
      >
        {categories.map((cat) => {
          const active = selected === cat;
          return (
            <button
              key={cat}
              role="tab"
              aria-selected={active}
              type="button"
              onClick={() => setSelected(cat)}
              className={`btn-press rounded-full px-5 py-2 text-xs font-bold uppercase tracking-[1.6px] transition cursor-pointer ${
                active
                  ? "bg-[#00A1BF] text-white"
                  : "border border-[#DEDEDE] bg-white text-[#4A4A4B] hover:border-[#00A1BF] hover:text-[#00A1BF]"
              }`}
            >
              {cat}
            </button>
          );
        })}
      </div>

      <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
        {filtered.map((article) => (
          <BlogCard key={article.slug} article={article} />
        ))}
      </div>
    </div>
  );
}
