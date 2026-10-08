"use client";

import { useEffect } from "react";
import { captureUtm, track } from "@/lib/track";

// Guarda los parámetros UTM de la visita y registra los clics marcados con data-track.
export default function Analytics() {
  useEffect(() => {
    captureUtm();

    const onClick = (event: MouseEvent) => {
      const target = event.target as Element | null;
      const el = target?.closest("[data-track]");
      if (!el) return;
      const name = el.getAttribute("data-track");
      if (!name) return;
      const label = el.getAttribute("data-track-label");
      track(name, label ? { label } : {});
    };

    document.addEventListener("click", onClick);
    return () => document.removeEventListener("click", onClick);
  }, []);

  return null;
}
