import { BrowserRouter, Routes, Route } from "react-router-dom";
import { HeroSection } from "./components/HeroSection";
import { ServicesSection } from "./components/ServicesSection";
import { WhyChooseSection } from "./components/WhyChooseSection";
import { ProcessSection } from "./components/ProcessSection";
import { EVBrandsSection } from "./components/EVBrandsSection";
import { TestimonialsSection } from "./components/TestimonialsSection";
import { CoverageSection } from "./components/CoverageSection";
import { Footer } from "./components/Footer";
import { FloatingWhatsApp } from "./components/FloatingWhatsApp";
import { PrivacyPage } from "./components/PrivacyPage";

function Home() {
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

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/aviso-de-privacidad" element={<PrivacyPage />} />
      </Routes>
    </BrowserRouter>
  );
}
