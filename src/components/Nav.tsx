import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Menu, X, MessageCircle, Phone } from 'lucide-react';
import { MagneticButton } from './ui/MagneticButton';
import { BUSINESS_INFO } from '../data/business';
import { getWhatsAppUrl } from '../lib/whatsapp';

export const Nav: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 80);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Prevent background scroll when mobile menu is open
  useEffect(() => {
    if (mobileMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
  }, [mobileMenuOpen]);

  const navLinks = [
    { label: 'Cardápio', href: '#cardapio' },
    { label: 'A Casa', href: '#a-casa' },
    { label: 'Onde Estamos', href: '#onde-estamos' },
  ];

  const handleLinkClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    setMobileMenuOpen(false);
    const target = document.querySelector(href);
    if (target) {
      target.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
          isScrolled
            ? 'bg-[#141416]/85 backdrop-blur-md border-b border-[#F5A524]/20 py-3.5 shadow-2xl shadow-black/60'
            : 'bg-transparent py-6 border-b border-transparent'
        }`}
      >
        <div className="max-w-7xl mx-auto px-6 sm:px-8 flex items-center justify-between">
          {/* Logo */}
          <a
            href="#"
            className="group flex flex-col items-start select-none focus:outline-none"
            aria-label="Bayta Kão Lanches - Voltar ao início"
          >
            <div className="flex items-center gap-1.5">
              <span className="font-heading font-black text-2xl sm:text-3xl tracking-tight text-[#FFF6E8] group-hover:text-[#F5A524] transition-colors duration-200">
                BAYTA KÃO
              </span>
              <span className="h-2 w-2 rounded-full bg-[#E4322B] group-hover:scale-125 transition-transform" />
            </div>
            <span className="font-display tracking-[0.25em] text-[10px] text-[#8A8A8F] -mt-1 font-bold group-hover:text-[#FFF6E8] transition-colors">
              LANCHES • ZONA SUL
            </span>
          </a>

          {/* Desktop Nav Links */}
          <nav className="hidden md:flex items-center gap-8 lg:gap-10">
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                onClick={(e) => handleLinkClick(e, link.href)}
                className="text-sm font-medium tracking-wider uppercase text-[#FFF6E8]/80 hover:text-[#F5A524] transition-colors duration-200 py-1 relative group"
              >
                {link.label}
                <span className="absolute bottom-0 left-0 w-0 h-[2px] bg-[#E4322B] transition-all duration-300 group-hover:w-full" />
              </a>
            ))}
          </nav>

          {/* Desktop Right CTA */}
          <div className="hidden md:flex items-center gap-4">
            <MagneticButton
              href={getWhatsAppUrl()}
              target="_blank"
              variant="flame"
              size="sm"
              className="font-bold tracking-widest text-xs"
            >
              <MessageCircle className="w-3.5 h-3.5 mr-1" />
              Pedir no Zap
            </MagneticButton>
          </div>

          {/* Mobile Hamburger Button */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="md:hidden p-2 rounded-lg text-[#FFF6E8] hover:text-[#F5A524] hover:bg-white/5 transition-colors focus:outline-none focus:ring-2 focus:ring-[#F5A524]"
            aria-label={mobileMenuOpen ? 'Fechar menu' : 'Abrir menu de navegação'}
            aria-expanded={mobileMenuOpen}
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </header>

      {/* Mobile Fullscreen Menu with Framer Motion Stagger */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
            className="fixed inset-0 z-40 bg-[#0A0A0B]/98 backdrop-blur-xl flex flex-col justify-between px-8 pt-28 pb-12 md:hidden"
          >
            {/* Top Glow */}
            <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-72 h-72 bg-[#E4322B]/10 rounded-full blur-[100px] pointer-events-none" />

            <div className="flex flex-col gap-6">
              <span className="text-xs uppercase tracking-[0.3em] text-[#8A8A8F] font-bold">
                Navegação
              </span>
              <nav className="flex flex-col gap-6">
                {navLinks.map((link, idx) => (
                  <motion.a
                    key={link.label}
                    href={link.href}
                    onClick={(e) => handleLinkClick(e, link.href)}
                    initial={{ opacity: 0, x: -30 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.08 * (idx + 1), duration: 0.4 }}
                    className="font-display text-4xl sm:text-5xl uppercase tracking-wider text-[#FFF6E8] hover:text-[#F5A524] transition-colors border-b border-white/5 pb-4"
                  >
                    {link.label}
                  </motion.a>
                ))}
              </nav>
            </div>

            {/* Mobile Footer CTAs */}
            <div className="flex flex-col gap-4">
              <a
                href={getWhatsAppUrl()}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full py-4 rounded-full bg-[#E4322B] text-[#FFF6E8] flex items-center justify-center gap-2 font-bold tracking-widest text-sm uppercase shadow-[0_0_20px_rgba(228,50,43,0.4)]"
              >
                <MessageCircle className="w-5 h-5" />
                Pedir no WhatsApp
              </a>

              <a
                href={`tel:${BUSINESS_INFO.phoneRaw}`}
                className="w-full py-3.5 rounded-full border border-white/20 text-[#FFF6E8] hover:border-[#F5A524] flex items-center justify-center gap-2 font-medium tracking-wide text-xs uppercase text-[#8A8A8F]"
              >
                <Phone className="w-4 h-4" />
                Fixo: {BUSINESS_INFO.phoneDisplay}
              </a>

              <p className="text-center text-[11px] text-[#8A8A8F] pt-2">
                {BUSINESS_INFO.address}
              </p>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};
