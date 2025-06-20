import { useState, useEffect } from "react";
import { Radio, Zap, Headphones, Clock, Users, Languages, Mic, Globe, Volume2 } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { useTranslation } from "@/hooks/useTranslation";
import { useLanguage } from "@/contexts/LanguageContext";
import Navigation from "@/components/Navigation";
import HeroSection from "@/components/HeroSection";
import DemoRequestForm from "@/components/DemoRequestForm";
import FloatingTranslateWord from "@/components/FloatingTranslateWord";
import VoiceWaveIndicator from "@/components/VoiceWaveIndicator";
import SoundRippleEffect from "@/components/SoundRippleEffect";

const Index = () => {
  const [showDemoForm, setShowDemoForm] = useState(false);
  const [scrollY, setScrollY] = useState(0);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [soundTriggers, setSoundTriggers] = useState({
    features: false,
    technology: false,
    cta: false
  });
  
  const { t } = useTranslation();
  const { isRTL } = useLanguage();

  // Interactive scroll and mouse tracking
  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY);
      
      // Trigger sound effects based on scroll position
      const featuresSection = document.getElementById('features');
      const technologySection = document.getElementById('technology');
      const ctaSection = document.querySelector('.cta-section');
      
      if (featuresSection) {
        const rect = featuresSection.getBoundingClientRect();
        setSoundTriggers(prev => ({ ...prev, features: rect.top < window.innerHeight / 2 && rect.bottom > 0 }));
      }
      
      if (technologySection) {
        const rect = technologySection.getBoundingClientRect();
        setSoundTriggers(prev => ({ ...prev, technology: rect.top < window.innerHeight / 2 && rect.bottom > 0 }));
      }
      
      if (ctaSection) {
        const rect = ctaSection.getBoundingClientRect();
        setSoundTriggers(prev => ({ ...prev, cta: rect.top < window.innerHeight / 2 && rect.bottom > 0 }));
      }
    };
    
    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };

    window.addEventListener('scroll', handleScroll);
    window.addEventListener('mousemove', handleMouseMove);
    
    return () => {
      window.removeEventListener('scroll', handleScroll);
      window.removeEventListener('mousemove', handleMouseMove);
    };
  }, []);

  return (
    <div className="min-h-screen bg-white text-black overflow-x-hidden">
      <Navigation onDemoClick={() => setShowDemoForm(true)} />
      
      <HeroSection 
        scrollY={scrollY} 
        mousePosition={mousePosition} 
        onDemoClick={() => setShowDemoForm(true)} 
      />

      {/* Floating Translate Word */}
      <FloatingTranslateWord />

      {/* Live Conference Demo */}
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
            
            {/* Enhanced Live Indicator with voice waves */}
            <div className={`flex items-center justify-center gap-2 sm:gap-3 mb-8 sm:mb-12 ${isRTL ? 'flex-row-reverse' : ''}`}>
              <div className="relative">
                <div className="w-3 h-3 sm:w-4 sm:h-4 bg-black rounded-full animate-ping absolute"></div>
                <div className="w-3 h-3 sm:w-4 sm:h-4 bg-black rounded-full"></div>
              </div>
              <span className={`text-black font-bold text-base sm:text-lg ${isRTL ? 'leading-relaxed' : ''}`}>{t('demo.liveIndicator')}</span>
              <div className="px-3 sm:px-4 py-1 sm:py-2 bg-black/20 rounded-full backdrop-blur-sm border border-black/30">
                <span className={`text-xs sm:text-sm text-black font-semibold ${isRTL ? 'leading-relaxed' : ''}`}>{t('demo.speakers')}</span>
              </div>
              {/* Enhanced voice wave indicator */}
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
                  <div className="bg-black h-2 rounded-full animate-pulse" style={{
                  width: '68%'
                }}></div>
                </div>
              </div>

              {/* Conversation Flow */}
              <div className="space-y-8">
                
                {/* Speaker 1 - English/Arabic depending on language */}
                <div className="grid lg:grid-cols-2 gap-8">
                  <div className="space-y-4">
                    <div className="flex items-center space-x-4 mb-4">
                      <div className="w-16 h-16 bg-black/20 rounded-full flex items-center justify-center border-2 border-black/30 relative">
                        <span className="text-black font-bold text-lg">{isRTL ? '🇸🇦' : '🇺🇸'}</span>
                        {/* Voice indicator around avatar */}
                        <div className="absolute -inset-2">
                          <div className="w-full h-full border-2 border-black/20 rounded-full voice-orbit"></div>
                        </div>
                      </div>
                      <div className="flex-1">
                        <div className="text-black font-bold text-lg">{t('demo.ceoName')}</div>
                        <div className="text-gray-600">{isRTL ? 'تتحدث بالعربية' : t('demo.speakingIn')}</div>
                      </div>
                      <VoiceWaveIndicator size="md" intensity="medium" />
                    </div>
                    <div className="bg-black/10 backdrop-blur-sm rounded-2xl p-6 border border-black/20 relative">
                      <p className="text-black text-lg leading-relaxed">
                        {t('demo.sarahQuote')}
                      </p>
                      {/* Floating sound elements */}
                      <div className="absolute top-2 right-2 w-2 h-2 bg-black/30 rounded-full conversation-flow"></div>
                      <div className="absolute bottom-2 left-2 w-1.5 h-1.5 bg-black/20 rounded-full floating-bubble"></div>
                    </div>
                  </div>

                  <div className="space-y-4">
                    <div className="flex items-center justify-center mb-6 relative">
                      <div className="flex items-center space-x-3 px-6 py-3 bg-black/20 rounded-full border border-black/30 backdrop-blur-sm">
                        <Zap className="w-5 h-5 text-black animate-pulse" />
                        <span className="text-sm text-black font-bold">{t('demo.aiProcessing')}</span>
                        <VoiceWaveIndicator size="sm" intensity="high" />
                      </div>
                      {/* Processing ripples */}
                      <SoundRippleEffect size="lg" className="opacity-30" />
                    </div>
                    
                    {/* Output translations based on current language */}
                    {isRTL ? (
                      <>
                        <div className="bg-white/40 rounded-xl p-4 border border-black/10 backdrop-blur-sm relative">
                          <div className="flex items-center space-x-2 mb-3">
                            <Headphones className="w-4 h-4 text-black" />
                            <span className="text-xs text-black/80 font-semibold">→ الإنجليزية (سارة)</span>
                            <div className="ml-auto w-2 h-2 bg-black rounded-full animate-pulse"></div>
                          </div>
                          <p className="text-black/90">"Let's dive into our Q2 expansion strategy. I believe the European market presents our biggest opportunity..."</p>
                          {/* Small voice elements */}
                          <div className="absolute top-1 right-1 w-1 h-1 bg-black/20 rounded-full language-morph"></div>
                        </div>

                        <div className="bg-white/40 rounded-xl p-4 border border-black/10 backdrop-blur-sm relative">
                          <div className="flex items-center space-x-2 mb-3">
                            <Headphones className="w-4 h-4 text-black" />
                            <span className="text-xs text-black/80 font-semibold">→ الفرنسية (ماري)</span>
                            <div className="ml-auto w-2 h-2 bg-black rounded-full animate-pulse"></div>
                          </div>
                          <p className="text-black/90">"Approfondissons notre stratégie d'expansion Q2. Je crois que le marché européen présente notre plus grande opportunité..."</p>
                          <div className="absolute bottom-2 right-2 w-1 h-1 bg-black/20 rounded-full speech-bubble-float"></div>
                        </div>
                      </>
                    ) : (
                      <>
                        <div className="bg-white/40 rounded-xl p-4 border border-black/10 backdrop-blur-sm relative">
                          <div className="flex items-center space-x-2 mb-3">
                            <Headphones className="w-4 h-4 text-black" />
                            <span className="text-xs text-black/80 font-semibold">{t('demo.toSpanish')}</span>
                            <div className="ml-auto w-2 h-2 bg-black rounded-full animate-pulse"></div>
                          </div>
                          <p className="text-black/90">"Profundicemos en nuestra estrategia de expansión para Q2. Creo que el mercado europeo presenta nuestra mayor oportunidad..."</p>
                          <div className="absolute top-1 right-1 w-1 h-1 bg-black/20 rounded-full language-morph"></div>
                        </div>

                        <div className="bg-white/40 rounded-xl p-4 border border-black/10 backdrop-blur-sm relative">
                          <div className="flex items-center space-x-2 mb-3">
                            <Headphones className="w-4 h-4 text-black" />
                            <span className="text-xs text-black/80 font-semibold">{t('demo.toFrench')}</span>
                            <div className="ml-auto w-2 h-2 bg-black rounded-full animate-pulse"></div>
                          </div>
                          <p className="text-black/90">"Approfondissons notre stratégie d'expansion Q2. Je crois que le marché européen présente notre plus grande opportunité..."</p>
                          <div className="absolute bottom-2 right-2 w-1 h-1 bg-black/20 rounded-full speech-bubble-float"></div>
                        </div>
                      </>
                    )}
                  </div>
                </div>

                {/* Visual Separator with sound waves */}
                <div className="flex items-center justify-center py-6">
                  <div className="flex space-x-2">
                    <div className="w-3 h-3 bg-black/60 rounded-full animate-pulse"></div>
                    <div className="w-3 h-3 bg-black/40 rounded-full animate-pulse" style={{
                    animationDelay: '0.2s'
                  }}></div>
                    <div className="w-3 h-3 bg-black/60 rounded-full animate-pulse" style={{
                    animationDelay: '0.4s'
                  }}></div>
                  </div>
                  {/* Ambient sound waves */}
                  <div className="absolute">
                    <VoiceWaveIndicator size="lg" intensity="low" className="opacity-20" />
                  </div>
                </div>

                {/* Speaker 2 Response - Spanish/Arabic depending on language */}
                <div className="grid lg:grid-cols-2 gap-8">
                  <div className="space-y-4">
                    <div className="flex items-center space-x-4 mb-4">
                      <div className="w-16 h-16 bg-black/20 rounded-full flex items-center justify-center border-2 border-black/30 relative">
                        <span className="text-black font-bold text-lg">{isRTL ? '🇸🇦' : '🇪🇸'}</span>
                        {/* Different voice pattern for second speaker */}
                        <div className="absolute -inset-1">
                          <div className="w-full h-full border border-black/15 rounded-full echo-wave"></div>
                        </div>
                      </div>
                      <div className="flex-1">
                        <div className="text-black font-bold text-lg">{isRTL ? 'أحمد الراشد' : t('demo.carlosName')}</div>
                        <div className="text-gray-600">{isRTL ? 'يتحدث بالعربية' : t('demo.speakingInSpanish')}</div>
                      </div>
                      <VoiceWaveIndicator size="md" intensity="medium" />
                    </div>
                    <div className="bg-black/10 backdrop-blur-sm rounded-2xl p-6 border border-black/20 relative">
                      <p className="text-black text-lg leading-relaxed">
                        {t('demo.carlosOriginal')}
                      </p>
                      {/* Different floating pattern */}
                      <div className="absolute top-3 left-3 w-1.5 h-1.5 bg-black/25 rounded-full voice-orbit"></div>
                      <div className="absolute bottom-3 right-3 w-1 h-1 bg-black/15 rounded-full conversation-flow"></div>
                    </div>
                  </div>

                  <div className="space-y-4">
                    <div className="flex items-center justify-center mb-6 relative">
                      <div className="flex items-center space-x-3 px-6 py-3 bg-black/20 rounded-full border border-black/30 backdrop-blur-sm">
                        <Zap className="w-5 h-5 text-black animate-pulse" style={{
                        animationDelay: '2s'
                      }} />
                        <span className="text-sm text-black font-bold">{t('demo.aiProcessing')}</span>
                        <VoiceWaveIndicator size="sm" intensity="high" />
                      </div>
                      <SoundRippleEffect size="lg" className="opacity-20" />
                    </div>
                    
                    {/* Output translations for second speaker based on current language */}
                    {isRTL ? (
                      <>
                        <div className="bg-white/40 rounded-xl p-4 border border-black/10 backdrop-blur-sm relative">
                          <div className="flex items-center space-x-2 mb-3">
                            <Headphones className="w-4 h-4 text-black" />
                            <span className="text-xs text-black/80 font-semibold">→ الإنجليزية (أحمد)</span>
                            <div className="ml-auto w-2 h-2 bg-black rounded-full animate-pulse" style={{
                            animationDelay: '2s'
                          }}></div>
                          </div>
                          <p className="text-black/90">{t('demo.carlosTranslatedEn')}</p>
                          <div className="absolute top-2 left-2 w-1 h-1 bg-black/20 rounded-full language-morph"></div>
                        </div>

                        <div className="bg-white/40 rounded-xl p-4 border border-black/10 backdrop-blur-sm relative">
                          <div className="flex items-center space-x-2 mb-3">
                            <Headphones className="w-4 h-4 text-black" />
                            <span className="text-xs text-black/80 font-semibold">→ الفرنسية (أحمد)</span>
                            <div className="ml-auto w-2 h-2 bg-black rounded-full animate-pulse" style={{
                            animationDelay: '2s'
                          }}></div>
                          </div>
                          <p className="text-black/90">{t('demo.carlosTranslatedFr')}</p>
                          <div className="absolute bottom-2 right-2 w-1 h-1 bg-black/20 rounded-full speech-bubble-float"></div>
                        </div>
                      </>
                    ) : (
                      <>
                        <div className="bg-white/40 rounded-xl p-4 border border-black/10 backdrop-blur-sm relative">
                          <div className="flex items-center space-x-2 mb-3">
                            <Headphones className="w-4 h-4 text-black" />
                            <span className="text-xs text-black/80 font-semibold">{t('demo.toEnglish')}</span>
                            <div className="ml-auto w-2 h-2 bg-black rounded-full animate-pulse" style={{
                            animationDelay: '2s'
                          }}></div>
                          </div>
                          <p className="text-black/90">{t('demo.carlosTranslatedEn')}</p>
                          <div className="absolute top-2 left-2 w-1 h-1 bg-black/20 rounded-full language-morph"></div>
                        </div>

                        <div className="bg-white/40 rounded-xl p-4 border border-black/10 backdrop-blur-sm relative">
                          <div className="flex items-center space-x-2 mb-3">
                            <Headphones className="w-4 h-4 text-black" />
                            <span className="text-xs text-black/80 font-semibold">{t('demo.toFrench')}</span>
                            <div className="ml-auto w-2 h-2 bg-black rounded-full animate-pulse" style={{
                            animationDelay: '2s'
                          }}></div>
                          </div>
                          <p className="text-black/90">{t('demo.carlosTranslatedFr')}</p>
                          <div className="absolute bottom-2 right-2 w-1 h-1 bg-black/20 rounded-full speech-bubble-float"></div>
                        </div>
                      </>
                    )}
                  </div>
                </div>
              </div>

              {/* Performance Metrics - Fixed for mobile */}
              <div className="mt-12 grid grid-cols-1 sm:grid-cols-3 gap-4 sm:gap-8 text-center">
                <div className="p-4 bg-black/5 rounded-xl border border-black/10 relative">
                  <div className="text-2xl sm:text-3xl font-black text-black mb-2">&lt; 200ms</div>
                  <div className="text-xs sm:text-sm text-gray-600">{t('demo.responseTime')}</div>
                  {soundTriggers.features && (
                    <div className="absolute top-0 right-0 w-2 h-2 bg-black/30 rounded-full voice-wave"></div>
                  )}
                </div>
                <div className="p-4 bg-black/5 rounded-xl border border-black/10 relative">
                  <div className="text-2xl sm:text-3xl font-black text-black mb-2">99.8%</div>
                  <div className="text-xs sm:text-sm text-gray-600">{t('demo.accuracy')}</div>
                  {soundTriggers.features && (
                    <div className="absolute top-0 left-0 w-1.5 h-1.5 bg-black/20 rounded-full conversation-flow"></div>
                  )}
                </div>
                <div className="p-4 bg-black/5 rounded-xl border border-black/10 relative">
                  <div className="text-2xl sm:text-3xl font-black text-black mb-2">50+</div>
                  <div className="text-xs sm:text-sm text-gray-600">{t('demo.languages')}</div>
                  {soundTriggers.features && (
                    <div className="absolute bottom-0 right-0 w-1 h-1 bg-black/15 rounded-full language-morph"></div>
                  )}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Grid */}
      <section id="features" className="py-20 sm:py-32 bg-gray-100 relative">
        {soundTriggers.features && (
          <SoundRippleEffect size="lg" className="absolute top-10 left-10 opacity-10" />
        )}
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12 sm:mb-20 relative">
            <h2 className={`text-3xl sm:text-5xl font-bold mb-4 sm:mb-6 ${isRTL ? 'leading-relaxed' : ''}`}>
              {t('features.title')}
            </h2>
            <p className={`text-lg sm:text-xl text-gray-600 ${isRTL ? 'leading-relaxed' : ''}`}>{t('features.subtitle')}</p>
            
            {/* Ambient voice waves for features section */}
            <div className="absolute -top-4 left-1/4">
              <VoiceWaveIndicator size="sm" intensity="low" className="opacity-30" />
            </div>
            <div className="absolute -bottom-4 right-1/4">
              <VoiceWaveIndicator size="sm" intensity="low" className="opacity-20" />
            </div>
          </div>

          <div className="grid md:grid-cols-3 gap-6 sm:gap-8">
            <Card className="bg-white/50 border-black/20 hover:bg-white/70 transition-all duration-300 hover:scale-105 relative group">
              <CardContent className="p-6 sm:p-8 text-center">
                <div className="w-16 h-16 sm:w-20 sm:h-20 bg-black/20 rounded-2xl flex items-center justify-center mx-auto mb-4 sm:mb-6 rotate-12 hover:rotate-0 transition-transform duration-300 relative">
                  <Clock className="w-8 h-8 sm:w-10 sm:h-10 text-black" />
                  {/* Sound elements on card hover */}
                  <div className="absolute -top-1 -right-1 w-2 h-2 bg-black/20 rounded-full group-hover:animate-pulse opacity-0 group-hover:opacity-100 transition-opacity"></div>
                </div>
                <h3 className={`text-xl sm:text-2xl font-bold mb-3 sm:mb-4 text-black ${isRTL ? 'leading-relaxed' : ''}`}>{t('features.instant')}</h3>
                <p className={`text-gray-600 ${isRTL ? 'leading-relaxed' : ''}`}>{t('features.instantDesc')}</p>
                
                {soundTriggers.features && (
                  <div className="absolute bottom-2 right-2 w-1 h-1 bg-black/15 rounded-full speech-bubble-float"></div>
                )}
              </CardContent>
            </Card>

            <Card className="bg-white/50 border-black/20 hover:bg-white/70 transition-all duration-300 hover:scale-105 relative group">
              <CardContent className="p-6 sm:p-8 text-center">
                <div className="w-16 h-16 sm:w-20 sm:h-20 bg-black/20 rounded-2xl flex items-center justify-center mx-auto mb-4 sm:mb-6 rotate-12 hover:rotate-0 transition-transform duration-300 relative">
                  <Users className="w-8 h-8 sm:w-10 sm:h-10 text-black" />
                  <div className="absolute -bottom-1 -left-1 w-1.5 h-1.5 bg-black/25 rounded-full group-hover:voice-wave opacity-0 group-hover:opacity-100 transition-opacity"></div>
                </div>
                <h3 className={`text-xl sm:text-2xl font-bold mb-3 sm:mb-4 text-black ${isRTL ? 'leading-relaxed' : ''}`}>{t('features.contextual')}</h3>
                <p className={`text-gray-600 ${isRTL ? 'leading-relaxed' : ''}`}>{t('features.contextualDesc')}</p>
                
                {soundTriggers.features && (
                  <div className="absolute top-2 left-2 w-1 h-1 bg-black/10 rounded-full conversation-flow"></div>
                )}
              </CardContent>
            </Card>

            <Card className="bg-white/50 border-black/20 hover:bg-white/70 transition-all duration-300 hover:scale-105 relative group">
              <CardContent className="p-6 sm:p-8 text-center">
                <div className="w-16 h-16 sm:w-20 sm:h-20 bg-black/20 rounded-2xl flex items-center justify-center mx-auto mb-4 sm:mb-6 rotate-12 hover:rotate-0 transition-transform duration-300 relative">
                  <Languages className="w-8 h-8 sm:w-10 sm:h-10 text-black" />
                  <div className="absolute top-0 right-0 w-1 h-1 bg-black/30 rounded-full group-hover:language-morph opacity-0 group-hover:opacity-100 transition-opacity"></div>
                </div>
                <h3 className={`text-xl sm:text-2xl font-bold mb-3 sm:mb-4 text-black ${isRTL ? 'leading-relaxed' : ''}`}>{t('features.universal')}</h3>
                <p className={`text-gray-600 ${isRTL ? 'leading-relaxed' : ''}`}>{t('features.universalDesc')}</p>
                
                {soundTriggers.features && (
                  <div className="absolute bottom-2 left-2 w-1.5 h-1.5 bg-black/20 rounded-full voice-orbit"></div>
                )}
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Technology Section */}
      <section id="technology" className="py-20 sm:py-32 bg-white relative">
        {soundTriggers.technology && (
          <>
            <div className="absolute top-1/4 left-8">
              <VoiceWaveIndicator size="md" intensity="low" className="opacity-20" />
            </div>
            <div className="absolute bottom-1/4 right-8">
              <VoiceWaveIndicator size="sm" intensity="medium" className="opacity-15" />
            </div>
          </>
        )}
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12 sm:mb-20">
            <h2 className={`text-3xl sm:text-5xl font-bold mb-4 sm:mb-6 text-black ${isRTL ? 'leading-relaxed' : ''}`}>
              {t('technology.title')}
            </h2>
            <p className={`text-lg sm:text-xl text-gray-600 ${isRTL ? 'leading-relaxed' : ''}`}>{t('technology.subtitle')}</p>
          </div>

          <div className="grid lg:grid-cols-2 gap-12 sm:gap-16 items-center">
            <div className="space-y-6 sm:space-y-8">
              <div className={`flex items-start gap-3 sm:gap-4 ${isRTL ? 'flex-row-reverse text-right' : ''} group`}>
                <div className="w-12 h-12 sm:w-16 sm:h-16 bg-black/20 rounded-xl flex items-center justify-center flex-shrink-0 relative">
                  <Mic className="w-6 h-6 sm:w-8 sm:h-8 text-black" />
                  {soundTriggers.technology && (
                    <div className="absolute -inset-1 border border-black/10 rounded-xl sound-ripple"></div>
                  )}
                </div>
                <div>
                  <h3 className={`text-xl sm:text-2xl font-bold mb-2 sm:mb-3 text-black ${isRTL ? 'leading-relaxed' : ''}`}>{t('technology.speechRecognition')}</h3>
                  <p className={`text-gray-600 ${isRTL ? 'leading-relaxed' : ''}`}>{t('technology.speechDesc')}</p>
                </div>
                {soundTriggers.technology && (
                  <div className="absolute right-0 top-0 w-1 h-1 bg-black/15 rounded-full voice-wave"></div>
                )}
              </div>

              <div className={`flex items-start gap-3 sm:gap-4 ${isRTL ? 'flex-row-reverse text-right' : ''} group relative`}>
                <div className="w-12 h-12 sm:w-16 sm:h-16 bg-black/20 rounded-xl flex items-center justify-center flex-shrink-0 relative">
                  <Globe className="w-6 h-6 sm:w-8 sm:h-8 text-black" />
                  {soundTriggers.technology && (
                    <div className="absolute -top-1 -right-1 w-2 h-2 bg-black/20 rounded-full language-morph"></div>
                  )}
                </div>
                <div>
                  <h3 className={`text-xl sm:text-2xl font-bold mb-2 sm:mb-3 text-black ${isRTL ? 'leading-relaxed' : ''}`}>{t('technology.neuralTranslation')}</h3>
                  <p className={`text-gray-600 ${isRTL ? 'leading-relaxed' : ''}`}>{t('technology.neuralDesc')}</p>
                </div>
                {soundTriggers.technology && (
                  <div className="absolute left-0 bottom-0 w-1.5 h-1.5 bg-black/10 rounded-full conversation-flow"></div>
                )}
              </div>

              <div className={`flex items-start gap-3 sm:gap-4 ${isRTL ? 'flex-row-reverse text-right' : ''} group relative`}>
                <div className="w-12 h-12 sm:w-16 sm:h-16 bg-black/20 rounded-xl flex items-center justify-center flex-shrink-0 relative">
                  <Volume2 className="w-6 h-6 sm:w-8 sm:h-8 text-black" />
                  {soundTriggers.technology && (
                    <div className="absolute -bottom-1 -left-1 w-1 h-1 bg-black/25 rounded-full speech-bubble-float"></div>
                  )}
                </div>
                <div>
                  <h3 className={`text-xl sm:text-2xl font-bold mb-2 sm:mb-3 text-black ${isRTL ? 'leading-relaxed' : ''}`}>{t('technology.voiceSynthesis')}</h3>
                  <p className={`text-gray-600 ${isRTL ? 'leading-relaxed' : ''}`}>{t('technology.voiceDesc')}</p>
                </div>
                {soundTriggers.technology && (
                  <div className="absolute right-2 top-2 w-1 h-1 bg-black/15 rounded-full voice-orbit"></div>
                )}
              </div>
            </div>

            <div className="relative">
              <div className="bg-black/5 rounded-3xl p-6 sm:p-8 border border-black/20 relative">
                {soundTriggers.technology && (
                  <SoundRippleEffect size="md" className="absolute top-4 right-4 opacity-20" />
                )}
                
                <div className="space-y-4 sm:space-y-6">
                  <div className={`flex items-center justify-between ${isRTL ? 'flex-row-reverse' : ''}`}>
                    <span className={`text-black font-bold text-sm sm:text-base ${isRTL ? 'leading-relaxed' : ''}`}>{t('technology.processingSpeed')}</span>
                    <span className={`text-black text-sm sm:text-base ${isRTL ? 'leading-relaxed' : ''}`}>{t('technology.ultraFast')}</span>
                  </div>
                  <div className="w-full bg-black/10 rounded-full h-2 relative">
                    <div className="bg-black h-2 rounded-full w-11/12"></div>
                    {soundTriggers.technology && (
                      <div className="absolute right-0 top-0 w-1 h-2 bg-black/30 voice-frequency"></div>
                    )}
                  </div>

                  <div className={`flex items-center justify-between ${isRTL ? 'flex-row-reverse' : ''}`}>
                    <span className={`text-black font-bold text-sm sm:text-base ${isRTL ? 'leading-relaxed' : ''}`}>{t('technology.accuracyRate')}</span>
                    <span className="text-black text-sm sm:text-base">99.8%</span>
                  </div>
                  <div className="w-full bg-black/10 rounded-full h-2 relative">
                    <div className="bg-black h-2 rounded-full w-full"></div>
                    {soundTriggers.technology && (
                      <div className="absolute left-1/2 top-0 w-1 h-2 bg-black/20 audio-visualizer"></div>
                    )}
                  </div>

                  <div className={`flex items-center justify-between ${isRTL ? 'flex-row-reverse' : ''}`}>
                    <span className={`text-black font-bold text-sm sm:text-base ${isRTL ? 'leading-relaxed' : ''}`}>{t('technology.languageSupport')}</span>
                    <span className={`text-black text-sm sm:text-base ${isRTL ? 'leading-relaxed' : ''}`}>{t('technology.languagesCount')}</span>
                  </div>
                  <div className="w-full bg-black/10 rounded-full h-2 relative">
                    <div className="bg-black h-2 rounded-full w-10/12"></div>
                    {soundTriggers.technology && (
                      <div className="absolute right-8 top-0 w-1 h-2 bg-black/15 voice-wave"></div>
                    )}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 sm:py-32 bg-gray-100 cta-section relative">
        {soundTriggers.cta && (
          <>
            <div className="absolute top-8 left-8">
              <VoiceWaveIndicator size="lg" intensity="medium" className="opacity-10" />
            </div>
            <div className="absolute bottom-8 right-8">
              <SoundRippleEffect size="sm" className="opacity-15" />
            </div>
          </>
        )}
        
        <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8 relative">
          <h2 className={`text-3xl sm:text-5xl font-bold mb-4 sm:mb-6 text-black ${isRTL ? 'leading-relaxed' : ''}`}>
            {t('cta.title')}
          </h2>
          <p className={`text-lg sm:text-xl text-gray-600 mb-8 sm:mb-12 whitespace-pre-line ${isRTL ? 'leading-relaxed' : ''}`}>{t('cta.subtitle')}</p>
          
          <div className={`flex flex-col sm:flex-row gap-4 sm:gap-6 justify-center items-center ${isRTL ? 'sm:flex-row-reverse' : ''}`}>
            <Button 
              size="lg" 
              variant="outline" 
              className="text-lg sm:text-xl px-8 sm:px-12 py-4 sm:py-6 border-2 border-black text-black hover:bg-black hover:text-white transition-all duration-300 relative group"
              onClick={() => setShowDemoForm(true)}
            >
              {t('cta.contact')}
              {soundTriggers.cta && (
                <div className="absolute -top-1 -right-1 w-2 h-2 bg-black/20 rounded-full group-hover:sound-ripple opacity-0 group-hover:opacity-100 transition-opacity"></div>
              )}
            </Button>
          </div>

          <div className="mt-12 sm:mt-16 flex justify-center">
            <div className="grid grid-cols-2 gap-8 sm:gap-12 text-center max-w-md">
              <div className="relative">
                <div className="text-3xl sm:text-4xl font-bold text-black mb-2">99.8%</div>
                <div className={`text-gray-600 text-sm sm:text-base ${isRTL ? 'leading-relaxed' : ''}`}>{t('cta.accuracy')}</div>
                {soundTriggers.cta && (
                  <div className="absolute top-0 right-0 w-1 h-1 bg-black/15 rounded-full voice-frequency"></div>
                )}
              </div>
              <div className="relative">
                <div className="text-3xl sm:text-4xl font-bold text-black mb-2">24/7</div>
                <div className={`text-gray-600 text-sm sm:text-base ${isRTL ? 'leading-relaxed' : ''}`}>{t('cta.support')}</div>
                {soundTriggers.cta && (
                  <div className="absolute bottom-0 left-0 w-1 h-1 bg-black/10 rounded-full speech-bubble-float"></div>
                )}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Demo Form Modal */}
      {showDemoForm && <DemoRequestForm onClose={() => setShowDemoForm(false)} />}
    </div>
  );
};

export default Index;
