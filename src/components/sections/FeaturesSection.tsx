
import { Clock, Users, Languages } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { useTranslation } from "@/hooks/useTranslation";
import { useLanguage } from "@/contexts/LanguageContext";

const FeaturesSection = () => {
  const { t } = useTranslation();
  const { isRTL } = useLanguage();

  return (
    <section id="features" className="py-20 sm:py-32 bg-gray-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12 sm:mb-20">
          <h2 className={`text-3xl sm:text-5xl font-bold mb-4 sm:mb-6 ${isRTL ? 'leading-relaxed' : ''}`}>
            {t('features.title')}
          </h2>
          <p className={`text-lg sm:text-xl text-gray-600 ${isRTL ? 'leading-relaxed' : ''}`}>{t('features.subtitle')}</p>
        </div>

        <div className="grid md:grid-cols-3 gap-6 sm:gap-8">
          <Card className="bg-white/50 border-black/20 hover:bg-white/70 transition-all duration-300 hover:scale-105">
            <CardContent className="p-6 sm:p-8 text-center">
              <div className="w-16 h-16 sm:w-20 sm:h-20 bg-black/20 rounded-2xl flex items-center justify-center mx-auto mb-4 sm:mb-6 rotate-12 hover:rotate-0 transition-transform duration-300">
                <Clock className="w-8 h-8 sm:w-10 sm:h-10 text-black" />
              </div>
              <h3 className={`text-xl sm:text-2xl font-bold mb-3 sm:mb-4 text-black ${isRTL ? 'leading-relaxed' : ''}`}>{t('features.instant')}</h3>
              <p className={`text-gray-600 ${isRTL ? 'leading-relaxed' : ''}`}>{t('features.instantDesc')}</p>
            </CardContent>
          </Card>

          <Card className="bg-white/50 border-black/20 hover:bg-white/70 transition-all duration-300 hover:scale-105">
            <CardContent className="p-6 sm:p-8 text-center">
              <div className="w-16 h-16 sm:w-20 sm:h-20 bg-black/20 rounded-2xl flex items-center justify-center mx-auto mb-4 sm:mb-6 rotate-12 hover:rotate-0 transition-transform duration-300">
                <Users className="w-8 h-8 sm:w-10 sm:h-10 text-black" />
              </div>
              <h3 className={`text-xl sm:text-2xl font-bold mb-3 sm:mb-4 text-black ${isRTL ? 'leading-relaxed' : ''}`}>{t('features.contextual')}</h3>
              <p className={`text-gray-600 ${isRTL ? 'leading-relaxed' : ''}`}>{t('features.contextualDesc')}</p>
            </CardContent>
          </Card>

          <Card className="bg-white/50 border-black/20 hover:bg-white/70 transition-all duration-300 hover:scale-105">
            <CardContent className="p-6 sm:p-8 text-center">
              <div className="w-16 h-16 sm:w-20 sm:h-20 bg-black/20 rounded-2xl flex items-center justify-center mx-auto mb-4 sm:mb-6 rotate-12 hover:rotate-0 transition-transform duration-300">
                <Languages className="w-8 h-8 sm:w-10 sm:h-10 text-black" />
              </div>
              <h3 className={`text-xl sm:text-2xl font-bold mb-3 sm:mb-4 text-black ${isRTL ? 'leading-relaxed' : ''}`}>{t('features.universal')}</h3>
              <p className={`text-gray-600 ${isRTL ? 'leading-relaxed' : ''}`}>{t('features.universalDesc')}</p>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default FeaturesSection;
