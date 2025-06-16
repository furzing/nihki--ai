
import { useState } from "react";
import { ArrowRight, Mic, Globe, Zap, Users, Languages, Clock, Star, Play, Volume2, MicIcon, Headphones } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import DemoRequestForm from "@/components/DemoRequestForm";

const Index = () => {
  const [showDemoForm, setShowDemoForm] = useState(false);

  return (
    <div className="min-h-screen bg-black text-white overflow-x-hidden">
      {/* Navigation */}
      <nav className="fixed top-0 z-40 w-full bg-black/90 backdrop-blur-xl border-b border-white/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center">
              <img 
                src="/lovable-uploads/7efd4121-aa13-4fa8-871e-7bb35cf9d587.png" 
                alt="Nihki" 
                className="h-12 w-auto"
              />
            </div>
            <div className="hidden md:flex items-center space-x-8">
              <a href="#demo" className="text-gray-300 hover:text-white transition-colors">Demo</a>
              <a href="#features" className="text-gray-300 hover:text-white transition-colors">Features</a>
              <a href="#technology" className="text-gray-300 hover:text-white transition-colors">Technology</a>
              <Button 
                onClick={() => setShowDemoForm(true)}
                className="bg-white text-black hover:bg-gray-200 border-2 border-white"
              >
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
          <div className="absolute top-20 left-10 w-72 h-72 bg-white/5 rounded-full blur-3xl animate-pulse"></div>
          <div 
            className="absolute bottom-20 right-10 w-96 h-96 bg-white/3 rounded-full blur-3xl animate-pulse" 
            style={{ animationDelay: '1s' }}
          ></div>
          <div 
            className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-white/7 rounded-full blur-3xl animate-pulse" 
            style={{ animationDelay: '2s' }}
          ></div>
          
          {/* Grid Pattern */}
          <div className="absolute inset-0 opacity-5">
            <div className="h-full w-full bg-[linear-gradient(rgba(255,255,255,0.1)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.1)_1px,transparent_1px)] bg-[size:50px_50px]"></div>
          </div>
        </div>
        
        <div className="relative z-10 text-center px-4 sm:px-6 lg:px-8">
          <div className="inline-flex items-center px-6 py-3 rounded-full bg-white/10 border border-white/20 mb-8 animate-fade-in backdrop-blur-xl">
            <Zap className="w-5 h-5 mr-2 text-white" />
            <span className="text-white/90">Real-Time Speech Interpretation</span>
          </div>
          
          <h1 className="text-6xl md:text-8xl font-black mb-6 leading-tight">
            <span className="block">SPEAK</span>
            <span className="block text-white">ANY</span>
            <span className="block">LANGUAGE</span>
          </h1>
          
          <p className="text-xl md:text-2xl text-gray-300 mb-12 max-w-3xl mx-auto leading-relaxed">
            AI that interprets <em className="text-white">conversations</em>, not just words
          </p>
          
          <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
            <Button 
              size="lg" 
              onClick={() => setShowDemoForm(true)}
              className="text-xl px-10 py-6 bg-white text-black hover:bg-gray-200 transform hover:scale-105 transition-all duration-300 border-2 border-white"
            >
              Experience Live Demo
              <ArrowRight className="ml-3 w-6 h-6" />
            </Button>
          </div>
        </div>
        
        {/* Scroll Indicator */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
          <div className="w-6 h-10 border-2 border-white/40 rounded-full flex justify-center">
            <div className="w-1 h-3 bg-white/40 rounded-full mt-2 animate-pulse"></div>
          </div>
        </div>
      </section>

      {/* Live Conference Demo */}
      <section id="demo" className="relative py-32 bg-black">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-20">
            <div className="inline-flex items-center px-6 py-3 rounded-full bg-white/10 border border-white/20 mb-8">
              <Play className="w-5 h-5 mr-2 text-white" />
              <span className="text-white/90">Live Demo in Action</span>
            </div>
            <h2 className="text-5xl md:text-6xl font-black mb-6 text-white">
              MULTILINGUAL 
              <span className="block text-white">CONFERENCE</span>
              <span className="block">LIVE NOW</span>
            </h2>
            <p className="text-xl text-gray-400 mb-8">Real business meeting happening across 3 languages simultaneously</p>
            
            {/* Live Indicator */}
            <div className="flex items-center justify-center space-x-3 mb-12">
              <div className="relative">
                <div className="w-4 h-4 bg-white rounded-full animate-ping absolute"></div>
                <div className="w-4 h-4 bg-white rounded-full"></div>
              </div>
              <span className="text-white font-bold text-lg">LIVE CONFERENCE</span>
              <div className="px-4 py-2 bg-white/20 rounded-full backdrop-blur-sm border border-white/30">
                <span className="text-sm text-white font-semibold">4 Speakers • 3 Languages</span>
              </div>
            </div>
          </div>

          <div className="relative max-w-6xl mx-auto">
            {/* Main Demo Container */}
            <div className="bg-gray-900/30 backdrop-blur-xl rounded-3xl p-8 border border-white/20 shadow-2xl">
              
              {/* Progress Bar */}
              <div className="mb-8">
                <div className="flex justify-between text-sm text-gray-400 mb-2">
                  <span>Conference Progress</span>
                  <span>47 minutes elapsed</span>
                </div>
                <div className="w-full bg-white/10 rounded-full h-2">
                  <div className="bg-white h-2 rounded-full animate-pulse" style={{ width: '68%' }}></div>
                </div>
              </div>

              {/* Conversation Flow */}
              <div className="space-y-8">
                
                {/* Speaker 1 - English */}
                <div className="grid lg:grid-cols-2 gap-8">
                  <div className="space-y-4">
                    <div className="flex items-center space-x-4 mb-4">
                      <div className="w-16 h-16 bg-white/20 rounded-full flex items-center justify-center border-2 border-white/30">
                        <span className="text-white font-bold text-lg">🇺🇸</span>
                      </div>
                      <div className="flex-1">
                        <div className="text-white font-bold text-lg">Sarah Chen - CEO</div>
                        <div className="text-gray-400">Speaking in English</div>
                      </div>
                      <div className="flex items-center space-x-1">
                        <div className="w-2 h-8 bg-white/80 rounded animate-pulse"></div>
                        <div className="w-2 h-6 bg-white/60 rounded animate-pulse" style={{ animationDelay: '0.1s' }}></div>
                        <div className="w-2 h-10 bg-white/90 rounded animate-pulse" style={{ animationDelay: '0.2s' }}></div>
                        <div className="w-2 h-4 bg-white/40 rounded animate-pulse" style={{ animationDelay: '0.3s' }}></div>
                      </div>
                    </div>
                    <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 border border-white/20">
                      <p className="text-white text-lg leading-relaxed">
                        "Let's dive into our Q2 expansion strategy. I believe the European market presents our biggest opportunity, especially given the regulatory changes we've been tracking..."
                      </p>
                    </div>
                  </div>

                  <div className="space-y-4">
                    <div className="flex items-center justify-center mb-6">
                      <div className="flex items-center space-x-3 px-6 py-3 bg-white/20 rounded-full border border-white/30 backdrop-blur-sm">
                        <Zap className="w-5 h-5 text-white animate-pulse" />
                        <span className="text-sm text-white font-bold">AI PROCESSING</span>
                        <div className="flex space-x-1">
                          <div className="w-1 h-1 bg-white rounded-full animate-pulse"></div>
                          <div className="w-1 h-1 bg-white rounded-full animate-pulse" style={{ animationDelay: '0.2s' }}></div>
                          <div className="w-1 h-1 bg-white rounded-full animate-pulse" style={{ animationDelay: '0.4s' }}></div>
                        </div>
                      </div>
                    </div>
                    
                    {/* Output to Spanish */}
                    <div className="bg-black/40 rounded-xl p-4 border border-white/10 backdrop-blur-sm">
                      <div className="flex items-center space-x-2 mb-3">
                        <Headphones className="w-4 h-4 text-white" />
                        <span className="text-xs text-white/80 font-semibold">→ Spanish (Carlos)</span>
                        <div className="ml-auto w-2 h-2 bg-white rounded-full animate-pulse"></div>
                      </div>
                      <p className="text-white/90">"Profundicemos en nuestra estrategia de expansión para Q2. Creo que el mercado europeo presenta nuestra mayor oportunidad..."</p>
                    </div>

                    {/* Output to French */}
                    <div className="bg-black/40 rounded-xl p-4 border border-white/10 backdrop-blur-sm">
                      <div className="flex items-center space-x-2 mb-3">
                        <Headphones className="w-4 h-4 text-white" />
                        <span className="text-xs text-white/80 font-semibold">→ French (Marie)</span>
                        <div className="ml-auto w-2 h-2 bg-white rounded-full animate-pulse"></div>
                      </div>
                      <p className="text-white/90">"Approfondissons notre stratégie d'expansion Q2. Je crois que le marché européen présente notre plus grande opportunité..."</p>
                    </div>
                  </div>
                </div>

                {/* Visual Separator */}
                <div className="flex items-center justify-center py-6">
                  <div className="flex space-x-2">
                    <div className="w-3 h-3 bg-white/60 rounded-full animate-pulse"></div>
                    <div className="w-3 h-3 bg-white/40 rounded-full animate-pulse" style={{ animationDelay: '0.2s' }}></div>
                    <div className="w-3 h-3 bg-white/60 rounded-full animate-pulse" style={{ animationDelay: '0.4s' }}></div>
                  </div>
                </div>

                {/* Speaker 2 Response - Spanish */}
                <div className="grid lg:grid-cols-2 gap-8">
                  <div className="space-y-4">
                    <div className="flex items-center space-x-4 mb-4">
                      <div className="w-16 h-16 bg-white/20 rounded-full flex items-center justify-center border-2 border-white/30">
                        <span className="text-white font-bold text-lg">🇪🇸</span>
                      </div>
                      <div className="flex-1">
                        <div className="text-white font-bold text-lg">Carlos Rodriguez</div>
                        <div className="text-gray-400">Speaking in Spanish</div>
                      </div>
                      <div className="flex items-center space-x-1">
                        <div className="w-2 h-7 bg-white/70 rounded animate-pulse" style={{ animationDelay: '2s' }}></div>
                        <div className="w-2 h-9 bg-white/90 rounded animate-pulse" style={{ animationDelay: '2.1s' }}></div>
                        <div className="w-2 h-5 bg-white/50 rounded animate-pulse" style={{ animationDelay: '2.2s' }}></div>
                      </div>
                    </div>
                    <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 border border-white/20">
                      <p className="text-white text-lg leading-relaxed">
                        "Estoy completamente de acuerdo, Sarah. Sin embargo, también deberíamos considerar las diferencias culturales específicas de cada región europea..."
                      </p>
                    </div>
                  </div>

                  <div className="space-y-4">
                    <div className="flex items-center justify-center mb-6">
                      <div className="flex items-center space-x-3 px-6 py-3 bg-white/20 rounded-full border border-white/30 backdrop-blur-sm">
                        <Zap className="w-5 h-5 text-white animate-pulse" style={{ animationDelay: '2s' }} />
                        <span className="text-sm text-white font-bold">AI PROCESSING</span>
                        <div className="flex space-x-1">
                          <div className="w-1 h-1 bg-white rounded-full animate-pulse" style={{ animationDelay: '2s' }}></div>
                          <div className="w-1 h-1 bg-white rounded-full animate-pulse" style={{ animationDelay: '2.2s' }}></div>
                          <div className="w-1 h-1 bg-white rounded-full animate-pulse" style={{ animationDelay: '2.4s' }}></div>
                        </div>
                      </div>
                    </div>
                    
                    <div className="bg-black/40 rounded-xl p-4 border border-white/10 backdrop-blur-sm">
                      <div className="flex items-center space-x-2 mb-3">
                        <Headphones className="w-4 h-4 text-white" />
                        <span className="text-xs text-white/80 font-semibold">→ English (Sarah)</span>
                        <div className="ml-auto w-2 h-2 bg-white rounded-full animate-pulse" style={{ animationDelay: '2s' }}></div>
                      </div>
                      <p className="text-white/90">"I completely agree, Sarah. However, we should also consider the specific cultural differences of each European region..."</p>
                    </div>

                    <div className="bg-black/40 rounded-xl p-4 border border-white/10 backdrop-blur-sm">
                      <div className="flex items-center space-x-2 mb-3">
                        <Headphones className="w-4 h-4 text-white" />
                        <span className="text-xs text-white/80 font-semibold">→ French (Marie)</span>
                        <div className="ml-auto w-2 h-2 bg-white rounded-full animate-pulse" style={{ animationDelay: '2s' }}></div>
                      </div>
                      <p className="text-white/90">"Je suis complètement d'accord, Sarah. Cependant, nous devrions aussi considérer les différences culturelles spécifiques..."</p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Performance Metrics */}
              <div className="mt-12 grid grid-cols-3 gap-8 text-center">
                <div className="p-4 bg-white/5 rounded-xl border border-white/10">
                  <div className="text-3xl font-black text-white mb-2">{"<"} 200ms</div>
                  <div className="text-sm text-gray-400">Response Time</div>
                </div>
                <div className="p-4 bg-white/5 rounded-xl border border-white/10">
                  <div className="text-3xl font-black text-white mb-2">99.8%</div>
                  <div className="text-sm text-gray-400">Accuracy Rate</div>
                </div>
                <div className="p-4 bg-white/5 rounded-xl border border-white/10">
                  <div className="text-3xl font-black text-white mb-2">3</div>
                  <div className="text-sm text-gray-400">Languages</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Grid */}
      <section id="features" className="py-32 bg-gray-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-20">
            <h2 className="text-5xl font-bold mb-6">
              Beyond <span className="text-white">Translation</span>
            </h2>
            <p className="text-xl text-gray-400">AI that understands context, emotion, and culture</p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <Card className="bg-black/50 border-white/20 hover:bg-black/70 transition-all duration-300 hover:scale-105">
              <CardContent className="p-8 text-center">
                <div className="w-20 h-20 bg-white/20 rounded-2xl flex items-center justify-center mx-auto mb-6 rotate-12 hover:rotate-0 transition-transform duration-300">
                  <Clock className="w-10 h-10 text-white" />
                </div>
                <h3 className="text-2xl font-bold mb-4 text-white">Instant</h3>
                <p className="text-gray-400">Ultra-low latency processing for natural conversation flow</p>
              </CardContent>
            </Card>

            <Card className="bg-black/50 border-white/20 hover:bg-black/70 transition-all duration-300 hover:scale-105">
              <CardContent className="p-8 text-center">
                <div className="w-20 h-20 bg-white/20 rounded-2xl flex items-center justify-center mx-auto mb-6 rotate-12 hover:rotate-0 transition-transform duration-300">
                  <Globe className="w-10 h-10 text-white" />
                </div>
                <h3 className="text-2xl font-bold mb-4 text-white">Cultural</h3>
                <p className="text-gray-400">Understands context, emotion, and cultural nuances</p>
              </CardContent>
            </Card>

            <Card className="bg-black/50 border-white/20 hover:bg-black/70 transition-all duration-300 hover:scale-105">
              <CardContent className="p-8 text-center">
                <div className="w-20 h-20 bg-white/20 rounded-2xl flex items-center justify-center mx-auto mb-6 rotate-12 hover:rotate-0 transition-transform duration-300">
                  <Users className="w-10 h-10 text-white" />
                </div>
                <h3 className="text-2xl font-bold mb-4 text-white">Multi-Party</h3>
                <p className="text-gray-400">Manages complex conversations with multiple speakers</p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Technology Showcase */}
      <section id="technology" className="py-32 bg-black relative overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute top-0 left-1/4 w-64 h-64 bg-white/5 rounded-full blur-3xl"></div>
          <div className="absolute bottom-0 right-1/4 w-64 h-64 bg-white/5 rounded-full blur-3xl"></div>
        </div>
        
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-20">
            <h2 className="text-5xl font-bold mb-6">
              Powered by <span className="text-white">Advanced AI</span>
            </h2>
          </div>

          <div className="grid md:grid-cols-2 gap-16 items-center">
            <div className="space-y-8">
              <div className="flex items-center space-x-4 p-6 bg-gray-900/50 rounded-2xl border border-white/20">
                <div className="w-16 h-16 bg-white/20 rounded-xl flex items-center justify-center">
                  <Mic className="w-8 h-8 text-white" />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-white">Speech Recognition</h3>
                  <p className="text-gray-400">Captures every nuance across accents</p>
                </div>
              </div>

              <div className="flex items-center space-x-4 p-6 bg-gray-900/50 rounded-2xl border border-white/20">
                <div className="w-16 h-16 bg-white/20 rounded-xl flex items-center justify-center">
                  <Languages className="w-8 h-8 text-white" />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-white">Neural Translation</h3>
                  <p className="text-gray-400">Preserves meaning and context</p>
                </div>
              </div>

              <div className="flex items-center space-x-4 p-6 bg-gray-900/50 rounded-2xl border border-white/20">
                <div className="w-16 h-16 bg-white/20 rounded-xl flex items-center justify-center">
                  <Volume2 className="w-8 h-8 text-white" />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-white">Voice Synthesis</h3>
                  <p className="text-gray-400">Human-like emotional delivery</p>
                </div>
              </div>
            </div>

            <div className="relative">
              <div className="bg-gradient-to-r from-gray-900 to-black rounded-3xl p-8 border border-white/20">
                <div className="space-y-4">
                  <div className="flex items-center space-x-3 mb-6">
                    <div className="w-3 h-3 bg-white/60 rounded-full"></div>
                    <div className="w-3 h-3 bg-white/40 rounded-full"></div>
                    <div className="w-3 h-3 bg-white/80 rounded-full"></div>
                    <span className="text-sm text-gray-400 ml-4">Live Processing</span>
                  </div>
                  
                  <div className="space-y-4">
                    <div className="flex items-center space-x-3">
                      <div className="w-2 h-2 bg-white rounded-full animate-pulse"></div>
                      <span className="text-sm text-gray-300">Audio Input Processing...</span>
                    </div>
                    <div className="flex items-center space-x-3">
                      <div className="w-2 h-2 bg-white rounded-full animate-pulse" style={{ animationDelay: '0.5s' }}></div>
                      <span className="text-sm text-gray-300">Language Detection...</span>
                    </div>
                    <div className="flex items-center space-x-3">
                      <div className="w-2 h-2 bg-white rounded-full animate-pulse" style={{ animationDelay: '1s' }}></div>
                      <span className="text-sm text-gray-300">Translation & Synthesis...</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-32 bg-white relative overflow-hidden">
        <div className="absolute inset-0 bg-black/5"></div>
        <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-5xl font-bold mb-8 text-black">
            Ready to Transform Communication?
          </h2>
          <p className="text-xl mb-12 text-gray-800">
            Join the future of seamless global conversation
          </p>
          <Button 
            size="lg" 
            onClick={() => setShowDemoForm(true)}
            className="text-xl px-12 py-6 bg-black text-white hover:bg-gray-800 transform hover:scale-105 transition-all duration-300 border-2 border-black"
          >
            Experience Nihki Now
            <ArrowRight className="ml-3 w-6 h-6" />
          </Button>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-black py-16 border-t border-white/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="flex items-center mb-8 md:mb-0">
              <img 
                src="/lovable-uploads/7efd4121-aa13-4fa8-871e-7bb35cf9d587.png" 
                alt="Nihki" 
                className="h-10 w-auto"
              />
            </div>
            <div className="flex space-x-8 text-gray-400">
              <a href="#" className="hover:text-white transition-colors">Privacy</a>
              <a href="#" className="hover:text-white transition-colors">Terms</a>
              <a href="#" className="hover:text-white transition-colors">Contact</a>
            </div>
          </div>
          <div className="border-t border-white/10 mt-12 pt-8 text-center text-gray-400">
            <p>© 2024 Nihki. Breaking barriers, building bridges.</p>
          </div>
        </div>
      </footer>

      {/* Demo Request Form Modal */}
      {showDemoForm && (
        <DemoRequestForm onClose={() => setShowDemoForm(false)} />
      )}
    </div>
  );
};

export default Index;
