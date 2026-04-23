import Header from "@/components/Header";
import Hero from "@/components/Hero";
import Section from "@/components/Section";
import Menu from "@/components/Menu";
import Space from "@/components/Space";
import Events from "@/components/Events";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import SeasonalStrip from "@/components/SeasonalStrip";
import About from "@/components/About";
import SectionDivider from "@/components/SectionDivider";

export default function HomePage() {
  return (
    <div className="relative">
      <Header />
      <main>
        <Hero />
        <About />
        <SeasonalStrip />
        <Section id="menu" title="Menu i oferta" subtitle="Menu">
          <Menu />
        </Section>
        <SectionDivider />
        <Space />
        <Events />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}
