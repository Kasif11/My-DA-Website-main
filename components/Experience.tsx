
import React from 'react';
import { EXPERIENCE } from '../constants';
import { useScrollAnimation } from '../hooks/useScrollAnimation';

const Experience: React.FC = () => {
  const sectionRef = useScrollAnimation<HTMLElement>();

  return (
    <section id="experience" ref={sectionRef} className="py-24 reveal">
      <style>{`
        @keyframes rotate-border {
          from { transform: rotate(0deg); }
          to { transform: rotate(360deg); }
        }

        @keyframes exp-glow {
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

        @keyframes exp-shimmer {
          0% { background-position: -200% center; }
          100% { background-position: 200% center; }
        }

        @keyframes exp-lift {
          0%, 100% { transform: translateY(0) scale(1); }
          50% { transform: translateY(-6px) scale(1.01); }
        }

        @keyframes exp-title-glow {
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

        @keyframes exp-company-glow {
          0%, 100% {
            color: #38bdf8;
            text-shadow: 0 0 0px rgba(56, 189, 248, 0);
          }
          50% {
            color: #7c3aed;
            text-shadow: 0 0 8px rgba(124, 58, 237, 0.4),
                         0 0 15px rgba(124, 58, 237, 0.2);
          }
        }

        @keyframes tool-pulse {
          0%, 100% {
            background-color: rgba(30, 58, 138, 0.5);
            transform: scale(1);
          }
          50% {
            background-color: rgba(30, 58, 138, 0.7);
            transform: scale(1.05);
          }
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

        .exp-card {
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
                     exp-glow 3s ease-in-out infinite,
                     exp-lift 3s ease-in-out infinite;
        }

        .exp-card::before {
          content: '';
          position: absolute;
          inset: -2px;
          border-radius: 16px;
          padding: 2px;
          // background: conic-gradient(from 0deg, #38bdf8, #7c3aed, #f472b6, #7c3aed, #38bdf8);
          -webkit-mask: linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0);
          -webkit-mask-composite: xor;
          mask-composite: exclude;
          opacity: 0.6;
          z-index: -1;
          animation: rotate-border 4s linear infinite;
        }

        .exp-card::after {
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
          animation: exp-shimmer 4s linear infinite;
        }

        .exp-card:hover::before {
          opacity: 1;
        }

        .exp-card:hover {
          animation: exp-glow 2s ease-in-out infinite,
                     exp-lift 2s ease-in-out infinite;
        }

        .exp-title {
          animation: exp-title-glow 3s ease-in-out infinite;
        }

        .exp-company {
          animation: exp-company-glow 3s ease-in-out infinite;
        }

        .exp-tool {
          animation: tool-pulse 2s ease-in-out infinite;
        }
      `}</style>
      <h2 className="text-3xl font-bold text-slate-100 mb-8 flex items-center">
        <span className="text-sky-400 mr-3">03.</span> Experience
        <span className="h-px bg-slate-600 flex-grow ml-4"></span>
      </h2>
      <div className="space-y-8">
        {EXPERIENCE.map((job, index) => (
          <div 
            key={index} 
            className="exp-card"
            style={{ 
              '--glow-delay': `${index * 0.4}s`,
              '--lift-delay': `${index * 0.5}s`,
              animationDelay: `${index * 0.15}s, var(--glow-delay), var(--lift-delay)`
            } as React.CSSProperties}
          >
            <div className="flex justify-between items-start flex-col sm:flex-row relative z-10">
                <h3 className="exp-title text-xl font-bold">
                    {job.role} @ <span className="exp-company">{job.company}</span>
                </h3>
                <p className="text-slate-400 text-sm mt-1 sm:mt-0">{job.period}</p>
            </div>
            <p className="text-slate-500 mb-4 relative z-10">{job.location}</p>
            <ul className="list-disc list-inside space-y-2 text-slate-400 relative z-10">
                {job.details.map((detail, i) => (
                    <li key={i}>{detail}</li>
                ))}
            </ul>
             <div className="mt-4 flex flex-wrap gap-2 relative z-10">
                <strong className="text-slate-300 w-full mb-1">Tools Used:</strong>
                {job.tools.map((tool, i) => (
                    <span 
                      key={i} 
                      className="exp-tool bg-sky-900/50 text-sky-300 text-xs font-medium px-2.5 py-1 rounded-full"
                      style={{ animationDelay: `${i * 0.1}s` } as React.CSSProperties}
                    >
                        {tool}
                    </span>
                ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Experience;
