import React from 'react';
import { GithubIcon } from './icons/GithubIcon';
import { LinkedInIcon } from './icons/LinkedInIcon';
import { MailIcon } from './icons/MailIcon';
// @ts-ignore: static asset import without type declarations
import profileImage from '../assets/myImage.jpg';


const Hero: React.FC = () => {
  return (
    <section id="home" className="min-h-screen flex items-center">
      <div className="grid md:grid-cols-2 gap-12 items-center">
        <div className="space-y-4 text-center md:text-left">
          <p className="text-sky-400 text-lg">Hii, my name is</p>
          <h1 className="text-5xl md:text-7xl font-extrabold text-slate-100 tracking-tight">Kasif Quamar.</h1>
          <h2 className="text-4xl md:text-6xl font-bold text-slate-400 tracking-tight">I build insights from data.</h2>
          <p className="max-w-xl text-slate-400 leading-relaxed mx-auto md:mx-0">
            I'm a Data Analyst specializing in creating impactful dashboards and uncovering stories within data. My expertise lies in SQL, Power BI, and Python to drive business decisions.
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
          </div>
        </div>
        <div className="flex justify-center order-first md:order-last">
            <div className="relative w-64 h-64 md:w-80 md:h-80">
                <div className="absolute inset-0 bg-sky-400/30 rounded-full blur-2xl animate-pulse-slow"></div>
                <img 
                    src={profileImage}
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