import React from 'react';
import { useScrollAnimation } from '../hooks/useScrollAnimation';
import { GithubIcon } from './icons/GithubIcon';
import { LinkedInIcon } from './icons/LinkedInIcon';
import { MailIcon } from './icons/MailIcon';

const Contact: React.FC = () => {
  const sectionRef = useScrollAnimation<HTMLElement>();

  return (
    <section id="contact" ref={sectionRef} className="text-center py-24 reveal">
      <h2 className="text-3xl font-bold text-slate-100 mb-4">Get In Touch</h2>
      <p className="max-w-xl mx-auto text-slate-400 mb-8">
        I'm currently open to new opportunities and would love to chat. Whether you have a question or just want to say hi, feel free to reach out.
      </p>
      <a
        href="mailto:kasif1196quamar@gmail.com"
        className="inline-block bg-sky-500 text-white font-bold py-3 px-6 rounded-lg hover:bg-sky-600 transition-colors duration-300"
      >
        Say Hello
      </a>
       <div className="flex justify-center items-center space-x-6 pt-12">
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
      <footer className="mt-20 text-slate-500 text-sm">
        <p>
          Made with <span aria-hidden="true">❤️</span> by Kasif Quamar.
          <br />
          © {new Date().getFullYear()} | All rights reserved.
        </p>
        <p>(+91) 9905034309</p>
      </footer>
    </section>
  );
};

export default Contact;