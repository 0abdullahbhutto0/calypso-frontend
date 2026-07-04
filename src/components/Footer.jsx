import React from 'react';

export default function Footer() {
  return (
    <footer className="relative bg-[#050505] pt-32 overflow-hidden border-t border-zinc-900">
      
      {/* Background Grunge elements */}
      <div className="absolute inset-0 opacity-[0.05] mix-blend-overlay pointer-events-none z-0">
         <svg width="100%" height="100%" xmlns="http://www.w3.org/2000/svg">
            <filter id="footer-noise">
              <feTurbulence type="fractalNoise" baseFrequency="0.9" numOctaves="3" stitchTiles="stitch"/>
            </filter>
            <rect width="100%" height="100%" filter="url(#footer-noise)" />
         </svg>
      </div>

      {/* IMPACT > CONTENT text in the background */}
      <div className="absolute top-[40%] left-1/2 -translate-x-1/2 -translate-y-1/2 w-full text-center pointer-events-none z-0">
         <h2 className="font-heading font-black text-[12vw] md:text-[8vw] text-zinc-900 uppercase tracking-tighter opacity-50 whitespace-nowrap">
            IMPACT &gt; CONTENT
         </h2>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-6 flex flex-col md:flex-row justify-between items-start md:items-end pb-24 md:pb-40">
        
        {/* Left side info */}
        <div className="flex flex-col gap-6">
           <div className="w-12 h-12 rounded-full bg-calypso-red flex items-center justify-center relative overflow-hidden mb-2 shadow-lg shadow-calypso-red/20">
              <span className="text-void font-black text-3xl absolute -bottom-1">C</span>
           </div>
           <p className="font-sans text-sm tracking-widest text-gray-500 max-w-xs leading-relaxed uppercase">
             Building bold digital experiences and strong visual identities.
           </p>
        </div>

        {/* Right side links */}
        <div className="grid grid-cols-2 gap-12 mt-16 md:mt-0 font-sans text-sm tracking-widest uppercase">
          <div className="flex flex-col gap-4 text-gray-500">
            <span className="text-offwhite font-bold mb-2">Social</span>
            <a href="#" className="hover:text-calypso-red transition-colors">Instagram</a>
            <a href="#" className="hover:text-calypso-red transition-colors">Twitter (X)</a>
            <a href="#" className="hover:text-calypso-red transition-colors">Behance</a>
          </div>
          <div className="flex flex-col gap-4 text-gray-500">
            <span className="text-offwhite font-bold mb-2">Studio</span>
            <a href="#" className="hover:text-calypso-red transition-colors">About</a>
            <a href="#" className="hover:text-calypso-red transition-colors">Work</a>
            <a href="#" className="hover:text-calypso-red transition-colors">Contact</a>
          </div>
        </div>
      </div>

      {/* The massive half-visible CALYPSO at the bottom */}
      <div className="relative w-full flex justify-center items-end z-10 pointer-events-none">
         <h1 className="font-heading font-black text-calypso-red uppercase tracking-tighter leading-[0.75] text-[25vw] md:text-[22vw] text-center transform translate-y-[28%] mix-blend-screen opacity-90">
            CALYPSO
         </h1>
         
         {/* Scribble overlapping the massive text */}
         <div className="absolute bottom-[40%] left-[60%] w-64 h-32 opacity-40 mix-blend-screen rotate-[-10deg]">
            <svg viewBox="0 0 200 100" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-full stroke-offwhite stroke-[2]">
               <path d="M10,50 Q50,10 90,50 T190,50" strokeLinecap="round" />
               <path d="M30,30 L170,70" strokeLinecap="round" />
            </svg>
         </div>
      </div>
    </footer>
  );
}
