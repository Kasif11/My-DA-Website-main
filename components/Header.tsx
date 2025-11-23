// import React, { useState, useEffect } from 'react';

// const Header: React.FC = () => {
//   const [isScrolled, setIsScrolled] = useState(false);
//   const [isMenuOpen, setIsMenuOpen] = useState(false);

//   useEffect(() => {
//     const handleScroll = () => {
//       setIsScrolled(window.scrollY > 10);
//     };
//     window.addEventListener('scroll', handleScroll);
//     return () => window.removeEventListener('scroll', handleScroll);
//   }, []);

//   const navLinks = [
//     { href: '#about', label: 'About' },
//     { href: '#skills', label: 'Skills' },
//     { href: '#experience', label: 'Experience' },
//     { href: '#projects', label: 'Projects' },
//     { href: '#education', label: 'Education' },
//     { href: '#contact', label: 'Contact' },
//   ];

//   const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
//     e.preventDefault();
//     const targetElement = document.querySelector(href);
//     if (targetElement) {
//       targetElement.scrollIntoView({ behavior: 'smooth' });
//     }
//     if (isMenuOpen) {
//       setIsMenuOpen(false);
//     }
//   };

//   return (
//     <header
//       className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
//         isScrolled || isMenuOpen ? 'bg-slate-900/80 backdrop-blur-sm shadow-lg' : 'bg-transparent'
//       }`}
//     >
//       <div className="container mx-auto flex justify-between items-center px-6 md:px-12 lg:px-20 py-4">
//         <a href="#home" onClick={(e) => handleNavClick(e, '#home')} className="text-3xl font-extrabold text-sky-400 cursor-pointer">KQ</a>
//         <nav className="hidden md:flex space-x-6">
//           {navLinks.map((link) => (
//             <a
//               key={link.href}
//               href={link.href}
//               onClick={(e) => handleNavClick(e, link.href)}
//               className="cursor-pointer text-slate-300 hover:text-sky-400 transition-colors duration-300"
//             >
//               {link.label}
//             </a>
//           ))}
//         </nav>
//         <div className="md:hidden">
//           <button onClick={() => setIsMenuOpen(!isMenuOpen)} className="text-slate-300 focus:outline-none">
//             <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
//               <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d={isMenuOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16m-7 6h7"}></path>
//             </svg>
//           </button>
//         </div>
//       </div>
//       {isMenuOpen && (
//         <div className="md:hidden bg-slate-900/90 backdrop-blur-sm">
//           <nav className="flex flex-col items-center py-4">
//             {navLinks.map((link) => (
//               <a
//                 key={link.href}
//                 href={link.href}
//                 onClick={(e) => handleNavClick(e, link.href)}
//                 className="py-2 cursor-pointer text-slate-300 hover:text-sky-400 transition-colors duration-300"
//               >
//                 {link.label}
//               </a>
//             ))}
//           </nav>
//         </div>
//       )}
//     </header>
//   );
// };

// export default Header;




// import React, { useState, useEffect } from 'react';

// const Header: React.FC = () => {
//   const [isScrolled, setIsScrolled] = useState(false);
//   const [isMenuOpen, setIsMenuOpen] = useState(false);

//   useEffect(() => {
//     const handleScroll = () => {
//       setIsScrolled(window.scrollY > 10);
//     };
//     window.addEventListener('scroll', handleScroll);
//     return () => window.removeEventListener('scroll', handleScroll);
//   }, []);

//   const navLinks = [
//     { href: '#about', label: 'About' },
//     { href: '#skills', label: 'Skills' },
//     { href: '#experience', label: 'Experience' },
//     { href: '#projects', label: 'Projects' },
//     { href: '#education', label: 'Education' },
//     { href: '#contact', label: 'Contact' },
//   ];

//   const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
//     e.preventDefault();
//     const targetElement = document.querySelector(href);
//     if (targetElement) {
//       targetElement.scrollIntoView({ behavior: 'smooth' });
//     }
//     if (isMenuOpen) {
//       setIsMenuOpen(false);
//     }
//   };

