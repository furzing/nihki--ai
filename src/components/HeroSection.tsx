
import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useTranslation } from "@/hooks/useTranslation";
import { useLanguage } from "@/contexts/LanguageContext";
import AnimatedBackground from "./AnimatedBackground";

interface HeroSectionProps {
  scrollY: number;
  mousePosition: { x: number; y: number };
  onDemoClick: () => void;
}

const HeroSection = ({ scrollY, mousePosition, onDemoClick }: HeroSectionProps) => {
  const { t } = useTranslation();
  const { isRTL } = useLanguage();

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      <AnimatedBackground scrollY={scrollY} mousePosition={mousePosition} />
      
      <div className="relative z-10 text-center px-4 sm:px-6 lg:px-8">
        <h1 className={`text-4xl sm:text-6xl md:text-8xl font-black mb-6 leading-tight ${isRTL ? 'leading-relaxed' : ''}`}>
          <span className="block py-0 my-0">{t('hero.speak')}</span>
          <span className="block text-black py-0 my-0">{t('hero.any')}</span>
          <span className="block my-[20px]">{t('hero.language')}</span>
        </h1>
        
        <p className={`text-lg sm:text-xl md:text-2xl text-gray-700 mb-12 max-w-3xl mx-auto ${isRTL ? 'leading-relaxed' : 'leading-relaxed'}`}>
          {t('hero.subtitle')}
        </p>
        
        <div className={`flex flex-col sm:flex-row gap-6 justify-center items-center ${isRTL ? 'sm:flex-row-reverse' : ''}`}>
          <Button size="lg" onClick={onDemoClick} className="text-lg sm:text-xl px-8 sm:px-10 py-4 sm:py-6 bg-black text-white hover:bg-gray-800 transform hover:scale-105 transition-all duration-300 border-2 border-black">
            {t('hero.cta')}
            <ArrowRight className={`w-5 h-5 sm:w-6 sm:h-6 ${isRTL ? 'mr-2 sm:mr-3 rotate-180' : 'ml-2 sm:ml-3'}`} />
          </Button>
        </div>
      </div>
      
      {/* Enhanced Interactive Scroll Indicator */}
      <div 
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
        style={{
          transform: `translateX(-50%) translateY(${Math.sin(scrollY * 0.02) * 5}px)`
        }}
      >
        <div className="flex flex-col items-center scroll-bounce">
          <div className="w-6 h-10 border-2 border-black/40 rounded-full flex justify-center mb-2 interactive-float">
            <div className="w-1 h-3 bg-black/40 rounded-full mt-2 voice-wave"></div>
          </div>
          <div className="flex space-x-1">
            <div className="w-1 h-2 bg-black/30 rounded bouncy-wave"></div>
            <div className="w-1 h-3 bg-black/40 rounded voice-wave" style={{ animationDelay: '0.1s' }}></div>
            <div className="w-1 h-2 bg-black/30 rounded bouncy-wave" style={{ animationDelay: '0.2s' }}></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
