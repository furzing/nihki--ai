import { useState } from "react";
import { useLanguage } from "@/contexts/LanguageContext";
const FloatingTranslateWord = () => {
  const {
    language
  } = useLanguage();
  const translations = {
    en: [{
      word: "Hello",
      lang: "English"
    }, {
      word: "Hola",
      lang: "Spanish"
    }, {
      word: "Bonjour",
      lang: "French"
    }, {
      word: "مرحبا",
      lang: "Arabic"
    }, {
      word: "你好",
      lang: "Chinese"
    }, {
      word: "Guten Tag",
      lang: "German"
    }],
    ar: [{
      word: "مرحبا",
      lang: "العربية"
    }, {
      word: "Hello",
      lang: "الإنجليزية"
    }, {
      word: "Hola",
      lang: "الإسبانية"
    }, {
      word: "Bonjour",
      lang: "الفرنسية"
    }, {
      word: "你好",
      lang: "الصينية"
    }, {
      word: "Guten Tag",
      lang: "الألمانية"
    }]
  };
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isClicked, setIsClicked] = useState(false);
  const currentTranslations = translations[language];
  const handleClick = () => {
    setIsClicked(true);
    setCurrentIndex(prev => (prev + 1) % currentTranslations.length);

    // Reset click animation after a short delay
    setTimeout(() => setIsClicked(false), 300);
  };
  return;
};
export default FloatingTranslateWord;