//   return (
//     <header
//       className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
//         isScrolled || isMenuOpen ? 'bg-slate-900/80 backdrop-blur-sm shadow-lg' : 'bg-transparent'
//       }`}
//     >
//       <div className="container mx-auto flex justify-between items-center px-6 md:px-12 lg:px-20 py-4">
//         {/* Animated Logo */}
//         <a 
//           href="#home" 
//           onClick={(e) => handleNavClick(e, '#home')} 
//           className="relative group w-12 h-12 flex items-center justify-center"
//           aria-label="Home"
//         >
//           <div className="absolute inset-0 bg-gradient-to-r from-sky-400/20 to-violet-500/20 rounded-lg blur-xl group-hover:blur-2xl transition-all duration-300"></div>
//           <svg 
//             viewBox="0 0 60 40" 
//             className="w-10 h-10 transform group-hover:scale-110 transition-all duration-300"
//           >
//             <defs>
//               <linearGradient id="logoGradient" x1="0%" y1="0%" x2="100%" y2="100%">
//                 <stop offset="0%" stopColor="#38bdf8">
//                   <animate attributeName="stop-color" values="#38bdf8;#818cf8;#38bdf8" dur="4s" repeatCount="indefinite" />
//                 </stop>
//                 <stop offset="100%" stopColor="#818cf8">
//                   <animate attributeName="stop-color" values="#818cf8;#38bdf8;#818cf8" dur="4s" repeatCount="indefinite" />
//                 </stop>
//               </linearGradient>
//               <filter id="glow">
//                 <feGaussianBlur stdDeviation="2" result="coloredBlur"/>
//                 <feMerge>
//                   <feMergeNode in="coloredBlur"/>
//                   <feMergeNode in="SourceGraphic"/>
//                 </feMerge>
//               </filter>
//             </defs>
            
//             {/* K letter */}
//             <path 
//               d="M10 5 L10 35 M10 20 L25 5 M10 20 L25 35" 
//               stroke="url(#logoGradient)" 
//               strokeWidth="6" 
//               strokeLinecap="round" 
//               strokeLinejoin="round"
//               fill="none"
//               filter="url(#glow)"
//               className="group-hover:animate-pulse"
//             >
//               <animate 
//                 attributeName="stroke-dasharray" 
//                 values="0 100;100 0"
//                 dur="1.5s"
//                 begin="0s"
//               />
//             </path>
            
//             {/* Q letter */}
//             <g filter="url(#glow)">
//               <circle 
//                 cx="40" 
//                 cy="20" 
//                 r="15"
//                 stroke="url(#logoGradient)" 
//                 strokeWidth="6"
//                 fill="none"
//                 className="group-hover:animate-pulse"
//               >
//                 <animate 
//                   attributeName="r"
//                   values="15;16;15"
//                   dur="2s"
//                   repeatCount="indefinite"
//                 />
//               </circle>
//               <path 
//                 d="M48 28 L55 35" 
//                 stroke="url(#logoGradient)" 
//                 strokeWidth="6" 
//                 strokeLinecap="round"
//                 className="group-hover:animate-pulse"
//               />
//             </g>
            
//             {/* Animated particles */}
//             <circle className="animate-ping opacity-75" cx="10" cy="5" r="1" fill="#38bdf8" />
//             <circle className="animate-ping opacity-75" cx="25" cy="35" r="1" fill="#818cf8" />
//             <circle className="animate-ping opacity-75" cx="55" cy="35" r="1" fill="#38bdf8" />
//           </svg>
//         </a>

//         <nav className="hidden md:flex space-x-6">
//           {navLinks.map((link) => (
//             <a
//               key={link.href}
//               href={link.href}
//               onClick={(e) => handleNavClick(e, link.href)}
//               className="cursor-pointer text-slate-300 hover:text-sky-400 transition-colors duration-300"
//             >
//               {link.label}
//             </a>
//           ))}
//         </nav>
//         <div className="md:hidden">
//           <button onClick={() => setIsMenuOpen(!isMenuOpen)} className="text-slate-300 focus:outline-none">
//             <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
//               <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d={isMenuOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16m-7 6h7"}></path>
//             </svg>
//           </button>
//         </div>
//       </div>
//       {isMenuOpen && (
//         <div className="md:hidden bg-slate-900/90 backdrop-blur-sm">
//           <nav className="flex flex-col items-center py-4">
//             {navLinks.map((link) => (
//               <a
//                 key={link.href}
//                 href={link.href}
//                 onClick={(e) => handleNavClick(e, link.href)}
//                 className="py-2 cursor-pointer text-slate-300 hover:text-sky-400 transition-colors duration-300"
//               >
//                 {link.label}
//               </a>
//             ))}
//           </nav>
//         </div>
//       )}
//     </header>
//   );
// };

