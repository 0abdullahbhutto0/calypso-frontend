import React from 'react';
import { Menu } from 'lucide-react';

export default function Navbar() {
  return (
    <nav className="fixed top-0 left-0 w-full z-50 px-6 py-6 flex justify-between items-center mix-blend-difference text-offwhite pointer-events-none">
      {/* Background Grunge/Scribbles for Header */}
      <div className="absolute top-2 left-8 w-40 h-20 pointer-events-none opacity-40 mix-blend-screen -z-10">
         <svg viewBox="0 0 100 50" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-full">
            <path d="M10,25 Q30,5 50,25 T90,25" stroke="white" strokeWidth="2" strokeLinecap="round" className="opacity-60"/>
            <path d="M15,30 L85,20" stroke="white" strokeWidth="1" strokeLinecap="round" className="opacity-40"/>
            <path d="M40,10 L45,40" stroke="white" strokeWidth="1" strokeLinecap="round" className="opacity-40"/>
            <path d="M60,15 L55,35" stroke="white" strokeWidth="1.5" strokeLinecap="round" className="opacity-50"/>
         </svg>
      </div>

      <div className="text-2xl font-display font-bold tracking-tighter flex items-center gap-2 pointer-events-auto cursor-pointer relative z-10">
        <div className="w-8 h-8 rounded-full bg-calypso-red flex items-center justify-center relative overflow-hidden">
            {/* Simple logo mark */}
            <span className="text-void font-black text-xl absolute -bottom-1">C</span>
        </div>
        CALYPSO
      </div>
      
      <div className="hidden md:flex items-center gap-8 font-sans text-sm tracking-widest uppercase pointer-events-auto">
        <a href="#work" className="hover:text-calypso-red transition-colors duration-300">Work</a>
        <a href="#about" className="hover:text-calypso-red transition-colors duration-300">About</a>
        <a href="#services" className="hover:text-calypso-red transition-colors duration-300">Services</a>
        <a href="#contact" className="hover:text-calypso-red transition-colors duration-300">Contact</a>
      </div>

      <button className="md:hidden pointer-events-auto">
        <Menu size={28} />
      </button>
    </nav>
  );
}
