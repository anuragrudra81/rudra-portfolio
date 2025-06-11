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
        <div className="opacity-0 animate-fade-in" style={{ animationDelay: '0.1s' }}>
          <LandingSection />
        </div>
        <div className="opacity-0 animate-fade-in" style={{ animationDelay: '0.3s' }}>
          <AboutSection />
        </div>
        <div className="opacity-0 animate-fade-in" style={{ animationDelay: '0.5s' }}>
          <ServicesSection />
        </div>
        <div className="opacity-0 animate-fade-in" style={{ animationDelay: '0.7s' }}>
          <PortfolioSection />
        </div>
        <div className="opacity-0 animate-fade-in" style={{ animationDelay: '0.9s' }}>
          <AiPrioritizerSection />
        </div>
        <div className="opacity-0 animate-fade-in" style={{ animationDelay: '1.1s' }}>
          <ContactSection />
        </div>
      </main>
      <Footer />
    </div>
  );
}
