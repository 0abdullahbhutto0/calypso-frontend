import React, { useEffect, useRef } from 'react';
import { Menu } from 'lucide-react';
import gsap from 'gsap';
import ScrollTrigger from 'gsap/ScrollTrigger';

import scribbleCross from '../assets/scribble_cross.png';

gsap.registerPlugin(ScrollTrigger);

export default function Navbar() {
  const navRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      if (window.innerWidth >= 768) {
        gsap.to('.nav-parallax', {
          y: 60,
          rotation: 15,
          ease: 'none',
          scrollTrigger: {
            trigger: document.documentElement,
            start: 'top top',
            end: '+=2000',
            scrub: true,
          }
        });
      }
    }, navRef);

    return () => ctx.revert();
  }, []);

  return (
    <nav ref={navRef} className="fixed top-0 left-0 w-full z-50 px-6 py-6 flex justify-between items-center mix-blend-difference text-offwhite pointer-events-none">
      {/* Background Grunge/Scribbles for Header */}
      <img
        src={scribbleCross}
        alt=""
        className="nav-parallax absolute -top-10 -left-6 md:-top-16 md:left-0 w-[240px] md:w-[320px] opacity-[0.15] mix-blend-screen pointer-events-none -z-10 -rotate-[15deg]"
        style={{ filter: 'brightness(2)' }}
      />

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
