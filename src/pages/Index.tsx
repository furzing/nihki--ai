
import { useState } from "react";
import { ArrowRight, Mic, Globe, Zap, Users, Languages, Clock, Star, Play, Volume2 } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import DemoRequestForm from "@/components/DemoRequestForm";

const Index = () => {
  const [showDemoForm, setShowDemoForm] = useState(false);

  return (
    <div className="min-h-screen bg-black text-white overflow-x-hidden">
      {/* Navigation */}
      <nav className="fixed top-0 z-40 w-full bg-black/80 backdrop-blur-xl border-b border-gray-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center space-x-3">
              <img 
                src="/lovable-uploads/c7a10dcb-5d79-4ef7-a5ad-39163f662bd4.png" 
                alt="Nihki Logo" 
                className="h-8 w-auto brightness-0 invert"
              />
              <span className="text-2xl font-bold">Nihki</span>
            </div>
            <div className="hidden md:flex items-center space-x-8">
              <a href="#demo" className="text-gray-300 hover:text-white transition-colors">Demo</a>
              <a href="#features" className="text-gray-300 hover:text-white transition-colors">Features</a>
              <a href="#technology" className="text-gray-300 hover:text-white transition-colors">Technology</a>
              <Button 
                onClick={() => setShowDemoForm(true)}
                className="bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-600 hover:to-purple-700"
              >
                Try Demo
              </Button>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section - Full Height with Parallax */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
        {/* Animated Background */}
        <div className="absolute inset-0">
          <div className="absolute top-20 left-10 w-72 h-72 bg-blue-500/20 rounded-full blur-3xl animate-pulse"></div>
          <div className="absolute bottom-20 right-10 w-96 h-96 bg-purple-500/20 rounded-full blur-3xl animate-pulse" style={{animationDelay: '1s'}}></div>
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-indigo-500/20 rounded-full blur-3xl animate-pulse" style={{animationDelay: '2s'}}></div>
        </div>
        
        <div className="relative z-10 text-center px-4 sm:px-6 lg:px-8">
          <div className="inline-flex items-center px-6 py-3 rounded-full bg-gradient-to-r from-blue-500/20 to-purple-500/20 border border-blue-500/30 mb-8 animate-fade-in">
            <Zap className="w-5 h-5 mr-2 text-blue-400" />
            <span className="text-blue-300">Revolutionary AI Interpretation</span>
          </div>
          
          <h1 className="text-6xl md:text-8xl font-black mb-6 leading-tight">
            <span className="block">BREAK</span>
            <span className="block bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">
              LANGUAGE
            </span>
            <span className="block">BARRIERS</span>
          </h1>
          
          <p className="text-xl md:text-2xl text-gray-300 mb-12 max-w-3xl mx-auto leading-relaxed">
            Real-time AI interpretation that feels <em className="text-blue-400">human</em>
          </p>
          
          <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
            <Button 
              size="lg" 
              onClick={() => setShowDemoForm(true)}
              className="text-xl px-10 py-6 bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-600 hover:to-purple-700 transform hover:scale-105 transition-all duration-300"
            >
              Experience the Magic
              <ArrowRight className="ml-3 w-6 h-6" />
            </Button>
          </div>
        </div>
        
        {/* Scroll Indicator */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
          <div className="w-6 h-10 border-2 border-gray-400 rounded-full flex justify-center">
            <div className="w-1 h-3 bg-gray-400 rounded-full mt-2 animate-pulse"></div>
          </div>
        </div>
      </section>

      {/* Live Demo Visualization */}
      <section id="demo" className="relative py-32 bg-gradient-to-b from-black to-gray-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-5xl font-bold mb-6">
              Watch Language <span className="text-blue-400">Transform</span>
            </h2>
          </div>

          <div className="relative max-w-4xl mx-auto">
            {/* Conversation Simulation */}
            <div className="bg-gray-900/50 backdrop-blur-xl rounded-3xl p-8 border border-gray-700">
              <div className="space-y-6">
                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-gradient-to-r from-blue-500 to-blue-600 rounded-full flex items-center justify-center">
                    <span className="text-white font-bold">🇺🇸</span>
                  </div>
                  <div className="flex-1">
                    <div className="bg-blue-500/20 rounded-2xl p-4 border border-blue-500/30">
                      <div className="flex items-center space-x-2 mb-2">
                        <Volume2 className="w-4 h-4 text-blue-400" />
                        <span className="text-sm text-blue-400">English</span>
                      </div>
                      <p className="text-lg">"How do you feel about the new project timeline?"</p>
                    </div>
                  </div>
                </div>
                
                <div className="flex justify-center">
                  <div className="flex items-center space-x-2 text-purple-400">
                    <div className="w-2 h-2 bg-purple-400 rounded-full animate-pulse"></div>
                    <div className="w-2 h-2 bg-purple-400 rounded-full animate-pulse" style={{animationDelay: '0.5s'}}></div>
                    <div className="w-2 h-2 bg-purple-400 rounded-full animate-pulse" style={{animationDelay: '1s'}}></div>
                    <span className="text-sm ml-2">AI Processing...</span>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-gradient-to-r from-green-500 to-green-600 rounded-full flex items-center justify-center">
                    <span className="text-white font-bold">🇪🇸</span>
                  </div>
                  <div className="flex-1">
                    <div className="bg-green-500/20 rounded-2xl p-4 border border-green-500/30">
                      <div className="flex items-center space-x-2 mb-2">
                        <Volume2 className="w-4 h-4 text-green-400" />
                        <span className="text-sm text-green-400">Español</span>
                      </div>
                      <p className="text-lg">"¿Cómo te sientes acerca del nuevo cronograma del proyecto?"</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Grid - More Visual */}
      <section id="features" className="py-32 bg-gray-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-20">
            <h2 className="text-5xl font-bold mb-6">
              Beyond <span className="text-purple-400">Translation</span>
            </h2>
            <p className="text-xl text-gray-400">AI that understands context, emotion, and culture</p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <Card className="bg-gray-800/50 border-gray-700 hover:bg-gray-800/70 transition-all duration-300 hover:scale-105">
              <CardContent className="p-8 text-center">
                <div className="w-20 h-20 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-2xl flex items-center justify-center mx-auto mb-6 rotate-12 hover:rotate-0 transition-transform duration-300">
                  <Clock className="w-10 h-10 text-white" />
                </div>
                <h3 className="text-2xl font-bold mb-4">Instant</h3>
                <p className="text-gray-400">Ultra-low latency processing for natural conversation flow</p>
              </CardContent>
            </Card>

            <Card className="bg-gray-800/50 border-gray-700 hover:bg-gray-800/70 transition-all duration-300 hover:scale-105">
              <CardContent className="p-8 text-center">
                <div className="w-20 h-20 bg-gradient-to-r from-purple-500 to-pink-500 rounded-2xl flex items-center justify-center mx-auto mb-6 rotate-12 hover:rotate-0 transition-transform duration-300">
                  <Globe className="w-10 h-10 text-white" />
                </div>
                <h3 className="text-2xl font-bold mb-4">Cultural</h3>
                <p className="text-gray-400">Understands context, emotion, and cultural nuances</p>
              </CardContent>
            </Card>

            <Card className="bg-gray-800/50 border-gray-700 hover:bg-gray-800/70 transition-all duration-300 hover:scale-105">
              <CardContent className="p-8 text-center">
                <div className="w-20 h-20 bg-gradient-to-r from-green-500 to-emerald-500 rounded-2xl flex items-center justify-center mx-auto mb-6 rotate-12 hover:rotate-0 transition-transform duration-300">
                  <Users className="w-10 h-10 text-white" />
                </div>
                <h3 className="text-2xl font-bold mb-4">Multi-Party</h3>
                <p className="text-gray-400">Manages complex conversations with multiple speakers</p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Technology Showcase */}
      <section id="technology" className="py-32 bg-black relative overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute top-0 left-1/4 w-64 h-64 bg-blue-500/10 rounded-full blur-3xl"></div>
          <div className="absolute bottom-0 right-1/4 w-64 h-64 bg-purple-500/10 rounded-full blur-3xl"></div>
        </div>
        
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-20">
            <h2 className="text-5xl font-bold mb-6">
              Powered by <span className="text-blue-400">Advanced AI</span>
            </h2>
          </div>

          <div className="grid md:grid-cols-2 gap-16 items-center">
            <div className="space-y-8">
              <div className="flex items-center space-x-4 p-6 bg-gray-900/50 rounded-2xl border border-gray-700">
                <div className="w-16 h-16 bg-blue-500/20 rounded-xl flex items-center justify-center">
                  <Mic className="w-8 h-8 text-blue-400" />
                </div>
                <div>
                  <h3 className="text-xl font-bold">Speech Recognition</h3>
                  <p className="text-gray-400">Captures every nuance across accents</p>
                </div>
              </div>

              <div className="flex items-center space-x-4 p-6 bg-gray-900/50 rounded-2xl border border-gray-700">
                <div className="w-16 h-16 bg-purple-500/20 rounded-xl flex items-center justify-center">
                  <Languages className="w-8 h-8 text-purple-400" />
                </div>
                <div>
                  <h3 className="text-xl font-bold">Neural Translation</h3>
                  <p className="text-gray-400">Preserves meaning and context</p>
                </div>
              </div>

              <div className="flex items-center space-x-4 p-6 bg-gray-900/50 rounded-2xl border border-gray-700">
                <div className="w-16 h-16 bg-green-500/20 rounded-xl flex items-center justify-center">
                  <Volume2 className="w-8 h-8 text-green-400" />
                </div>
                <div>
                  <h3 className="text-xl font-bold">Voice Synthesis</h3>
                  <p className="text-gray-400">Human-like emotional delivery</p>
                </div>
              </div>
            </div>

            <div className="relative">
              <div className="bg-gradient-to-r from-gray-900 to-gray-800 rounded-3xl p-8 border border-gray-700">
                <div className="space-y-4">
                  <div className="flex items-center space-x-3 mb-6">
                    <div className="w-3 h-3 bg-red-500 rounded-full"></div>
                    <div className="w-3 h-3 bg-yellow-500 rounded-full"></div>
                    <div className="w-3 h-3 bg-green-500 rounded-full"></div>
                    <span className="text-sm text-gray-400 ml-4">Live Processing</span>
                  </div>
                  
                  <div className="space-y-4">
                    <div className="flex items-center space-x-3">
                      <div className="w-2 h-2 bg-blue-400 rounded-full animate-pulse"></div>
                      <span className="text-sm text-gray-300">Audio Input Processing...</span>
                    </div>
                    <div className="flex items-center space-x-3">
                      <div className="w-2 h-2 bg-purple-400 rounded-full animate-pulse" style={{animationDelay: '0.5s'}}></div>
                      <span className="text-sm text-gray-300">Language Detection...</span>
                    </div>
                    <div className="flex items-center space-x-3">
                      <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse" style={{animationDelay: '1s'}}></div>
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
      <section className="py-32 bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 relative overflow-hidden">
        <div className="absolute inset-0 bg-black/20"></div>
        <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-5xl font-bold mb-8">
            Ready to Transform Communication?
          </h2>
          <p className="text-xl mb-12 text-blue-100">
            Join the future of seamless global conversation
          </p>
          <Button 
            size="lg" 
            onClick={() => setShowDemoForm(true)}
            className="text-xl px-12 py-6 bg-white text-gray-900 hover:bg-gray-100 transform hover:scale-105 transition-all duration-300"
          >
            Experience Nihki Now
            <ArrowRight className="ml-3 w-6 h-6" />
          </Button>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 py-16 border-t border-gray-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="flex items-center space-x-3 mb-8 md:mb-0">
              <img 
                src="/lovable-uploads/c7a10dcb-5d79-4ef7-a5ad-39163f662bd4.png" 
                alt="Nihki Logo" 
                className="h-8 w-auto brightness-0 invert"
              />
              <span className="text-2xl font-bold">Nihki</span>
            </div>
            <div className="flex space-x-8 text-gray-400">
              <a href="#" className="hover:text-white transition-colors">Privacy</a>
              <a href="#" className="hover:text-white transition-colors">Terms</a>
              <a href="#" className="hover:text-white transition-colors">Contact</a>
            </div>
          </div>
          <div className="border-t border-gray-800 mt-12 pt-8 text-center text-gray-400">
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
