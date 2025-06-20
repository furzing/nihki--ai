
import { Mic, Globe, Volume2 } from "lucide-react";
import { useTranslation } from "@/hooks/useTranslation";
import { useLanguage } from "@/contexts/LanguageContext";

const TechnologySection = () => {
  const { t } = useTranslation();
  const { isRTL } = useLanguage();

  return (
    <section id="technology" className="py-20 sm:py-32 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12 sm:mb-20">
          <h2 className={`text-3xl sm:text-5xl font-bold mb-4 sm:mb-6 text-black ${isRTL ? 'leading-relaxed' : ''}`}>
            {t('technology.title')}
          </h2>
          <p className={`text-lg sm:text-xl text-gray-600 ${isRTL ? 'leading-relaxed' : ''}`}>{t('technology.subtitle')}</p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 sm:gap-16 items-center">
          <div className="space-y-6 sm:space-y-8">
            <div className={`flex items-start gap-3 sm:gap-4 ${isRTL ? 'flex-row-reverse text-right' : ''}`}>
              <div className="w-12 h-12 sm:w-16 sm:h-16 bg-black/20 rounded-xl flex items-center justify-center flex-shrink-0">
                <Mic className="w-6 h-6 sm:w-8 sm:h-8 text-black" />
              </div>
              <div>
                <h3 className={`text-xl sm:text-2xl font-bold mb-2 sm:mb-3 text-black ${isRTL ? 'leading-relaxed' : ''}`}>{t('technology.speechRecognition')}</h3>
                <p className={`text-gray-600 ${isRTL ? 'leading-relaxed' : ''}`}>{t('technology.speechDesc')}</p>
              </div>
            </div>

            <div className={`flex items-start gap-3 sm:gap-4 ${isRTL ? 'flex-row-reverse text-right' : ''}`}>
              <div className="w-12 h-12 sm:w-16 sm:h-16 bg-black/20 rounded-xl flex items-center justify-center flex-shrink-0">
                <Globe className="w-6 h-6 sm:w-8 sm:h-8 text-black" />
              </div>
              <div>
                <h3 className={`text-xl sm:text-2xl font-bold mb-2 sm:mb-3 text-black ${isRTL ? 'leading-relaxed' : ''}`}>{t('technology.neuralTranslation')}</h3>
                <p className={`text-gray-600 ${isRTL ? 'leading-relaxed' : ''}`}>{t('technology.neuralDesc')}</p>
              </div>
            </div>

            <div className={`flex items-start gap-3 sm:gap-4 ${isRTL ? 'flex-row-reverse text-right' : ''}`}>
              <div className="w-12 h-12 sm:w-16 sm:h-16 bg-black/20 rounded-xl flex items-center justify-center flex-shrink-0">
                <Volume2 className="w-6 h-6 sm:w-8 sm:h-8 text-black" />
              </div>
              <div>
                <h3 className={`text-xl sm:text-2xl font-bold mb-2 sm:mb-3 text-black ${isRTL ? 'leading-relaxed' : ''}`}>{t('technology.voiceSynthesis')}</h3>
                <p className={`text-gray-600 ${isRTL ? 'leading-relaxed' : ''}`}>{t('technology.voiceDesc')}</p>
              </div>
            </div>
          </div>

          <div className="relative">
            <div className="bg-black/5 rounded-3xl p-6 sm:p-8 border border-black/20">
              <div className="space-y-4 sm:space-y-6">
                <div className={`flex items-center justify-between ${isRTL ? 'flex-row-reverse' : ''}`}>
                  <span className={`text-black font-bold text-sm sm:text-base ${isRTL ? 'leading-relaxed' : ''}`}>{t('technology.processingSpeed')}</span>
                  <span className={`text-black text-sm sm:text-base ${isRTL ? 'leading-relaxed' : ''}`}>{t('technology.ultraFast')}</span>
                </div>
                <div className="w-full bg-black/10 rounded-full h-2">
                  <div className="bg-black h-2 rounded-full w-11/12"></div>
                </div>

                <div className={`flex items-center justify-between ${isRTL ? 'flex-row-reverse' : ''}`}>
                  <span className={`text-black font-bold text-sm sm:text-base ${isRTL ? 'leading-relaxed' : ''}`}>{t('technology.accuracyRate')}</span>
                  <span className="text-black text-sm sm:text-base">99.8%</span>
                </div>
                <div className="w-full bg-black/10 rounded-full h-2">
                  <div className="bg-black h-2 rounded-full w-full"></div>
                </div>

                <div className={`flex items-center justify-between ${isRTL ? 'flex-row-reverse' : ''}`}>
                  <span className={`text-black font-bold text-sm sm:text-base ${isRTL ? 'leading-relaxed' : ''}`}>{t('technology.languageSupport')}</span>
                  <span className={`text-black text-sm sm:text-base ${isRTL ? 'leading-relaxed' : ''}`}>{t('technology.languagesCount')}</span>
                </div>
                <div className="w-full bg-black/10 rounded-full h-2">
                  <div className="bg-black h-2 rounded-full w-10/12"></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TechnologySection;
