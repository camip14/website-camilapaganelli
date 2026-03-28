import Nav from "@/components/Nav";
import Hero from "@/components/Hero";
import Marquee from "@/components/Marquee";
import Solutions from "@/components/Solutions";
import Areas from "@/components/Areas";
import HowIWork from "@/components/HowIWork";
import CasosDeExito from "@/components/CasosDeExito";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <main className="site-wrapper">
      <Nav />
      <Hero />
      <Marquee />
      <Solutions />
      <Areas />
      <HowIWork />
      <CasosDeExito />
      <Contact />
      <Footer />
    </main>
  );
}
