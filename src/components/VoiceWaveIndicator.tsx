
import React from "react";

interface VoiceWaveIndicatorProps {
  size?: 'sm' | 'md' | 'lg';
  intensity?: 'low' | 'medium' | 'high';
  className?: string;
}

const VoiceWaveIndicator = ({ size = 'md', intensity = 'medium', className = '' }: VoiceWaveIndicatorProps) => {
  const sizeClasses = {
    sm: 'space-x-0.5',
    md: 'space-x-1',
    lg: 'space-x-1.5'
  };

  const barSizes = {
    sm: { width: 'w-0.5', heights: ['h-2', 'h-3', 'h-4', 'h-2'] },
    md: { width: 'w-1', heights: ['h-3', 'h-5', 'h-6', 'h-4'] },
    lg: { width: 'w-1.5', heights: ['h-4', 'h-7', 'h-8', 'h-5'] }
  };

  const intensityDelays = {
    low: ['0s', '0.2s', '0.4s', '0.6s'],
    medium: ['0s', '0.1s', '0.2s', '0.3s'],
    high: ['0s', '0.05s', '0.1s', '0.15s']
  };

  const { width, heights } = barSizes[size];
  const delays = intensityDelays[intensity];

  return (
    <div className={`flex items-end justify-center ${sizeClasses[size]} ${className}`}>
      {heights.map((height, index) => (
        <div
          key={index}
          className={`${width} ${height} bg-black/60 rounded voice-frequency`}
          style={{ animationDelay: delays[index] }}
        ></div>
      ))}
    </div>
  );
};

export default VoiceWaveIndicator;
