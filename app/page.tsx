import Nav from "@/components/Nav";
import Hero from "@/components/Hero";
import Ejes from "@/components/Ejes";
import CasosPreview from "@/components/CasosPreview";
import HowIWork from "@/components/HowIWork";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <main className="site-wrapper">
      <Nav />
      <Hero />
      <Ejes />
      <CasosPreview />
      <HowIWork />
      <Contact />
      <Footer />
    </main>
  );
}
