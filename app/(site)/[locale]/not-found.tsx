"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import commonEn from "@/content/common.en.json";
import commonEs from "@/content/common.es.json";

export default function NotFound() {
  const pathname = usePathname() ?? "";
  const locale = pathname.startsWith("/en") ? "en" : "es";
  const common = locale === "en" ? commonEn : commonEs;

  return (
    <main id="contenido" className="not-found">
      <div className="wrap">
        <h1 className="hero__title">{common.notFound.title}</h1>
        <p style={{ marginTop: "1.5rem" }}>
          <Link className="text-link" href={`/${locale}`}>
            {common.notFound.back}
          </Link>
        </p>
      </div>
    </main>
  );
}
