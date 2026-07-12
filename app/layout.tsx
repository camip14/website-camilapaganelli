import type { Metadata } from "next";
import { Crimson_Text, Montserrat } from "next/font/google";
import "./globals.css";
import { LanguageProvider } from "@/lib/language";

const crimsonText = Crimson_Text({
  subsets: ["latin"],
  weight: ["400", "600"],
  style: ["normal", "italic"],
  variable: "--font-serif-display",
  display: "swap",
});

const montserrat = Montserrat({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  style: ["normal"],
  variable: "--font-sans-ui",
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
    <html lang="es" className={`${crimsonText.variable} ${montserrat.variable}`}>
      <head>
        <meta charSet="UTF-8" />
      </head>
      <body>
        <LanguageProvider>{children}</LanguageProvider>
      </body>
    </html>
  );
}
