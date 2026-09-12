import React, { useState } from 'react';
import { MessageCircle, ArrowRight } from 'lucide-react';
import { MagneticButton } from './ui/MagneticButton';
import { getWhatsAppUrl } from '../lib/whatsapp';
import { BUSINESS_INFO } from '../data/business';

export const FinalCTA: React.FC = () => {
  const letters = 'TÁ COM FOME?'.split('');
  const [hoveredIdx, setHoveredIdx] = useState<number | null>(null);

  return (
    <section
      id="cta-final"
      className="relative min-h-[80vh] sm:min-h-[85vh] py-24 sm:py-32 flex flex-col items-center justify-center bg-[#0A0A0B] text-[#FFF6E8] overflow-hidden select-none"
    >
      {/* Infinite Breathing Flame Radial Glow */}
      <div
        aria-hidden="true"
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[650px] sm:w-[900px] h-[650px] sm:h-[900px] rounded-full bg-[radial-gradient(circle,rgba(228,50,43,0.22)_0%,rgba(245,165,36,0.1)_40%,transparent_70%)] blur-[140px] pointer-events-none animate-flame-breathe"
      />

      <div className="relative z-10 max-w-5xl mx-auto px-6 sm:px-8 text-center flex flex-col items-center">
        {/* Eyebrow / Street Badge */}
        <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#141416] border border-[#F5A524]/30 text-xs font-semibold uppercase tracking-[0.25em] text-[#F5A524] mb-8">
          <span>A chapa tá acesa</span>
          <span className="w-1.5 h-1.5 rounded-full bg-[#E4322B] animate-ping" />
        </div>

        {/* Giant Interactive "TÁ COM FOME?" Title */}
        <div
          className="flex justify-center items-center flex-wrap gap-x-1 sm:gap-x-3 mb-6"
          onMouseLeave={() => setHoveredIdx(null)}
        >
          {letters.map((char, index) => {
            const isHovered = hoveredIdx === index;
            const isAdjacent =
              hoveredIdx !== null && Math.abs(hoveredIdx - index) === 1;

            return (
              <span
                key={index}
                onMouseEnter={() => setHoveredIdx(index)}
                className={`font-display uppercase text-6xl sm:text-8xl md:text-9xl lg:text-[11.5rem] leading-none font-black transition-all duration-200 cursor-default select-none ${
                  char === '?' ? 'text-[#E4322B]' : 'text-[#FFF6E8]'
                } ${
                  isHovered
                    ? '-translate-y-4 scale-110 text-[#F5A524] drop-shadow-[0_0_35px_rgba(245,165,36,0.8)]'
                    : isAdjacent
                    ? '-translate-y-2 scale-105 text-[#FFF6E8]'
                    : ''
                }`}
                style={{
                  display: char === ' ' ? 'inline-block' : undefined,
                  width: char === ' ' ? '0.25em' : undefined,
                }}
              >
                {char}
              </span>
            );
          })}
        </div>

        {/* Subtitle */}
        <p className="text-base sm:text-xl md:text-2xl text-[#8A8A8F] max-w-2xl mb-12 font-body font-normal">
          Manda uma mensagem agora. O lanche sai estalando da chapa e chega quentinho na tua mesa ou na tua casa.
        </p>

        {/* Big Magnetic WhatsApp Button */}
        <div className="w-full sm:w-auto">
          <MagneticButton
            href={getWhatsAppUrl()}
            target="_blank"
            variant="flame"
            size="lg"
            className="text-base sm:text-lg px-10 py-6 sm:px-14 sm:py-7 rounded-full shadow-[0_0_40px_rgba(228,50,43,0.5)] hover:shadow-[0_0_60px_rgba(228,50,43,0.8)] flex items-center gap-3"
          >
            <MessageCircle className="w-6 h-6" />
            <span>Chamar no WhatsApp Agora</span>
            <ArrowRight className="w-5 h-5 ml-1" />
          </MagneticButton>
        </div>

        {/* Supporting Microcopy */}
        <div className="mt-8 flex flex-col sm:flex-row items-center gap-3 text-xs text-[#8A8A8F]">
          <span>{BUSINESS_INFO.slogan}</span>
          <span className="hidden sm:inline text-white/20">•</span>
          <span>Entrega em toda a Zona Sul de Porto Alegre</span>
        </div>
      </div>
    </section>
  );
};
