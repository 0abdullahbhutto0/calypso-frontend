import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';
import ScrollTrigger from 'gsap/ScrollTrigger';

import scribbleCross from '../assets/scribble_cross.png';
import scribblePointer from '../assets/scribble_pointer.png';
import scribbleSquareCorner from '../assets/scribble_square_corner.png';
import scribbleCircle from '../assets/scribble_circle.png';

gsap.registerPlugin(ScrollTrigger);

const projects = [
  {
    id: 1,
    client: 'NIKE',
    category: 'GLOBAL CAMPAIGN',
    description: 'A worldwide brand campaign redefining athletic identity through raw, unfiltered storytelling and kinetic visual language.',
    image: 'https://images.unsplash.com/photo-1556906781-9a412961c28c?ixlib=rb-4.0.3&auto=format&fit=crop&w=1920&q=80',
    year: '2024',
  },
  {
    id: 2,
    client: 'SPOTIFY',
    category: 'ARTIST LAUNCH',
    description: 'Immersive digital experience for emerging artists — blending sound, motion, and brutal editorial design into a cultural moment.',
    image: 'https://images.unsplash.com/photo-1493225457124-a3eb161ffa5f?ixlib=rb-4.0.3&auto=format&fit=crop&w=1920&q=80',
    year: '2024',
  },
  {
    id: 3,
    client: 'TESLA',
    category: 'BRAND EXPERIENCE',
    description: 'A fully immersive showroom concept merging physical space with digital interfaces — pushing the boundaries of automotive retail.',
    image: 'https://images.unsplash.com/photo-1560958089-b8a1929cea89?ixlib=rb-4.0.3&auto=format&fit=crop&w=1920&q=80',
    year: '2023',
  },
  {
    id: 4,
    client: 'ADIDAS',
    category: 'DIGITAL IDENTITY',
    description: 'Complete digital rebrand anchored in street culture — bold type, aggressive layouts, and a system built for speed.',
    image: 'https://images.unsplash.com/photo-1518002171953-a080ee817e1f?ixlib=rb-4.0.3&auto=format&fit=crop&w=1920&q=80',
    year: '2023',
  },
];

