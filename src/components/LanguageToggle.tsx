
import { Button } from "@/components/ui/button";
import { useLanguage } from "@/contexts/LanguageContext";

const LanguageToggle = () => {
  const { language, setLanguage } = useLanguage();

  return (
    <div className="flex items-center space-x-1 bg-black/10 rounded-full p-1">
      <Button
        size="sm"
        variant={language === 'en' ? 'default' : 'ghost'}
        onClick={() => setLanguage('en')}
        className={`px-3 py-1 text-sm font-medium rounded-full transition-all ${
          language === 'en' 
            ? 'bg-black text-white shadow-sm' 
            : 'text-gray-600 hover:text-black hover:bg-white/50'
        }`}
      >
        EN
      </Button>
      <Button
        size="sm"
        variant={language === 'ar' ? 'default' : 'ghost'}
        onClick={() => setLanguage('ar')}
        className={`px-3 py-1 text-sm font-medium rounded-full transition-all ${
          language === 'ar' 
            ? 'bg-black text-white shadow-sm' 
            : 'text-gray-600 hover:text-black hover:bg-white/50'
        }`}
      >
        AR
      </Button>
    </div>
  );
};

export default LanguageToggle;
