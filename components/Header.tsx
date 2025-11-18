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
      <div className="container mx-auto flex justify-between items-center px-6 md:px-12 lg:px-20 py-4">
        {/* Animated Logo */}
        <a 
          href="#home" 
          onClick={(e) => handleNavClick(e, '#home')} 
          className="relative group w-12 h-12 flex items-center justify-center"
          aria-label="Home"
        >
          <style>{`
            @keyframes float-logo {
              0%, 100% { transform: translateY(0px) rotate(0deg); }
              25% { transform: translateY(-6px) rotate(2deg); }
              50% { transform: translateY(0px) rotate(0deg); }
              75% { transform: translateY(-6px) rotate(-2deg); }
            }

            @keyframes glow-pulse {
              0%, 100% { filter: drop-shadow(0 0 4px rgba(56, 189, 248, 0.3)); }
              50% { filter: drop-shadow(0 0 12px rgba(124, 58, 237, 0.6)); }
            }

            @keyframes orbit {
              from { transform: rotate(0deg); }
              to { transform: rotate(360deg); }
            }

            @keyframes particle-float {
              0% { opacity: 0; transform: translate(0, 0); }
              50% { opacity: 1; }
              100% { opacity: 0; transform: translate(var(--tx), var(--ty)); }
            }

            .logo-animated {
              animation: float-logo 4s ease-in-out infinite, glow-pulse 3s ease-in-out infinite;
            }

            .orbit-ring {
              animation: orbit 8s linear infinite;
              transform-origin: 50% 50%;
            }

            .particle {
              animation: particle-float 2s ease-out infinite;
            }
          `}</style>

          {/* Outer glow background */}
          <div className="absolute inset-0 bg-gradient-to-r from-sky-400/30 to-violet-500/30 rounded-lg blur-2xl group-hover:blur-3xl transition-all duration-300 group-hover:from-sky-400/50 group-hover:to-violet-500/50"></div>

          <svg 
            viewBox="0 0 80 60" 
            className="w-12 h-12 transform group-hover:scale-125 transition-all duration-300 logo-animated"
          >
            <defs>
              <linearGradient id="logoGradient" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" stopColor="#38bdf8">
                  <animate attributeName="stop-color" values="#38bdf8;#818cf8;#f472b6;#38bdf8" dur="6s" repeatCount="indefinite" />
                </stop>
                <stop offset="50%" stopColor="#818cf8">
                  <animate attributeName="stop-color" values="#818cf8;#f472b6;#38bdf8;#818cf8" dur="6s" repeatCount="indefinite" />
                </stop>
                <stop offset="100%" stopColor="#f472b6">
                  <animate attributeName="stop-color" values="#f472b6;#38bdf8;#818cf8;#f472b6" dur="6s" repeatCount="indefinite" />
                </stop>
              </linearGradient>

              <filter id="glow">
                <feGaussianBlur stdDeviation="2.5" result="coloredBlur"/>
                <feMerge>
                  <feMergeNode in="coloredBlur"/>
                  <feMergeNode in="SourceGraphic"/>
                </feMerge>
              </filter>

              <filter id="strong-glow">
                <feGaussianBlur stdDeviation="4" result="coloredBlur"/>
                <feMerge>
                  <feMergeNode in="coloredBlur"/>
                  <feMergeNode in="SourceGraphic"/>
                </feMerge>
              </filter>
            </defs>

            {/* Rotating orbit ring */}
            <g className="orbit-ring" filter="url(#glow)">
              <circle 
                cx="40" 
                cy="30" 
                r="38"
                fill="none"
                stroke="url(#logoGradient)"
                strokeWidth="1.5"
                strokeDasharray="4 6"
                opacity="0.6"
              />
            </g>

            {/* K letter with animation */}
            <g filter="url(#glow)">
              <path 
                d="M15 12 L15 48 M15 30 L32 12 M15 30 L32 48" 
                stroke="url(#logoGradient)" 
                strokeWidth="6" 
                strokeLinecap="round" 
                strokeLinejoin="round"
                fill="none"
              >
                <animate 
                  attributeName="stroke-dasharray" 
                  values="0 120;120 0;0 120"
                  dur="4s"
                  repeatCount="indefinite"
                />
              </path>
            </g>

            {/* Q letter with animation */}
            <g filter="url(#glow)">
              <circle 
                cx="58" 
                cy="30" 
                r="18"
                stroke="url(#logoGradient)" 
                strokeWidth="6"
                fill="none"
                strokeLinecap="round"
              >
                <animate 
                  attributeName="r"
                  values="18;20;18"
                  dur="2.5s"
                  repeatCount="indefinite"
                />
                <animate 
                  attributeName="stroke-width"
                  values="6;5;6"
                  dur="2.5s"
                  repeatCount="indefinite"
                />
              </circle>
              <path 
                d="M68 42 L78 52" 
                stroke="url(#logoGradient)" 
                strokeWidth="6" 
                strokeLinecap="round"
                filter="url(#strong-glow)"
              >
                <animate 
                  attributeName="d"
                  values="M68 42 L78 52;M70 40 L80 50;M68 42 L78 52"
                  dur="2s"
                  repeatCount="indefinite"
                />
              </path>
            </g>

            {/* Floating particles */}
            <circle className="particle" cx="15" cy="12" r="1.5" fill="#38bdf8" style={{ '--tx': '15px', '--ty': '-20px' } as React.CSSProperties} />
            <circle className="particle" cx="32" cy="48" r="1.5" fill="#818cf8" style={{ '--tx': '-15px', '--ty': '20px', animationDelay: '0.3s' } as React.CSSProperties} />
            <circle className="particle" cx="78" cy="52" r="1.5" fill="#f472b6" style={{ '--tx': '20px', '--ty': '-15px', animationDelay: '0.6s' } as React.CSSProperties} />
            <circle className="particle" cx="40" cy="30" r="1" fill="#38bdf8" style={{ '--tx': '25px', '--ty': '25px', animationDelay: '0.9s' } as React.CSSProperties} />
          </svg>
        </a>

        <nav className="hidden md:flex space-x-6">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              onClick={(e) => handleNavClick(e, link.href)}
              className="cursor-pointer text-slate-300 hover:text-sky-400 transition-colors duration-300 font-medium"
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
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={(e) => handleNavClick(e, link.href)}
                className="py-2 cursor-pointer text-slate-300 hover:text-sky-400 transition-colors duration-300 font-medium"
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