
import React from 'react';
import { EXPERIENCE } from '../constants';
import { useScrollAnimation } from '../hooks/useScrollAnimation';

const Experience: React.FC = () => {
  const sectionRef = useScrollAnimation<HTMLElement>();

  return (
    <section id="experience" ref={sectionRef} className="py-24 reveal">
      <h2 className="text-3xl font-bold text-slate-100 mb-8 flex items-center">
        <span className="text-sky-400 mr-3">03.</span> Experience
        <span className="h-px bg-slate-600 flex-grow ml-4"></span>
      </h2>
      <div className="space-y-8">
        {EXPERIENCE.map((job, index) => (
          <div key={index} className="bg-slate-800/50 border border-slate-700 p-6 rounded-lg shadow-xl hover:shadow-sky-400/10 transition-shadow duration-300">
            <div className="flex justify-between items-start flex-col sm:flex-row">
                <h3 className="text-xl font-bold text-slate-100">
                    {job.role} @ <span className="text-sky-400">{job.company}</span>
                </h3>
                <p className="text-slate-400 text-sm mt-1 sm:mt-0">{job.period}</p>
            </div>
            <p className="text-slate-500 mb-4">{job.location}</p>
            <ul className="list-disc list-inside space-y-2 text-slate-400">
                {job.details.map((detail, i) => (
                    <li key={i}>{detail}</li>
                ))}
            </ul>
             <div className="mt-4 flex flex-wrap gap-2">
                <strong className="text-slate-300 w-full mb-1">Tools Used:</strong>
                {job.tools.map((tool, i) => (
                    <span key={i} className="bg-sky-900/50 text-sky-300 text-xs font-medium px-2.5 py-1 rounded-full">
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
