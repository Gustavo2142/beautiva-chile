import type { MetadataRoute } from "next";

export const dynamic = "force-static";

export default function robots(): MetadataRoute.Robots {
  return {
    rules: [
      {
        userAgent: "*",
        allow: "/",
      },
      // Motores de Búsqueda de IA explícitamente permitidos (GEO)
      {
        userAgent: [
          "OAI-SearchBot",
          "PerplexityBot",
          "Claude-SearchBot",
          "Applebot",
          "Googlebot",
        ],
        allow: "/",
      },
    ],
    sitemap: "https://beautiva-chile.pages.dev/sitemap.xml",
  };
}
