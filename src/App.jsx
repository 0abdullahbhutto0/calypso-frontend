import React from 'react';
import LenisScroll from './components/LenisScroll';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import FeaturedWork from './components/FeaturedWork';

import Footer from './components/Footer';

function App() {
  return (
    <LenisScroll>
      <div className="min-h-screen bg-void text-offwhite selection:bg-calypso-red selection:text-white font-sans overflow-x-hidden relative">
        <div className="bg-noise pointer-events-none"></div>
        <Navbar />
        <main>
          <Hero />
          <FeaturedWork />
          <Footer />
        </main>
      </div>
    </LenisScroll>
  );
}

export default App;
