import React from 'react';
import { useLenis } from './hooks/useLenis';
import { NoiseOverlay } from './components/ui/NoiseOverlay';
import { Nav } from './components/Nav';
import { Hero } from './components/Hero';
import { Stats } from './components/Stats';
import { Menu } from './components/Menu';
import { About } from './components/About';
import { Location } from './components/Location';
import { FinalCTA } from './components/FinalCTA';
import { Footer } from './components/Footer';
import { WhatsAppFAB } from './components/WhatsAppFAB';

export default function App() {
  // Initialize Lenis smooth scroll synchronized with GSAP ScrollTrigger
  useLenis();

  return (
    <div className="relative min-h-screen bg-[#0A0A0B] text-[#FFF6E8] overflow-x-hidden font-body selection:bg-[#E4322B] selection:text-[#FFF6E8]">
      {/* Required SVG Noise Grain Overlay (feTurbulence) */}
      <NoiseOverlay />

      {/* 1. Fixed Minimalist Navigation */}
      <Nav />

      <main>
        {/* 2. Asymmetric Hero with Parallax and Real-Time Status */}
        <Hero />

        {/* 3. High-Contrast Social Proof Stats Bar */}
        <Stats />

        {/* 4. Centerpiece Menu with Sticky Scroll Reveal & Cursor Spotlight */}
        <Menu />

        {/* 5. A Casa: Asymmetric Bento Grid */}
        <About />

        {/* 6. Onde e Quando: Dark Map & Typographic Schedule */}
        <Location />

        {/* 7. Fullscreen Final CTA with Breathing Flame */}
        <FinalCTA />
      </main>

      {/* 8. Minimalist Footer */}
      <Footer />

      {/* 9. Floating WhatsApp Button (triggers >600px, hides at final CTA) */}
      <WhatsAppFAB />
    </div>
  );
}
