import Nav from "@/components/Nav";
import Hero from "@/components/Hero";
import ServiceCards from "@/components/ServiceCards";
import CasosPreview from "@/components/CasosPreview";
import Strengths from "@/components/Strengths";
import ExperienceTimeline from "@/components/ExperienceTimeline";
import Capabilities from "@/components/Capabilities";
import Approach from "@/components/Approach";
import ClosingCTA from "@/components/ClosingCTA";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <main className="site-wrapper">
      <Nav />
      <Hero />
      <ServiceCards />
      <CasosPreview />
      <Strengths />
      <ExperienceTimeline limit={2} showLink heading />
      <Capabilities />
      <Approach />
      <ClosingCTA />
      <Footer />
    </main>
  );
}
