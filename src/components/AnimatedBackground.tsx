
import { useState, useEffect } from "react";

interface AnimatedBackgroundProps {
  scrollY: number;
  mousePosition: { x: number; y: number };
}

const AnimatedBackground = ({ scrollY, mousePosition }: AnimatedBackgroundProps) => {
  return (
    <div className="absolute inset-0">
      {/* Reduced Interactive Animated Background Effects */}
      
      {/* Main floating elements - reduced from 3 to 2 */}
      <div 
        className="absolute w-72 h-72 bg-black/5 rounded-full blur-3xl interactive-float"
        style={{
          top: `${20 - scrollY * 0.03}%`,
          left: `${10 + mousePosition.x * 0.005}%`,
          transform: `translateX(${mousePosition.x * 0.01}px) translateY(${-scrollY * 0.05}px)`
        }}
      ></div>
      
      <div 
        className="absolute w-96 h-96 bg-black/3 rounded-full blur-3xl floating-bubble-delayed"
        style={{
          bottom: `${20 + scrollY * 0.02}%`,
          right: `${10 + mousePosition.y * 0.005}%`,
          transform: `translateX(${-mousePosition.x * 0.01}px) translateY(${scrollY * 0.04}px)`
        }}
      ></div>
      
      {/* Reduced voice orbit elements - only 2 instead of 4 */}
      <div 
        className="absolute w-12 h-12 bg-black/10 rounded-full voice-orbit"
        style={{
          top: `${35 + scrollY * 0.01}%`,
          left: `${15 + Math.sin(scrollY * 0.005) * 2}%`,
        }}
      ></div>
      
      <div 
        className="absolute w-16 h-16 bg-black/8 language-morph"
        style={{
          bottom: `${25 + scrollY * 0.008}%`,
          right: `${20 + Math.cos(scrollY * 0.006) * 2}%`,
        }}
      ></div>
      
      {/* Reduced sound ripples - only 1 instead of 2 */}
      <div 
        className="absolute w-32 h-32 border border-black/10 rounded-full sound-ripple"
        style={{
          top: `${45 + Math.sin(scrollY * 0.01) * 3}%`,
          left: `${60 + Math.cos(scrollY * 0.008) * 2}%`,
        }}
      ></div>
      
      {/* Reduced floating bubbles - only 2 instead of 4 */}
      <div 
        className="absolute w-8 h-8 bg-black/8 rounded-full floating-bubble"
        style={{
          top: `${32 - scrollY * 0.01}%`,
          right: `${20 + Math.sin(scrollY * 0.008) * 3}%`,
          animationDelay: '0.5s'
        }}
      ></div>
      
      <div 
        className="absolute w-6 h-6 bg-black/6 rounded-full speech-bubble-float"
        style={{
          bottom: `${48 - scrollY * 0.008}%`,
          right: `${32 + Math.cos(scrollY * 0.01) * 3}%`,
          animationDelay: '0.8s'
        }}
      ></div>
      
      {/* Simplified sound wave lines - only 1 set */}
      <div 
        className="absolute"
        style={{
          top: `${40 + scrollY * 0.01}%`,
          left: `${25 + Math.sin(scrollY * 0.008) * 1}%`
        }}
      >
        <div className="flex space-x-1">
          <div className="w-1 bg-black/15 rounded audio-visualizer" style={{ height: `${32 + Math.sin(scrollY * 0.01) * 8}px`, animationDelay: '0s' }}></div>
          <div className="w-1 bg-black/12 rounded voice-frequency" style={{ height: `${24 + Math.cos(scrollY * 0.015) * 6}px`, animationDelay: '0.2s' }}></div>
          <div className="w-1 bg-black/18 rounded audio-visualizer" style={{ height: `${40 + Math.sin(scrollY * 0.012) * 10}px`, animationDelay: '0.4s' }}></div>
        </div>
      </div>
      
      {/* Reduced mouse interaction ripples - only 1 */}
      <div 
        className="absolute w-24 h-24 border border-black/8 rounded-full ripple-effect"
        style={{
          left: `${mousePosition.x * 0.5}px`,
          top: `${mousePosition.y * 0.5}px`,
          transform: 'translate(-50%, -50%)'
        }}
      ></div>
    </div>
  );
};

export default AnimatedBackground;
