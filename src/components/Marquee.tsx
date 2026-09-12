import React from 'react';

interface MarqueeProps {
  className?: string;
  speed?: 'slow' | 'normal';
}

export const Marquee: React.FC<MarqueeProps> = ({ className = '', speed = 'slow' }) => {
  const items = [
    'XIS SALADA',
    'BAURU AO PRATO',
    'CACHORRO-QUENTE',
    'PORÇÕES',
    'XIS CORAÇÃO',
    'TEMPERO DE CHAPA',
    'ZONA SUL DE POA',
    'BATATA COM CHEDDAR',
    'FRUKI GELADA',
  ];

  const content = items.map((item, idx) => (
    <span key={idx} className="inline-flex items-center mx-4 sm:mx-6 shrink-0">
      <span className="font-display uppercase text-3xl sm:text-5xl lg:text-6xl tracking-widest text-transparent transition-all select-none duration-300 hover:text-[#FFF6E8] hover:scale-105"
        style={{
          WebkitTextStroke: '1px rgba(255, 246, 232, 0.45)',
        }}
      >
        {item}
      </span>
      <span className="inline-block w-2.5 h-2.5 sm:w-3 sm:h-3 rounded-full bg-[#E4322B] ml-8 sm:ml-12 opacity-80" />
    </span>
  ));

  const animationDuration = speed === 'slow' ? '45s' : '28s';

  return (
    <div
      className={`relative w-full overflow-hidden border-y border-[#F5A524]/20 py-4 sm:py-5 bg-[#0A0A0B]/80 select-none ${className}`}
      aria-hidden="true"
    >
      <div
        className="flex w-max will-change-transform"
        style={{
          animation: `marqueeScroll ${animationDuration} linear infinite`,
        }}
      >
        <div className="flex shrink-0 items-center">{content}</div>
        <div className="flex shrink-0 items-center">{content}</div>
      </div>

      <style>{`
        @keyframes marqueeScroll {
          from {
            transform: translateX(0);
          }
          to {
            transform: translateX(-50%);
          }
        }
      `}</style>
    </div>
  );
};
