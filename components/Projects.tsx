import React from 'react';
import { PROJECTS } from '../constants';
import { useScrollAnimation } from '../hooks/useScrollAnimation';
import { GithubIcon } from './icons/GithubIcon';

const Projects: React.FC = () => {
    const sectionRef = useScrollAnimation<HTMLElement>();
  return (
    <section id="projects" ref={sectionRef} className="py-24 reveal">
      <style>{`
        @keyframes rotate-border {
          from { transform: rotate(0deg); }
          to { transform: rotate(360deg); }
        }

        @keyframes project-glow {
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

        @keyframes project-shimmer {
          0% { background-position: -200% center; }
          100% { background-position: 200% center; }
        }

        @keyframes project-lift {
          0%, 100% { transform: translateY(0) scale(1); }
          50% { transform: translateY(-8px) scale(1.02); }
        }

        @keyframes project-title-glow {
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

        @keyframes project-tech-glow {
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

        @keyframes github-icon-float {
          0%, 100% { transform: translateY(0) rotate(0deg); }
          50% { transform: translateY(-3px) rotate(5deg); }
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

        .project-card {
          position: relative;
          background: rgba(30, 41, 59, 0.5);
          border: 1px solid rgba(71, 85, 105, 0.5);
          border-radius: 16px;
          padding: 1.5rem;
          cursor: default;
          overflow: hidden;
          z-index: 1;
          border-color: transparent;
          animation: fadeInUp 0.6s ease-out backwards,
                     project-glow 3s ease-in-out infinite,
                     project-lift 3s ease-in-out infinite;
        }

        .project-card::before {
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

        .project-card::after {
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
          animation: project-shimmer 4s linear infinite;
        }

        .project-card:hover::before {
          opacity: 1;
        }

        .project-card:hover {
          animation: project-glow 2s ease-in-out infinite,
                     project-lift 2s ease-in-out infinite;
        }

        .project-title {
          animation: project-title-glow 3s ease-in-out infinite;
        }

        .project-tech {
          animation: project-tech-glow 2.5s ease-in-out infinite;
        }

        .github-link {
          animation: github-icon-float 2s ease-in-out infinite;
        }

        .project-card:hover .github-link {
          animation: github-icon-float 1s ease-in-out infinite;
        }
      `}</style>
      <h2 className="text-3xl font-bold text-slate-100 mb-8 flex items-center">
        <span className="text-sky-400 mr-3">04.</span> Projects
        <span className="h-px bg-slate-600 flex-grow ml-4"></span>
      </h2>
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
        {PROJECTS.map((project, index) => (
          <div 
            key={index} 
            className="project-card"
            style={{ 
              '--glow-delay': `${index * 0.3}s`,
              '--lift-delay': `${index * 0.4}s`,
              animationDelay: `${index * 0.1}s, var(--glow-delay), var(--lift-delay)`
            } as React.CSSProperties}
          >
            <div className="relative z-10">
                <div className="flex justify-between items-center mb-4">
                    <h3 className="project-title text-lg font-bold">{project.title}</h3>
                    <a 
                      href={project.githubUrl} 
                      target="_blank" 
                      rel="noopener noreferrer" 
                      aria-label="GitHub for project" 
                      className="github-link text-slate-400 hover:text-sky-400 transition-colors"
                    >
                        <GithubIcon className="w-6 h-6" />
                    </a>
                </div>
                <ul className="list-disc list-inside space-y-2 text-slate-400 mb-4">
                    {project.description.map((desc, i) => <li key={i}>{desc}</li>)}
                </ul>
            </div>
            <p className="project-tech text-sm font-mono mt-4 relative z-10">{project.tech}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Projects;