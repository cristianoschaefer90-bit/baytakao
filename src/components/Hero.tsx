import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { ArrowUpRight, MessageCircle } from 'lucide-react';
import { OpenStatusBadge } from './ui/OpenStatusBadge';
import { MagneticButton } from './ui/MagneticButton';
import { Marquee } from './Marquee';
import { getWhatsAppUrl } from '../lib/whatsapp';

gsap.registerPlugin(ScrollTrigger);

export const Hero: React.FC = () => {
  const containerRef = useRef<HTMLElement | null>(null);
  const titleLine1Ref = useRef<HTMLHeadingElement | null>(null);
  const titleLine2Ref = useRef<HTMLHeadingElement | null>(null);
  const subtitleRef = useRef<HTMLParagraphElement | null>(null);
  const ctaRef = useRef<HTMLDivElement | null>(null);
  const imageContainerRef = useRef<HTMLDivElement | null>(null);
  const imageRef = useRef<HTMLImageElement | null>(null);

  useEffect(() => {
    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (prefersReducedMotion) return;

    const ctx = gsap.context(() => {
      // 1. Text Reveal Animation via mask clip-path
      const tl = gsap.timeline({ defaults: { ease: 'power4.out' } });

      tl.fromTo(
        [titleLine1Ref.current, titleLine2Ref.current],
        {
          yPercent: 110,
          opacity: 0,
        },
        {
          yPercent: 0,
          opacity: 1,
          duration: 1.1,
          stagger: 0.15,
          delay: 0.2,
        }
      )
        .fromTo(
          subtitleRef.current,
          { opacity: 0, y: 25 },
          { opacity: 1, y: 0, duration: 0.8, ease: 'power3.out' },
          '-=0.5'
        )
        .fromTo(
          ctaRef.current,
          { opacity: 0, scale: 0.95, y: 15 },
          { opacity: 1, scale: 1, y: 0, duration: 0.7, ease: 'back.out(1.4)' },
          '-=0.4'
        );

      // 2. Parallax effect on image container with GSAP ScrollTrigger
      if (imageRef.current && containerRef.current) {
        gsap.to(imageRef.current, {
          yPercent: -15,
          scale: 1.06,
          ease: 'none',
          scrollTrigger: {
            trigger: containerRef.current,
            start: 'top top',
            end: 'bottom top',
            scrub: true,
          },
        });
      }
    }, containerRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={containerRef}
      className="relative min-h-[95vh] pt-32 sm:pt-36 lg:pt-40 pb-16 flex flex-col justify-between overflow-hidden bg-[#0A0A0B]"
    >
      {/* Background Ambient Glows */}
      <div
        aria-hidden="true"
        className="absolute top-1/4 left-[-10%] w-[550px] h-[550px] rounded-full bg-[#E4322B]/12 blur-[140px] pointer-events-none"
      />
      <div
        aria-hidden="true"
        className="absolute top-1/3 right-[-5%] w-[650px] h-[650px] rounded-full bg-[#F5A524]/14 blur-[160px] pointer-events-none"
      />

      <div className="max-w-7xl mx-auto px-6 sm:px-8 w-full">
        {/* Real-time Status Badge */}
        <div className="mb-6 sm:mb-8">
          <OpenStatusBadge />
        </div>

        {/* Asymmetric 60 / 40 Split */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center">
          {/* Left Column (60% approx: 7 cols) */}
          <div className="lg:col-span-7 flex flex-col items-start z-10">
            {/* Street Credential Tag */}
            <div className="flex items-center gap-2 mb-3">
              <span className="h-[2px] w-8 bg-[#E4322B]" />
              <span className="text-xs uppercase tracking-[0.25em] font-bold text-[#F5A524]">
                11 Anos de Chapa Quente • Cristal, POA
              </span>
            </div>

            {/* Giant Display Title with Mask Container */}
            <div className="overflow-hidden mb-1 -ml-1">
              <h1
                ref={titleLine1Ref}
                className="font-display uppercase text-7xl sm:text-8xl md:text-9xl lg:text-[10.5rem] leading-[0.88] tracking-[-0.03em] text-[#FFF6E8] select-none font-black"
              >
                BAYTA KÃO
              </h1>
            </div>

            <div className="overflow-hidden mb-6 -ml-1 flex items-baseline gap-4">
              <h1
                ref={titleLine2Ref}
                className="font-display uppercase text-6xl sm:text-7xl md:text-8xl lg:text-[9rem] leading-[0.88] tracking-[-0.02em] text-[#E4322B] select-none font-black"
              >
                LANCHES
              </h1>
              <span className="hidden sm:inline-block text-xs uppercase tracking-[0.3em] font-semibold text-[#8A8A8F] border border-white/10 px-2.5 py-1 rounded">
                TRADIÇÃO
              </span>
            </div>

            {/* Colloquial Gaúcho Subtitle */}
            <p
              ref={subtitleRef}
              className="text-lg sm:text-xl md:text-2xl text-[#FFF6E8]/90 font-normal leading-relaxed max-w-xl mb-9 font-body"
            >
              Baurus, xis, dog e porções. Tempero especial há 11 anos pra ti.{' '}
              <span className="text-[#8A8A8F]">Zona Sul de Porto Alegre.</span>
            </p>

            {/* CTAs */}
            <div
              ref={ctaRef}
              className="flex flex-wrap items-center gap-4 sm:gap-6 w-full sm:w-auto"
            >
              <MagneticButton
                href={getWhatsAppUrl()}
                target="_blank"
                variant="flame"
                size="lg"
                className="w-full sm:w-auto shadow-2xl"
              >
                <MessageCircle className="w-5 h-5 mr-1" />
                Fazer Meu Pedido
              </MagneticButton>

              <a
                href="#cardapio"
                className="inline-flex items-center gap-2 text-sm font-semibold tracking-wider uppercase text-[#FFF6E8]/80 hover:text-[#F5A524] transition-colors py-3 px-4 group"
              >
                Ver Cardápio Completo
                <ArrowUpRight className="w-4 h-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
              </a>
            </div>

            {/* Quick Micro Proof Point */}
            <div className="mt-8 pt-6 border-t border-white/10 flex items-center gap-6 text-xs text-[#8A8A8F] tracking-wide">
              <span>✓ Prensado na chapa de ferro</span>
              <span className="text-white/20">•</span>
              <span>✓ Maionese caseira fresca</span>
              <span className="text-white/20">•</span>
              <span className="text-[#F5A524] font-medium">Esquina Capivari com Icaraí</span>
            </div>
          </div>

          {/* Right Column (40% approx: 5 cols) - Parallax Image Showcase */}
          <div
            ref={imageContainerRef}
            className="lg:col-span-5 relative flex justify-center items-center mt-4 lg:mt-0"
          >
            {/* Amber Radial Backglow */}
            <div
              aria-hidden="true"
              className="absolute w-[110%] aspect-square rounded-full bg-[radial-gradient(circle_at_center,rgba(245,165,36,0.28)_0%,rgba(228,50,43,0.12)_45%,transparent_70%)] blur-2xl pointer-events-none -z-0"
            />

            {/* Visual Frame */}
            <div className="relative w-full max-w-[480px] lg:max-w-none aspect-[4/4.2] rounded-2xl overflow-hidden border border-[#F5A524]/20 shadow-[0_25px_60px_rgba(0,0,0,0.85)] group bg-[#141416]">
              <img
                ref={imageRef}
                src="https://images.unsplash.com/photo-1568901346375-23c9450c58cd?q=80&w=1200&auto=format&fit=crop"
                alt="Xis gaúcho artesanal prensado na chapa de ferro da Bayta Kão Lanches"
                className="w-full h-[120%] object-cover object-center transform -translate-y-6 brightness-95 contrast-105 filter group-hover:scale-105 transition-transform duration-700"
                loading="eager"
              />

              {/* Smoke / Steam and Shadow Vignette */}
              <div className="absolute inset-0 bg-gradient-to-t from-[#0A0A0B] via-transparent to-black/20 pointer-events-none" />

              {/* Floating Badge on Card */}
              <div className="absolute bottom-5 left-5 right-5 p-4 rounded-xl bg-[#141416]/90 border border-white/10 backdrop-blur-md flex items-center justify-between">
                <div>
                  <span className="text-[10px] uppercase font-bold tracking-widest text-[#F5A524] block">
                    O Lendário
                  </span>
                  <span className="font-heading font-black text-lg text-[#FFF6E8] block -mt-0.5">
                    Xis Gaúcho Prensado
                  </span>
                  <span className="text-xs text-[#8A8A8F]">
                    Crocante por fora, suculento por dentro
                  </span>
                </div>
                <div className="text-right">
                  <span className="text-[10px] text-[#8A8A8F] block uppercase tracking-wider">A partir de</span>
                  <span className="font-heading font-bold text-xl text-[#F5A524] tabular-nums">
                    R$ 34,00
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Infinite Marquee in the Base */}
      <div className="mt-14 sm:mt-20 w-full">
        <Marquee speed="slow" />
      </div>
    </section>
  );
};
