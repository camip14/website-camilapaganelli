"use client";

import Image from "next/image";
import Nav from "@/components/Nav";
import Footer from "@/components/Footer";

export default function SobreMi() {
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
                fontFamily: "var(--font-dm-mono), monospace",
                fontSize: "0.68rem",
                textTransform: "uppercase",
                letterSpacing: "0.15em",
                color: "var(--sage)",
                marginBottom: "0.5rem",
              }}
            >
              Sobre mí
            </p>

            {/* Párrafo 1 */}
            <p
              style={{
                fontFamily: "var(--font-dm-mono), monospace",
                fontSize: "0.82rem",
                lineHeight: 1.9,
                color: "var(--primary)",
              }}
            >
              Empecé cerca del negocio. Mis primeros trabajos fueron como analista: comercial,
              de producto y de operaciones. Antes de pensar en experiencias de usuario, aprendí a
              leer un funnel, entender una restricción operativa y traducir un objetivo de negocio
              en algo accionable.
            </p>

            {/* Frase destacada */}
            <blockquote
              style={{
                borderLeft: "2px solid var(--sage)",
                paddingLeft: "1.5rem",
                fontFamily: "var(--font-cormorant), serif",
                fontStyle: "italic",
                fontSize: "1.1rem",
                lineHeight: 1.7,
                color: "var(--primary)",
                margin: 0,
              }}
            >
              Primero el problema, después la solución. Primero el negocio, después el producto.
            </blockquote>

            {/* Párrafo 2 */}
            <p
              style={{
                fontFamily: "var(--font-dm-mono), monospace",
                fontSize: "0.82rem",
                lineHeight: 1.9,
                color: "var(--primary)",
              }}
            >
              Trabajé tres años en BBVA Argentina, en análisis de datos, crédito digital y
              producto. Con el tiempo ese recorrido me llevó a trabajar en la intersección de
              tres áreas que raramente aparecen juntas: FP&A & BI, ESG y automatización de
              procesos. No es una combinación que planifiqué, sino el resultado de seguir los
              problemas que me parecían más interesantes.
            </p>

            {/* Párrafo 3 */}
            <p
              style={{
                fontFamily: "var(--font-dm-mono), monospace",
                fontSize: "0.82rem",
                lineHeight: 1.9,
                color: "var(--primary)",
              }}
            >
              Trabajé con Carrefour Argentina y Rapsodia, entre otros clientes. Me motiva que lo
              que construimos tenga impacto real: que un equipo tome decisiones con menos ruido,
              que un proceso deje de depender de una persona, que la sustentabilidad se mida en
              vez de declararse.
            </p>

            {/* Párrafo 4 */}
            <p
              style={{
                fontFamily: "var(--font-dm-mono), monospace",
                fontSize: "0.82rem",
                lineHeight: 1.9,
                color: "var(--primary)",
              }}
            >
              Trabajo explorando antes de concluir: me tomo el tiempo de entender bien el
              problema antes de proponer nada. Y cuando llego a una conclusión, me siento cómoda
              trabajando con estándares altos.
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
                  fontFamily: "var(--font-dm-mono), monospace",
                  fontSize: "0.68rem",
                  textTransform: "uppercase",
                  letterSpacing: "0.15em",
                  color: "var(--sage)",
                }}
              >
                Cómo trabajo
              </p>
              <p
                style={{
                  fontFamily: "var(--font-dm-mono), monospace",
                  fontSize: "0.82rem",
                  lineHeight: 1.9,
                  color: "var(--muted)",
                }}
              >
                Me integro al trabajo de cada equipo con criterio propio. Pienso soluciones a
                medida, para implementar la correcta en conjunto. Desafío primero, ejecuto
                después.
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
