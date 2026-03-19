import Nav from "@/components/Nav";
import Hero from "@/components/Hero";
import Areas from "@/components/Areas";
import HowIWork from "@/components/HowIWork";
import SelectedWork from "@/components/SelectedWork";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <main className="site-wrapper">
      <Nav />
      <Hero />
      <Areas />
      <HowIWork />
      <SelectedWork />
      <Contact />
      <Footer />
    </main>
  );
}
