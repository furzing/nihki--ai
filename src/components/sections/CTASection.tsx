
import { Button } from "@/components/ui/button";
import { useTranslation } from "@/hooks/useTranslation";
import { useLanguage } from "@/contexts/LanguageContext";

interface CTASectionProps {
  onDemoClick: () => void;
}

const CTASection = ({ onDemoClick }: CTASectionProps) => {
  const { t } = useTranslation();
  const { isRTL } = useLanguage();

  return (
    <section className="py-20 sm:py-32 bg-gray-100">
      <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
        <h2 className={`text-3xl sm:text-5xl font-bold mb-4 sm:mb-6 text-black ${isRTL ? 'leading-relaxed' : ''}`}>
          {t('cta.title')}
        </h2>
        <p className={`text-lg sm:text-xl text-gray-600 mb-8 sm:mb-12 whitespace-pre-line ${isRTL ? 'leading-relaxed' : ''}`}>{t('cta.subtitle')}</p>
        
        <div className={`flex flex-col sm:flex-row gap-4 sm:gap-6 justify-center items-center ${isRTL ? 'sm:flex-row-reverse' : ''}`}>
          <Button 
            size="lg" 
            variant="outline" 
            className="text-lg sm:text-xl px-8 sm:px-12 py-4 sm:py-6 border-2 border-black text-black hover:bg-black hover:text-white transition-all duration-300"
            onClick={onDemoClick}
          >
            {t('cta.contact')}
          </Button>
        </div>

        <div className="mt-12 sm:mt-16 flex justify-center">
          <div className="grid grid-cols-2 gap-8 sm:gap-12 text-center max-w-md">
            <div>
              <div className="text-3xl sm:text-4xl font-bold text-black mb-2">99.8%</div>
              <div className={`text-gray-600 text-sm sm:text-base ${isRTL ? 'leading-relaxed' : ''}`}>{t('cta.accuracy')}</div>
            </div>
            <div>
              <div className="text-3xl sm:text-4xl font-bold text-black mb-2">24/7</div>
              <div className={`text-gray-600 text-sm sm:text-base ${isRTL ? 'leading-relaxed' : ''}`}>{t('cta.support')}</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CTASection;
