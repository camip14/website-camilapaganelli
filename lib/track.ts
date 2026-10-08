// Medición mínima y sin proveedor: empuja a window.dataLayer si existe.
// La herramienta de analítica y el píxel de Meta están pendientes de definir.

export type TrackEvent =
  | "whatsapp_click"
  | "booking_click"
  | "cv_download"
  | "language_change"
  | "door_click"
  | "form_submit_comunitario";

const UTM_KEY = "cp_utm";

declare global {
  interface Window {
    dataLayer?: Record<string, unknown>[];
  }
}

export function getUtm(): Record<string, string> {
  try {
    return JSON.parse(window.sessionStorage.getItem(UTM_KEY) || "{}");
  } catch {
    return {};
  }
}

export function captureUtm() {
  try {
    const params = new URLSearchParams(window.location.search);
    const found: Record<string, string> = {};
    params.forEach((value, key) => {
      if (key.startsWith("utm_")) found[key] = value;
    });
    if (Object.keys(found).length > 0) {
      window.sessionStorage.setItem(UTM_KEY, JSON.stringify({ ...getUtm(), ...found }));
    }
  } catch {
    // sessionStorage puede no estar disponible; la medición es opcional.
  }
}

export function track(event: TrackEvent | string, params: Record<string, unknown> = {}) {
  const payload = { event, ...params, ...getUtm() };
  if (typeof window === "undefined") return;
  window.dataLayer?.push(payload);
  if (process.env.NODE_ENV !== "production") console.debug("[track]", payload);
}
