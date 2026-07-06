import type { Metadata } from "next";
import { Cormorant_Garamond, DM_Mono } from "next/font/google";
import "./globals.css";

const cormorantGaramond = Cormorant_Garamond({
  subsets: ["latin"],
  weight: ["300", "400", "600"],
  style: ["normal", "italic"],
  variable: "--font-cormorant",
  display: "swap",
});

const dmMono = DM_Mono({
  subsets: ["latin"],
  weight: ["300", "400"],
  style: ["normal"],
  variable: "--font-dm-mono",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Camila Paganelli — FP&A & BI, ESG, Automatización",
  description:
    "Consultora independiente en FP&A & BI, ESG y automatización de procesos. Fractional, proyectos y advisory. Bariloche / remoto.",
  openGraph: {
    title: "Camila Paganelli — FP&A & BI, ESG, Automatización",
    description:
      "Consultora independiente en FP&A & BI, ESG y automatización de procesos. Fractional, proyectos y advisory. Bariloche / remoto.",
    url: "https://www.camipaganelli.com.ar",
    siteName: "Camila Paganelli",
    locale: "es_AR",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Camila Paganelli — FP&A & BI, ESG, Automatización",
    description:
      "Consultora independiente en FP&A & BI, ESG y automatización de procesos. Fractional, proyectos y advisory. Bariloche / remoto.",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es" className={`${cormorantGaramond.variable} ${dmMono.variable}`}>
      <head>
        <meta charSet="UTF-8" />
      </head>
      <body>{children}</body>
    </html>
  );
}
