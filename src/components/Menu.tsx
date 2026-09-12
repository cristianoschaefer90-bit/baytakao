import React, { useState, useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { MessageCircle, ArrowRight, Flame } from 'lucide-react';
import { MENU_CATEGORIES, MenuItem } from '../data/menu';
import { getItemWhatsAppUrl } from '../lib/whatsapp';

gsap.registerPlugin(ScrollTrigger);

export const Menu: React.FC = () => {
  const [activeCategory, setActiveCategory] = useState<string>(MENU_CATEGORIES[0].id);
  const [hoveredItem, setHoveredItem] = useState<MenuItem | null>(null);
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });
  const [isHovering, setIsHovering] = useState(false);

  const sectionRef = useRef<HTMLElement | null>(null);
  const spotlightRef = useRef<HTMLDivElement | null>(null);

  // Smooth mouse follower for spotlight image
  useEffect(() => {
    if (!spotlightRef.current) return;
    const xTo = gsap.quickTo(spotlightRef.current, 'x', { duration: 0.35, ease: 'power3.out' });
    const yTo = gsap.quickTo(spotlightRef.current, 'y', { duration: 0.35, ease: 'power3.out' });

    xTo(mousePos.x);
    yTo(mousePos.y);
  }, [mousePos]);

  const handleMouseMove = (e: React.MouseEvent) => {
    setMousePos({ x: e.clientX, y: e.clientY });
  };

  // Scroll listener to update active category based on scroll position
  useEffect(() => {
    const handleScroll = () => {
      const categoryElements = MENU_CATEGORIES.map((cat) => ({
        id: cat.id,
        el: document.getElementById(`category-${cat.id}`),
      }));

      const scrollPos = window.scrollY + 250;

      for (let i = categoryElements.length - 1; i >= 0; i--) {
        const item = categoryElements[i];
        if (item.el && item.el.offsetTop <= scrollPos) {
          setActiveCategory(item.id);
          break;
        }
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToCategory = (id: string) => {
    setActiveCategory(id);
    const target = document.getElementById(`category-${id}`);
    if (target) {
      const yOffset = -100;
      const y = target.getBoundingClientRect().top + window.pageYOffset + yOffset;
      window.scrollTo({ top: y, behavior: 'smooth' });
    }
  };

  return (
    <section
      id="cardapio"
      ref={sectionRef}
      onMouseMove={handleMouseMove}
      className="relative py-28 sm:py-36 bg-[#0A0A0B] text-[#FFF6E8] overflow-hidden"
    >
      {/* Background Ambience */}
      <div
        aria-hidden="true"
        className="absolute top-1/4 right-0 w-[500px] h-[500px] rounded-full bg-[#F5A524]/6 blur-[180px] pointer-events-none"
      />
      <div
        aria-hidden="true"
        className="absolute bottom-1/4 left-0 w-[500px] h-[500px] rounded-full bg-[#E4322B]/6 blur-[180px] pointer-events-none"
      />

      <div className="max-w-7xl mx-auto px-6 sm:px-8">
        {/* Section Header */}
        <div className="mb-16 sm:mb-20 max-w-3xl">
          <div className="flex items-center gap-2 mb-3">
            <span className="h-[2px] w-8 bg-[#E4322B]" />
            <span className="text-xs uppercase tracking-[0.25em] font-bold text-[#F5A524]">
              Cardápio Completo
            </span>
          </div>
          <h2 className="font-display uppercase text-5xl sm:text-6xl md:text-8xl tracking-tight text-[#FFF6E8] leading-[0.9]">
            DIRETO DA CHAPA DE FERRO
          </h2>
          <p className="mt-4 text-base sm:text-lg text-[#8A8A8F] font-body leading-relaxed">
            Ingredientes frescos de açougue, queijo derretido de verdade e a receita de maionese caseira que fez o Bayta Kão virar instituição na Zona Sul.
          </p>
        </div>

        {/* Sticky Scroll Layout: Left pinned categories, Right scrolling items */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16 items-start">
          {/* Left Pinned Category Navigation */}
          <div className="lg:col-span-4 lg:sticky lg:top-28 z-20">
            <div className="p-6 rounded-2xl bg-[#141416]/90 border border-white/10 backdrop-blur-xl shadow-2xl">
              <span className="text-[11px] font-bold uppercase tracking-[0.25em] text-[#8A8A8F] block mb-4">
                Categorias
              </span>

              <nav className="flex flex-row lg:flex-col gap-2 overflow-x-auto lg:overflow-visible pb-2 lg:pb-0 scrollbar-none">
                {MENU_CATEGORIES.map((category) => {
                  const isActive = activeCategory === category.id;
                  return (
                    <button
                      key={category.id}
                      onClick={() => scrollToCategory(category.id)}
                      className={`text-left px-4 py-3 rounded-xl transition-all duration-300 flex items-center justify-between group shrink-0 ${
                        isActive
                          ? 'bg-[#E4322B] text-[#FFF6E8] shadow-[0_0_20px_rgba(228,50,43,0.35)]'
                          : 'bg-transparent text-[#8A8A8F] hover:text-[#FFF6E8] hover:bg-white/5'
                      }`}
                    >
                      <div className="flex items-center gap-3">
                        <span
                          className={`font-display text-2xl sm:text-3xl uppercase tracking-wider ${
                            isActive ? 'text-[#FFF6E8]' : 'group-hover:text-[#FFF6E8]'
                          }`}
                        >
                          {category.name}
                        </span>
                      </div>

                      <span
                        className={`text-xs font-bold px-2 py-0.5 rounded-full ${
                          isActive
                            ? 'bg-black/20 text-[#FFF6E8]'
                            : 'bg-white/5 text-[#8A8A8F] group-hover:bg-white/10'
                        }`}
                      >
                        {category.items.length}
                      </span>
                    </button>
                  );
                })}
              </nav>

              {/* Notice Box for custom orders */}
              <div className="mt-6 pt-5 border-t border-white/10 hidden lg:block">
                <p className="text-xs text-[#8A8A8F] leading-relaxed">
                  <strong className="text-[#F5A524] block mb-1">Prefere montar o seu?</strong>
                  Sem milho, ovo duplo ou maionese extra: é só avisar direto no WhatsApp ao enviar o pedido.
                </p>
              </div>
            </div>
          </div>

          {/* Right Scrolling Items Section */}
          <div className="lg:col-span-8 flex flex-col gap-16 sm:gap-20">
            {MENU_CATEGORIES.map((category) => (
              <div
                key={category.id}
                id={`category-${category.id}`}
                className="scroll-mt-28"
              >
                {/* Category Header Banner */}
                <div className="border-b border-[#F5A524]/30 pb-4 mb-8 flex flex-col sm:flex-row sm:items-baseline justify-between gap-2">
                  <div>
                    <h3 className="font-display text-4xl sm:text-5xl uppercase tracking-wider text-[#FFF6E8]">
                      {category.name}
                    </h3>
                    <p className="text-xs sm:text-sm text-[#8A8A8F] mt-1 max-w-xl">
                      {category.description}
                    </p>
                  </div>
                  <span className="text-[11px] font-bold uppercase tracking-widest text-[#F5A524] shrink-0">
                    {category.items.length} opções
                  </span>
                </div>

                {/* Items List - Typographic Rows */}
                <div className="flex flex-col divide-y divide-white/10">
                  {category.items.map((item) => (
                    <div
                      key={item.id}
                      onMouseEnter={() => {
                        setHoveredItem(item);
                        setIsHovering(true);
                      }}
                      onMouseLeave={() => {
                        setIsHovering(false);
                      }}
                      className="group relative py-6 sm:py-7 px-3 sm:px-4 -mx-3 sm:-mx-4 rounded-2xl transition-colors duration-200 hover:bg-[#141416]/80 flex flex-col sm:flex-row sm:items-center justify-between gap-5"
                    >
                      {/* Left: Name, Badge, Description */}
                      <div className="flex-1 pr-4">
                        <div className="flex items-center gap-3 mb-1.5 flex-wrap">
                          <h4 className="font-heading text-xl sm:text-2xl font-bold text-[#FFF6E8] group-hover:text-[#F5A524] transition-colors">
                            {item.name}
                          </h4>

                          {item.badge && (
                            <span className="inline-flex items-center gap-1 text-[10px] uppercase font-bold tracking-wider px-2 py-0.5 rounded-full bg-[#E4322B]/20 text-[#E4322B] border border-[#E4322B]/40">
                              <Flame className="w-2.5 h-2.5 fill-current" />
                              {item.badge}
                            </span>
                          )}
                        </div>

                        <p className="text-xs sm:text-sm text-[#8A8A8F] leading-relaxed max-w-xl">
                          {item.description}
                        </p>

                        {/* Mobile visible image thumbnail (desktop uses the floating spotlight) */}
                        <div className="sm:hidden mt-3 rounded-lg overflow-hidden border border-white/10 aspect-[16/9] max-w-xs">
                          <img
                            src={item.image}
                            alt={item.name}
                            className="w-full h-full object-cover"
                            loading="lazy"
                          />
                        </div>
                      </div>

                      {/* Right: Price & Order Button */}
                      <div className="flex items-center justify-between sm:justify-end gap-5 shrink-0 pt-2 sm:pt-0">
                        <span className="font-display text-2xl sm:text-3xl text-[#F5A524] tabular-nums font-bold tracking-wide">
                          {item.price}
                        </span>

                        <a
                          href={getItemWhatsAppUrl(item.name, item.price)}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex items-center gap-2 px-4 py-2.5 rounded-full bg-white/5 border border-white/15 text-xs font-bold tracking-wider uppercase text-[#FFF6E8] group-hover:bg-[#E4322B] group-hover:border-[#E4322B] group-hover:shadow-[0_0_15px_rgba(228,50,43,0.4)] transition-all duration-200"
                          aria-label={`Pedir ${item.name} no WhatsApp`}
                        >
                          <MessageCircle className="w-3.5 h-3.5" />
                          <span>Pedir</span>
                          <ArrowRight className="w-3.5 h-3.5 opacity-60 group-hover:translate-x-0.5 group-hover:opacity-100 transition-transform" />
                        </a>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* 21st.dev Style Floating Cursor Spotlight Image (Desktop Only) */}
      <div
        ref={spotlightRef}
        aria-hidden="true"
        className={`fixed top-0 left-0 pointer-events-none z-50 hidden lg:block transition-opacity duration-300 ${
          isHovering && hoveredItem ? 'opacity-100' : 'opacity-0'
        }`}
        style={{
          transform: 'translate(-50%, -50%)',
        }}
      >
        {hoveredItem && (
          <div className="relative w-64 h-48 rounded-2xl overflow-hidden shadow-[0_20px_50px_rgba(0,0,0,0.9)] border-2 border-[#F5A524]/60 bg-[#141416] p-1.5">
            <img
              src={hoveredItem.image}
              alt={hoveredItem.name}
              className="w-full h-full object-cover rounded-xl"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent pointer-events-none" />
            <div className="absolute bottom-3 left-3 right-3 text-left">
              <p className="font-heading text-xs font-bold text-[#FFF6E8] truncate">
                {hoveredItem.name}
              </p>
              <p className="font-display text-sm text-[#F5A524] tabular-nums">
                {hoveredItem.price}
              </p>
            </div>
          </div>
        )}
      </div>
    </section>
  );
};
