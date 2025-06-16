import { useState } from "react";
import { ArrowRight, Mic, Globe, Zap, Users, Languages, Clock, Star, Play, Volume2, MicIcon, Headphones } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import DemoRequestForm from "@/components/DemoRequestForm";
const Index = () => {
  const [showDemoForm, setShowDemoForm] = useState(false);
  return <div className="min-h-screen bg-white text-black overflow-x-hidden">
      {/* Navigation */}
      <nav className="fixed top-0 z-40 w-full bg-white/90 backdrop-blur-xl border-b border-black/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center">
              <img alt="Nihki" className="h-12 w-auto" src="/lovable-uploads/700367a1-438b-472b-97b6-dd82762bf7bb.png" />
            </div>
            <div className="hidden md:flex items-center space-x-8">
              <a href="#demo" className="text-gray-700 hover:text-black transition-colors">Demo</a>
              <a href="#features" className="text-gray-700 hover:text-black transition-colors">Features</a>
              <a href="#technology" className="text-gray-700 hover:text-black transition-colors">Technology</a>
              <Button onClick={() => setShowDemoForm(true)} className="bg-black text-white hover:bg-gray-800 border-2 border-black">
                Try Demo
              </Button>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
        {/* Animated Background Effects */}
        <div className="absolute inset-0">
          <div className="absolute top-20 left-10 w-72 h-72 bg-black/5 rounded-full blur-3xl animate-pulse"></div>
          <div className="absolute bottom-20 right-10 w-96 h-96 bg-black/3 rounded-full blur-3xl animate-pulse" style={{
          animationDelay: '1s'
        }}></div>
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-black/7 rounded-full blur-3xl animate-pulse" style={{
          animationDelay: '2s'
        }}></div>
          
          {/* Grid Pattern */}
          <div className="absolute inset-0 opacity-5">
            <div className="h-full w-full bg-[linear-gradient(rgba(0,0,0,0.1)_1px,transparent_1px),linear-gradient(90deg,rgba(0,0,0,0.1)_1px,transparent_1px)] bg-[size:50px_50px]"></div>
          </div>
        </div>
        
        <div className="relative z-10 text-center px-4 sm:px-6 lg:px-8">
          
          
          <h1 className="text-6xl md:text-8xl font-black mb-6 leading-tight">
            <span className="block">SPEAK</span>
            <span className="block text-black">ANY</span>
            <span className="block">LANGUAGE</span>
          </h1>
          
          <p className="text-xl md:text-2xl text-gray-700 mb-12 max-w-3xl mx-auto leading-relaxed">
            AI that interprets <em className="text-black">conversations</em>, not just words
          </p>
          
          <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
            <Button size="lg" onClick={() => setShowDemoForm(true)} className="text-xl px-10 py-6 bg-black text-white hover:bg-gray-800 transform hover:scale-105 transition-all duration-300 border-2 border-black">
              Experience Live Demo
              <ArrowRight className="ml-3 w-6 h-6" />
            </Button>
          </div>
        </div>
        
        {/* Scroll Indicator */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
          <div className="w-6 h-10 border-2 border-black/40 rounded-full flex justify-center">
            <div className="w-1 h-3 bg-black/40 rounded-full mt-2 animate-pulse"></div>
          </div>
        </div>
      </section>

      {/* Live Conference Demo */}
      <section id="demo" className="relative py-32 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-20">
            <div className="inline-flex items-center px-6 py-3 rounded-full bg-black/10 border border-black/20 mb-8">
              <Play className="w-5 h-5 mr-2 text-black" />
              <span className="text-black/90">Live Demo in Action</span>
            </div>
            <h2 className="text-5xl md:text-6xl font-black mb-6 text-black">
              MULTILINGUAL 
              <span className="block text-black">CONFERENCE</span>
              <span className="block">LIVE NOW</span>
            </h2>
            <p className="text-xl text-gray-600 mb-8">Real business meeting happening across 3 languages simultaneously</p>
            
            {/* Live Indicator */}
            <div className="flex items-center justify-center space-x-3 mb-12">
              <div className="relative">
                <div className="w-4 h-4 bg-black rounded-full animate-ping absolute"></div>
                <div className="w-4 h-4 bg-black rounded-full"></div>
              </div>
              <span className="text-black font-bold text-lg">LIVE CONFERENCE</span>
              <div className="px-4 py-2 bg-black/20 rounded-full backdrop-blur-sm border border-black/30">
                <span className="text-sm text-black font-semibold">4 Speakers • 3 Languages</span>
              </div>
            </div>
          </div>

          <div className="relative max-w-6xl mx-auto">
            {/* Main Demo Container */}
            <div className="bg-gray-100/30 backdrop-blur-xl rounded-3xl p-8 border border-black/20 shadow-2xl">
              
              {/* Progress Bar */}
              <div className="mb-8">
                <div className="flex justify-between text-sm text-gray-600 mb-2">
                  <span>Conference Progress</span>
                  <span>47 minutes elapsed</span>
                </div>
                <div className="w-full bg-black/10 rounded-full h-2">
                  <div className="bg-black h-2 rounded-full animate-pulse" style={{
                  width: '68%'
                }}></div>
                </div>
              </div>

              {/* Conversation Flow */}
              <div className="space-y-8">
                
                {/* Speaker 1 - English */}
                <div className="grid lg:grid-cols-2 gap-8">
                  <div className="space-y-4">
                    <div className="flex items-center space-x-4 mb-4">
                      <div className="w-16 h-16 bg-black/20 rounded-full flex items-center justify-center border-2 border-black/30">
                        <span className="text-black font-bold text-lg">🇺🇸</span>
                      </div>
                      <div className="flex-1">
                        <div className="text-black font-bold text-lg">Sarah Chen - CEO</div>
                        <div className="text-gray-600">Speaking in English</div>
                      </div>
                      <div className="flex items-center space-x-1">
                        <div className="w-2 h-8 bg-black/80 rounded animate-pulse"></div>
                        <div className="w-2 h-6 bg-black/60 rounded animate-pulse" style={{
                        animationDelay: '0.1s'
                      }}></div>
                        <div className="w-2 h-10 bg-black/90 rounded animate-pulse" style={{
                        animationDelay: '0.2s'
                      }}></div>
                        <div className="w-2 h-4 bg-black/40 rounded animate-pulse" style={{
                        animationDelay: '0.3s'
                      }}></div>
                      </div>
                    </div>
                    <div className="bg-black/10 backdrop-blur-sm rounded-2xl p-6 border border-black/20">
                      <p className="text-black text-lg leading-relaxed">
                        "Let's dive into our Q2 expansion strategy. I believe the European market presents our biggest opportunity, especially given the regulatory changes we've been tracking..."
                      </p>
                    </div>
                  </div>

                  <div className="space-y-4">
                    <div className="flex items-center justify-center mb-6">
                      <div className="flex items-center space-x-3 px-6 py-3 bg-black/20 rounded-full border border-black/30 backdrop-blur-sm">
                        <Zap className="w-5 h-5 text-black animate-pulse" />
                        <span className="text-sm text-black font-bold">AI PROCESSING</span>
                        <div className="flex space-x-1">
                          <div className="w-1 h-1 bg-black rounded-full animate-pulse"></div>
                          <div className="w-1 h-1 bg-black rounded-full animate-pulse" style={{
                          animationDelay: '0.2s'
                        }}></div>
                          <div className="w-1 h-1 bg-black rounded-full animate-pulse" style={{
                          animationDelay: '0.4s'
                        }}></div>
                        </div>
                      </div>
                    </div>
                    
                    {/* Output to Spanish */}
                    <div className="bg-white/40 rounded-xl p-4 border border-black/10 backdrop-blur-sm">
                      <div className="flex items-center space-x-2 mb-3">
                        <Headphones className="w-4 h-4 text-black" />
                        <span className="text-xs text-black/80 font-semibold">→ Spanish (Carlos)</span>
                        <div className="ml-auto w-2 h-2 bg-black rounded-full animate-pulse"></div>
                      </div>
                      <p className="text-black/90">"Profundicemos en nuestra estrategia de expansión para Q2. Creo que el mercado europeo presenta nuestra mayor oportunidad..."</p>
                    </div>

                    {/* Output to French */}
                    <div className="bg-white/40 rounded-xl p-4 border border-black/10 backdrop-blur-sm">
                      <div className="flex items-center space-x-2 mb-3">
                        <Headphones className="w-4 h-4 text-black" />
                        <span className="text-xs text-black/80 font-semibold">→ French (Marie)</span>
                        <div className="ml-auto w-2 h-2 bg-black rounded-full animate-pulse"></div>
                      </div>
                      <p className="text-black/90">"Approfondissons notre stratégie d'expansion Q2. Je crois que le marché européen présente notre plus grande opportunité..."</p>
                    </div>
                  </div>
                </div>

                {/* Visual Separator */}
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
                </div>

                {/* Speaker 2 Response - Spanish */}
                <div className="grid lg:grid-cols-2 gap-8">
                  <div className="space-y-4">
                    <div className="flex items-center space-x-4 mb-4">
                      <div className="w-16 h-16 bg-black/20 rounded-full flex items-center justify-center border-2 border-black/30">
                        <span className="text-black font-bold text-lg">🇪🇸</span>
                      </div>
                      <div className="flex-1">
                        <div className="text-black font-bold text-lg">Carlos Rodriguez</div>
                        <div className="text-gray-600">Speaking in Spanish</div>
                      </div>
                      <div className="flex items-center space-x-1">
                        <div className="w-2 h-7 bg-black/70 rounded animate-pulse" style={{
                        animationDelay: '2s'
                      }}></div>
                        <div className="w-2 h-9 bg-black/90 rounded animate-pulse" style={{
                        animationDelay: '2.1s'
                      }}></div>
                        <div className="w-2 h-5 bg-black/50 rounded animate-pulse" style={{
                        animationDelay: '2.2s'
                      }}></div>
                      </div>
                    </div>
                    <div className="bg-black/10 backdrop-blur-sm rounded-2xl p-6 border border-black/20">
                      <p className="text-black text-lg leading-relaxed">
                        "Estoy completamente de acuerdo, Sarah. Sin embargo, también deberíamos considerar las diferencias culturales específicas de cada región europea..."
                      </p>
                    </div>
                  </div>

                  <div className="space-y-4">
                    <div className="flex items-center justify-center mb-6">
                      <div className="flex items-center space-x-3 px-6 py-3 bg-black/20 rounded-full border border-black/30 backdrop-blur-sm">
                        <Zap className="w-5 h-5 text-black animate-pulse" style={{
                        animationDelay: '2s'
                      }} />
                        <span className="text-sm text-black font-bold">AI PROCESSING</span>
                        <div className="flex space-x-1">
                          <div className="w-1 h-1 bg-black rounded-full animate-pulse" style={{
                          animationDelay: '2s'
                        }}></div>
                          <div className="w-1 h-1 bg-black rounded-full animate-pulse" style={{
                          animationDelay: '2.2s'
                        }}></div>
                          <div className="w-1 h-1 bg-black rounded-full animate-pulse" style={{
                          animationDelay: '2.4s'
                        }}></div>
                        </div>
                      </div>
                    </div>
                    
                    <div className="bg-white/40 rounded-xl p-4 border border-black/10 backdrop-blur-sm">
                      <div className="flex items-center space-x-2 mb-3">
                        <Headphones className="w-4 h-4 text-black" />
                        <span className="text-xs text-black/80 font-semibold">→ English (Sarah)</span>
                        <div className="ml-auto w-2 h-2 bg-black rounded-full animate-pulse" style={{
                        animationDelay: '2s'
                      }}></div>
                      </div>
                      <p className="text-black/90">"I completely agree, Sarah. However, we should also consider the specific cultural differences of each European region..."</p>
                    </div>

                    <div className="bg-white/40 rounded-xl p-4 border border-black/10 backdrop-blur-sm">
                      <div className="flex items-center space-x-2 mb-3">
                        <Headphones className="w-4 h-4 text-black" />
                        <span className="text-xs text-black/80 font-semibold">→ French (Marie)</span>
                        <div className="ml-auto w-2 h-2 bg-black rounded-full animate-pulse" style={{
                        animationDelay: '2s'
                      }}></div>
                      </div>
                      <p className="text-black/90">"Je suis complètement d'accord, Sarah. Cependant, nous devrions aussi considérer les différences culturelles spécifiques..."</p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Performance Metrics */}
              <div className="mt-12 grid grid-cols-3 gap-8 text-center">
                <div className="p-4 bg-black/5 rounded-xl border border-black/10">
                  <div className="text-3xl font-black text-black mb-2">&lt; 200ms</div>
                  <div className="text-sm text-gray-600">Response Time</div>
                </div>
                <div className="p-4 bg-black/5 rounded-xl border border-black/10">
                  <div className="text-3xl font-black text-black mb-2">99.8%</div>
                  <div className="text-sm text-gray-600">Accuracy Rate</div>
                </div>
                <div className="p-4 bg-black/5 rounded-xl border border-black/10">
                  <div className="text-3xl font-black text-black mb-2">50+</div>
                  <div className="text-sm text-gray-600">Languages</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Grid */}
      <section id="features" className="py-32 bg-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-20">
            <h2 className="text-5xl font-bold mb-6">
              Beyond <span className="text-black">Translation</span>
            </h2>
            <p className="text-xl text-gray-600">AI that understands context, emotion, and culture</p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <Card className="bg-white/50 border-black/20 hover:bg-white/70 transition-all duration-300 hover:scale-105">
              <CardContent className="p-8 text-center">
                <div className="w-20 h-20 bg-black/20 rounded-2xl flex items-center justify-center mx-auto mb-6 rotate-12 hover:rotate-0 transition-transform duration-300">
                  <Clock className="w-10 h-10 text-black" />
                </div>
                <h3 className="text-2xl font-bold mb-4 text-black">Instant</h3>
                <p className="text-gray-600">Ultra-low latency processing for natural conversation flow</p>
              </CardContent>
            </Card>

            <Card className="bg-white/50 border-black/20 hover:bg-white/70 transition-all duration-300 hover:scale-105">
              <CardContent className="p-8 text-center">
                <div className="w-20 h-20 bg-black/20 rounded-2xl flex items-center justify-center mx-auto mb-6 rotate-12 hover:rotate-0 transition-transform duration-300">
                  <Users className="w-10 h-10 text-black" />
                </div>
                <h3 className="text-2xl font-bold mb-4 text-black">Contextual</h3>
                <p className="text-gray-600">Understands nuance, tone, and cultural context</p>
              </CardContent>
            </Card>

            <Card className="bg-white/50 border-black/20 hover:bg-white/70 transition-all duration-300 hover:scale-105">
              <CardContent className="p-8 text-center">
                <div className="w-20 h-20 bg-black/20 rounded-2xl flex items-center justify-center mx-auto mb-6 rotate-12 hover:rotate-0 transition-transform duration-300">
                  <Languages className="w-10 h-10 text-black" />
                </div>
                <h3 className="text-2xl font-bold mb-4 text-black">Universal</h3>
                <p className="text-gray-600">50+ languages with expanding capabilities</p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Technology Section */}
      <section id="technology" className="py-32 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-20">
            <h2 className="text-5xl font-bold mb-6 text-black">
              Revolutionary <span className="text-black">Technology</span>
            </h2>
            <p className="text-xl text-gray-600">The future of cross-language communication</p>
          </div>

          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div className="space-y-8">
              <div className="flex items-start space-x-4">
                <div className="w-16 h-16 bg-black/20 rounded-xl flex items-center justify-center flex-shrink-0">
                  <Mic className="w-8 h-8 text-black" />
                </div>
                <div>
                  <h3 className="text-2xl font-bold mb-3 text-black">Advanced Speech Recognition</h3>
                  <p className="text-gray-600">State-of-the-art ASR technology that handles accents, background noise, and multiple speakers simultaneously.</p>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <div className="w-16 h-16 bg-black/20 rounded-xl flex items-center justify-center flex-shrink-0">
                  <Globe className="w-8 h-8 text-black" />
                </div>
                <div>
                  <h3 className="text-2xl font-bold mb-3 text-black">Neural Translation</h3>
                  <p className="text-gray-600">AI-powered translation that preserves meaning, context, and emotional tone across languages.</p>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <div className="w-16 h-16 bg-black/20 rounded-xl flex items-center justify-center flex-shrink-0">
                  <Volume2 className="w-8 h-8 text-black" />
                </div>
                <div>
                  <h3 className="text-2xl font-bold mb-3 text-black">Natural Voice Synthesis</h3>
                  <p className="text-gray-600">Human-like voice generation that maintains the speaker's intended emotion and emphasis.</p>
                </div>
              </div>
            </div>

            <div className="relative">
              <div className="bg-black/5 rounded-3xl p-8 border border-black/20">
                <div className="space-y-6">
                  <div className="flex items-center justify-between">
                    <span className="text-black font-bold">Processing Speed</span>
                    <span className="text-black">Ultra-fast</span>
                  </div>
                  <div className="w-full bg-black/10 rounded-full h-2">
                    <div className="bg-black h-2 rounded-full w-11/12"></div>
                  </div>

                  <div className="flex items-center justify-between">
                    <span className="text-black font-bold">Accuracy Rate</span>
                    <span className="text-black">99.8%</span>
                  </div>
                  <div className="w-full bg-black/10 rounded-full h-2">
                    <div className="bg-black h-2 rounded-full w-full"></div>
                  </div>

                  <div className="flex items-center justify-between">
                    <span className="text-black font-bold">Language Support</span>
                    <span className="text-black">50+ Languages</span>
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

      {/* CTA Section */}
      <section className="py-32 bg-gray-100">
        <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
          <h2 className="text-5xl font-bold mb-6 text-black">
            Ready to Break <span className="text-black">Language Barriers?</span>
          </h2>
          <p className="text-xl text-gray-600 mb-12">Experience the future of real-time interpretation
Speak to the world using Nihki.</p>
          
          <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
            
            <Button size="lg" variant="outline" className="text-xl px-12 py-6 border-2 border-black text-black hover:bg-black hover:text-white transition-all duration-300">Contact us for a Demo</Button>
          </div>

          <div className="mt-16 flex justify-center">
            <div className="grid grid-cols-2 gap-12 text-center max-w-md">
              <div>
                <div className="text-4xl font-bold text-black mb-2">99.8%</div>
                <div className="text-gray-600">Accuracy</div>
              </div>
              <div>
                <div className="text-4xl font-bold text-black mb-2">24/7</div>
                <div className="text-gray-600">Support</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Demo Form Modal */}
      {showDemoForm && <DemoRequestForm onClose={() => setShowDemoForm(false)} />}
    </div>;
};
export default Index;