
import { useState } from "react";
import { Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useTranslation } from "@/hooks/useTranslation";
import { useLanguage } from "@/contexts/LanguageContext";
import LanguageToggle from "@/components/LanguageToggle";

interface NavigationProps {
  onDemoClick: () => void;
}

const Navigation = ({ onDemoClick }: NavigationProps) => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const { t } = useTranslation();
  const { isRTL } = useLanguage();

  return (
    <nav className="fixed top-0 z-40 w-full bg-white/90 backdrop-blur-xl border-b border-black/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <div className="flex items-center">
            <img alt="Nihki" className="h-12 w-auto" src="/lovable-uploads/700367a1-438b-472b-97b6-dd82762bf7bb.png" />
          </div>
          
          {/* Desktop Navigation */}
          <div className={`hidden md:flex items-center ${isRTL ? 'space-x-reverse space-x-8' : 'space-x-8'}`}>
            <a href="#demo" className="text-gray-700 hover:text-black transition-colors">{t('nav.demo')}</a>
            <a href="#features" className="text-gray-700 hover:text-black transition-colors">{t('nav.features')}</a>
            <a href="#technology" className="text-gray-700 hover:text-black transition-colors">{t('nav.technology')}</a>
            <LanguageToggle />
            <Button onClick={onDemoClick} className="bg-black text-white hover:bg-gray-800 border-2 border-black">
              {t('nav.tryDemo')}
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden flex items-center space-x-3">
            <LanguageToggle />
            <Button
              variant="ghost"
              size="sm"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="p-2"
            >
              {isMobileMenuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
            </Button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <div className="md:hidden border-t border-black/10 bg-white/95 backdrop-blur-xl">
            <div className="px-4 py-4 space-y-4">
              <a 
                href="#demo" 
                className="block text-gray-700 hover:text-black transition-colors py-2"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                {t('nav.demo')}
              </a>
              <a 
                href="#features" 
                className="block text-gray-700 hover:text-black transition-colors py-2"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                {t('nav.features')}
              </a>
              <a 
                href="#technology" 
                className="block text-gray-700 hover:text-black transition-colors py-2"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                {t('nav.technology')}
              </a>
              <Button 
                onClick={() => {
                  onDemoClick();
                  setIsMobileMenuOpen(false);
                }} 
                className="w-full bg-black text-white hover:bg-gray-800 border-2 border-black mt-4"
              >
                {t('nav.tryDemo')}
              </Button>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navigation;
