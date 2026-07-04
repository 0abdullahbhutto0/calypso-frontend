import React from 'react';
import LenisScroll from './components/LenisScroll';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import FeaturedWork from './components/FeaturedWork';

function App() {
  return (
    <LenisScroll>
      <div className="min-h-screen bg-void text-offwhite selection:bg-calypso-red selection:text-white font-sans overflow-x-hidden relative">
        <div className="bg-noise pointer-events-none"></div>
        <Navbar />
        <main>
          <Hero />
          <FeaturedWork />
          <section className="h-[50vh] flex items-center justify-center bg-[#050505] border-t border-zinc-900 relative overflow-hidden">
            <h2 className="font-heading font-bold text-5xl md:text-8xl text-zinc-900 uppercase tracking-tighter text-center max-w-4xl opacity-50">
              IMPACT &gt; CONTENT
            </h2>
          </section>
        </main>
      </div>
    </LenisScroll>
  );
}

export default App;
