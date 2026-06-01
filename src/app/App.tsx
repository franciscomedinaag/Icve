import { HeroSection } from "./components/HeroSection";
import { ServicesSection } from "./components/ServicesSection";
import { WhyChooseSection } from "./components/WhyChooseSection";
import { ProcessSection } from "./components/ProcessSection";
import { EVBrandsSection } from "./components/EVBrandsSection";
import { TestimonialsSection } from "./components/TestimonialsSection";
import { CoverageSection } from "./components/CoverageSection";
import { Footer } from "./components/Footer";
import { FloatingWhatsApp } from "./components/FloatingWhatsApp";

export default function App() {
  return (
    <div className="min-h-screen bg-white">
      <HeroSection />
      <ServicesSection />
      <WhyChooseSection />
      <ProcessSection />
      <EVBrandsSection />
      <TestimonialsSection />
      <CoverageSection />
      <Footer />
      <FloatingWhatsApp />
    </div>
  );
}
