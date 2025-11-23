import React from 'react';
import { EDUCATION } from '../constants';
import { useScrollAnimation } from '../hooks/useScrollAnimation';

const Education: React.FC = () => {
  const sectionRef = useScrollAnimation<HTMLElement>();

  return (
    <section id="education" ref={sectionRef} className="py-24 reveal">
      <h2 className="text-3xl font-bold text-slate-100 mb-8 flex items-center">
        <span className="text-sky-400 mr-3">05.</span> Education
        <span className="h-px bg-slate-600 flex-grow ml-4"></span>
      </h2>
      <div className="space-y-6">
        {EDUCATION.map((edu, index) => (
          <div key={index} className="bg-slate-800/50 border border-slate-700 p-5 rounded-lg shadow-lg hover:shadow-sky-400/10 transition-shadow duration-300">
            <div className="flex justify-between items-start flex-col sm:flex-row">
              <div>
                <h3 className="text-lg font-semibold text-slate-100">{edu.degree}</h3>
                <p className="text-slate-400">{edu.institution}</p>
              </div>
              <div className="text-right mt-2 sm:mt-0">
                 <p className="text-sm text-slate-400">{edu.period}</p>
                 <p className="text-sm text-sky-400">%age : {edu.percentage}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Education;