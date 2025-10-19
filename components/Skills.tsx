
import React from 'react';
import { SKILLS } from '../constants';
import { useScrollAnimation } from '../hooks/useScrollAnimation';

const Skills: React.FC = () => {
  const sectionRef = useScrollAnimation<HTMLElement>();

  return (
    <section id="skills" ref={sectionRef} className="py-24 reveal">
      <h2 className="text-3xl font-bold text-slate-100 mb-8 flex items-center">
        <span className="text-sky-400 mr-3">02.</span> Technical Skills
        <span className="h-px bg-slate-600 flex-grow ml-4"></span>
      </h2>
      <ul className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
        {SKILLS.map((skill, index) => (
          <li
            key={index}
            className="bg-slate-800/50 border border-slate-700 rounded-md p-4 text-center text-slate-300 hover:text-sky-400 hover:border-sky-400 transition-all duration-300 shadow-lg cursor-default"
          >
            {skill.name}
          </li>
        ))}
      </ul>
    </section>
  );
};

export default Skills;
