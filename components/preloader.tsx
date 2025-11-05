import React, { useEffect, useState } from 'react';

const Preloader: React.FC = () => {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 3200); // Adjust duration as needed

    return () => clearTimeout(timer);
  }, []);

  if (!isLoading) return null;

  return (
    <div className="fixed inset-0 z-[9999] flex items-center justify-center bg-slate-900">
      <div className="relative w-32 h-32">
        {/* Background blur effect */}
        <div className="absolute inset-0 rounded-full bg-gradient-to-r from-sky-400/30 to-violet-600/30 blur-2xl animate-pulse"></div>
        
        <svg 
          viewBox="0 0 100 100" 
          className="w-full h-full"
          xmlns="http://www.w3.org/2000/svg"
        >
          <defs>
            <linearGradient id="preloaderGrad" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#38bdf8">
                <animate 
                  attributeName="stop-color" 
                  values="#38bdf8;#818cf8;#38bdf8" 
                  dur="2s" 
                  repeatCount="indefinite"
                />
              </stop>
              <stop offset="100%" stopColor="#818cf8">
                <animate 
                  attributeName="stop-color" 
                  values="#818cf8;#38bdf8;#818cf8" 
                  dur="2s" 
                  repeatCount="indefinite"
                />
              </stop>
            </linearGradient>
            
            <filter id="glow">
              <feGaussianBlur stdDeviation="2" result="coloredBlur"/>
              <feMerge>
                <feMergeNode in="coloredBlur"/>
                <feMergeNode in="SourceGraphic"/>
              </feMerge>
            </filter>
          </defs>

          {/* Rotating outer ring */}
          <circle 
            cx="50" 
            cy="50" 
            r="45" 
            fill="none" 
            stroke="url(#preloaderGrad)" 
            strokeWidth="2"
            strokeDasharray="8 4"
            className="animate-spin-slow"
          />

          {/* K */}
          <g filter="url(#glow)">
            <path 
              d="M30 25 L30 75 M30 50 L45 25 M30 50 L45 75" 
              stroke="url(#preloaderGrad)" 
              strokeWidth="6" 
              strokeLinecap="round" 
              fill="none"
              className="animate-draw"
            >
              <animate 
                attributeName="stroke-dasharray" 
                values="0 100;100 0" 
                dur="1.5s"
                begin="0s"
              />
            </path>
          </g>

          {/* Q */}
          <g filter="url(#glow)">
            <circle 
              cx="65" 
              cy="50" 
              r="20"
              stroke="url(#preloaderGrad)" 
              strokeWidth="6"
              fill="none"
              className="animate-draw"
            >
              <animate 
                attributeName="r"
                values="0;20;18;20"
                dur="1.5s"
                begin="0.5s"
                fill="freeze"
              />
            </circle>
            <path 
              d="M75 65 L85 75" 
              stroke="url(#preloaderGrad)" 
              strokeWidth="6" 
              strokeLinecap="round"
              className="animate-draw-delayed"
            />
          </g>

          {/* Particles */}
          <g className="animate-ping">
            <circle cx="30" cy="25" r="1" fill="#38bdf8" />
            <circle cx="45" cy="75" r="1" fill="#818cf8" />
            <circle cx="85" cy="75" r="1" fill="#38bdf8" />
          </g>
        </svg>
      </div>
    </div>
  );
};

export default Preloader;