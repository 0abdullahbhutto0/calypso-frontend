import React, { useEffect, useRef } from 'react';
import { ArrowDown } from 'lucide-react';
import gsap from 'gsap';

export default function Hero() {
  const containerRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.set('.hero-line-inner', { yPercent: 110 });
      gsap.set('.hero-marker', { opacity: 0, scale: 0.85, rotation: -3 });
      gsap.set('.hero-bottom', { opacity: 0, y: 30 });

      const tl = gsap.timeline({ defaults: { ease: 'power4.out' } });

      tl.to('.hero-line-inner', {
        yPercent: 0,
        duration: 1.4,
        stagger: 0.12,
        delay: 0.3,
      })
      .to('.hero-marker', {
        opacity: 1,
        scale: 1,
        rotation: 0,
        duration: 1,
        ease: 'back.out(1.4)',
      }, '-=0.7')
      .to('.hero-bottom', {
        opacity: 1,
        y: 0,
        duration: 0.8,
        stagger: 0.15,
      }, '-=0.4');
    }, containerRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={containerRef}
      className="relative min-h-screen flex flex-col justify-center items-center bg-void pt-20"
      style={{
        backgroundImage: 'linear-gradient(to right, rgba(255,255,255,0.03) 1px, transparent 1px), linear-gradient(to bottom, rgba(255,255,255,0.03) 1px, transparent 1px)',
        backgroundSize: '60px 60px',
      }}
    >
      {/* Dark vignette overlay */}
      <div className="absolute inset-0 pointer-events-none" style={{
        background: 'radial-gradient(ellipse at center, transparent 30%, rgba(0,0,0,0.6) 100%)',
      }} />

      <div className="relative z-10 w-full max-w-7xl mx-auto px-6 flex flex-col items-center text-center">

        {/* Background Scribbles for Hero */}
        <div className="absolute top-[10%] left-[5%] w-[30vw] h-[30vw] pointer-events-none opacity-[0.03] mix-blend-screen rotate-12">
          <svg viewBox="0 0 200 200" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-full stroke-white stroke-[0.5]">
             <path d="M20,20 Q100,-20 180,20 T180,180 T20,180 T20,20" />
             <path d="M0,0 L200,200 M200,0 L0,200 M100,0 L100,200 M0,100 L200,100" />
             <circle cx="100" cy="100" r="80" />
             <circle cx="100" cy="100" r="60" />
          </svg>
        </div>
        
        <div className="absolute top-[40%] right-[5%] w-[20vw] h-[20vw] pointer-events-none opacity-[0.05] mix-blend-screen -rotate-12">
          <svg viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-full stroke-white stroke-[1]">
             <path d="M10,10 L90,90 M20,10 L90,80 M10,20 L80,90 M30,10 L90,70 M10,30 L70,90" />
          </svg>
        </div>

        {/* Typography Group - NO overflow-hidden on wrapper */}
        <div className="relative w-full flex flex-col items-center mt-8 md:mt-16">

          {/* Line 1: IDEAS THAT */}
          <div className="w-full overflow-hidden">
            <div className="hero-line-inner font-heading font-bold uppercase leading-[0.88] text-calypso-red text-[14vw] sm:text-[12vw] md:text-[10.5vw] lg:text-[9vw] tracking-tighter">
              IDEAS THAT
            </div>
          </div>

          {/* Line 2: INSPIRE with decorative marks */}
          <div className="w-full overflow-hidden flex justify-center">
            <div className="hero-line-inner font-heading font-bold uppercase leading-[0.88] text-calypso-red text-[14vw] sm:text-[12vw] md:text-[10.5vw] lg:text-[9vw] tracking-tighter flex items-center gap-[2vw]">
              <span className="text-offwhite/60 text-[6vw] font-light rotate-12 select-none">✕</span>
              INSPIRE
              <span className="text-offwhite/60 text-[6vw] font-light -rotate-12 select-none">!!</span>
            </div>
          </div>

          {/* Line 3: BRANDS THAT */}
          <div className="w-full overflow-hidden">
            <div className="hero-line-inner font-heading font-bold uppercase leading-[0.88] text-calypso-red text-[14vw] sm:text-[12vw] md:text-[10.5vw] lg:text-[9vw] tracking-tighter">
              BRANDS THAT
            </div>
          </div>

          {/* Line 4: LEAD */}
          <div className="w-full overflow-hidden">
            <div className="hero-line-inner font-heading font-bold uppercase leading-[0.88] text-calypso-red text-[14vw] sm:text-[12vw] md:text-[10.5vw] lg:text-[9vw] tracking-tighter">
              LEAD
            </div>
          </div>

          {/* Marker Scribble Overlay — OUTSIDE overflow-hidden containers, positioned over the whole group */}
          <div className="hero-marker absolute inset-0 flex flex-col items-center justify-center pointer-events-none z-20">
            <div className="relative" style={{ marginTop: '12%' }}>
              <h2 className="font-marker text-offwhite text-[7vw] sm:text-[6vw] md:text-[5vw] lg:text-[4.5vw] whitespace-nowrap transform -rotate-[3deg] leading-tight drop-shadow-[0_4px_20px_rgba(0,0,0,0.8)]">
                WE CREATE IMPACT
              </h2>
              <h2 className="font-marker text-offwhite text-[7vw] sm:text-[6vw] md:text-[5vw] lg:text-[4.5vw] whitespace-nowrap transform rotate-[1.5deg] ml-[8%] leading-tight drop-shadow-[0_4px_20px_rgba(0,0,0,0.8)]">
                NOT JUST CONTENT
              </h2>
              {/* Red scribble underline */}
              <svg className="w-[70%] h-auto ml-[20%] mt-3 overflow-visible" viewBox="0 0 200 20" fill="none">
                <path d="M5,15 Q30,2 60,12 T120,8 T195,14" stroke="#8B0000" strokeWidth="3" strokeLinecap="round" />
                <path d="M10,18 Q50,6 100,14 T190,10" stroke="#8B0000" strokeWidth="2" strokeLinecap="round" opacity="0.5" />
              </svg>
            </div>
          </div>
        </div>

        {/* Bottom Details */}
        <div className="w-full mt-28 md:mt-36 flex justify-between items-end pb-8">
          <div className="hero-bottom flex items-center gap-3 font-sans text-xs md:text-sm tracking-widest text-gray-500 group cursor-pointer">
            <div className="w-10 h-10 rounded-full border border-gray-700 flex items-center justify-center group-hover:border-offwhite group-hover:text-offwhite transition-colors duration-300">
              <ArrowDown size={16} />
            </div>
            <span className="group-hover:text-offwhite transition-colors duration-300">SCROLL TO EXPLORE</span>
          </div>

          <div className="hero-bottom text-right font-sans text-[10px] md:text-xs max-w-[260px] text-gray-500 leading-relaxed tracking-wider">
            A CREATIVE STUDIO<br />
            BUILDING BOLD DIGITAL<br />
            EXPERIENCES AND<br />
            <span className="text-offwhite font-semibold">STRONG VISUAL IDENTITIES.</span>
            <div className="w-12 md:w-16 h-[2px] bg-calypso-red ml-auto mt-3" />
          </div>
        </div>
      </div>
    </section>
  );
}
