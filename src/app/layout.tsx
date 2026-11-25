import type { Metadata } from "next";
import { Lato, Playfair_Display } from "next/font/google";
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

export const metadata: Metadata = {
  title: "Beautiva Chile | Medicina Estética y Cirugía Plástica en Santiago",
  description:
    "Clínica estética en Providencia y Vitacura. Rejuvenecimiento facial, toxina botulínica, ácido hialurónico, armonización facial, cirugía mamaria y contorno corporal con valores en CLP.",
  openGraph: {
    title: "Beautiva Chile | Donde la Belleza se Une con la Precisión Médica",
    description:
      "Especialistas acreditados en medicina estética y cirugía plástica en Santiago. Agenda tu evaluación médica personalizada.",
    locale: "es_CL",
    type: "website",
  },
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
