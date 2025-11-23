import React, { useState, useEffect } from 'react';
import { GithubIcon } from './icons/GithubIcon';
import { LinkedInIcon } from './icons/LinkedInIcon';
import { MailIcon } from './icons/MailIcon';
// @ts-ignore: static asset import without type declarations
import myImage from '../assets/my_transparent_image.png';
import MY_DA_Resume from '../assets/My_DA_Resume.pdf';

// typing animation component
const TypingName: React.FC<{ texts?: string[] }> = ({ texts = ['Kasif Quamar'] }) => {
  const [index, setIndex] = useState(0);
  const [display, setDisplay] = useState('');
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    const fullText = texts[index];
    let timeout = 0;

    if (!isDeleting) {
      if (display !== fullText) {
        timeout = 120; // typing speed (ms per char)
        const t = window.setTimeout(() => setDisplay(fullText.slice(0, display.length + 1)), timeout);
        return () => clearTimeout(t);
      } else {
        // pause at full text
        const t = window.setTimeout(() => setIsDeleting(true), 1000); // 1s pause
        return () => clearTimeout(t);
      }
    } else {
      if (display !== '') {
        timeout = 60; // deleting speed
        const t = window.setTimeout(() => setDisplay(fullText.slice(0, display.length - 1)), timeout);
        return () => clearTimeout(t);
      } else {
        // move to next text
        const t = window.setTimeout(() => {
          setIsDeleting(false);
          setIndex((i) => (i + 1) % texts.length);
        }, 120);
        return () => clearTimeout(t);
      }
    }
  }, [display, isDeleting, index, texts]);

  return (
    <h1 className="text-5xl md:text-7xl font-extrabold text-slate-100 tracking-tight">
      {display}
      <span className="inline-block w-1 h-6 bg-sky-400 ml-2 align-middle animate-pulse" />
    </h1>
  );
};

// typing skills animation component
const TypingSkills: React.FC<{ texts?: string[] }> = ({ texts = ["I'm a Data Analyst.","I build insights from data.","I turn data into decisions.","I transform raw data into insights.","I uncover patterns hidden in data."] }) => {
  const [index, setIndex] = useState(0);
  const [display, setDisplay] = useState('');
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    const fullText = texts[index];
    let timeout = 0;

    if (!isDeleting) {
      if (display !== fullText) {
        timeout = 100; // typing speed (ms per char)
        const t = window.setTimeout(() => setDisplay(fullText.slice(0, display.length + 1)), timeout);
        return () => clearTimeout(t);
      } else {
        // pause at full text
        const t = window.setTimeout(() => setIsDeleting(true), 1000); // 1s pause
        return () => clearTimeout(t);
      }
    } else {
      if (display !== '') {
        timeout = 20; // deleting speed
        const t = window.setTimeout(() => setDisplay(fullText.slice(0, display.length - 1)), timeout);
        return () => clearTimeout(t);
      } else {
        // move to next text
        const t = window.setTimeout(() => {
          setIsDeleting(false);
          setIndex((i) => (i + 1) % texts.length);
        }, 100);
        return () => clearTimeout(t);
      }
    }
  }, [display, isDeleting, index, texts]);

  return (
    <h2 className="text-4xl md:text-6xl font-bold text-slate-400 tracking-tight">
      {display}
      <span className="inline-block w-1 h-6 bg-sky-400 ml-2 align-middle animate-pulse" />
    </h2>
  );
};

