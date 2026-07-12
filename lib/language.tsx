"use client";

import { createContext, useContext, useEffect, useState } from "react";

export type Lang = "es" | "en";

interface LanguageContextValue {
  lang: Lang;
  toggle: () => void;
}

const LanguageContext = createContext<LanguageContextValue>({
  lang: "es",
  toggle: () => {},
});

const STORAGE_KEY = "camipaganelli-lang";

export function LanguageProvider({ children }: { children: React.ReactNode }) {
  const [lang, setLang] = useState<Lang>("es");

  useEffect(() => {
    const stored = window.localStorage.getItem(STORAGE_KEY);
    if (stored === "es" || stored === "en") setLang(stored);
  }, []);

  const toggle = () => {
    setLang((prev) => {
      const next = prev === "es" ? "en" : "es";
      window.localStorage.setItem(STORAGE_KEY, next);
      return next;
    });
  };

  return <LanguageContext.Provider value={{ lang, toggle }}>{children}</LanguageContext.Provider>;
}

export function useLanguage() {
  return useContext(LanguageContext);
}

export const common = {
  contacto: { es: "Contacto", en: "Contact" },
  hablemos: { es: "Hablemos →", en: "Let's talk →" },
  verMas: { es: "Ver más →", en: "Learn more →" },
  verCasos: { es: "Ver casos →", en: "View case studies →" },
  cv: { es: "CV", en: "Resume" },
  verCvCompleto: { es: "Ver CV completo →", en: "View full résumé →" },
};
