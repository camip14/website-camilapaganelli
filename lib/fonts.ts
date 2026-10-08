import { Crimson_Text, Montserrat } from "next/font/google";

export const crimsonText = Crimson_Text({
  subsets: ["latin"],
  weight: ["400", "600"],
  style: ["normal", "italic"],
  variable: "--font-serif-display",
  display: "swap",
});

export const montserrat = Montserrat({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  style: ["normal"],
  variable: "--font-sans-ui",
  display: "swap",
});

export const fontClassName = `${crimsonText.variable} ${montserrat.variable}`;
