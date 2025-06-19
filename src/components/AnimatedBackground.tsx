
import { useState, useEffect } from "react";

interface AnimatedBackgroundProps {
  scrollY: number;
  mousePosition: { x: number; y: number };
}

const AnimatedBackground = ({ scrollY, mousePosition }: AnimatedBackgroundProps) => {
  return (
    <div className="absolute inset-0">
      {/* Enhanced Interactive Animated Background Effects */}
      
      {/* Floating interactive voice waves that follow scroll */}
      <div 
        className="absolute w-72 h-72 bg-black/5 rounded-full blur-3xl interactive-float"
        style={{
          top: `${20 - scrollY * 0.05}%`,
          left: `${10 + mousePosition.x * 0.01}%`,
          transform: `translateX(${mousePosition.x * 0.02}px) translateY(${-scrollY * 0.1}px)`
        }}
      ></div>
      
      <div 
        className="absolute w-96 h-96 bg-black/3 rounded-full blur-3xl interactive-float floating-bubble-delayed"
        style={{
          bottom: `${20 + scrollY * 0.03}%`,
          right: `${10 + mousePosition.y * 0.01}%`,
          transform: `translateX(${-mousePosition.x * 0.015}px) translateY(${scrollY * 0.08}px)`
        }}
      ></div>
      
      <div 
        className="absolute w-64 h-64 bg-black/7 rounded-full blur-3xl speech-pulse"
        style={{
          top: '50%',
          left: '50%',
          transform: `translate(-50%, -50%) translateX(${mousePosition.x * 0.01}px) translateY(${mousePosition.y * 0.01}px)`
        }}
      ></div>
      
      {/* New Voice Orbit Elements */}
      <div 
        className="absolute w-12 h-12 bg-black/15 rounded-full voice-orbit"
        style={{
          top: `${35 + scrollY * 0.02}%`,
          left: `${15 + Math.sin(scrollY * 0.01) * 3}%`,
        }}
      ></div>
      
      <div 
        className="absolute w-16 h-16 bg-black/10 language-morph"
        style={{
          bottom: `${25 + scrollY * 0.01}%`,
          right: `${20 + Math.cos(scrollY * 0.012) * 4}%`,
        }}
      ></div>
      
      {/* Enhanced Sound Ripples */}
      <div 
        className="absolute w-32 h-32 border-2 border-black/15 rounded-full sound-ripple"
        style={{
          top: `${45 + Math.sin(scrollY * 0.015) * 5}%`,
          left: `${60 + Math.cos(scrollY * 0.01) * 3}%`,
        }}
      ></div>
      
      <div 
        className="absolute w-24 h-24 border border-black/10 rounded-full echo-wave"
        style={{
          bottom: `${35 + Math.cos(scrollY * 0.02) * 4}%`,
          left: `${40 + Math.sin(scrollY * 0.015) * 2}%`,
          animationDelay: '1.5s'
        }}
      ></div>
      
      {/* Interactive floating speech bubbles that bounce */}
      <div 
        className="absolute w-8 h-8 bg-black/10 rounded-full floating-bubble scroll-bounce"
        style={{
          top: `${32 - scrollY * 0.02}%`,
          right: `${20 + Math.sin(scrollY * 0.01) * 5}%`,
          animationDelay: '0.5s'
        }}
      ></div>
      
      <div 
        className="absolute w-6 h-6 bg-black/8 rounded-full speech-bubble-float"
        style={{
          top: `${48 + scrollY * 0.01}%`,
          left: `${32 + Math.cos(scrollY * 0.008) * 3}%`,
          animationDelay: '1.2s'
        }}
      ></div>
      
      <div 
        className="absolute w-10 h-10 bg-black/6 rounded-full conversation-flow"
        style={{
          bottom: `${32 + scrollY * 0.015}%`,
          left: `${20 + Math.sin(scrollY * 0.012) * 4}%`,
          animationDelay: '2.1s'
        }}
      ></div>
      
      <div 
        className="absolute w-4 h-4 bg-black/12 rounded-full floating-bubble-delayed bouncy-wave"
        style={{
          bottom: `${48 - scrollY * 0.01}%`,
          right: `${32 + Math.cos(scrollY * 0.015) * 6}%`,
          animationDelay: '0.8s'
        }}
      ></div>
      
      {/* Enhanced Interactive sound wave lines that react to scroll */}
      <div 
        className="absolute"
        style={{
          top: `${40 + scrollY * 0.02}%`,
          left: `${25 + Math.sin(scrollY * 0.01) * 2}%`
        }}
      >
        <div className="flex space-x-1">
          <div className="w-1 bg-black/20 rounded audio-visualizer" style={{ height: `${48 + Math.sin(scrollY * 0.02) * 12}px`, animationDelay: '0s' }}></div>
          <div className="w-1 bg-black/15 rounded voice-frequency" style={{ height: `${32 + Math.cos(scrollY * 0.025) * 8}px`, animationDelay: '0.2s' }}></div>
          <div className="w-1 bg-black/25 rounded audio-visualizer" style={{ height: `${64 + Math.sin(scrollY * 0.018) * 16}px`, animationDelay: '0.4s' }}></div>
          <div className="w-1 bg-black/10 rounded voice-frequency" style={{ height: `${24 + Math.cos(scrollY * 0.03) * 6}px`, animationDelay: '0.6s' }}></div>
        </div>
      </div>
      
      <div 
        className="absolute"
        style={{
          bottom: `${40 - scrollY * 0.015}%`,
          right: `${25 + Math.cos(scrollY * 0.012) * 3}%`
        }}
      >
        <div className="flex space-x-1">
          <div className="w-1 bg-black/18 rounded voice-wave" style={{ height: `${40 + Math.sin(scrollY * 0.02 + 1) * 10}px`, animationDelay: '1s' }}></div>
          <div className="w-1 bg-black/22 rounded audio-visualizer" style={{ height: `${56 + Math.cos(scrollY * 0.025 + 1) * 14}px`, animationDelay: '1.2s' }}></div>
          <div className="w-1 bg-black/12 rounded voice-frequency" style={{ height: `${32 + Math.sin(scrollY * 0.018 + 1) * 8}px`, animationDelay: '1.4s' }}></div>
          <div className="w-1 bg-black/20 rounded audio-visualizer" style={{ height: `${48 + Math.cos(scrollY * 0.022 + 1) * 12}px`, animationDelay: '1.6s' }}></div>
        </div>
      </div>
      
      {/* Enhanced Ripple effects that appear on mouse movement */}
      <div 
        className="absolute w-32 h-32 border border-black/10 rounded-full ripple-effect"
        style={{
          left: `${mousePosition.x * 0.8}px`,
          top: `${mousePosition.y * 0.8}px`,
          transform: 'translate(-50%, -50%)'
        }}
      ></div>
      
      <div 
        className="absolute w-24 h-24 border border-black/5 rounded-full sound-ripple"
        style={{
          left: `${mousePosition.x * 0.6}px`,
          top: `${mousePosition.y * 0.6}px`,
          transform: 'translate(-50%, -50%)',
          animationDelay: '1s'
        }}
      ></div>
      
      {/* New Conversation Flow Elements */}
      <div 
        className="absolute w-20 h-20 bg-gradient-to-r from-black/5 to-black/10 rounded-full conversation-flow"
        style={{
          top: `${25 + Math.sin(scrollY * 0.008) * 3}%`,
          right: `${15 + Math.cos(scrollY * 0.01) * 2}%`,
          animationDelay: '3s'
        }}
      ></div>
      
      {/* Grid Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="h-full w-full bg-[linear-gradient(rgba(0,0,0,0.1)_1px,transparent_1px),linear-gradient(90deg,rgba(0,0,0,0.1)_1px,transparent_1px)] bg-[size:50px_50px]"></div>
      </div>
    </div>
  );
};

export default AnimatedBackground;
