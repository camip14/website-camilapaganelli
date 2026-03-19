"use client";

import Image from "next/image";
import Nav from "@/components/Nav";
import Footer from "@/components/Footer";

export default function About() {
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
                color: "var(--forest-mid)",
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
                color: "var(--ink)",
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
                borderLeft: "2px solid var(--forest)",
                paddingLeft: "1.5rem",
                fontFamily: "var(--font-cormorant), serif",
                fontStyle: "italic",
                fontSize: "1.1rem",
                lineHeight: 1.7,
                color: "var(--ink)",
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
                color: "var(--ink)",
              }}
            >
              Con el tiempo ese recorrido me llevó a trabajar en la intersección de tres áreas
              que raramente aparecen juntas: estrategia de producto, AI aplicada y negocio
              sostenible. No es una combinación que planifiqué, sino que es el resultado de seguir
              los problemas que me parecían más interesantes.
            </p>

            {/* Párrafo 3 */}
            <p
              style={{
                fontFamily: "var(--font-dm-mono), monospace",
                fontSize: "0.82rem",
                lineHeight: 1.9,
                color: "var(--ink)",
              }}
            >
              Me motiva que lo que construimos tenga impacto real. Que un usuario pueda acceder a
              un servicio que antes le era inaccesible. Que un equipo tome decisiones con menos
              ruido. Que la tecnología resuelva algo concreto para alguien concreto.
            </p>

            {/* Párrafo 4 */}
            <p
              style={{
                fontFamily: "var(--font-dm-mono), monospace",
                fontSize: "0.82rem",
                lineHeight: 1.9,
                color: "var(--ink)",
              }}
            >
              Trabajo explorando antes de concluir: me tomo el tiempo de entender bien el
              problema antes de proponer nada. Y cuando llego a una conclusión, me siento cómoda
              trabajando con estándares altos.
            </p>

            {/* Bloque: Lo que no soy */}
            <div
              style={{
                borderTop: "0.5px solid var(--border-thin)",
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
                  color: "var(--forest-mid)",
                }}
              >
                Cómo trabajo
              </p>
              <p
                style={{
                  fontFamily: "var(--font-dm-mono), monospace",
                  fontSize: "0.82rem",
                  lineHeight: 1.9,
                  color: "var(--warm-gray)",
                }}
              >
                Me integro al trabajo de cada equipo con criterio propio. Pienso soluciones a
                medida, para implementar la correcta en conjunto.
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
