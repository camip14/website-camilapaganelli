import type { Metadata } from "next";
import type { ReactNode } from "react";
import "@/app/globals.css";
import { fontClassName } from "@/lib/fonts";

// Página oculta: sin links desde el sitio, fuera del sitemap y con noindex.
export const metadata: Metadata = {
  title: "Archivo de versiones",
  robots: { index: false, follow: false, nocache: true },
};

export default function ArchiveLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="es" className={fontClassName}>
      <body>{children}</body>
    </html>
  );
}