// export default Header;




import React, { useState, useEffect } from 'react';

const Header: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { href: '#about', label: 'About' },
    { href: '#skills', label: 'Skills' },
    { href: '#experience', label: 'Experience' },
    { href: '#projects', label: 'Projects' },
    { href: '#education', label: 'Education' },
    { href: '#contact', label: 'Contact' },
  ];

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    const targetElement = document.querySelector(href);
    if (targetElement) {
      targetElement.scrollIntoView({ behavior: 'smooth' });
    }
    if (isMenuOpen) {
      setIsMenuOpen(false);
    }
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled || isMenuOpen ? 'bg-slate-900/80 backdrop-blur-sm shadow-lg' : 'bg-transparent'
      }`}
    >
      <style>{`
        @keyframes nav-underline {
          0% { width: 0%; left: 50%; }
          50% { width: 100%; left: 0%; }
          100% { width: 0%; left: 50%; }
        }

        @keyframes nav-glow {
          0%, 100% { 
            box-shadow: 0 0 5px rgba(56, 189, 248, 0.3),
                        0 0 10px rgba(56, 189, 248, 0.2);
          }
          50% { 
            box-shadow: 0 0 15px rgba(56, 189, 248, 0.6),
                        0 0 25px rgba(124, 58, 237, 0.4),
                        0 0 35px rgba(244, 114, 182, 0.3);
          }
        }

        @keyframes nav-scale {
          0%, 100% { transform: scale(1); }
          50% { transform: scale(1.1); }
        }

        @keyframes nav-shimmer {
          0% { background-position: -200% center; }
          100% { background-position: 200% center; }
        }

        @keyframes nav-pulse {
          0%, 100% { opacity: 1; }
          50% { opacity: 0.7; }
        }

        @keyframes nav-bounce {
          0%, 100% { transform: translateY(0); }
          50% { transform: translateY(-3px); }
        }

        @keyframes nav-text-glow {
          0%, 100% {
            color: rgb(203, 213, 225);
            text-shadow: 0 0 0px rgba(56, 189, 248, 0);
          }
          50% {
            color: rgba(56, 189, 248, 0.8);
            text-shadow: 0 0 8px rgba(56, 189, 248, 0.4),
                         0 0 15px rgba(56, 189, 248, 0.2);
          }
        }

        @keyframes nav-text-pulse {
          0%, 100% { 
            transform: scale(1);
            opacity: 1;
          }
          50% { 
            transform: scale(1.05);
            opacity: 0.9;
          }
        }

        @keyframes nav-text-shimmer {
          0% {
            background-position: -200% center;
          }
          100% {
            background-position: 200% center;
          }
        }

        .nav-link {
          position: relative;
          padding: 0.5rem 1rem;
          transition: all 0.3s ease;
          animation: nav-text-glow 3s ease-in-out infinite,
                     nav-text-pulse 2.5s ease-in-out infinite;
        }

        .nav-link::before {
          content: '';
          position: absolute;
          bottom: 0;
          left: 50%;
          width: 0;
          height: 2px;
          background: linear-gradient(90deg, #38bdf8, #7c3aed, #f472b6, #7c3aed, #38bdf8);
          background-size: 200% 100%;
          transform: translateX(-50%);
          transition: all 0.4s ease;
          opacity: 0;
        }

        .nav-link::after {
          content: '';
          position: absolute;
          inset: 0;
          border-radius: 8px;
          background: linear-gradient(135deg, rgba(56, 189, 248, 0.1), rgba(124, 58, 237, 0.1));
          opacity: 0;
          transition: opacity 0.3s ease;
          z-index: -1;
        }

        .nav-link:hover::before {
          width: 100%;
          left: 0;
          transform: translateX(0);
          opacity: 1;
          animation: nav-shimmer 2s linear infinite;
        }

        .nav-link:hover::after {
          opacity: 1;
        }

        .nav-link:hover {
          color: #38bdf8;
          transform: translateY(-2px);
          text-shadow: 0 0 10px rgba(56, 189, 248, 0.5),
                       0 0 20px rgba(56, 189, 248, 0.3);
          animation: nav-glow 2s ease-in-out infinite, 
                     nav-bounce 1s ease-in-out infinite,
                     nav-text-glow 1.5s ease-in-out infinite,
                     nav-text-pulse 1s ease-in-out infinite;
        }

        .nav-link:active {
          transform: translateY(0) scale(0.95);
          animation: nav-pulse 0.3s ease;
        }

        .nav-link:active::before {
          animation: nav-shimmer 0.5s linear, nav-pulse 0.3s ease;
        }

        .nav-link.active {
          color: #38bdf8;
        }

        .nav-link.active::before {
          width: 100%;
          left: 0;
          transform: translateX(0);
          opacity: 1;
          animation: nav-shimmer 2s linear infinite;
        }

        .nav-link.active::after {
          opacity: 1;
        }

        @keyframes nav-ripple {
          0% {
            transform: scale(0);
            opacity: 1;
          }
          100% {
            transform: scale(4);
            opacity: 0;
          }
        }

        .nav-link {
          overflow: hidden;
        }

        .nav-link::before {
          border-radius: 50% 50% 0 0;
        }

        @keyframes mobile-nav-text-glow {
          0%, 100% {
            color: rgb(203, 213, 225);
            text-shadow: 0 0 0px rgba(56, 189, 248, 0);
          }
          50% {
            color: rgba(56, 189, 248, 0.8);
            text-shadow: 0 0 8px rgba(56, 189, 248, 0.4),
                         0 0 15px rgba(56, 189, 248, 0.2);
          }
        }

        @keyframes mobile-nav-text-slide {
          0%, 100% { 
            transform: translateX(0);
          }
          50% { 
            transform: translateX(3px);
          }
        }

        .mobile-nav-link {
          position: relative;
          padding: 0.75rem 1.5rem;
          transition: all 0.3s ease;
          width: 100%;
          text-align: center;
          animation: mobile-nav-text-glow 3s ease-in-out infinite,
                     mobile-nav-text-slide 2.5s ease-in-out infinite;
        }

        .mobile-nav-link::before {
          content: '';
          position: absolute;
          left: 0;
          top: 50%;
          width: 0;
          height: 2px;
          background: linear-gradient(90deg, #38bdf8, #7c3aed, #f472b6);
          transform: translateY(-50%);
          transition: all 0.4s ease;
          opacity: 0;
        }

        .mobile-nav-link::after {
          content: '';
          position: absolute;
          inset: 0;
          background: linear-gradient(90deg, rgba(56, 189, 248, 0.1), rgba(124, 58, 237, 0.1));
          opacity: 0;
          transition: opacity 0.3s ease;
          z-index: -1;
        }

        .mobile-nav-link:hover::before {
          width: 4px;
          opacity: 1;
        }

        .mobile-nav-link:hover::after {
          opacity: 1;
        }

        .mobile-nav-link:hover {
          color: #38bdf8;
          transform: translateX(5px);
          text-shadow: 0 0 10px rgba(56, 189, 248, 0.5);
        }

        .mobile-nav-link:active {
          transform: translateX(2px) scale(0.98);
          animation: nav-pulse 0.3s ease;
        }

        .mobile-nav-link.active {
          color: #38bdf8;
        }

        .mobile-nav-link.active::before {
          width: 4px;
          opacity: 1;
        }

        .mobile-nav-link.active::after {
          opacity: 1;
        }
      `}</style>
      <div className="container mx-auto flex justify-between items-center px-6 md:px-12 lg:px-20 py-4">
        {/* Enhanced Animated Logo */}
        <a 
          href="#home" 
          onClick={(e) => handleNavClick(e, '#home')} 
          className="relative group w-16 h-16 flex items-center justify-center"
          aria-label="Home"
        >
          <style>{`
            @keyframes float-logo {
              0%, 100% { transform: translateY(0px) rotate(0deg) scale(1); }
              25% { transform: translateY(-8px) rotate(3deg) scale(1.05); }
              50% { transform: translateY(0px) rotate(0deg) scale(1); }
              75% { transform: translateY(-8px) rotate(-3deg) scale(1.05); }
            }

            @keyframes glow-pulse {
              0%, 100% { 
                filter: drop-shadow(0 0 8px rgba(56, 189, 248, 0.4)) 
                        drop-shadow(0 0 16px rgba(124, 58, 237, 0.3)); 
              }
              50% { 
                filter: drop-shadow(0 0 16px rgba(56, 189, 248, 0.8)) 
                        drop-shadow(0 0 32px rgba(124, 58, 237, 0.6))
                        drop-shadow(0 0 48px rgba(244, 114, 182, 0.4)); 
              }
            }

            @keyframes orbit {
              from { transform: rotate(0deg); }
              to { transform: rotate(360deg); }
            }

            @keyframes orbit-reverse {
              from { transform: rotate(360deg); }
              to { transform: rotate(0deg); }
            }

            @keyframes particle-float {
              0% { opacity: 0; transform: translate(0, 0) scale(0); }
              20% { opacity: 1; transform: translate(var(--tx), var(--ty)) scale(1); }
              80% { opacity: 1; transform: translate(calc(var(--tx) * 1.5), calc(var(--ty) * 1.5)) scale(1); }
              100% { opacity: 0; transform: translate(calc(var(--tx) * 2), calc(var(--ty) * 2)) scale(0); }
            }

            @keyframes rotate-border {
              from { transform: rotate(0deg); }
              to { transform: rotate(360deg); }
            }

            @keyframes shimmer {
              0% { transform: translateX(-100%) translateY(-100%) rotate(45deg); }
              100% { transform: translateX(200%) translateY(200%) rotate(45deg); }
            }

            @keyframes breathe {
              0%, 100% { transform: scale(1); opacity: 0.8; }
              50% { transform: scale(1.1); opacity: 1; }
            }

            @keyframes sparkle {
              0%, 100% { opacity: 0; transform: scale(0) rotate(0deg); }
              50% { opacity: 1; transform: scale(1.5) rotate(180deg); }
            }

            .logo-animated {
              animation: float-logo 5s ease-in-out infinite, glow-pulse 4s ease-in-out infinite;
            }

            .orbit-ring {
              animation: orbit 10s linear infinite;
              transform-origin: 50% 50%;
            }

            .orbit-ring-reverse {
              animation: orbit-reverse 12s linear infinite;
              transform-origin: 50% 50%;
            }

            .particle {
              animation: particle-float 3s ease-out infinite;
            }

            .logo-rotating-border {
              animation: rotate-border 3s linear infinite;
            }

            .shimmer-overlay {
              animation: shimmer 3s ease-in-out infinite;
            }

            .breathe-effect {
              animation: breathe 2s ease-in-out infinite;
            }

            .sparkle {
              animation: sparkle 2s ease-in-out infinite;
            }

            .group:hover .logo-animated {
              animation-duration: 3s, 2s;
            }

            .group:hover .orbit-ring {
              animation-duration: 5s;
            }

            .group:hover .orbit-ring-reverse {
              animation-duration: 6s;
            }
          `}</style>

          {/* Multiple glow layers */}
          <div className="absolute inset-0 bg-gradient-to-r from-sky-400/40 via-violet-500/30 to-pink-400/40 rounded-xl blur-3xl group-hover:blur-[40px] transition-all duration-500 breathe-effect"></div>
          <div className="absolute inset-0 bg-gradient-to-br from-sky-400/20 to-violet-500/20 rounded-xl blur-2xl group-hover:from-sky-400/40 group-hover:to-violet-500/40 transition-all duration-500"></div>

          {/* Rotating border */}
          <div className="absolute inset-0 rounded-xl overflow-hidden logo-rotating-border">
            <div className="absolute inset-0" style={{
              background: 'conic-gradient(from 0deg, #38bdf8, #7c3aed, #f472b6, #7c3aed, #38bdf8)',
              padding: '2px',
              WebkitMask: 'linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0)',
              WebkitMaskComposite: 'xor',
              maskComposite: 'exclude',
            }}></div>
          </div>

          {/* Shimmer effect */}
          <div className="absolute inset-0 rounded-xl overflow-hidden pointer-events-none">
            <div className="shimmer-overlay absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent"></div>
          </div>

          <svg 
            viewBox="0 0 80 60" 
            className="w-14 h-14 transform group-hover:scale-135 transition-all duration-300 logo-animated relative z-10"
          >
            <defs>
              <linearGradient id="logoGradient" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" stopColor="#38bdf8">
                  <animate attributeName="stop-color" values="#38bdf8;#818cf8;#f472b6;#ec4899;#38bdf8" dur="5s" repeatCount="indefinite" />
                </stop>
                <stop offset="33%" stopColor="#818cf8">
                  <animate attributeName="stop-color" values="#818cf8;#f472b6;#ec4899;#38bdf8;#818cf8" dur="5s" repeatCount="indefinite" />
                </stop>
                <stop offset="66%" stopColor="#f472b6">
                  <animate attributeName="stop-color" values="#f472b6;#ec4899;#38bdf8;#818cf8;#f472b6" dur="5s" repeatCount="indefinite" />
                </stop>
                <stop offset="100%" stopColor="#ec4899">
                  <animate attributeName="stop-color" values="#ec4899;#38bdf8;#818cf8;#f472b6;#ec4899" dur="5s" repeatCount="indefinite" />
                </stop>
              </linearGradient>

              <radialGradient id="radialGradient" cx="50%" cy="50%">
                <stop offset="0%" stopColor="#38bdf8" stopOpacity="0.8">
                  <animate attributeName="stop-color" values="#38bdf8;#818cf8;#f472b6;#38bdf8" dur="4s" repeatCount="indefinite" />
                </stop>
                <stop offset="100%" stopColor="#7c3aed" stopOpacity="0.3">
                  <animate attributeName="stop-color" values="#7c3aed;#f472b6;#38bdf8;#7c3aed" dur="4s" repeatCount="indefinite" />
                </stop>
              </radialGradient>

              <filter id="glow">
                <feGaussianBlur stdDeviation="3" result="coloredBlur"/>
                <feMerge>
                  <feMergeNode in="coloredBlur"/>
                  <feMergeNode in="SourceGraphic"/>
                </feMerge>
              </filter>

              <filter id="strong-glow">
                <feGaussianBlur stdDeviation="5" result="coloredBlur"/>
                <feMerge>
                  <feMergeNode in="coloredBlur"/>
                  <feMergeNode in="SourceGraphic"/>
                </feMerge>
              </filter>

              <filter id="mega-glow">
                <feGaussianBlur stdDeviation="8" result="coloredBlur"/>
                <feMerge>
                  <feMergeNode in="coloredBlur"/>
                  <feMergeNode in="SourceGraphic"/>
                </feMerge>
              </filter>
            </defs>

            {/* Multiple rotating orbit rings */}
            <g className="orbit-ring" filter="url(#glow)">
              <circle 
                cx="40" 
                cy="30" 
                r="36"
                fill="none"
                stroke="url(#logoGradient)"
                strokeWidth="1.5"
                strokeDasharray="3 5"
                opacity="0.7"
              />
            </g>
            <g className="orbit-ring-reverse" filter="url(#glow)">
              <circle 
                cx="40" 
                cy="30" 
                r="32"
                fill="none"
                stroke="url(#logoGradient)"
                strokeWidth="1"
                strokeDasharray="2 4"
                opacity="0.5"
              />
            </g>

            {/* Background glow circle */}
            <circle 
              cx="40" 
              cy="30" 
              r="28"
              fill="url(#radialGradient)"
              opacity="0.3"
            />

            {/* K letter with enhanced animation */}
            <g filter="url(#strong-glow)">
              <path 
                d="M15 12 L15 48 M15 30 L32 12 M15 30 L32 48" 
                stroke="url(#logoGradient)" 
                strokeWidth="7" 
                strokeLinecap="round" 
                strokeLinejoin="round"
                fill="none"
              >
                <animate 
                  attributeName="stroke-dasharray" 
                  values="0 130;65 65;130 0;65 65;0 130"
                  dur="3s"
                  repeatCount="indefinite"
                />
                <animate 
                  attributeName="stroke-width"
                  values="7;8;7"
                  dur="2s"
                  repeatCount="indefinite"
                />
              </path>
            </g>

            {/* Q letter with enhanced animation */}
            <g filter="url(#strong-glow)">
              <circle 
                cx="58" 
                cy="30" 
                r="18"
                stroke="url(#logoGradient)" 
                strokeWidth="7"
                fill="none"
                strokeLinecap="round"
              >
                <animate 
                  attributeName="r"
                  values="18;20;22;20;18"
                  dur="3s"
                  repeatCount="indefinite"
                />
                <animate 
                  attributeName="stroke-width"
                  values="7;6;8;6;7"
                  dur="3s"
                  repeatCount="indefinite"
                />
              </circle>
              <path 
                d="M68 42 L78 52" 
                stroke="url(#logoGradient)" 
                strokeWidth="7" 
                strokeLinecap="round"
                filter="url(#mega-glow)"
              >
                <animate 
                  attributeName="d"
                  values="M68 42 L78 52;M70 40 L80 50;M72 38 L82 48;M70 40 L80 50;M68 42 L78 52"
                  dur="2.5s"
                  repeatCount="indefinite"
                />
                <animate 
                  attributeName="stroke-width"
                  values="7;9;7"
                  dur="1.5s"
                  repeatCount="indefinite"
                />
              </path>
            </g>

            {/* Enhanced floating particles with sparkles */}
            <circle className="particle sparkle" cx="15" cy="12" r="2" fill="#38bdf8" style={{ '--tx': '20px', '--ty': '-25px' } as React.CSSProperties} />
            <circle className="particle sparkle" cx="32" cy="48" r="2" fill="#818cf8" style={{ '--tx': '-20px', '--ty': '25px', animationDelay: '0.4s' } as React.CSSProperties} />
            <circle className="particle sparkle" cx="78" cy="52" r="2" fill="#f472b6" style={{ '--tx': '25px', '--ty': '-20px', animationDelay: '0.8s' } as React.CSSProperties} />
            <circle className="particle sparkle" cx="40" cy="30" r="1.5" fill="#38bdf8" style={{ '--tx': '30px', '--ty': '30px', animationDelay: '1.2s' } as React.CSSProperties} />
            <circle className="particle sparkle" cx="10" cy="30" r="1.5" fill="#ec4899" style={{ '--tx': '-30px', '--ty': '-30px', animationDelay: '1.6s' } as React.CSSProperties} />
            <circle className="particle sparkle" cx="70" cy="15" r="1.5" fill="#7c3aed" style={{ '--tx': '20px', '--ty': '25px', animationDelay: '2s' } as React.CSSProperties} />
            <circle className="particle sparkle" cx="25" cy="20" r="1" fill="#38bdf8" style={{ '--tx': '15px', '--ty': '-15px', animationDelay: '2.4s' } as React.CSSProperties} />
            <circle className="particle sparkle" cx="65" cy="45" r="1" fill="#f472b6" style={{ '--tx': '-15px', '--ty': '15px', animationDelay: '2.8s' } as React.CSSProperties} />
          </svg>
        </a>

        <nav className="hidden md:flex space-x-6">
          {navLinks.map((link, index) => (
            <a
              key={link.href}
              href={link.href}
              onClick={(e) => handleNavClick(e, link.href)}
              className="nav-link cursor-pointer text-slate-300 font-medium relative z-10"
              style={{ 
                animationDelay: `${index * 0.2}s, ${index * 0.3}s`
              } as React.CSSProperties}
            >
              {link.label}
            </a>
          ))}
        </nav>
        <div className="md:hidden">
          <button onClick={() => setIsMenuOpen(!isMenuOpen)} className="text-slate-300 focus:outline-none">
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d={isMenuOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16m-7 6h7"}></path>
            </svg>
          </button>
        </div>
      </div>
      {isMenuOpen && (
        <div className="md:hidden bg-slate-900/90 backdrop-blur-sm">
          <nav className="flex flex-col items-center py-4">
            {navLinks.map((link, index) => (
              <a
                key={link.href}
                href={link.href}
                onClick={(e) => handleNavClick(e, link.href)}
                className="mobile-nav-link cursor-pointer text-slate-300 font-medium relative"
                style={{ 
                  animationDelay: `${index * 0.15}s, ${index * 0.2}s`
                } as React.CSSProperties}
              >
                {link.label}
              </a>
            ))}
          </nav>
        </div>
      )}
    </header>
  );
};

export default Header;