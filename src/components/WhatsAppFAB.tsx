import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { MessageCircle } from 'lucide-react';
import { getWhatsAppUrl } from '../lib/whatsapp';

export const WhatsAppFAB: React.FC = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [isNearFinalCTA, setIsNearFinalCTA] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY;
      setIsVisible(scrollY > 600);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // IntersectionObserver on #cta-final to hide floating button when final CTA is in view
  useEffect(() => {
    const target = document.getElementById('cta-final');
    if (!target) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        setIsNearFinalCTA(entry.isIntersecting);
      },
      {
        rootMargin: '0px 0px -100px 0px',
        threshold: 0.1,
      }
    );

    observer.observe(target);
    return () => observer.disconnect();
  }, []);

  const shouldShow = isVisible && !isNearFinalCTA;

  return (
    <AnimatePresence>
      {shouldShow && (
        <motion.div
          initial={{ opacity: 0, scale: 0.4, y: 30 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.4, y: 30 }}
          transition={{
            type: 'spring',
            stiffness: 300,
            damping: 20,
          }}
          className="fixed bottom-6 right-6 z-50 flex items-center gap-3"
        >
          {/* Subtle Attention Pill on Hover or Desktop */}
          <span className="hidden sm:inline-block px-3.5 py-1.5 rounded-full bg-[#141416]/95 border border-[#F5A524]/40 backdrop-blur-md text-xs font-bold text-[#FFF6E8] shadow-xl tracking-wider uppercase">
            Pedir no Zap
          </span>

          <a
            href={getWhatsAppUrl()}
            target="_blank"
            rel="noopener noreferrer"
            className="relative flex items-center justify-center w-14 h-14 sm:w-16 sm:h-16 rounded-full bg-[#E4322B] text-[#FFF6E8] shadow-[0_0_25px_rgba(228,50,43,0.55)] hover:shadow-[0_0_40px_rgba(228,50,43,0.85)] hover:scale-110 active:scale-95 transition-all duration-300 focus:outline-none focus:ring-4 focus:ring-[#F5A524] group"
            aria-label="Abrir conversa no WhatsApp para fazer pedido na Bayta Kão Lanches"
          >
            {/* Subtle Pulse Rings */}
            <span
              aria-hidden="true"
              className="absolute inset-0 rounded-full bg-[#E4322B] animate-ping opacity-35 pointer-events-none"
            />

            <MessageCircle className="w-7 h-7 sm:w-8 sm:h-8 fill-current group-hover:rotate-12 transition-transform duration-300" />
          </a>
        </motion.div>
      )}
    </AnimatePresence>
  );
};
