
import { Radio, Zap, Headphones } from "lucide-react";
import { useTranslation } from "@/hooks/useTranslation";
import { useLanguage } from "@/contexts/LanguageContext";
import VoiceWaveIndicator from "@/components/VoiceWaveIndicator";
import SoundRippleEffect from "@/components/SoundRippleEffect";

const DemoSection = () => {
  const { t } = useTranslation();
  const { isRTL } = useLanguage();

  return (
    <section id="demo" className="relative py-20 sm:py-32 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12 sm:mb-20">
          <div className={`inline-flex items-center px-4 sm:px-6 py-2 sm:py-3 rounded-full bg-black/10 border border-black/20 mb-6 sm:mb-8 ${isRTL ? 'flex-row-reverse' : ''}`}>
            <Radio className={`w-4 h-4 sm:w-5 sm:h-5 text-black animate-pulse ${isRTL ? 'ml-2' : 'mr-2'}`} />
            <span className="text-sm sm:text-base text-black/90">{t('demo.title')}</span>
          </div>
          <h2 className={`text-3xl sm:text-5xl md:text-6xl font-black mb-4 sm:mb-6 text-black ${isRTL ? 'leading-relaxed' : ''}`}>
            {t('demo.title')} 
            <span className="block text-black">{t('demo.conference')}</span>
            <span className="block">{t('demo.liveNow')}</span>
          </h2>
          <p className={`text-lg sm:text-xl text-gray-600 mb-6 sm:mb-8 ${isRTL ? 'leading-relaxed' : ''}`}>{t('demo.subtitle')}</p>
          
          {/* Live Indicator */}
          <div className={`flex items-center justify-center gap-2 sm:gap-3 mb-8 sm:mb-12 ${isRTL ? 'flex-row-reverse' : ''}`}>
            <div className="relative">
              <div className="w-3 h-3 sm:w-4 sm:h-4 bg-black rounded-full animate-ping absolute"></div>
              <div className="w-3 h-3 sm:w-4 sm:h-4 bg-black rounded-full"></div>
            </div>
            <span className={`text-black font-bold text-base sm:text-lg ${isRTL ? 'leading-relaxed' : ''}`}>{t('demo.liveIndicator')}</span>
            <div className="px-3 sm:px-4 py-1 sm:py-2 bg-black/20 rounded-full backdrop-blur-sm border border-black/30">
              <span className={`text-xs sm:text-sm text-black font-semibold ${isRTL ? 'leading-relaxed' : ''}`}>{t('demo.speakers')}</span>
            </div>
            <VoiceWaveIndicator size="sm" intensity="high" className="ml-2" />
          </div>
        </div>

        <div className="relative max-w-6xl mx-auto">
          {/* Main Demo Container */}
          <div className="bg-gray-100/30 backdrop-blur-xl rounded-3xl p-8 border border-black/20 shadow-2xl">
            
            {/* Progress Bar */}
            <div className="mb-8">
              <div className="flex justify-between text-sm text-gray-600 mb-2">
                <span>{t('demo.progress')}</span>
                <span>{t('demo.elapsed')}</span>
              </div>
              <div className="w-full bg-black/10 rounded-full h-2">
                <div className="bg-black h-2 rounded-full animate-pulse" style={{ width: '68%' }}></div>
              </div>
            </div>

            {/* Conversation Flow */}
            <div className="space-y-8">
              
              {/* Speaker 1 */}
              <div className="grid lg:grid-cols-2 gap-8">
                <div className="space-y-4">
                  <div className="flex items-center space-x-4 mb-4">
                    <div className="w-16 h-16 bg-black/20 rounded-full flex items-center justify-center border-2 border-black/30 relative">
                      <span className="text-black font-bold text-lg">{isRTL ? '🇸🇦' : '🇺🇸'}</span>
                    </div>
                    <div className="flex-1">
                      <div className="text-black font-bold text-lg">{t('demo.ceoName')}</div>
                      <div className="text-gray-600">{isRTL ? 'تتحدث بالعربية' : t('demo.speakingIn')}</div>
                    </div>
                    <VoiceWaveIndicator size="md" intensity="medium" />
                  </div>
                  <div className="bg-black/10 backdrop-blur-sm rounded-2xl p-6 border border-black/20">
                    <p className="text-black text-lg leading-relaxed">
                      {t('demo.sarahQuote')}
                    </p>
                  </div>
                </div>

                <div className="space-y-4">
                  <div className="flex items-center justify-center mb-6 relative">
                    <div className="flex items-center space-x-3 px-6 py-3 bg-black/20 rounded-full border border-black/30 backdrop-blur-sm">
                      <Zap className="w-5 h-5 text-black animate-pulse" />
                      <span className="text-sm text-black font-bold">{t('demo.aiProcessing')}</span>
                      <VoiceWaveIndicator size="sm" intensity="high" />
                    </div>
                    <SoundRippleEffect size="lg" className="opacity-30" />
                  </div>
                  
                  {/* Output translations */}
                  {isRTL ? (
                    <>
                      <div className="bg-white/40 rounded-xl p-4 border border-black/10 backdrop-blur-sm">
                        <div className="flex items-center space-x-2 mb-3">
                          <Headphones className="w-4 h-4 text-black" />
                          <span className="text-xs text-black/80 font-semibold">→ الإنجليزية (سارة)</span>
                          <div className="ml-auto w-2 h-2 bg-black rounded-full animate-pulse"></div>
                        </div>
                        <p className="text-black/90">"Let's dive into our Q2 expansion strategy. I believe the European market presents our biggest opportunity..."</p>
                      </div>

                      <div className="bg-white/40 rounded-xl p-4 border border-black/10 backdrop-blur-sm">
                        <div className="flex items-center space-x-2 mb-3">
                          <Headphones className="w-4 h-4 text-black" />
                          <span className="text-xs text-black/80 font-semibold">→ الفرنسية (ماري)</span>
                          <div className="ml-auto w-2 h-2 bg-black rounded-full animate-pulse"></div>
                        </div>
                        <p className="text-black/90">"Approfondissons notre stratégie d'expansion Q2. Je crois que le marché européen présente notre plus grande opportunité..."</p>
                      </div>
                    </>
                  ) : (
                    <>
                      <div className="bg-white/40 rounded-xl p-4 border border-black/10 backdrop-blur-sm">
                        <div className="flex items-center space-x-2 mb-3">
                          <Headphones className="w-4 h-4 text-black" />
                          <span className="text-xs text-black/80 font-semibold">{t('demo.toSpanish')}</span>
                          <div className="ml-auto w-2 h-2 bg-black rounded-full animate-pulse"></div>
                        </div>
                        <p className="text-black/90">"Profundicemos en nuestra estrategia de expansión para Q2. Creo que el mercado europeo presenta nuestra mayor oportunidad..."</p>
                      </div>

                      <div className="bg-white/40 rounded-xl p-4 border border-black/10 backdrop-blur-sm">
                        <div className="flex items-center space-x-2 mb-3">
                          <Headphones className="w-4 h-4 text-black" />
                          <span className="text-xs text-black/80 font-semibold">{t('demo.toFrench')}</span>
                          <div className="ml-auto w-2 h-2 bg-black rounded-full animate-pulse"></div>
                        </div>
                        <p className="text-black/90">"Approfondissons notre stratégie d'expansion Q2. Je crois que le marché européen présente notre plus grande opportunité..."</p>
                      </div>
                    </>
                  )}
                </div>
              </div>

              {/* Visual Separator */}
              <div className="flex items-center justify-center py-6">
                <div className="flex space-x-2">
                  <div className="w-3 h-3 bg-black/60 rounded-full animate-pulse"></div>
                  <div className="w-3 h-3 bg-black/40 rounded-full animate-pulse" style={{ animationDelay: '0.2s' }}></div>
                  <div className="w-3 h-3 bg-black/60 rounded-full animate-pulse" style={{ animationDelay: '0.4s' }}></div>
                </div>
              </div>

              {/* Speaker 2 Response */}
              <div className="grid lg:grid-cols-2 gap-8">
                <div className="space-y-4">
                  <div className="flex items-center space-x-4 mb-4">
                    <div className="w-16 h-16 bg-black/20 rounded-full flex items-center justify-center border-2 border-black/30">
                      <span className="text-black font-bold text-lg">{isRTL ? '🇸🇦' : '🇪🇸'}</span>
                    </div>
                    <div className="flex-1">
                      <div className="text-black font-bold text-lg">{isRTL ? 'أحمد الراشد' : t('demo.carlosName')}</div>
                      <div className="text-gray-600">{isRTL ? 'يتحدث بالعربية' : t('demo.speakingInSpanish')}</div>
                    </div>
                    <VoiceWaveIndicator size="md" intensity="medium" />
                  </div>
                  <div className="bg-black/10 backdrop-blur-sm rounded-2xl p-6 border border-black/20">
                    <p className="text-black text-lg leading-relaxed">
                      {t('demo.carlosOriginal')}
                    </p>
                  </div>
                </div>

                <div className="space-y-4">
                  <div className="flex items-center justify-center mb-6">
                    <div className="flex items-center space-x-3 px-6 py-3 bg-black/20 rounded-full border border-black/30 backdrop-blur-sm">
                      <Zap className="w-5 h-5 text-black animate-pulse" style={{ animationDelay: '2s' }} />
                      <span className="text-sm text-black font-bold">{t('demo.aiProcessing')}</span>
                      <VoiceWaveIndicator size="sm" intensity="high" />
                    </div>
                  </div>
                  
                  {/* Output translations for second speaker */}
                  {isRTL ? (
                    <>
                      <div className="bg-white/40 rounded-xl p-4 border border-black/10 backdrop-blur-sm">
                        <div className="flex items-center space-x-2 mb-3">
                          <Headphones className="w-4 h-4 text-black" />
                          <span className="text-xs text-black/80 font-semibold">→ الإنجليزية (أحمد)</span>
                          <div className="ml-auto w-2 h-2 bg-black rounded-full animate-pulse" style={{ animationDelay: '2s' }}></div>
                        </div>
                        <p className="text-black/90">{t('demo.carlosTranslatedEn')}</p>
                      </div>

                      <div className="bg-white/40 rounded-xl p-4 border border-black/10 backdrop-blur-sm">
                        <div className="flex items-center space-x-2 mb-3">
                          <Headphones className="w-4 h-4 text-black" />
                          <span className="text-xs text-black/80 font-semibold">→ الفرنسية (أحمد)</span>
                          <div className="ml-auto w-2 h-2 bg-black rounded-full animate-pulse" style={{ animationDelay: '2s' }}></div>
                        </div>
                        <p className="text-black/90">{t('demo.carlosTranslatedFr')}</p>
                      </div>
                    </>
                  ) : (
                    <>
                      <div className="bg-white/40 rounded-xl p-4 border border-black/10 backdrop-blur-sm">
                        <div className="flex items-center space-x-2 mb-3">
                          <Headphones className="w-4 h-4 text-black" />
                          <span className="text-xs text-black/80 font-semibold">{t('demo.toEnglish')}</span>
                          <div className="ml-auto w-2 h-2 bg-black rounded-full animate-pulse" style={{ animationDelay: '2s' }}></div>
                        </div>
                        <p className="text-black/90">{t('demo.carlosTranslatedEn')}</p>
                      </div>

                      <div className="bg-white/40 rounded-xl p-4 border border-black/10 backdrop-blur-sm">
                        <div className="flex items-center space-x-2 mb-3">
                          <Headphones className="w-4 h-4 text-black" />
                          <span className="text-xs text-black/80 font-semibold">{t('demo.toFrench')}</span>
                          <div className="ml-auto w-2 h-2 bg-black rounded-full animate-pulse" style={{ animationDelay: '2s' }}></div>
                        </div>
                        <p className="text-black/90">{t('demo.carlosTranslatedFr')}</p>
                      </div>
                    </>
                  )}
                </div>
              </div>
            </div>

            {/* Performance Metrics */}
            <div className="mt-12 grid grid-cols-1 sm:grid-cols-3 gap-4 sm:gap-8 text-center">
              <div className="p-4 bg-black/5 rounded-xl border border-black/10">
                <div className="text-2xl sm:text-3xl font-black text-black mb-2">&lt; 200ms</div>
                <div className="text-xs sm:text-sm text-gray-600">{t('demo.responseTime')}</div>
              </div>
              <div className="p-4 bg-black/5 rounded-xl border border-black/10">
                <div className="text-2xl sm:text-3xl font-black text-black mb-2">99.8%</div>
                <div className="text-xs sm:text-sm text-gray-600">{t('demo.accuracy')}</div>
              </div>
              <div className="p-4 bg-black/5 rounded-xl border border-black/10">
                <div className="text-2xl sm:text-3xl font-black text-black mb-2">50+</div>
                <div className="text-xs sm:text-sm text-gray-600">{t('demo.languages')}</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default DemoSection;
