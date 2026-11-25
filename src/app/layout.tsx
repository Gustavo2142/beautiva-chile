import type { Metadata, Viewport } from "next";
import { Lato, Playfair_Display } from "next/font/google";
import { BRANCH_LOCATIONS, FAQ_ITEMS } from "@/data/clinic-data";
import "./globals.css";

const playfair = Playfair_Display({
  subsets: ["latin"],
  weight: ["600", "700"],
  variable: "--font-playfair",
  display: "swap",
});

const lato = Lato({
  subsets: ["latin"],
  weight: ["400", "700"],
  variable: "--font-lato",
  display: "swap",
});

const SITE_URL = "https://beautiva-chile.pages.dev";

export const viewport: Viewport = {
  themeColor: "#00A1BF",
};

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: "Medicina Estética y Cirugía en Santiago | Beautiva Chile",
  description:
    "Clínica estética en Providencia y Vitacura. Rejuvenecimiento facial, toxina botulínica, ácido hialurónico, armonización facial, cirugía mamaria y contorno corporal con valores en CLP.",
  alternates: {
    canonical: "/",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  openGraph: {
    title: "Medicina Estética y Cirugía Plástica en Santiago | Beautiva Chile",
    description:
      "Especialistas acreditados en medicina estética y cirugía plástica en Providencia y Vitacura. Agenda tu evaluación médica personalizada.",
    url: "/",
    siteName: "Beautiva Chile",
    locale: "es_CL",
    type: "website",
    images: [
      {
        url: "/images/hero-1.jpg",
        width: 1600,
        height: 1067,
        alt: "Beautiva Chile - Clínica de Medicina Estética y Cirugía Plástica en Santiago",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Medicina Estética y Cirugía en Santiago | Beautiva Chile",
    description:
      "Especialistas acreditados en medicina estética y cirugía plástica en Providencia y Vitacura. Valores transparentes en CLP.",
    images: ["/images/hero-1.jpg"],
  },
};

const clinicSchema = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "MedicalClinic",
      "@id": `${SITE_URL}/#clinic`,
      name: "Beautiva Chile",
      url: SITE_URL,
      image: `${SITE_URL}/images/hero-1.jpg`,
      description:
        "Clínica de medicina estética y cirugía plástica en Santiago, Chile. Especialistas acreditados ante la Superintendencia de Salud y CONACEM.",
      medicalSpecialty: ["PlasticSurgery", "Dermatology"],
      currenciesAccepted: "CLP",
      priceRange: "$$$",
      telephone: BRANCH_LOCATIONS[0].phone,
      email: BRANCH_LOCATIONS[0].email,
      areaServed: {
        "@type": "City",
        name: "Santiago",
        addressCountry: "CL",
      },
      department: BRANCH_LOCATIONS.map((branch) => ({
        "@type": "MedicalClinic",
        name: `Beautiva Chile - ${branch.name}`,
        telephone: branch.phone,
        email: branch.email,
        address: {
          "@type": "PostalAddress",
          streetAddress: branch.address,
          addressLocality: branch.id === "providencia" ? "Providencia" : "Vitacura",
          addressRegion: "Región Metropolitana",
          addressCountry: "CL",
        },
        openingHoursSpecification: [
          {
            "@type": "OpeningHoursSpecification",
            dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
            opens: branch.id === "providencia" ? "09:00" : "09:30",
            closes: branch.id === "providencia" ? "19:30" : "20:00",
          },
          {
            "@type": "OpeningHoursSpecification",
            dayOfWeek: ["Saturday"],
            opens: branch.id === "providencia" ? "09:30" : "10:00",
            closes: branch.id === "providencia" ? "14:30" : "14:00",
          },
        ],
      })),
    },
    {
      "@type": "FAQPage",
      "@id": `${SITE_URL}/#faq`,
      mainEntity: FAQ_ITEMS.map((item) => ({
        "@type": "Question",
        name: item.question,
        acceptedAnswer: {
          "@type": "Answer",
          text: item.answer,
        },
      })),
    },
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="es-CL"
      className={`${playfair.variable} ${lato.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col bg-[#F5F5F5] text-[#636363] font-sans">
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(clinicSchema) }}
        />
        <a
          href="#contenido-principal"
          className="sr-only focus:not-sr-only focus:fixed focus:top-3 focus:left-3 focus:z-[100] focus:rounded-full focus:bg-[#00A1BF] focus:px-4 focus:py-2 focus:text-xs focus:font-bold focus:uppercase focus:tracking-widest focus:text-white"
        >
          Ir al contenido principal
        </a>
        {children}
      </body>
    </html>
  );
}
