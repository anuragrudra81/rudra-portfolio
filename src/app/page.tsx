import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import LandingSection from "@/components/sections/LandingSection";
import AboutSection from "@/components/sections/AboutSection";
import ServicesSection from "@/components/sections/ServicesSection";
import PortfolioSection from "@/components/sections/PortfolioSection";
import AiPrioritizerSection from "@/components/sections/AiPrioritizerSection";
import ContactSection from "@/components/sections/ContactSection";

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <main className="flex-grow">
        <LandingSection />
        <AboutSection />
        <ServicesSection />
        <PortfolioSection />
        <AiPrioritizerSection />
        <ContactSection />
      </main>
      <Footer />
    </div>
  );
}
