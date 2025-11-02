import React, { useState, useEffect } from 'react';
import { GithubIcon } from './icons/GithubIcon';
import { LinkedInIcon } from './icons/LinkedInIcon';
import { MailIcon } from './icons/MailIcon';
// @ts-ignore: static asset import without type declarations
import myImage from '../assets/myImage.jpg';
import MY_DA_Resume from '../assets/My_DA_Resume.pdf';

// typing animation component
const TypingName: React.FC<{ texts?: string[] }> = ({ texts = ['Kasif Quamar.'] }) => {
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

const Hero: React.FC = () => {
  return (
    <section id="home" className="min-h-screen flex items-center">
      <div className="grid md:grid-cols-2 gap-12 items-center">
        <div className="space-y-4 text-center md:text-left">
          <p className="text-sky-400 text-lg">Hii, my name is</p>

          {/* replaced static h1 with TypingName */}
          <TypingName />

          <h2 className="text-4xl md:text-6xl font-bold text-slate-400 tracking-tight">I build insights from data.</h2>
          <p className="max-w-xl text-slate-400 leading-relaxed mx-auto md:mx-0">
            I'm a Data Analyst specializing in creating impactful dashboards and uncovering stories within data. My expertise lies in Excel, SQL, Power BI, and Python to drive business decisions.
          </p>
          <div className="flex items-center justify-center md:justify-start space-x-6 pt-4">
              <a href="https://github.com/Kasif11" target="_blank" rel="noopener noreferrer" aria-label="Github" className="text-slate-400 hover:text-sky-400 transition-colors duration-300 transform hover:scale-110">
                  <GithubIcon className="w-7 h-7" />
              </a>
              <a href="https://www.linkedin.com/in/kasif-quamar-023b7223b" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn" className="text-slate-400 hover:text-sky-400 transition-colors duration-300 transform hover:scale-110">
                  <LinkedInIcon className="w-7 h-7" />
              </a>
              <a href="mailto:kasif1196quamar@gmail.com" aria-label="Email" className="text-slate-400 hover:text-sky-400 transition-colors duration-300 transform hover:scale-110">
                  <MailIcon className="w-7 h-7" />
              </a>

              {/* Download resume button (responsive: icon-only on xs, full label on sm+) */}
              <a
                href={MY_DA_Resume}
                download
                aria-label="Resume"
                className="ml-0 sm:ml-2 w-full sm:w-auto inline-flex items-center justify-center gap-2 sm:gap-3 bg-gradient-to-r from-sky-500 to-violet-600 text-white px-3 py-2 sm:px-4 sm:py-2 rounded-full shadow-lg hover:scale-105 transition-transform duration-200 group focus:outline-none focus:ring-4 focus:ring-sky-400/30"
              >
                <svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5 flex-shrink-0 transform transition-transform duration-200 group-hover:-translate-y-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2" aria-hidden="true">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M12 3v12m0 0l4-4m-4 4l-4-4M21 21H3" />
                </svg>

                {/* visible only on small screens and up */}
                <span className="hidden sm:inline font-medium text-sm sm:text-base">Resume</span>

                {/* small activity dot (keeps layout consistent) */}
                <span className="w-2 h-2 bg-white/80 rounded-full ml-1 hidden sm:inline animate-pulse" />
              </a>
          </div>
        </div>
        <div className="flex justify-center order-first md:order-last">
            <div className="relative w-64 h-64 md:w-80 md:h-80">
                <div className="absolute inset-0 bg-sky-400/30 rounded-full blur-2xl animate-pulse-slow"></div>
                <img 
                    src={myImage}
                    alt="Kasif Quamar" 
                    className="relative w-full h-full object-cover rounded-full border-4 border-slate-700 shadow-2xl"
                />
            </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
