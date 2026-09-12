import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

export const Stats: React.FC = () => {
  const containerRef = useRef<HTMLElement | null>(null);
  const counter1Ref = useRef<HTMLSpanElement | null>(null);
  const counter2Ref = useRef<HTMLSpanElement | null>(null);
  const counter3Ref = useRef<HTMLSpanElement | null>(null);

  useEffect(() => {
    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (prefersReducedMotion) {
      if (counter1Ref.current) counter1Ref.current.innerText = '11';
      if (counter2Ref.current) counter2Ref.current.innerText = '4.255';
      if (counter3Ref.current) counter3Ref.current.innerText = '193';
      return;
    }

    const ctx = gsap.context(() => {
      const statsObj = { count1: 0, count2: 0, count3: 0 };

      ScrollTrigger.create({
        trigger: containerRef.current,
        start: 'top 85%',
        once: true,
        onEnter: () => {
          gsap.to(statsObj, {
            count1: 11,
            count2: 4255,
            count3: 193,
            duration: 2.2,
            ease: 'power3.out',
            onUpdate: () => {
              if (counter1Ref.current) {
                counter1Ref.current.innerText = Math.floor(statsObj.count1).toString();
              }
              if (counter2Ref.current) {
                counter2Ref.current.innerText = Math.floor(statsObj.count2)
                  .toLocaleString('pt-BR');
              }
              if (counter3Ref.current) {
                counter3Ref.current.innerText = Math.floor(statsObj.count3).toString();
              }
            },
          });
        },
      });
    }, containerRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={containerRef}
      className="relative bg-[#E4322B] text-[#FFF6E8] py-8 sm:py-10 border-y border-[#E4322B] overflow-hidden"
    >
      <div className="max-w-7xl mx-auto px-6 sm:px-8">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-0 items-center justify-between divide-y-2 md:divide-y-0 md:divide-x-2 divide-white/20">
          {/* Stat 1: 11 Anos */}
          <div className="flex flex-col items-center md:items-start md:px-8 first:pl-0 pt-4 md:pt-0">
            <div className="flex items-baseline gap-1">
              <span
                ref={counter1Ref}
                className="font-display text-5xl sm:text-6xl lg:text-7xl font-black tracking-tight tabular-nums"
              >
                11
              </span>
              <span className="text-xl font-bold font-display opacity-80">+</span>
            </div>
            <span className="text-xs sm:text-sm font-semibold tracking-wider uppercase opacity-90 -mt-1">
              Anos de Casa
            </span>
            <span className="text-[11px] opacity-75 font-normal">
              Tradição pura na esquina
            </span>
          </div>

          {/* Stat 2: 4.255 Seguidores */}
          <div className="flex flex-col items-center md:items-start md:px-8 pt-4 md:pt-0">
            <div className="flex items-baseline gap-1">
              <span
                ref={counter2Ref}
                className="font-display text-5xl sm:text-6xl lg:text-7xl font-black tracking-tight tabular-nums"
              >
                4.255
              </span>
            </div>
            <span className="text-xs sm:text-sm font-semibold tracking-wider uppercase opacity-90 -mt-1">
              Seguidores no Insta
            </span>
            <span className="text-[11px] opacity-75 font-normal">
              Comunidade fiel @bayta_kao
            </span>
          </div>

          {/* Stat 3: 193 Publicações */}
          <div className="flex flex-col items-center md:items-start md:px-8 pt-4 md:pt-0">
            <div className="flex items-baseline gap-1">
              <span
                ref={counter3Ref}
                className="font-display text-5xl sm:text-6xl lg:text-7xl font-black tracking-tight tabular-nums"
              >
                193
              </span>
            </div>
            <span className="text-xs sm:text-sm font-semibold tracking-wider uppercase opacity-90 -mt-1">
              Publicações Reais
            </span>
            <span className="text-[11px] opacity-75 font-normal">
              Chapa quente todo dia
            </span>
          </div>

          {/* Stat 4: Zona Sul de POA */}
          <div className="flex flex-col items-center md:items-start md:px-8 pt-4 md:pt-0">
            <div className="flex items-baseline gap-1">
              <span className="font-display text-5xl sm:text-6xl lg:text-7xl font-black tracking-tight">
                100%
              </span>
            </div>
            <span className="text-xs sm:text-sm font-semibold tracking-wider uppercase opacity-90 -mt-1">
              Zona Sul de POA
            </span>
            <span className="text-[11px] opacity-75 font-normal">
              Cristal • Capivari c/ Icaraí
            </span>
          </div>
        </div>
      </div>
    </section>
  );
};
