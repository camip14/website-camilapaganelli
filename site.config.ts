// Datos que solo puede dar la dueña del sitio. Todos vacíos por defecto: un CTA sin destino
// no se muestra en producción (ver components/Action.tsx). Se completan con variables de
// entorno en Vercel, sin tocar código. Ver .env.example.

const isProd = process.env.NODE_ENV === "production";

export const siteConfig = {
  url: process.env.NEXT_PUBLIC_SITE_URL || "https://camipaganelli.com.ar",
  name: "Cami Paganelli",

  whatsappUrl: process.env.NEXT_PUBLIC_WHATSAPP_URL || "",
  bookingUrl: process.env.NEXT_PUBLIC_BOOKING_URL || "",
  cvUrl: process.env.NEXT_PUBLIC_CV_URL || "",
  linkedinUrl: process.env.NEXT_PUBLIC_LINKEDIN_URL || "",
  formEndpoint: process.env.NEXT_PUBLIC_FORM_ENDPOINT || "",

  // [OCULTO] /casos y los enlaces "Ver casos de negocio" hasta que haya casos reales.
  casosEnabled: process.env.NEXT_PUBLIC_ENABLE_CASOS === "1",

  // Marcadores [PENDIENTE] visibles: siempre en desarrollo; en producción solo si se pide.
  showPending: !isProd || process.env.NEXT_PUBLIC_SHOW_PENDING === "1",
} as const;
