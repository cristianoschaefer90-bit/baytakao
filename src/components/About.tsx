import React from 'react';
import { MapPin, Users, UtensilsCrossed, Clock } from 'lucide-react';
import { BUSINESS_INFO } from '../data/business';

export const About: React.FC = () => {
  return (
    <section
      id="a-casa"
      className="relative py-28 sm:py-36 bg-[#0A0A0B] text-[#FFF6E8] overflow-hidden"
    >
      {/* Background Accent */}
      <div
        aria-hidden="true"
        className="absolute top-1/2 left-[-10%] w-[550px] h-[550px] rounded-full bg-[#E4322B]/8 blur-[180px] pointer-events-none"
      />

      <div className="max-w-7xl mx-auto px-6 sm:px-8">
        {/* Section Header */}
        <div className="mb-14 sm:mb-16">
          <div className="flex items-center gap-2 mb-3">
            <span className="h-[2px] w-8 bg-[#E4322B]" />
            <span className="text-xs uppercase tracking-[0.25em] font-bold text-[#F5A524]">
              Identidade & Rua
            </span>
          </div>
          <h2 className="font-display uppercase text-5xl sm:text-6xl md:text-8xl tracking-tight text-[#FFF6E8] leading-[0.9]">
            A CASA: 11 ANOS NA ESQUINA
          </h2>
          <p className="mt-3 text-sm sm:text-base text-[#8A8A8F] max-w-xl font-body">
            Não é hamburgueria gourmet de shopping center. É a lancheria de bairro raiz que virou referência na Zona Sul de Porto Alegre.
          </p>
        </div>

        {/* Asymmetric Bento Grid */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-5 sm:gap-6">
          {/* Cell 1: Photo of Hot Griddle / Chapa (md:col-span-7) */}
          <div className="md:col-span-7 group relative rounded-2xl overflow-hidden bg-[#141416] border border-[#F5A524]/20 hover:border-[#F5A524]/60 transition-all duration-500 hover:-translate-y-1 shadow-xl min-h-[340px] flex flex-col justify-end p-6 sm:p-8">
            <img
              src="https://images.unsplash.com/photo-1550547660-d9450f859349?q=80&w=1200&auto=format&fit=crop"
              alt="Chapa de ferro quente com carne e queijo chiando no Bayta Kão"
              className="absolute inset-0 w-full h-full object-cover object-center brightness-75 group-hover:scale-105 transition-transform duration-700"
              loading="lazy"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#0A0A0B] via-[#0A0A0B]/40 to-transparent pointer-events-none" />

            <div className="relative z-10">
              <span className="inline-block text-[10px] uppercase font-bold tracking-[0.25em] text-[#F5A524] mb-1">
                Fogo & Ferro
              </span>
              <h3 className="font-heading text-2xl sm:text-3xl font-black text-[#FFF6E8] leading-tight">
                CHAPA GROSSA, GORDURA BOA
              </h3>
              <p className="text-xs sm:text-sm text-[#FFF6E8]/80 mt-2 max-w-md">
                Prensado no ponto com peso de ferro de verdade. Casquinha crocante no pão, queijo esticando e maionese gelada servida no copinho.
              </p>
            </div>
          </div>

          {/* Cell 2: Punchy History Block (md:col-span-5) */}
          <div className="md:col-span-5 rounded-2xl bg-[#141416] border border-[#F5A524]/20 hover:border-[#F5A524]/60 transition-all duration-500 hover:-translate-y-1 shadow-xl p-6 sm:p-8 flex flex-col justify-between">
            <div>
              <div className="w-10 h-10 rounded-xl bg-[#E4322B]/20 border border-[#E4322B]/40 flex items-center justify-center text-[#E4322B] mb-5">
                <UtensilsCrossed className="w-5 h-5" />
              </div>
              <span className="text-[10px] uppercase font-bold tracking-[0.25em] text-[#F5A524] block mb-2">
                Tradição de Bairro
              </span>
              <h3 className="font-heading text-xl sm:text-2xl font-bold text-[#FFF6E8] leading-tight mb-4">
                SEM INVENTAR MODA
              </h3>
              <p className="text-sm text-[#8A8A8F] leading-relaxed font-body">
                Aqui não tem espuma, nem florzinha comestível. É xis com fartura, carne de qualidade comprada fresca, salada lavada folha a folha e receita de família que segura 11 anos de clientela fiel.
              </p>
            </div>

            <div className="mt-6 pt-5 border-t border-white/10 flex items-center justify-between text-xs text-[#FFF6E8]">
              <span className="font-display text-2xl text-[#F5A524]">DESDE 2013</span>
              <span className="text-[#8A8A8F]">11 anos de rua</span>
            </div>
          </div>

          {/* Cell 3: Environment Credentials / Tag Block (md:col-span-4) */}
          <div className="md:col-span-4 rounded-2xl bg-[#141416] border border-[#F5A524]/20 hover:border-[#F5A524]/60 transition-all duration-500 hover:-translate-y-1 shadow-xl p-6 sm:p-8 flex flex-col justify-between">
            <div>
              <div className="w-10 h-10 rounded-xl bg-[#F5A524]/20 border border-[#F5A524]/40 flex items-center justify-center text-[#F5A524] mb-5">
                <Users className="w-5 h-5" />
              </div>

              <h3 className="font-heading text-xl font-bold text-[#FFF6E8] mb-2">
                {BUSINESS_INFO.features.join(' · ')}
              </h3>
              <p className="text-xs sm:text-sm text-[#8A8A8F] leading-relaxed">
                Ponto de encontro pós-futebol, lanche em família no final de semana ou aquela janta tardia sem frescura na calçada da Capivari.
              </p>
            </div>

            <div className="mt-6 flex flex-wrap gap-2 pt-4 border-t border-white/10">
              <span className="px-3 py-1 rounded-full bg-white/5 text-[11px] text-[#FFF6E8] border border-white/10">
                Mesa ao ar livre
              </span>
              <span className="px-3 py-1 rounded-full bg-white/5 text-[11px] text-[#FFF6E8] border border-white/10">
                Delivery no Zap
              </span>
              <span className="px-3 py-1 rounded-full bg-white/5 text-[11px] text-[#FFF6E8] border border-white/10">
                Cerveja estupidamente gelada
              </span>
            </div>
          </div>

          {/* Cell 4: Fachada / Esplanada Photo (md:col-span-8) */}
          <div className="md:col-span-8 group relative rounded-2xl overflow-hidden bg-[#141416] border border-[#F5A524]/20 hover:border-[#F5A524]/60 transition-all duration-500 hover:-translate-y-1 shadow-xl min-h-[300px] flex flex-col justify-end p-6 sm:p-8">
            <img
              src="https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?q=80&w=1200&auto=format&fit=crop"
              alt="Ambiente acolhedor da lancheria com mesas e esplanada em Porto Alegre"
              className="absolute inset-0 w-full h-full object-cover object-center brightness-70 group-hover:scale-105 transition-transform duration-700"
              loading="lazy"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#0A0A0B] via-[#0A0A0B]/50 to-transparent pointer-events-none" />

            <div className="relative z-10 flex flex-col sm:flex-row sm:items-end justify-between gap-4">
              <div>
                <span className="inline-flex items-center gap-1.5 text-[10px] uppercase font-bold tracking-[0.25em] text-[#F5A524] mb-1">
                  <MapPin className="w-3 h-3" />
                  Ponto de Referência
                </span>
                <h3 className="font-heading text-2xl sm:text-3xl font-black text-[#FFF6E8]">
                  ESPLANADA NA CAPIVARI COM ICARAÍ
                </h3>
                <p className="text-xs sm:text-sm text-[#FFF6E8]/80 mt-1 max-w-lg">
                  Lugar seguro, arejado e descontraído no bairro Cristal. Estacionamento fácil na rua e atendimento rápido.
                </p>
              </div>

              <div className="shrink-0 flex items-center gap-2 text-xs font-semibold px-3 py-1.5 rounded-lg bg-black/60 backdrop-blur-md border border-white/15 text-[#FFF6E8]">
                <Clock className="w-3.5 h-3.5 text-[#F5A524]" />
                <span>Noite adentro até 00h30</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
