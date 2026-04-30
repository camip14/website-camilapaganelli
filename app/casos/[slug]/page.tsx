import { notFound } from "next/navigation";
import Nav from "@/components/Nav";
import Footer from "@/components/Footer";
import CaseDetail from "@/components/CaseDetail";
import { cases, getCaseBySlug } from "@/data/cases";

interface Props {
  params: Promise<{ slug: string }>;
}

export function generateStaticParams() {
  return cases.map((c) => ({ slug: c.slug }));
}

export async function generateMetadata({ params }: Props) {
  const { slug } = await params;
  const caseData = getCaseBySlug(slug);
  if (!caseData) return { title: "Caso no encontrado" };

  return {
    title: `${caseData.title} — Camila Paganelli`,
    description: caseData.subtitle,
  };
}

export default async function CasePage({ params }: Props) {
  const { slug } = await params;
  const caseData = getCaseBySlug(slug);

  if (!caseData) {
    notFound();
  }

  return (
    <>
      <Nav />
      <main className="site-wrapper">
        <CaseDetail caseData={caseData} />
        <Footer />
      </main>
    </>
  );
}
