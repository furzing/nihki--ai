
import React from "react";

interface SoundRippleEffectProps {
  trigger?: boolean;
  size?: 'sm' | 'md' | 'lg';
  className?: string;
}

const SoundRippleEffect = ({ trigger = true, size = 'md', className = '' }: SoundRippleEffectProps) => {
  const sizeClasses = {
    sm: 'w-8 h-8',
    md: 'w-16 h-16',
    lg: 'w-24 h-24'
  };

  if (!trigger) return null;

  return (
    <div className={`absolute inset-0 flex items-center justify-center pointer-events-none ${className}`}>
      <div className={`${sizeClasses[size]} border-2 border-black/30 rounded-full sound-ripple`}></div>
      <div className={`${sizeClasses[size]} border border-black/20 rounded-full echo-wave absolute`} style={{ animationDelay: '0.5s' }}></div>
      <div className={`${sizeClasses[size]} border border-black/10 rounded-full ripple-effect absolute`} style={{ animationDelay: '1s' }}></div>
    </div>
  );
};

export default SoundRippleEffect;
