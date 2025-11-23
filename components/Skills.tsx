
import React from 'react';
import { SKILLS } from '../constants';
import { useScrollAnimation } from '../hooks/useScrollAnimation';

const Skills: React.FC = () => {
  const sectionRef = useScrollAnimation<HTMLElement>();

  return (
    <section id="skills" ref={sectionRef} className="py-24 reveal">
      <style>{`
        @keyframes rotate-border {
          from { transform: rotate(0deg); }
          to { transform: rotate(360deg); }
        }

        @keyframes skill-glow {
          0%, 100% {
            box-shadow: 0 0 10px rgba(56, 189, 248, 0.3),
                        0 0 20px rgba(56, 189, 248, 0.2),
                        inset 0 0 10px rgba(56, 189, 248, 0.1);
          }
          50% {
            box-shadow: 0 0 20px rgba(56, 189, 248, 0.6),
                        0 0 40px rgba(124, 58, 237, 0.4),
                        0 0 60px rgba(244, 114, 182, 0.3),
                        inset 0 0 20px rgba(56, 189, 248, 0.2);
          }
        }

        @keyframes skill-shimmer {
          0% { background-position: -200% center; }
          100% { background-position: 200% center; }
        }

        @keyframes skill-bounce {
          0%, 100% { transform: translateY(0); }
          50% { transform: translateY(-5px); }
        }

        @keyframes skill-scale {
          0%, 100% { transform: scale(1); }
          50% { transform: scale(1.05); }
        }

        .skill-item {
          position: relative;
          background: rgba(30, 41, 59, 0.5);
          border: 1px solid rgba(71, 85, 105, 0.5);
          border-radius: 12px;
          padding: 1.5rem 1rem;
          text-align: center;
          color: rgb(203, 213, 225);
          cursor: default;
          transition: all 0.4s cubic-bezier(0.4, 0, 0.2, 1);
          overflow: hidden;
          z-index: 1;
        }

        .skill-item::before {
          content: '';
          position: absolute;
          inset: -2px;
          border-radius: 12px;
          padding: 2px;
          background: conic-gradient(from 0deg, #38bdf8, #7c3aed, #f472b6, #7c3aed, #38bdf8);
          -webkit-mask: linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0);
          -webkit-mask-composite: xor;
          mask-composite: exclude;
          opacity: 0;
          transition: opacity 0.4s ease;
          z-index: -1;
          animation: rotate-border 3s linear infinite;
        }

        .skill-item::after {
          content: '';
          position: absolute;
          inset: 0;
          background: linear-gradient(135deg, 
            rgba(56, 189, 248, 0.1) 0%, 
            rgba(124, 58, 237, 0.1) 50%, 
            rgba(244, 114, 182, 0.1) 100%);
          background-size: 200% 200%;
          opacity: 0;
          transition: opacity 0.4s ease;
          z-index: -1;
          border-radius: 12px;
        }

        .skill-item:hover::before {
          opacity: 1;
        }

        .skill-item:hover::after {
          opacity: 1;
          animation: skill-shimmer 2s linear infinite;
        }

        .skill-item:hover {
          color: #38bdf8;
          transform: translateY(-8px) scale(1.03);
          border-color: transparent;
          animation: skill-glow 2s ease-in-out infinite, skill-bounce 1.5s ease-in-out infinite;
          text-shadow: 0 0 10px rgba(56, 189, 248, 0.5),
                       0 0 20px rgba(56, 189, 248, 0.3);
        }

        .skill-item:active {
          transform: translateY(-4px) scale(0.98);
        }

        .skill-content {
          position: relative;
          z-index: 1;
          font-weight: 500;
          transition: all 0.3s ease;
        }

        .skill-item:hover .skill-content {
          transform: scale(1.05);
        }

        /* Stagger animation for items */
        .skill-item {
          animation: fadeInUp 0.6s ease-out backwards;
        }

        @keyframes fadeInUp {
          from {
            opacity: 0;
            transform: translateY(20px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
      `}</style>
      <h2 className="text-3xl font-bold text-slate-100 mb-8 flex items-center">
        <span className="text-sky-400 mr-3">02.</span> Technical Skills
        <span className="h-px bg-slate-600 flex-grow ml-4"></span>
      </h2>
      <ul className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
        {SKILLS.map((skill, index) => (
          <li
            key={index}
            className="skill-item"
            style={{ animationDelay: `${index * 0.1}s` }}
          >
            <span className="skill-content">{skill.name}</span>
          </li>
        ))}
      </ul>
    </section>
  );
};

export default Skills;
