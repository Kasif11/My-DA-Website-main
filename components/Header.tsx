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
          <div className="absolute inset-0 bg-gradient-to-r from-sky-400/20 to-violet-500/20 rounded-lg blur-xl group-hover:blur-2xl transition-all duration-300"></div>
          <svg 
            viewBox="0 0 60 40" 
            className="w-10 h-10 transform group-hover:scale-110 transition-all duration-300"
          >
            <defs>
              <linearGradient id="logoGradient" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" stopColor="#38bdf8">
                  <animate attributeName="stop-color" values="#38bdf8;#818cf8;#38bdf8" dur="4s" repeatCount="indefinite" />
                </stop>
                <stop offset="100%" stopColor="#818cf8">
                  <animate attributeName="stop-color" values="#818cf8;#38bdf8;#818cf8" dur="4s" repeatCount="indefinite" />
                </stop>
              </linearGradient>
              <filter id="glow">
                <feGaussianBlur stdDeviation="2" result="coloredBlur"/>
                <feMerge>
                  <feMergeNode in="coloredBlur"/>
                  <feMergeNode in="SourceGraphic"/>
                </feMerge>
              </filter>
            </defs>
            
            {/* K letter */}
            <path 
              d="M10 5 L10 35 M10 20 L25 5 M10 20 L25 35" 
              stroke="url(#logoGradient)" 
              strokeWidth="6" 
              strokeLinecap="round" 
              strokeLinejoin="round"
              fill="none"
              filter="url(#glow)"
              className="group-hover:animate-pulse"
            >
              <animate 
                attributeName="stroke-dasharray" 
                values="0 100;100 0"
                dur="1.5s"
                begin="0s"
              />
            </path>
            
            {/* Q letter */}
            <g filter="url(#glow)">
              <circle 
                cx="40" 
                cy="20" 
                r="15"
                stroke="url(#logoGradient)" 
                strokeWidth="6"
                fill="none"
                className="group-hover:animate-pulse"
              >
                <animate 
                  attributeName="r"
                  values="15;16;15"
                  dur="2s"
                  repeatCount="indefinite"
                />
              </circle>
              <path 
                d="M48 28 L55 35" 
                stroke="url(#logoGradient)" 
                strokeWidth="6" 
                strokeLinecap="round"
                className="group-hover:animate-pulse"
              />
            </g>
            
            {/* Animated particles */}
            <circle className="animate-ping opacity-75" cx="10" cy="5" r="1" fill="#38bdf8" />
            <circle className="animate-ping opacity-75" cx="25" cy="35" r="1" fill="#818cf8" />
            <circle className="animate-ping opacity-75" cx="55" cy="35" r="1" fill="#38bdf8" />
          </svg>
        </a>

        <nav className="hidden md:flex space-x-6">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              onClick={(e) => handleNavClick(e, link.href)}
              className="cursor-pointer text-slate-300 hover:text-sky-400 transition-colors duration-300"
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
                className="py-2 cursor-pointer text-slate-300 hover:text-sky-400 transition-colors duration-300"
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