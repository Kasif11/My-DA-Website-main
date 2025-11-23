import React from 'react';
import { useScrollAnimation } from '../hooks/useScrollAnimation';
import { GithubIcon } from './icons/GithubIcon';
import { LinkedInIcon } from './icons/LinkedInIcon';
import { MailIcon } from './icons/MailIcon';

const Contact: React.FC = () => {
  const sectionRef = useScrollAnimation<HTMLElement>();

  return (
    <section id="contact" ref={sectionRef} className="text-center py-24 reveal">
      <style>{`
        @keyframes rotate-border {
          from { transform: rotate(0deg); }
          to { transform: rotate(360deg); }
        }

        @keyframes contact-title-glow {
          0%, 100% {
            color: rgb(241, 245, 249);
            text-shadow: 0 0 0px rgba(56, 189, 248, 0);
          }
          50% {
            color: #38bdf8;
            text-shadow: 0 0 20px rgba(56, 189, 248, 0.6),
                         0 0 40px rgba(56, 189, 248, 0.4),
                         0 0 60px rgba(124, 58, 237, 0.3);
          }
        }

        @keyframes contact-text-pulse {
          0%, 100% {
            opacity: 0.8;
            transform: translateY(0);
          }
          50% {
            opacity: 1;
            transform: translateY(-3px);
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

        @keyframes icon-float {
          0%, 100% { transform: translateY(0) rotate(0deg); }
          50% { transform: translateY(-8px) rotate(5deg); }
        }

        @keyframes icon-glow {
          0%, 100% {
            filter: drop-shadow(0 0 5px rgba(56, 189, 248, 0.3));
          }
          50% {
            filter: drop-shadow(0 0 15px rgba(56, 189, 248, 0.8))
                    drop-shadow(0 0 25px rgba(124, 58, 237, 0.5));
          }
        }

        @keyframes icon-rotate {
          from { transform: rotate(0deg); }
          to { transform: rotate(360deg); }
        }

        @keyframes footer-pulse {
          0%, 100% { opacity: 0.6; }
          50% { opacity: 1; }
        }

        @keyframes heart-beat {
          0%, 100% { transform: scale(1); }
          25% { transform: scale(1.2); }
          50% { transform: scale(1); }
          75% { transform: scale(1.15); }
        }

        .contact-title {
          animation: contact-title-glow 3s ease-in-out infinite;
        }

        .contact-text {
          animation: contact-text-pulse 3s ease-in-out infinite;
        }

        .contact-button {
          position: relative;
          background: linear-gradient(135deg, #38bdf8, #7c3aed);
          background-size: 200% 200%;
          color: white;
          font-weight: bold;
          padding: 0.75rem 1.5rem;
          border-radius: 12px;
          cursor: pointer;
          overflow: hidden;
          z-index: 1;
          border: none;
          animation: button-glow 2.5s ease-in-out infinite,
                     button-bounce 2s ease-in-out infinite;
        }

        .contact-button::before {
          content: '';
          position: absolute;
          inset: -2px;
          border-radius: 12px;
          padding: 2px;
          background: conic-gradient(from 0deg, #38bdf8, #7c3aed, #f472b6, #7c3aed, #38bdf8);
          -webkit-mask: linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0);
          -webkit-mask-composite: xor;
          mask-composite: exclude;
          opacity: 0.8;
          z-index: -1;
          animation: rotate-border 3s linear infinite;
        }

        .contact-button::after {
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
          border-radius: 12px;
          animation: button-shimmer 2s linear infinite;
        }

        .contact-button:hover {
          animation: button-glow 1.5s ease-in-out infinite,
                     button-bounce 1s ease-in-out infinite,
                     button-pulse 0.5s ease-in-out infinite;
        }

        .contact-button:hover::before {
          opacity: 1;
        }

        .contact-button:active {
          transform: translateY(2px) scale(0.98);
        }

        .contact-button span {
          position: relative;
          z-index: 1;
        }

        .social-icon {
          position: relative;
          animation: icon-float 3s ease-in-out infinite,
                     icon-glow 2.5s ease-in-out infinite;
        }

        .social-icon:nth-child(1) {
          animation-delay: 0s;
        }

        .social-icon:nth-child(2) {
          animation-delay: 0.3s;
        }

        .social-icon:nth-child(3) {
          animation-delay: 0.6s;
        }

        .social-icon:hover {
          animation: icon-float 1s ease-in-out infinite,
                     icon-glow 1s ease-in-out infinite,
                     icon-rotate 2s linear infinite;
          color: #38bdf8 !important;
        }

        .footer-text {
          animation: footer-pulse 3s ease-in-out infinite;
        }

        .heart-icon {
          display: inline-block;
          animation: heart-beat 1.5s ease-in-out infinite;
        }
      `}</style>
      <h2 className="contact-title text-3xl font-bold mb-4">Get In Touch</h2>
      <p className="contact-text max-w-xl mx-auto text-slate-400 mb-8">
        I'm currently open to new opportunities and would love to chat. Whether you have a question or just want to say hi, feel free to reach out.
      </p>
      <a
        href="https://wa.me/+919905034309"
        className="contact-button inline-block"
      >
        <span>Say Hello</span>
      </a>
       <div className="flex justify-center items-center space-x-6 pt-12">
            <a 
              href="https://github.com/Kasif11" 
              target="_blank" 
              rel="noopener noreferrer" 
              aria-label="Github" 
              className="social-icon text-slate-400 transition-colors duration-300"
            >
                <GithubIcon className="w-7 h-7" />
            </a>
            <a 
              href="https://www.linkedin.com/in/kasif-quamar-023b7223b" 
              target="_blank" 
              rel="noopener noreferrer" 
              aria-label="LinkedIn" 
              className="social-icon text-slate-400 transition-colors duration-300"
            >
                <LinkedInIcon className="w-7 h-7" />
            </a>
            <a 
              href="mailto:kasif1196quamar@gmail.com" 
              aria-label="Email" 
              className="social-icon text-slate-400 transition-colors duration-300"
            >
                <MailIcon className="w-7 h-7" />
            </a>
        </div>
      <footer className="footer-text mt-20 text-slate-500 text-sm">
        <p>
          Made with <span className="heart-icon" aria-hidden="true">❤️</span> by Kasif Quamar.
          <br />
          © {new Date().getFullYear()} | All rights reserved.
        </p>
        <p>(+91) 9905034309</p>
      </footer>
    </section>
  );
};

export default Contact;
