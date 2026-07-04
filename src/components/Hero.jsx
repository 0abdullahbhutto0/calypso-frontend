import React, { useEffect, useRef } from 'react';
import { ArrowDown } from 'lucide-react';
import gsap from 'gsap';

import scribbleCross from '../assets/scribble_cross.png';
import scribblePointer from '../assets/scribble_pointer.png';
import scribbleSquareCorner from '../assets/scribble_square_corner.png';
import scribbleUnderline from '../assets/scribble_underline.png';
import scribbleCircle from '../assets/scribble_circle.png';

export default function Hero() {
  const containerRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.set('.hero-line-inner', { yPercent: 110 });
      gsap.set('.hero-marker', { opacity: 0, scale: 0.85, rotation: -3 });
      gsap.set('.hero-bottom', { opacity: 0, y: 30 });
      gsap.set('.hero-scribble', { opacity: 0, scale: 0.85 });

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
      .to('.hero-scribble', {
        opacity: 1,
        scale: 1,
        duration: 1.2,
        stagger: 0.08,
        ease: 'power2.out',
      }, '-=0.6')
      .to('.hero-bottom', {
        opacity: 1,
        y: 0,
        duration: 0.8,
        stagger: 0.15,
      }, '-=0.4');

      // Desktop only subtle parallax for scribbles
      if (window.innerWidth >= 768) {
        gsap.to('.hero-parallax', {
          yPercent: -15,
          ease: 'none',
          scrollTrigger: {
            trigger: containerRef.current,
            start: 'top top',
            end: 'bottom top',
            scrub: true,
          }
        });
      }
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
      <div className="absolute inset-0 pointer-events-none z-0" style={{
        background: 'radial-gradient(ellipse at center, transparent 30%, rgba(0,0,0,0.6) 100%)',
      }} />

      {/* Circle scribble — large, centered behind the header. Subdued opacity and soft-light blend. */}
      <img
        src={scribbleCircle}
        alt=""
        data-target-opacity="0.2"
        className="hero-scribble hero-parallax absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[80vw] md:w-[50vw] opacity-0 mix-blend-soft-light pointer-events-none z-[1]"
        style={{ filter: 'brightness(1.5)' }}
      />

      <div className="relative z-10 w-full max-w-7xl mx-auto px-6 flex flex-col items-center text-center">

        {/* Cross mark — top left area, floating accent */}
        <img
          src={scribbleCross}
          alt=""
          data-target-opacity="0.7"
          className="hero-scribble hero-parallax absolute top-[12%] right-[28%] w-[12vw] md:w-[8vw] opacity-0 -rotate-12 mix-blend-screen pointer-events-none z-[1]"
          style={{ filter: 'brightness(1.5)' }}
        />

        {/* Typography Group */}
        <div className="relative w-full flex flex-col items-center mt-8 md:mt-16">

          {/* Square Corner Bracket over "THAT" */}
          <img
            src={scribbleSquareCorner}
            alt=""
            data-target-opacity="0.8"
            className="hero-scribble hero-parallax absolute -top-[4%] md:-top-[8%] left-1/2 ml-[28vw] sm:ml-[26vw] md:ml-[24vw] lg:ml-[20vw] xl:ml-[18vw] w-[22vw] md:w-[16vw] lg:w-[14vw] opacity-0 mix-blend-screen pointer-events-none z-30"
            style={{ filter: 'brightness(2)' }}
          />

          {/* Line 1: IDEAS THAT */}
          <div className="w-full overflow-hidden">
            <div className="hero-line-inner font-heading font-bold uppercase leading-[0.88] text-calypso-red text-[14vw] sm:text-[12vw] md:text-[10.5vw] lg:text-[9vw] tracking-tighter">
              IDEAS THAT
            </div>
          </div>

          {/* Line 2: INSPIRE with scribble cross instead of unicode ✕ */}
          <div className="w-full overflow-hidden flex justify-center">
            <div className="hero-line-inner font-heading font-bold uppercase leading-[0.88] text-calypso-red text-[14vw] sm:text-[12vw] md:text-[10.5vw] lg:text-[9vw] tracking-tighter flex items-center gap-[2vw]">
              <img
                src={scribbleCross}
                alt=""
                className="w-[12vw] md:w-[7vw] -rotate-[8deg] opacity-70 mix-blend-screen inline-block pointer-events-none"
                style={{ filter: 'brightness(1.8)' }}
              />
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

          {/* Marker Scribble Overlay — positioned over the whole group */}
          <div className="hero-marker absolute inset-0 flex flex-col items-center justify-center pointer-events-none z-20">
            <div className="relative" style={{ marginTop: '12%' }}>
              <h2 className="font-marker text-offwhite text-[7vw] sm:text-[6vw] md:text-[5vw] lg:text-[4.5vw] whitespace-nowrap transform -rotate-[3deg] leading-tight drop-shadow-[0_4px_20px_rgba(0,0,0,0.8)]">
                WE CREATE IMPACT
              </h2>
              <h2 className="font-marker text-offwhite text-[7vw] sm:text-[6vw] md:text-[5vw] lg:text-[4.5vw] whitespace-nowrap transform rotate-[1.5deg] ml-[8%] leading-tight drop-shadow-[0_4px_20px_rgba(0,0,0,0.8)]">
                NOT JUST CONTENT
              </h2>
              {/* PNG underline replacing SVG */}
              <div className="w-[65%] ml-[18%] mt-1 overflow-visible -rotate-[2deg]">
                <img
                  src={scribbleUnderline}
                  alt=""
                  className="w-full h-auto mix-blend-screen opacity-80 drop-shadow-[0_2px_8px_rgba(255,255,255,0.15)]"
                  style={{ filter: 'brightness(2)' }}
                />
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Details */}
        <div className="w-full mt-28 md:mt-36 flex justify-between items-end pb-8 relative">

          {/* Pointer arrow near SCROLL TO EXPLORE - Enlarged and shifted up */}
          <img
            src={scribblePointer}
            alt=""
            data-target-opacity="1"
            className="hero-scribble absolute left-6 md:left-16 bottom-28 md:bottom-32 w-[22vw] md:w-[14vw] rotate-[15deg] opacity-0 mix-blend-screen pointer-events-none z-10"
            style={{ filter: 'brightness(2)' }}
          />

          <div className="hero-bottom flex items-center gap-3 font-sans text-xs md:text-sm tracking-widest text-gray-500 group cursor-pointer relative z-20">
            <div className="w-10 h-10 rounded-full border border-gray-700 flex items-center justify-center group-hover:border-offwhite group-hover:text-offwhite transition-colors duration-300">
              <ArrowDown size={16} />
            </div>
            <span className="group-hover:text-offwhite transition-colors duration-300">SCROLL TO EXPLORE</span>
          </div>

          <div className="hero-bottom text-right font-sans text-[10px] md:text-xs max-w-[260px] text-gray-500 leading-relaxed tracking-wider z-20">
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
