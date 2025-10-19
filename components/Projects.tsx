import React from 'react';
import { PROJECTS } from '../constants';
import { useScrollAnimation } from '../hooks/useScrollAnimation';
import { GithubIcon } from './icons/GithubIcon';

const Projects: React.FC = () => {
    const sectionRef = useScrollAnimation<HTMLElement>();
  return (
    <section id="projects" ref={sectionRef} className="py-24 reveal">
      <h2 className="text-3xl font-bold text-slate-100 mb-8 flex items-center">
        <span className="text-sky-400 mr-3">04.</span> Projects
        <span className="h-px bg-slate-600 flex-grow ml-4"></span>
      </h2>
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
        {PROJECTS.map((project, index) => (
          <div key={index} className="bg-slate-800/50 border border-slate-700 rounded-lg p-6 flex flex-col justify-between shadow-lg hover:border-sky-400/50 hover:-translate-y-1 transition-all duration-300">
            <div>
                <div className="flex justify-between items-center mb-4">
                    <h3 className="text-lg font-bold text-slate-100">{project.title}</h3>
                    <a href={project.githubUrl} target="_blank" rel="noopener noreferrer" aria-label="GitHub for project" className="text-slate-400 hover:text-sky-400 transition-colors">
                        <GithubIcon className="w-6 h-6" />
                    </a>
                </div>
                <ul className="list-disc list-inside space-y-2 text-slate-400 mb-4">
                    {project.description.map((desc, i) => <li key={i}>{desc}</li>)}
                </ul>
            </div>
            <p className="text-sm text-sky-400 font-mono mt-4">{project.tech}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Projects;