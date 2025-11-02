
import React from 'react';
import { useScrollAnimation } from '../hooks/useScrollAnimation';
import AboutImg from '../assets/AboutImg.jpg';

const About: React.FC = () => {
  const sectionRef = useScrollAnimation<HTMLElement>();

  return (
    <section id="about" ref={sectionRef} className="py-24 reveal">
      <h2 className="text-3xl font-bold text-slate-100 mb-8 flex items-center">
        <span className="text-sky-400 mr-3">01.</span> About Me
        <span className="h-px bg-slate-600 flex-grow ml-4"></span>
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-12 items-center">
        <div className="md:col-span-2 text-slate-400 leading-relaxed space-y-4">
          <p>
            Proficient in Data Visualization, Reporting, Dashboarding, Insight analysis with Computer Science background
            with a hands on experience in SQL, Excel, Power BI, Python. Having strong analytical skills, decision-making,
            problem solving abilities with a learning mindset and proactive approach.
          </p>
          <p>
            My goal is to leverage my skills to help businesses make data-driven decisions that lead to tangible growth and efficiency improvements. I'm passionate about transforming complex datasets into clear, actionable insights.
          </p>
        </div>
        <div className="md:col-span-1 flex justify-center">
          <div className="relative w-52 h-52 md:w-64 md:h-64">
            <div className="absolute -inset-1.5 bg-gradient-to-r from-sky-500 to-cyan-400 rounded-lg blur-lg opacity-75 animate-tilt"></div>
            <img
              src={AboutImg}
              alt="Kasif Quamar"
              className="relative w-full h-full object-cover rounded-lg border-2 border-slate-800 shadow-xl"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;