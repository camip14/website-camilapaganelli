"use client";

import Image from "next/image";
import Nav from "@/components/Nav";
import Footer from "@/components/Footer";
import { useLanguage } from "@/lib/language";

const copy = {
  label: { es: "Sobre mí", en: "About me" },
  p1: {
    es: "Empecé cerca del negocio. Mis primeros trabajos fueron como analista: comercial, de producto y de operaciones. Antes de pensar en experiencias de usuario, aprendí a leer un funnel, entender una restricción operativa y traducir un objetivo de negocio en algo accionable.",
    en: "I started close to the business. My first jobs were as an analyst: commercial, product, and operations. Before I thought about user experience, I learned to read a funnel, understand an operational constraint, and turn a business goal into something actionable.",
  },
  quote: {
    es: "Primero el problema, después la solución. Primero el negocio, después el producto.",
    en: "First the problem, then the solution. First the business, then the product.",
  },
  p2: {
    es: "Trabajé tres años en BBVA Argentina, en análisis de datos, crédito digital y producto. Con el tiempo ese recorrido me llevó a trabajar en la intersección de tres áreas que raramente aparecen juntas: FP&A & BI, ESG y automatización de procesos. No es una combinación que planifiqué, sino el resultado de seguir los problemas que me parecían más interesantes.",
    en: "I spent three years at BBVA Argentina, in data analysis, digital credit, and product. Over time that path led me to work at the intersection of three areas that rarely show up together: FP&A & BI, ESG, and process automation. It's not a combination I planned — it's the result of following the problems I found most interesting.",
  },
  p3: {
    es: "Trabajé con Carrefour Argentina y Rapsodia, entre otros clientes. Me motiva que lo que construimos tenga impacto real: que un equipo tome decisiones con menos ruido, que un proceso deje de depender de una persona, que la sustentabilidad se mida en vez de declararse.",
    en: "I've worked with Carrefour Argentina and Rapsodia, among other clients. What motivates me is that what we build has real impact: a team making decisions with less noise, a process that stops depending on one person, sustainability that's measured instead of declared.",
  },
  p4: {
    es: "Trabajo explorando antes de concluir: me tomo el tiempo de entender bien el problema antes de proponer nada. Y cuando llego a una conclusión, me siento cómoda trabajando con estándares altos.",
    en: "I work by exploring before concluding: I take the time to really understand the problem before proposing anything. And once I reach a conclusion, I'm comfortable holding it to high standards.",
  },
  comoTrabajo: { es: "Cómo trabajo", en: "How I work" },
  comoTrabajoText: {
    es: "Me integro al trabajo de cada equipo con criterio propio. Pienso soluciones a medida, para implementar la correcta en conjunto. Desafío primero, ejecuto después.",
    en: "I embed into each team's work with my own judgment. I think through custom solutions so we implement the right one together. I challenge first, execute after.",
  },
};

export default function SobreMi() {
  const { lang } = useLanguage();

  return (
    <>
      <Nav />

      <main className="site-wrapper">
        <div className="about-grid" style={{ paddingTop: "5rem", paddingBottom: "5rem" }}>

          {/* Columna izquierda — texto */}
          <div style={{ display: "flex", flexDirection: "column", gap: "1.5rem" }}>

            {/* Label */}
            <p
              style={{
                fontFamily: "var(--font-sans-ui), monospace",
                fontSize: "0.68rem",
                textTransform: "uppercase",
                letterSpacing: "0.15em",
                color: "var(--sage)",
                marginBottom: "0.5rem",
              }}
            >
              {copy.label[lang]}
            </p>

            {/* Párrafo 1 */}
            <p
              style={{
                fontFamily: "var(--font-sans-ui), monospace",
                fontSize: "0.82rem",
                lineHeight: 1.9,
                color: "var(--primary)",
              }}
            >
              {copy.p1[lang]}
            </p>

            {/* Frase destacada */}
            <blockquote
              style={{
                borderLeft: "2px solid var(--sage)",
                paddingLeft: "1.5rem",
                fontFamily: "var(--font-serif-display), serif",
                fontStyle: "italic",
                fontSize: "1.1rem",
                lineHeight: 1.7,
                color: "var(--primary)",
                margin: 0,
              }}
            >
              {copy.quote[lang]}
            </blockquote>

            {/* Párrafo 2 */}
            <p
              style={{
                fontFamily: "var(--font-sans-ui), monospace",
                fontSize: "0.82rem",
                lineHeight: 1.9,
                color: "var(--primary)",
              }}
            >
              {copy.p2[lang]}
            </p>

            {/* Párrafo 3 */}
            <p
              style={{
                fontFamily: "var(--font-sans-ui), monospace",
                fontSize: "0.82rem",
                lineHeight: 1.9,
                color: "var(--primary)",
              }}
            >
              {copy.p3[lang]}
            </p>

            {/* Párrafo 4 */}
            <p
              style={{
                fontFamily: "var(--font-sans-ui), monospace",
                fontSize: "0.82rem",
                lineHeight: 1.9,
                color: "var(--primary)",
              }}
            >
              {copy.p4[lang]}
            </p>

            {/* Bloque: Cómo trabajo */}
            <div
              style={{
                borderTop: "0.5px solid var(--line)",
                paddingTop: "1.5rem",
                display: "flex",
                flexDirection: "column",
                gap: "0.6rem",
              }}
            >
              <p
                style={{
                  fontFamily: "var(--font-sans-ui), monospace",
                  fontSize: "0.68rem",
                  textTransform: "uppercase",
                  letterSpacing: "0.15em",
                  color: "var(--sage)",
                }}
              >
                {copy.comoTrabajo[lang]}
              </p>
              <p
                style={{
                  fontFamily: "var(--font-sans-ui), monospace",
                  fontSize: "0.82rem",
                  lineHeight: 1.9,
                  color: "var(--muted)",
                }}
              >
                {copy.comoTrabajoText[lang]}
              </p>
            </div>
          </div>

          {/* Columna derecha — foto */}
          <div className="about-photo">
            <Image
              src="/foto.jpeg"
              alt="Cami Paganelli"
              width={600}
              height={800}
              style={{
                width: "100%",
                height: "auto",
                aspectRatio: "3/4",
                objectFit: "cover",
                display: "block",
                borderRadius: 0,
              }}
              priority
            />
          </div>
        </div>

        <Footer />
      </main>

      <style jsx>{`
        .about-grid {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 4rem;
          align-items: start;
        }
        @media (max-width: 768px) {
          .about-grid {
            grid-template-columns: 1fr !important;
            gap: 2.5rem !important;
          }
          .about-photo {
            order: -1;
          }
        }
      `}</style>
    </>
  );
}
