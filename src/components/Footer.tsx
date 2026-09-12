import React from 'react';
import { Instagram, MessageCircle, Phone, ArrowUp } from 'lucide-react';
import { BUSINESS_INFO } from '../data/business';
import { getWhatsAppUrl } from '../lib/whatsapp';

export const Footer: React.FC = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="relative bg-[#0A0A0B] text-[#8A8A8F] border-t border-[#F5A524]/30 pt-16 pb-12 overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 sm:px-8">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-10 lg:gap-14 pb-12 border-b border-white/10 items-start">
          {/* Col 1: Outline Brand Logo (5 cols) */}
          <div className="md:col-span-5 flex flex-col items-start">
            <h2
              className="font-display text-5xl sm:text-6xl uppercase tracking-wider text-transparent mb-2 select-none"
              style={{
                WebkitTextStroke: '1.5px #F5A524',
              }}
            >
              BAYTA KÃO
            </h2>
            <span className="font-heading text-xs tracking-[0.3em] uppercase text-[#FFF6E8] font-bold mb-4">
              LANCHES • TRADIÇÃO NA ZONA SUL
            </span>
            <p className="text-xs sm:text-sm text-[#8A8A8F] max-w-sm leading-relaxed mb-6 font-body">
              {BUSINESS_INFO.slogan} Desde 2013 servindo o verdadeiro sabor gaúcho prensado na chapa com ingredientes de primeira e respeito ao cliente.
            </p>

            {/* Social Icons */}
            <div className="flex items-center gap-3">
              <a
                href={BUSINESS_INFO.instagramUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 rounded-full bg-white/5 hover:bg-[#E4322B] text-[#FFF6E8] flex items-center justify-center transition-colors"
                aria-label="Instagram da Bayta Kão"
              >
                <Instagram className="w-4 h-4" />
              </a>
              <a
                href={getWhatsAppUrl()}
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 rounded-full bg-white/5 hover:bg-[#E4322B] text-[#FFF6E8] flex items-center justify-center transition-colors"
                aria-label="WhatsApp da Bayta Kão"
              >
                <MessageCircle className="w-4 h-4" />
              </a>
              <a
                href={`tel:${BUSINESS_INFO.phoneRaw}`}
                className="w-9 h-9 rounded-full bg-white/5 hover:bg-[#F5A524] hover:text-[#0A0A0B] text-[#FFF6E8] flex items-center justify-center transition-colors"
                aria-label="Ligar para o telefone fixo"
              >
                <Phone className="w-4 h-4" />
              </a>
            </div>
          </div>

          {/* Col 2: Navigation Links (3 cols) */}
          <div className="md:col-span-3 flex flex-col gap-3">
            <span className="text-xs font-bold uppercase tracking-[0.2em] text-[#FFF6E8]">
              Cardápio & A Casa
            </span>
            <ul className="flex flex-col gap-2 text-xs">
              <li>
                <a href="#cardapio" className="hover:text-[#F5A524] transition-colors">
                  Xis Gaúcho Prensado
                </a>
              </li>
              <li>
                <a href="#cardapio" className="hover:text-[#F5A524] transition-colors">
                  Baurus ao Prato & Pão
                </a>
              </li>
              <li>
                <a href="#cardapio" className="hover:text-[#F5A524] transition-colors">
                  Cachorros-Quentes Especiais
                </a>
              </li>
              <li>
                <a href="#cardapio" className="hover:text-[#F5A524] transition-colors">
                  Porções de Fritas & Polenta
                </a>
              </li>
              <li>
                <a href="#a-casa" className="hover:text-[#F5A524] transition-colors">
                  Nossa História na Capivari
                </a>
              </li>
            </ul>
          </div>

          {/* Col 3: Address & Info (4 cols) */}
          <div className="md:col-span-4 flex flex-col gap-2 text-xs">
            <span className="text-xs font-bold uppercase tracking-[0.2em] text-[#FFF6E8] mb-1">
              Endereço & Atendimento
            </span>
            <p className="text-[#FFF6E8]/90 leading-relaxed">
              {BUSINESS_INFO.address}
            </p>
            <p className="text-[#8A8A8F]">
              Bairro Cristal • CEP {BUSINESS_INFO.cep}
            </p>
            <p className="pt-2 text-[#8A8A8F]">
              CNPJ: {BUSINESS_INFO.cnpj}
            </p>
            <p className="text-[#F5A524] font-medium pt-1">
              {BUSINESS_INFO.category}
            </p>
          </div>
        </div>

        {/* Sub-footer with Credits and Back to Top */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-[11px] text-[#8A8A8F]">
          <div>
            © {new Date().getFullYear()} Bayta Kão Lanches. Todos os direitos reservados.
          </div>

          <div className="flex items-center gap-6">
            <span>Zona Sul • Porto Alegre/RS</span>
            <button
              onClick={scrollToTop}
              className="inline-flex items-center gap-1.5 hover:text-[#FFF6E8] transition-colors"
              aria-label="Voltar ao topo"
            >
              <span>Voltar ao topo</span>
              <ArrowUp className="w-3.5 h-3.5 text-[#F5A524]" />
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
};