export default function FeaturedWork() {
  const sectionRef = useRef(null);
  const trackRef = useRef(null);
  const titleRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {

      // --- Title reveal ---
      gsap.fromTo(titleRef.current,
        { yPercent: 100, opacity: 0 },
        {
          yPercent: 0,
          opacity: 1,
          duration: 1,
          ease: 'power3.out',
          scrollTrigger: {
            trigger: sectionRef.current,
            start: 'top 80%',
          },
        }
      );

      // --- Card grid: staggered entrance ---
      const cards = gsap.utils.toArray('.work-card');
      cards.forEach((card, i) => {
        gsap.set(card, { y: 80, opacity: 0 });
        gsap.to(card, {
          y: 0,
          opacity: 1,
          duration: 0.8,
          ease: 'power2.out',
          scrollTrigger: {
            trigger: card,
            start: 'top 90%',
          },
        });
      });

      // --- Full-width expand on click-like scroll hijack ---
      // Each card has its own ScrollTrigger that scales it up when scrolled into center
      cards.forEach((card) => {
        const img = card.querySelector('.card-image');
        const overlay = card.querySelector('.card-expand-overlay');
        const details = card.querySelector('.card-details');

        // Parallax on the image inside the card
        gsap.to(img, {
          yPercent: -15,
          ease: 'none',
          scrollTrigger: {
            trigger: card,
            start: 'top bottom',
            end: 'bottom top',
            scrub: true,
          },
        });

        // Parallax for scribbles (desktop only)
        if (window.innerWidth >= 768) {
          const scribble = card.querySelector('.work-parallax');
          if (scribble) {
            gsap.to(scribble, {
              yPercent: -20,
              ease: 'none',
              scrollTrigger: {
                trigger: card,
                start: 'top bottom',
                end: 'bottom top',
                scrub: true,
              },
            });
          }
        }
      });

      // --- The main showcase: pinned full-width expansion ---
      const showcaseCards = gsap.utils.toArray('.showcase-item');
      const totalCards = showcaseCards.length;

      // Pin the showcase section and horizontally scroll through expanded cards
      const showcaseTl = gsap.timeline({
        scrollTrigger: {
          trigger: '.showcase-track',
          start: 'top top',
          end: () => `+=${totalCards * 100}%`,
          pin: true,
          scrub: 1,
          anticipatePin: 1,
        },
      });

      showcaseCards.forEach((item, i) => {
        const img = item.querySelector('.showcase-img');
        const text = item.querySelector('.showcase-text');
        const counter = item.querySelector('.showcase-counter');

        if (i > 0) {
          showcaseTl
            // Fade out previous
            .to(showcaseCards[i - 1], {
              opacity: 0,
              scale: 0.92,
              duration: 0.4,
            })
            // Bring in current
            .fromTo(item,
              { opacity: 0, scale: 1.05 },
              { opacity: 1, scale: 1, duration: 0.4 },
              '<0.1'
            )
            .fromTo(img,
              { scale: 1.3 },
              { scale: 1, duration: 0.6, ease: 'power2.out' },
              '<'
            )
            .fromTo(text,
              { yPercent: 60, opacity: 0 },
              { yPercent: 0, opacity: 1, duration: 0.4 },
              '<0.15'
            )
            .fromTo(counter,
              { opacity: 0 },
              { opacity: 1, duration: 0.3 },
              '<0.1'
            );
        } else {
          // First card starts visible
          showcaseTl
            .fromTo(img,
              { scale: 1.2 },
              { scale: 1, duration: 0.5, ease: 'power2.out' }
            )
            .fromTo(text,
              { yPercent: 40, opacity: 0 },
              { yPercent: 0, opacity: 1, duration: 0.4 },
              '<0.1'
            );
        }

        // Hold each card for a beat
        showcaseTl.to({}, { duration: 0.3 });
      });

    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <div ref={sectionRef} id="work">
      {/* --- Grid Preview Section --- */}
      <section className="relative py-28 md:py-40 px-6 md:px-12 bg-void">
        <div className="max-w-[1600px] mx-auto relative">

          {/* Section Title with scribble cross accent */}
          <div className="mb-16 md:mb-24 overflow-visible relative">
            <h2
              ref={titleRef}
              className="font-heading font-black text-5xl md:text-7xl lg:text-[8rem] text-calypso-red uppercase leading-[0.8] tracking-tighter inline-block relative"
            >
              FEATURED<br />WORK
              {/* Cross scribble next to title */}
              <img
                src={scribbleCross}
                alt=""
                className="absolute -right-8 md:-right-16 top-4 md:top-8 w-[12vw] md:w-[5vw] rotate-[12deg] opacity-80 mix-blend-screen pointer-events-none"
                style={{ filter: 'brightness(2)' }}
              />
            </h2>

            {/* Circle scribble behind the title area */}
            <img
              src={scribbleCircle}
              alt=""
              className="absolute -top-10 md:-top-20 left-[20%] w-[35vw] md:w-[15vw] opacity-30 mix-blend-screen pointer-events-none -rotate-6"
              style={{ filter: 'brightness(2)' }}
            />
          </div>

          {/* Staggered Card Grid */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8">
            {projects.slice(0, 3).map((project, idx) => (
              <div
                key={project.id}
                className={`work-card group relative overflow-visible cursor-pointer bg-zinc-950 ${
                  idx === 1 ? 'md:mt-24' : ''
                } ${idx === 2 ? 'md:mt-48' : ''}`}
                style={{ aspectRatio: '3/4' }}
              >
                {/* Image */}
                <div className="absolute inset-0 overflow-hidden">
                  <img
                    src={project.image}
                    alt={project.client}
                    loading="lazy"
                    className="card-image w-full h-[120%] object-cover grayscale group-hover:grayscale-0 transition-[filter] duration-700 will-change-transform"
                  />
                </div>

                {/* Gradient overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/30 to-transparent z-10" />

                {/* Hover border */}
                <div className="absolute inset-0 border border-white/0 group-hover:border-white/10 transition-colors duration-500 z-10" />

                {/* Content */}
                <div className="absolute bottom-0 left-0 w-full p-6 md:p-8 z-20">
                  <p className="font-sans text-[10px] md:text-xs tracking-[0.25em] text-white/50 mb-2 uppercase">
                    {project.category}
                  </p>
                  <h3 className="font-heading font-bold text-3xl md:text-4xl text-offwhite uppercase tracking-tight">
                    {project.client}
                  </h3>
                  <div className="mt-4 w-0 group-hover:w-12 h-[2px] bg-calypso-red transition-all duration-500 ease-out" />
                </div>

                {/* Arrow */}
                <div className="absolute top-6 right-6 z-20 opacity-0 group-hover:opacity-100 transition-opacity duration-400 translate-x-2 group-hover:translate-x-0">
                  <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="text-white -rotate-45">
                    <line x1="5" y1="12" x2="19" y2="12" />
                    <polyline points="12 5 19 12 12 19" />
                  </svg>
                </div>

                {/* === Card-specific scribble decorations === */}
                {/* Nike (card 0): subdued circle scribble */}
                {idx === 0 && (
                  <img
                    src={scribbleCircle}
                    alt=""
                    className="work-parallax absolute -bottom-16 -left-16 w-[250px] md:w-[350px] opacity-30 mix-blend-soft-light pointer-events-none z-30 rotate-[25deg]"
                    style={{ filter: 'brightness(1.5)' }}
                  />
                )}
                {/* Spotify (card 1): pointer arrow pointing at the card */}
                {idx === 1 && (
                  <img
                    src={scribblePointer}
                    alt=""
                    className="work-parallax absolute -top-24 md:-top-32 left-0 w-[180px] md:w-[250px] -rotate-[10deg] opacity-80 mix-blend-screen pointer-events-none z-30"
                    style={{ filter: 'brightness(2)' }}
                  />
                )}
                {/* Tesla (card 2): square corner bracket framing the top-right */}
                {idx === 2 && (
                  <img
                    src={scribbleSquareCorner}
                    alt=""
                    className="work-parallax absolute -top-[40px] -right-[40px] md:-top-[80px] md:-right-[80px] w-[140px] md:w-[200px] opacity-100 pointer-events-none z-30"
                    style={{ filter: 'brightness(2)' }}
                  />
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* --- Full-Width Showcase Scroll Hijack --- */}
      <section className="showcase-track relative w-full h-screen bg-void overflow-hidden">
        {projects.map((project, idx) => (
          <div
            key={project.id}
            className={`showcase-item absolute inset-0 w-full h-full ${idx > 0 ? 'opacity-0' : ''}`}
          >
            {/* Full-bleed image */}
            <div className="absolute inset-0 overflow-hidden">
              <img
                src={project.image}
                alt={project.client}
                loading="lazy"
                className="showcase-img w-full h-full object-cover will-change-transform"
              />
            </div>

            {/* Dark overlay */}
            <div className="absolute inset-0 bg-black/60 z-10" />

            {/* Counter / index */}
            <div className="showcase-counter absolute top-8 left-8 md:top-12 md:left-12 z-30 font-sans text-xs tracking-[0.3em] text-white/40">
              <span className="text-offwhite font-semibold text-sm">{String(idx + 1).padStart(2, '0')}</span>
              <span className="mx-2">/</span>
              <span>{String(projects.length).padStart(2, '0')}</span>
            </div>

            {/* Text content */}
            <div className="showcase-text absolute bottom-12 left-8 md:bottom-20 md:left-16 z-30 max-w-2xl">
              <p className="font-sans text-[10px] md:text-xs tracking-[0.3em] text-white/50 uppercase mb-3">
                {project.category} — {project.year}
              </p>
              <h2 className="font-heading font-black text-6xl md:text-8xl lg:text-9xl text-offwhite uppercase tracking-tighter leading-[0.85]">
                {project.client}
              </h2>
              <p className="font-sans text-sm md:text-base text-white/60 mt-6 max-w-lg leading-relaxed">
                {project.description}
              </p>
              <div className="mt-8 flex items-center gap-4 group cursor-pointer">
                <span className="font-sans text-xs tracking-[0.25em] text-offwhite uppercase group-hover:text-calypso-red transition-colors duration-300">
                  View Project
                </span>
                <div className="w-10 h-[1px] bg-offwhite group-hover:w-16 group-hover:bg-calypso-red transition-all duration-500" />
              </div>
            </div>

            {/* Year stamp */}
            <div className="absolute bottom-12 right-8 md:bottom-20 md:right-16 z-30 hidden md:block">
              <span className="font-heading font-black text-[10rem] lg:text-[14rem] text-white/[0.04] leading-none select-none">
                {project.year}
              </span>
            </div>
          </div>
        ))}

        {/* Scroll progress indicator */}
        <div className="absolute right-8 top-1/2 -translate-y-1/2 z-40 hidden md:flex flex-col items-center gap-2">
          {projects.map((_, idx) => (
            <div key={idx} className="w-[2px] h-8 bg-white/20 rounded-full overflow-hidden">
              <div className="w-full bg-calypso-red rounded-full" style={{ height: '0%' }} />
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}
