
import { useState } from "react";
import Navigation from "@/components/Navigation";
import HeroSection from "@/components/HeroSection";
import DemoRequestForm from "@/components/DemoRequestForm";
import FloatingTranslateWord from "@/components/FloatingTranslateWord";
import DemoSection from "@/components/sections/DemoSection";
import FeaturesSection from "@/components/sections/FeaturesSection";
import TechnologySection from "@/components/sections/TechnologySection";
import CTASection from "@/components/sections/CTASection";

const Index = () => {
  const [showDemoForm, setShowDemoForm] = useState(false);
  const [scrollY, setScrollY] = useState(0);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  // Track scroll and mouse for hero section
  useState(() => {
    const handleScroll = () => setScrollY(window.scrollY);
    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };

    window.addEventListener('scroll', handleScroll);
    window.addEventListener('mousemove', handleMouseMove);
    
    return () => {
      window.removeEventListener('scroll', handleScroll);
      window.removeEventListener('mousemove', handleMouseMove);
    };
  });

  return (
    <div className="min-h-screen bg-white text-black overflow-x-hidden">
      <Navigation onDemoClick={() => setShowDemoForm(true)} />
      
      <HeroSection 
        scrollY={scrollY} 
        mousePosition={mousePosition} 
        onDemoClick={() => setShowDemoForm(true)} 
      />

      {/* Floating Translate Word - now positioned at top */}
      <FloatingTranslateWord />

      <DemoSection />
      <FeaturesSection />
      <TechnologySection />
      <CTASection onDemoClick={() => setShowDemoForm(true)} />

      {/* Demo Form Modal */}
      {showDemoForm && <DemoRequestForm onClose={() => setShowDemoForm(false)} />}
    </div>
  );
};

export default Index;
