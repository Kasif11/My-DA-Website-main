// import React from 'react';
// import { useScrollAnimation } from '../hooks/useScrollAnimation';
// import AboutImg from '../assets/AboutImg.jpg';

// const About: React.FC = () => {
//   const sectionRef = useScrollAnimation<HTMLElement>();

//   return (
//     <section id="about" ref={sectionRef} className="py-24 reveal">
//       <h2 className="text-3xl font-bold text-slate-100 mb-8 flex items-center">
//         <span className="text-sky-400 mr-3">01.</span> About Me
//         <span className="h-px bg-slate-600 flex-grow ml-4"></span>
//       </h2>
//       <div className="grid grid-cols-1 md:grid-cols-3 gap-12 items-center">
//         <div className="md:col-span-2 text-slate-400 leading-relaxed space-y-4">
//           <p>
//             Proficient in Data Visualization, Reporting, Dashboarding, Insight analysis with Computer Science background
//             with a hands on experience in SQL, Excel, Power BI, Python. Having strong analytical skills, decision-making,
//             problem solving abilities with a learning mindset and proactive approach.
//           </p>
//           <p>
//             My goal is to leverage my skills to help businesses make data-driven decisions that lead to tangible growth and efficiency improvements. I'm passionate about transforming complex datasets into clear, actionable insights.
//           </p>
//         </div>
//         <div className="md:col-span-1 flex justify-center">
//           <div className="relative w-52 h-52 md:w-64 md:h-64">
//             <div className="absolute -inset-1.5 bg-gradient-to-r from-sky-500 to-cyan-400 rounded-lg blur-lg opacity-75 animate-tilt"></div>
//             <img
//               src={AboutImg}
//               alt="Kasif Quamar"
//               className="relative w-full h-full object-cover rounded-lg border-2 border-slate-800 shadow-xl"
//             />
//           </div>
//         </div>
//       </div>
//     </section>
//   );
// };

// export default About;



import React from 'react';
import { useScrollAnimation } from '../hooks/useScrollAnimation';
import AboutImg from '../assets/my_transparent_image.png';

