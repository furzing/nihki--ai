
import { useState } from "react";
import { useLanguage } from "@/contexts/LanguageContext";

const FloatingTranslateWord = () => {
  const { language } = useLanguage();
  
  const translations = {
    en: [
      { word: "Hello", lang: "English" },
      { word: "Hola", lang: "Spanish" },
      { word: "Bonjour", lang: "French" },
      { word: "مرحبا", lang: "Arabic" },
      { word: "你好", lang: "Chinese" },
      { word: "Guten Tag", lang: "German" }
    ],
    ar: [
      { word: "مرحبا", lang: "العربية" },
      { word: "Hello", lang: "الإنجليزية" },
      { word: "Hola", lang: "الإسبانية" },
      { word: "Bonjour", lang: "الفرنسية" },
      { word: "你好", lang: "الصينية" },
      { word: "Guten Tag", lang: "الألمانية" }
    ]
  };

  const [currentIndex, setCurrentIndex] = useState(0);
  const [isClicked, setIsClicked] = useState(false);
  const currentTranslations = translations[language];

  const handleClick = () => {
    setIsClicked(true);
    setCurrentIndex((prev) => (prev + 1) % currentTranslations.length);
    
    // Reset click animation after a short delay
    setTimeout(() => setIsClicked(false), 300);
  };

  return (
    <div 
      className={`
        fixed top-8 right-8 z-10 cursor-pointer select-none
        transition-all duration-300 hover:scale-105
        ${isClicked ? 'scale-110' : 'speech-bubble-float'}
      `}
      onClick={handleClick}
    >
      <div className="relative">
        {/* Reduced sound ripples on click */}
        {isClicked && (
          <div className="absolute inset-0 w-16 h-16 border border-black/10 rounded-full sound-ripple -translate-x-1/2 -translate-y-1/2 left-1/2 top-1/2"></div>
        )}
        
        {/* Main word bubble */}
        <div className="bg-white/80 backdrop-blur-sm border-2 border-black/20 rounded-2xl px-4 py-3 shadow-lg">
          <div className="text-center">
            <div className="text-2xl font-bold text-black mb-1">
              {currentTranslations[currentIndex].word}
            </div>
            <div className="text-xs text-gray-600">
              {currentTranslations[currentIndex].lang}
            </div>
          </div>
          
          {/* Click indicator */}
          <div className="absolute -bottom-2 left-1/2 transform -translate-x-1/2 w-0 h-0 border-l-4 border-r-4 border-t-4 border-l-transparent border-r-transparent border-t-white/80"></div>
        </div>
      </div>
    </div>
  );
};

export default FloatingTranslateWord;
