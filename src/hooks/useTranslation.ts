
import { useLanguage } from "@/contexts/LanguageContext";
import { translations } from "@/data/translations";

export const useTranslation = () => {
  const { language } = useLanguage();
  
  const t = (path: string) => {
    const keys = path.split('.');
    let value: any = translations[language];
    
    for (const key of keys) {
      value = value?.[key];
    }
    
    return value || path;
  };
  
  return { t };
};