const Hero: React.FC = () => {
  return (
    <section id="home" className="min-h-screen flex items-center">
      <style>{`
        @keyframes morph-1 {
          0% { border-radius: 60% 40% 30% 70% / 60% 30% 70% 40%; }
          50% { border-radius: 30% 60% 70% 40% / 50% 60% 30% 60%; }
          100% { border-radius: 60% 40% 30% 70% / 60% 30% 70% 40%; }
        }

        @keyframes morph-2 {
          0% { border-radius: 30% 70% 70% 30% / 30% 30% 70% 70%; }
          50% { border-radius: 70% 30% 40% 60% / 70% 60% 30% 40%; }
          100% { border-radius: 30% 70% 70% 30% / 30% 30% 70% 70%; }
        }

        @keyframes morph-3 {
          0% { border-radius: 70% 30% 66% 34% / 33% 66% 33% 67%; }
          50% { border-radius: 33% 67% 33% 67% / 66% 33% 67% 33%; }
          100% { border-radius: 70% 30% 66% 34% / 33% 66% 33% 67%; }
        }

        @keyframes float {
          0%, 100% { transform: translateY(0px); }
          50% { transform: translateY(-20px); }
        }

        @keyframes glow-shift {
          0%, 100% { 
            box-shadow: 0 0 30px rgba(6, 182, 212, 0.4), 
                        0 0 60px rgba(6, 182, 212, 0.2),
                        inset 0 0 30px rgba(6, 182, 212, 0.1);
          }
          50% { 
            box-shadow: 0 0 40px rgba(124, 58, 237, 0.6), 
                        0 0 80px rgba(124, 58, 237, 0.3),
                        inset 0 0 40px rgba(124, 58, 237, 0.15);
          }
        }

        @keyframes scale-pulse {
          0%, 100% { transform: scale(1); }
          50% { transform: scale(1.02); }
        }

        @keyframes rotate-border {
          from { transform: rotate(0deg); }
          to { transform: rotate(360deg); }
        }

        @keyframes shimmer-wave {
          0% { background-position: -1000px 0; }
          100% { background-position: 1000px 0; }
        }

        .morph-image-1 {
          animation: morph-1 8s ease-in-out infinite, float 4s ease-in-out infinite, scale-pulse 3s ease-in-out infinite;
        }

        .morph-image-2 {
          animation: morph-2 9s ease-in-out infinite, float 4s ease-in-out infinite 0.5s, glow-shift 4s ease-in-out infinite;
        }

        .morph-image-3 {
          animation: morph-3 10s ease-in-out infinite;
        }

        .glow-container {
          animation: glow-shift 4s ease-in-out infinite;
        }

        .shimmer-overlay {
          background: linear-gradient(90deg, transparent, rgba(255,255,255,0.15), transparent);
          background-size: 1000px 100%;
          animation: shimmer-wave 3s infinite;
        }

        .rotating-border {
          animation: rotate-border 4s linear infinite;
        }

        @keyframes icon-float {
          0%, 100% { transform: translateY(0) rotate(0deg) scale(1); }
          25% { transform: translateY(-8px) rotate(5deg) scale(1.1); }
          50% { transform: translateY(-12px) rotate(0deg) scale(1.15); }
          75% { transform: translateY(-8px) rotate(-5deg) scale(1.1); }
        }

        @keyframes icon-glow {
          0%, 100% {
            filter: drop-shadow(0 0 5px rgba(56, 189, 248, 0.3));
            color: rgb(148, 163, 184);
          }
          50% {
            filter: drop-shadow(0 0 15px rgba(56, 189, 248, 0.8))
                    drop-shadow(0 0 25px rgba(124, 58, 237, 0.5));
            color: #38bdf8;
          }
        }

        @keyframes icon-rotate {
          from { transform: rotate(0deg); }
          to { transform: rotate(360deg); }
        }

        @keyframes greeting-pulse {
          0%, 100% {
            opacity: 0.8;
            transform: translateY(0);
          }
          50% {
            opacity: 1;
            transform: translateY(-3px);
          }
        }

        @keyframes greeting-glow {
          0%, 100% {
            color: #38bdf8;
            text-shadow: 0 0 0px rgba(56, 189, 248, 0);
          }
          50% {
            color: #7c3aed;
            text-shadow: 0 0 10px rgba(124, 58, 237, 0.5),
                         0 0 20px rgba(124, 58, 237, 0.3);
          }
        }

        @keyframes description-fade {
          0%, 100% {
            opacity: 0.8;
          }
          50% {
            opacity: 1;
          }
        }

        @keyframes button-glow {
          0%, 100% {
            box-shadow: 0 0 20px rgba(56, 189, 248, 0.4),
                        0 0 40px rgba(56, 189, 248, 0.2),
                        inset 0 0 20px rgba(56, 189, 248, 0.1);
          }
          50% {
            box-shadow: 0 0 30px rgba(56, 189, 248, 0.8),
                        0 0 60px rgba(124, 58, 237, 0.5),
                        0 0 90px rgba(244, 114, 182, 0.3),
                        inset 0 0 30px rgba(56, 189, 248, 0.2);
          }
        }

        @keyframes button-shimmer {
          0% { background-position: -200% center; }
          100% { background-position: 200% center; }
        }

        @keyframes button-bounce {
          0%, 100% { transform: translateY(0) scale(1); }
          50% { transform: translateY(-5px) scale(1.05); }
        }

        @keyframes button-pulse {
          0%, 100% { transform: scale(1); }
          50% { transform: scale(1.02); }
        }

        @keyframes button-border-rotate {
          from { transform: rotate(0deg); }
          to { transform: rotate(360deg); }
        }

        .hero-greeting {
          animation: 
                     greeting-glow 3s ease-in-out infinite;
        }

        .hero-description {
          animation: description-fade 3s infinite;
        }

        .hero-icon {
          animation: 
                     icon-glow 2.5s ease-in-out infinite;
        }

        .hero-icon:nth-child(1) {
          animation-delay: 0s;
        }

        .hero-icon:nth-child(2) {
          animation-delay: 0.3s;
        }

        .hero-icon:nth-child(3) {
          animation-delay: 0.6s;
        }

        .hero-icon:hover {
          animation: icon-float 1s ease-in-out infinite,
                     icon-glow 1s ease-in-out infinite,
                     icon-rotate 2s linear infinite;
          color: #38bdf8 !important;
        }

        .hero-resume-button {
          position: relative;
          background: linear-gradient(135deg, #38bdf8, #7c3aed);
          background-size: 200% 200%;
          overflow: hidden;
          animation: button-glow 2.5s ease-in-out infinite;
        }

        .hero-resume-button::before {
          content: '';
          position: absolute;
          inset: -2px;
          border-radius: 8px;
          padding: 2px;
          // background: conic-gradient(from 0deg, #38bdf8, #7c3aed, #f472b6, #7c3aed, #38bdf8);
          -webkit-mask: linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0);
          -webkit-mask-composite: xor;
          mask-composite: exclude;
          opacity: 0.8;
          z-index: -1;
          animation: button-border-rotate 3s linear infinite;
        }

        .hero-resume-button::after {
          content: '';
          position: absolute;
          inset: 0;
          background: linear-gradient(135deg, 
            rgba(56, 189, 248, 0.2) 0%, 
            rgba(124, 58, 237, 0.2) 50%, 
            rgba(244, 114, 182, 0.2) 100%);
          background-size: 200% 200%;
          opacity: 1;
          z-index: -1;
          border-radius: 8px;
          animation: button-shimmer 2s linear infinite;
        }

        .hero-resume-button:hover {
          animation: button-glow 1.5s ease-in-out infinite,
                     button-bounce 1s ease-in-out infinite,
                     button-pulse 0.5s ease-in-out infinite;
        }

        .hero-resume-button:hover::before {
          opacity: 1;
        }

        .hero-resume-button:active {
          transform: translateY(2px) scale(0.98);
        }

        .hero-resume-button span,
        .hero-resume-button svg {
          position: relative;
          z-index: 1;
        }
      `}</style>

      <div className="grid md:grid-cols-2 gap-12 items-center">
        <div className="space-y-4 text-center md:text-left">
          <p className="hero-greeting text-lg">Hii, my name is</p>

          <TypingName />

          <TypingSkills />
          {/* <h2 className="text-4xl md:text-6xl font-bold text-slate-400 tracking-tight">I build insights from data.</h2> */}
          <p className="hero-description max-w-xl text-slate-400 leading-relaxed mx-auto md:mx-0">
            I'm a Data Analyst specializing in creating impactful dashboards and uncovering stories within data. My expertise lies in Excel, SQL, Power BI, and Python to drive business decisions.
          </p>
          <div className="flex items-center justify-center md:justify-start space-x-6 pt-4">
            <a 
              href="https://github.com/Kasif11" 
              target="_blank" 
              rel="noopener noreferrer" 
              aria-label="Github" 
              className="hero-icon text-slate-400 transition-colors duration-300"
            >
              <GithubIcon className="w-7 h-7" />
            </a>
            <a 
              href="https://www.linkedin.com/in/kasif-quamar-023b7223b" 
              target="_blank" 
              rel="noopener noreferrer" 
              aria-label="LinkedIn" 
              className="hero-icon text-slate-400 transition-colors duration-300"
            >
              <LinkedInIcon className="w-7 h-7" />
            </a>
            <a 
              href="mailto:kasif1196quamar@gmail.com" 
              aria-label="Email" 
              className="hero-icon text-slate-400 transition-colors duration-300"
            >
              <MailIcon className="w-7 h-7" />
            </a>

            <a
              href={MY_DA_Resume}
              download="Kasif_Quamar_Resume.pdf"
              className="hero-resume-button inline-flex items-center justify-center gap-2 text-white px-4 py-2 rounded-md shadow-lg transition-all duration-200 group focus:outline-none focus:ring-2 focus:ring-sky-400 whitespace-nowrap"
              aria-label="Download Resume"
            >
              <svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5 flex-shrink-0 transform transition-transform duration-200 group-hover:-translate-y-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2" aria-hidden="true">
                <path strokeLinecap="round" strokeLinejoin="round" d="M12 3v12m0 0l4-4m-4 4l-4-4M21 21H3" />
              </svg>
              <span className="font-medium text-sm sm:text-base">Resume</span>
              <span className="w-2 h-2 bg-white/80 rounded-full animate-pulse hidden sm:inline" />
            </a>
          </div>
        </div>

        <div className="flex justify-center order-first md:order-last">
          <div className="relative w-64 h-64 md:w-80 md:h-80">
            {/* Outer glow background */}
            <div className="absolute inset-0 bg-gradient-to-br from-sky-400/30 via-violet-500/20 to-sky-400/30 rounded-full blur-3xl animate-pulse"></div>

            {/* Layer 1: Rotating border ring */}
            <div className="absolute inset-0 rounded-full rotating-border" style={{
              background: 'conic-gradient(from 0deg, #38bdf8, #7c3aed, #f472b6, #38bdf8)',
              opacity: 0.3,
              padding: '2px'
            }}></div>

            {/* Layer 2: Main morph image with glow */}
            <div className="glow-container absolute inset-2 md:inset-3 rounded-full overflow-hidden border-2 border-slate-700/50">
              <img
                src={myImage}
                alt="Kasif Quamar"
                className="w-full h-full object-cover morph-image-1"
              />
              {/* Shimmer overlay */}
              <div className="shimmer-overlay absolute inset-0 pointer-events-none"></div>
            </div>

            {/* Layer 3: Secondary morph accent */}
            <div className="absolute inset-1 md:inset-2 rounded-full border-2 border-sky-400/30 morph-image-2 pointer-events-none"></div>

            {/* Layer 4: Inner accent ring */}
            <div className="absolute inset-6 md:inset-8 rounded-full border border-violet-400/40 morph-image-3 pointer-events-none"></div>

            {/* Corner glow accents */}
            <div className="absolute top-4 left-4 w-12 h-12 rounded-full bg-sky-400/20 blur-2xl pointer-events-none"></div>
            <div className="absolute bottom-4 right-4 w-12 h-12 rounded-full bg-violet-500/20 blur-2xl pointer-events-none"></div>
            <div className="absolute top-1/2 right-4 w-10 h-10 rounded-full bg-pink-400/20 blur-2xl pointer-events-none"></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;