const About: React.FC = () => {
  const sectionRef = useScrollAnimation<HTMLElement>();

  return (
    <section id="about" ref={sectionRef} className="py-24 reveal">
      <style>{`
        @keyframes morph-about {
          0% { border-radius: 30% 70% 70% 30% / 30% 30% 70% 70%; }
          25% { border-radius: 40% 60% 60% 40% / 40% 40% 60% 60%; }
          50% { border-radius: 20% 80% 80% 20% / 50% 50% 50% 50%; }
          75% { border-radius: 35% 65% 65% 35% / 35% 35% 65% 65%; }
          100% { border-radius: 30% 70% 70% 30% / 30% 30% 70% 70%; }
        }

        @keyframes float-about {
          0%, 100% { transform: translateY(0px); }
          50% { transform: translateY(-20px); }
        }

        @keyframes blink-glow {
          0% { 
            box-shadow: 0 0 20px rgba(6, 182, 212, 0.3), 
                        0 0 40px rgba(6, 182, 212, 0.1);
            filter: brightness(0.95);
          }
          25% { 
            box-shadow: 0 0 50px rgba(124, 58, 237, 0.8), 
                        0 0 100px rgba(124, 58, 237, 0.5),
                        0 0 150px rgba(124, 58, 237, 0.3);
            filter: brightness(1.1);
          }
          50% { 
            box-shadow: 0 0 60px rgba(6, 182, 212, 0.9), 
                        0 0 120px rgba(6, 182, 212, 0.6);
            filter: brightness(1.15);
          }
          75% { 
            box-shadow: 0 0 50px rgba(244, 114, 182, 0.8), 
                        0 0 100px rgba(244, 114, 182, 0.5);
            filter: brightness(1.1);
          }
          100% { 
            box-shadow: 0 0 20px rgba(6, 182, 212, 0.3), 
                        0 0 40px rgba(6, 182, 212, 0.1);
            filter: brightness(0.95);
          }
        }

        @keyframes attack-strike-1 {
          0% { transform: scale(1) rotate(0deg); opacity: 0; }
          10% { transform: scale(0.95) rotate(-5deg); opacity: 1; }
          50% { transform: scale(1.08) rotate(3deg); opacity: 1; }
          100% { transform: scale(1) rotate(0deg); opacity: 0; }
        }

        @keyframes attack-strike-2 {
          0% { transform: scale(1) rotate(0deg); opacity: 0; }
          15% { transform: scale(0.98) rotate(8deg); opacity: 1; }
          50% { transform: scale(1.12) rotate(-3deg); opacity: 1; }
          100% { transform: scale(1) rotate(0deg); opacity: 0; }
        }

        @keyframes attack-strike-3 {
          0% { transform: scale(1) rotate(0deg); opacity: 0; }
          20% { transform: scale(0.93) rotate(-8deg); opacity: 1; }
          50% { transform: scale(1.1) rotate(4deg); opacity: 1; }
          100% { transform: scale(1) rotate(0deg); opacity: 0; }
        }

        @keyframes rotate-frame-1 {
          from { transform: rotate(0deg); }
          to { transform: rotate(360deg); }
        }

        @keyframes rotate-frame-2 {
          from { transform: rotate(360deg); }
          to { transform: rotate(0deg); }
        }

        @keyframes shimmer-flash {
          0% { opacity: 0; }
          50% { opacity: 0.4; }
          100% { opacity: 0; }
        }

        @keyframes wave-ripple {
          0% { transform: scale(0.9); opacity: 1; }
          100% { transform: scale(1.8); opacity: 0; }
        }

        .about-image {
          animation: morph-about 12s ease-in-out infinite, 
                     float-about 5s ease-in-out infinite, 
                     blink-glow 4s ease-in-out infinite;
        }

        .about-frame-1 {
          animation: rotate-frame-1 18s linear infinite;
          transform-origin: 50% 50%;
        }

        .about-frame-2 {
          animation: rotate-frame-2 22s linear infinite;
          transform-origin: 50% 50%;
        }

        .attack-strike-1 {
          animation: attack-strike-1 1.5s ease-out infinite;
          animation-delay: 0s;
        }

        .attack-strike-2 {
          animation: attack-strike-2 1.8s ease-out infinite;
          animation-delay: 0.5s;
        }

        .attack-strike-3 {
          animation: attack-strike-3 2s ease-out infinite;
          animation-delay: 1s;
        }

        .wave-ripple {
          animation: wave-ripple 2s ease-out infinite;
        }
      `}</style>

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

        {/* Enhanced animated image section with attack animations */}
        <div className="md:col-span-1 flex justify-center">
          <div className="relative w-52 h-64 md:w-64 md:h-80">
            
            {/* Pulsing background glow */}
            <div className="absolute -inset-8 bg-gradient-to-br from-sky-400/50 via-violet-500/40 to-pink-400/50 rounded-2xl blur-3xl animate-pulse"></div>

            {/* Attack strike layers - outer */}
            <div className="absolute inset-0 w-full h-full rounded-2xl attack-strike-1" style={{
              border: '2px solid rgba(56, 189, 248, 0.6)',
              boxShadow: '0 0 20px rgba(56, 189, 248, 0.4)'
            }}></div>

            <div className="absolute inset-0 w-full h-full rounded-2xl attack-strike-2" style={{
              border: '2px solid rgba(124, 58, 237, 0.6)',
              boxShadow: '0 0 20px rgba(124, 58, 237, 0.4)'
            }}></div>

            <div className="absolute inset-0 w-full h-full rounded-2xl attack-strike-3" style={{
              border: '2px solid rgba(244, 114, 182, 0.6)',
              boxShadow: '0 0 20px rgba(244, 114, 182, 0.4)'
            }}></div>

            {/* Wave ripple effect */}
            <div className="absolute inset-0 rounded-2xl wave-ripple" style={{
              border: '2px solid rgba(56, 189, 248, 0.5)'
            }}></div>

            {/* Rotating frame 1 - outer ring */}
            <svg
              className="absolute inset-0 w-full h-full pointer-events-none about-frame-1 rounded-2xl"
              viewBox="0 0 100 100"
              xmlns="http://www.w3.org/2000/svg"
              style={{ overflow: 'visible' }}
            >
              <defs>
                <linearGradient id="grad-about-1" x1="0%" y1="0%" x2="100%" y2="100%">
                  <stop offset="0%" stopColor="#38bdf8" />
                  <stop offset="50%" stopColor="#7c3aed" />
                  <stop offset="100%" stopColor="#f472b6" />
                </linearGradient>
              </defs>
              <rect
                x="2"
                y="2"
                width="96"
                height="96"
                rx="15"
                fill="none"
                stroke="url(#grad-about-1)"
                strokeWidth="2"
                strokeDasharray="8 4"
                opacity="0.8"
              />
            </svg>

            {/* Rotating frame 2 - middle ring (reverse) */}
            <svg
              className="absolute inset-2 w-[calc(100%-16px)] h-[calc(100%-16px)] pointer-events-none about-frame-2"
              viewBox="0 0 100 100"
              xmlns="http://www.w3.org/2000/svg"
              style={{ overflow: 'visible' }}
            >
              <defs>
                <linearGradient id="grad-about-2" x1="100%" y1="0%" x2="0%" y2="100%">
                  <stop offset="0%" stopColor="#f472b6" />
                  <stop offset="50%" stopColor="#38bdf8" />
                  <stop offset="100%" stopColor="#7c3aed" />
                </linearGradient>
              </defs>
              <rect
                x="4"
                y="4"
                width="92"
                height="92"
                rx="12"
                fill="none"
                stroke="url(#grad-about-2)"
                strokeWidth="1.5"
                strokeDasharray="6 5"
                opacity="0.7"
              />
            </svg>

            {/* Main morphing image container with blinking effect */}
            <div className="absolute inset-4 md:inset-5 rounded-lg overflow-hidden">
              <img
                src={AboutImg}
                alt="Kasif Quamar"
                className="w-full h-full object-cover about-image border-2 border-slate-700/50"
              />
              {/* Shimmer flash overlay */}
              <div className="shimmer-flash absolute inset-0 pointer-events-none bg-white/20" style={{
                animation: 'shimmer-flash 2s ease-in-out infinite'
              }}></div>
            </div>

            {/* Static inner ring accent */}
            <svg
              className="absolute inset-2 w-[calc(100%-16px)] h-[calc(100%-16px)] pointer-events-none"
              viewBox="0 0 100 100"
              xmlns="http://www.w3.org/2000/svg"
              style={{ overflow: 'visible' }}
            >
              <defs>
                <linearGradient id="grad-about-3" x1="0%" y1="100%" x2="100%" y2="0%">
                  <stop offset="0%" stopColor="#7c3aed" />
                  <stop offset="50%" stopColor="#38bdf8" />
                  <stop offset="100%" stopColor="#f472b6" />
                </linearGradient>
              </defs>
              <rect
                x="6"
                y="6"
                width="88"
                height="88"
                rx="10"
                fill="none"
                stroke="url(#grad-about-3)"
                strokeWidth="2"
                strokeLinecap="round"
                opacity="0.7"
              />
            </svg>

            {/* Blinking corner accent lights */}
            <div className="absolute top-4 left-4 w-10 h-10 rounded-lg bg-sky-400/50 blur-xl animate-pulse"></div>
            <div className="absolute bottom-4 right-4 w-10 h-10 rounded-lg bg-violet-600/50 blur-xl animate-pulse" style={{
              animationDelay: '0.5s'
            }}></div>
            <div className="absolute top-1/2 right-4 w-8 h-8 rounded-lg bg-pink-400/50 blur-lg animate-pulse" style={{
              animationDelay: '1s'
            }}></div>

            {/* Intense blinking border glow */}
            <div className="absolute inset-0 rounded-2xl border-2 border-sky-400/40 animate-pulse" style={{
              boxShadow: '0 0 30px rgba(56, 189, 248, 0.6), inset 0 0 30px rgba(56, 189, 248, 0.2)'
            }}></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;