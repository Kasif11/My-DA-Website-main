import React from 'react';
import { EDUCATION } from '../constants';
import { useScrollAnimation } from '../hooks/useScrollAnimation';

const Education: React.FC = () => {
  const sectionRef = useScrollAnimation<HTMLElement>();

  return (
    <section id="education" ref={sectionRef} className="py-24 reveal">
      <style>{`
        @keyframes rotate-border {
          from { transform: rotate(0deg); }
          to { transform: rotate(360deg); }
        }

        @keyframes edu-glow {
          0%, 100% {
            box-shadow: 0 0 15px rgba(56, 189, 248, 0.3),
                        0 0 30px rgba(56, 189, 248, 0.2),
                        inset 0 0 15px rgba(56, 189, 248, 0.1);
          }
          50% {
            box-shadow: 0 0 25px rgba(56, 189, 248, 0.6),
                        0 0 50px rgba(124, 58, 237, 0.4),
                        0 0 75px rgba(244, 114, 182, 0.3),
                        inset 0 0 25px rgba(56, 189, 248, 0.2);
          }
        }

        @keyframes edu-shimmer {
          0% { background-position: -200% center; }
          100% { background-position: 200% center; }
        }

        // @keyframes edu-lift {
        //   0%, 100% { transform: translateY(0) scale(1); }
        //   50% { transform: translateY(-8px) scale(1.02); }
        // }

        @keyframes edu-pulse {
          0%, 100% { opacity: 1; }
          50% { opacity: 0.9; }
        }

        @keyframes fadeInSlide {
          from {
            opacity: 0;
            transform: translateX(-30px);
          }
          to {
            opacity: 1;
            transform: translateX(0);
          }
        }

        @keyframes icon-float {
          0%, 100% { transform: translateY(0) rotate(0deg); }
          50% { transform: translateY(-5px) rotate(5deg); }
        }

        .edu-card {
          position: relative;
          background: rgba(30, 41, 59, 0.5);
          border: 1px solid rgba(71, 85, 105, 0.5);
          padding: 1.5rem;
          border-radius: 16px;
          cursor: default;
          overflow: hidden;
          z-index: 1;
          border-color: transparent;
          animation: fadeInSlide 0.6s ease-out backwards, 
                     edu-glow 3s ease-in-out infinite, 
                     edu-lift 3s ease-in-out infinite;
        }

        .edu-card::before {
          content: '';
          position: absolute;
          inset: -2px;
          border-radius: 16px;
          padding: 2px;
          //background: conic-gradient(from 0deg, #38bdf8, #7c3aed, #f472b6, #7c3aed, #38bdf8);
          -webkit-mask: linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0);
          -webkit-mask-composite: xor;
          mask-composite: exclude;
          opacity: 0.6;
          z-index: -1;
          animation: rotate-border 4s linear infinite;
        }

        .edu-card::after {
          content: '';
          position: absolute;
          inset: 0;
          background: linear-gradient(135deg, 
            rgba(56, 189, 248, 0.08) 0%, 
            rgba(124, 58, 237, 0.08) 50%, 
            rgba(244, 114, 182, 0.08) 100%);
          background-size: 200% 200%;
          opacity: 1;
          z-index: -1;
          border-radius: 16px;
          animation: edu-shimmer 4s linear infinite;
        }

        .edu-card:hover {
          animation: edu-glow 2s ease-in-out infinite, 
                     edu-lift 2s ease-in-out infinite;
        }

        .edu-card:hover::before {
          opacity: 1;
        }

        .edu-content {
          position: relative;
          z-index: 1;
        }

        .edu-degree {
          color: rgb(241, 245, 249);
          animation: edu-degree-glow 3s ease-in-out infinite;
        }

        @keyframes edu-degree-glow {
          0%, 100% {
            color: rgb(241, 245, 249);
            text-shadow: 0 0 0px rgba(56, 189, 248, 0);
          }
          50% {
            color: #38bdf8;
            text-shadow: 0 0 10px rgba(56, 189, 248, 0.5),
                         0 0 20px rgba(56, 189, 248, 0.3);
          }
        }

        .edu-institution {
          color: rgb(148, 163, 184);
          animation: edu-institution-pulse 4s ease-in-out infinite;
        }

        @keyframes edu-institution-pulse {
          0%, 100% {
            opacity: 0.8;
          }
          50% {
            opacity: 1;
            color: rgb(203, 213, 225);
          }
        }

        .edu-period {
          color: rgb(148, 163, 184);
          animation: edu-period-pulse 3.5s ease-in-out infinite;
        }

        @keyframes edu-period-pulse {
          0%, 100% {
            opacity: 0.7;
          }
          50% {
            opacity: 1;
            color: rgb(203, 213, 225);
          }
        }

        .edu-percentage {
          color: rgba(56, 189, 248, 0.8);
          animation: edu-percentage-pulse 2.5s ease-in-out infinite;
        }

        @keyframes edu-percentage-pulse {
          0%, 100% {
            // transform: scale(1);
            text-shadow: 0 0 0px rgba(124, 58, 237, 0);
          }
          50% {
            // transform: scale(1.05);
            text-shadow: 0 0 8px rgba(124, 58, 237, 0.4),
                         0 0 15px rgba(124, 58, 237, 0.2);
          }
        }

        .edu-icon {
          position: absolute;
          right: 1.5rem;
          top: 1.5rem;
          width: 40px;
          height: 40px;
          opacity: 0.3;
          // animation: icon-float 2.5s ease-in-out infinite;
        }
      `}</style>
      <h2 className="text-3xl font-bold text-slate-100 mb-8 flex items-center">
        <span className="text-sky-400 mr-3">05.</span> Education
        <span className="h-px bg-slate-600 flex-grow ml-4"></span>
      </h2>
      <div className="space-y-6">
        {EDUCATION.map((edu, index) => (
          <div 
            key={index} 
            className="edu-card"
            style={{ 
              '--animation-delay': `${index * 0.3}s`,
              '--glow-delay': `${index * 0.4}s`,
              '--lift-delay': `${index * 0.5}s`,
              animationDelay: `${index * 0.15}s, var(--glow-delay), var(--lift-delay)`
            } as React.CSSProperties}
          >
            {/* Decorative icon */}
            <svg 
              className="edu-icon" 
              fill="none" 
              stroke="currentColor" 
              viewBox="0 0 24 24"
            >
              <path 
                strokeLinecap="round" 
                strokeLinejoin="round" 
                strokeWidth="2" 
                d="M12 14l9-5-9-5-9 5 9 5z"
                className="text-sky-400"
              />
              <path 
                strokeLinecap="round" 
                strokeLinejoin="round" 
                strokeWidth="2" 
                d="M12 14l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14z"
                className="text-violet-400"
              />
            </svg>

            <div className="edu-content flex justify-between items-start flex-col sm:flex-row">
              <div className="flex-1">
                <h3 className="edu-degree text-lg font-semibold mb-2">{edu.degree}</h3>
                <p className="edu-institution text-slate-400">{edu.institution}</p>
              </div>
              <div className="text-right mt-2 sm:mt-0 sm:ml-4">
                <p className="edu-period text-sm text-slate-400 mb-1">{edu.period}</p>
                <p className="edu-percentage text-sm font-semibold">%age : {edu.percentage}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Education;