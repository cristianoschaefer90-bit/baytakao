import React from 'react';
import { MapPin, Phone, Mail, Instagram, MessageCircle, Clock, ExternalLink } from 'lucide-react';
import { BUSINESS_INFO } from '../data/business';
import { getWhatsAppUrl } from '../lib/whatsapp';

export const Location: React.FC = () => {
  return (
    <section
      id="onde-estamos"
      className="relative py-28 sm:py-36 bg-[#0A0A0B] text-[#FFF6E8] overflow-hidden border-t border-white/5"
    >
      {/* Glow Ambience */}
      <div
        aria-hidden="true"
        className="absolute bottom-1/3 right-[-5%] w-[600px] h-[600px] rounded-full bg-[#F5A524]/6 blur-[180px] pointer-events-none"
      />

      <div className="max-w-7xl mx-auto px-6 sm:px-8">
        {/* Section Header */}
        <div className="mb-14 sm:mb-16">
          <div className="flex items-center gap-2 mb-3">
            <span className="h-[2px] w-8 bg-[#E4322B]" />
            <span className="text-xs uppercase tracking-[0.25em] font-bold text-[#F5A524]">
              Localização & Horários
            </span>
          </div>
          <h2 className="font-display uppercase text-5xl sm:text-6xl md:text-8xl tracking-tight text-[#FFF6E8] leading-[0.9]">
            ONDE E QUANDO
          </h2>
          <p className="mt-3 text-sm sm:text-base text-[#8A8A8F] max-w-xl font-body">
            Vem nos visitar na esplanada ou faz teu pedido pra entrega na Zona Sul.
          </p>
        </div>

        {/* Two Columns Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-stretch">
          {/* Left Column (Map): 6 cols */}
          <div className="lg:col-span-6 flex flex-col">
            <div className="relative w-full h-[400px] sm:h-[480px] lg:h-full min-h-[380px] rounded-2xl overflow-hidden border border-[#F5A524]/30 shadow-2xl bg-[#141416]">
              {/* Google Maps iframe with dark inversion filter */}
              <iframe
                title="Localização do Bayta Kão Lanches no Google Maps"
                src={BUSINESS_INFO.googleMapsEmbed}
                className="w-full h-full border-0"
                style={{
                  filter: 'invert(92%) hue-rotate(180deg) contrast(115%) brightness(85%)',
                }}
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />

              {/* Floating Address Card */}
              <div className="absolute bottom-4 left-4 right-4 p-4 rounded-xl bg-[#0A0A0B]/90 border border-white/15 backdrop-blur-md flex items-center justify-between gap-4">
                <div className="flex items-start gap-3">
                  <MapPin className="w-5 h-5 text-[#E4322B] shrink-0 mt-0.5" />
                  <div>
                    <span className="font-heading text-sm font-bold text-[#FFF6E8] block">
                      Av. Capivari, 833
                    </span>
                    <span className="text-xs text-[#8A8A8F] block">
                      Esquina c/ Av. Icaraí • Cristal • CEP 90810-070
                    </span>
                  </div>
                </div>

                <a
                  href={BUSINESS_INFO.googleMapsUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="shrink-0 p-2.5 rounded-lg bg-white/10 hover:bg-[#E4322B] text-[#FFF6E8] transition-colors"
                  aria-label="Abrir no Google Maps"
                >
                  <ExternalLink className="w-4 h-4" />
                </a>
              </div>
            </div>
          </div>

          {/* Right Column (Schedule & Contacts): 6 cols */}
          <div className="lg:col-span-6 flex flex-col justify-between gap-8">
            {/* Hours Table Box */}
            <div className="p-6 sm:p-8 rounded-2xl bg-[#141416] border border-white/10 shadow-xl">
              <div className="flex items-center gap-2 mb-6">
                <Clock className="w-5 h-5 text-[#F5A524]" />
                <h3 className="font-heading text-xl font-bold uppercase tracking-wider text-[#FFF6E8]">
                  Horários de Funcionamento
                </h3>
              </div>

              <div className="divide-y divide-white/10">
                {/* Terça a sábado */}
                <div className="py-4 flex flex-col sm:flex-row sm:items-center justify-between gap-2">
                  <div className="flex items-center gap-2">
                    <span className="w-2 h-2 rounded-full bg-emerald-500" />
                    <span className="text-sm font-bold text-[#FFF6E8]">
                      Terça a sábado
                    </span>
                  </div>
                  <span className="font-heading text-sm sm:text-base text-[#F5A524] tabular-nums">
                    11h–14h e 18h–00h30
                  </span>
                </div>

                {/* Domingo e feriados */}
                <div className="py-4 flex flex-col sm:flex-row sm:items-center justify-between gap-2">
                  <div className="flex items-center gap-2">
                    <span className="w-2 h-2 rounded-full bg-emerald-500" />
                    <span className="text-sm font-bold text-[#FFF6E8]">
                      Domingo e feriados
                    </span>
                  </div>
                  <span className="font-heading text-sm sm:text-base text-[#F5A524] tabular-nums">
                    18h–00h30
                  </span>
                </div>

                {/* Segunda */}
                <div className="py-4 flex flex-col sm:flex-row sm:items-center justify-between gap-2">
                  <div className="flex items-center gap-2">
                    <span className="w-2 h-2 rounded-full bg-[#E4322B]" />
                    <span className="text-sm font-bold text-[#8A8A8F]">
                      Segunda-feira
                    </span>
                  </div>
                  <span className="text-xs sm:text-sm text-[#8A8A8F] font-semibold uppercase tracking-wider">
                    Fechado para descanso
                  </span>
                </div>
              </div>
            </div>

            {/* Direct Contacts Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {/* WhatsApp */}
              <a
                href={getWhatsAppUrl()}
                target="_blank"
                rel="noopener noreferrer"
                className="group p-5 rounded-2xl bg-[#141416] border border-white/10 hover:border-[#F5A524]/60 transition-all duration-300 flex items-center gap-4 hover:-translate-y-0.5"
              >
                <div className="w-12 h-12 rounded-xl bg-[#E4322B]/20 group-hover:bg-[#E4322B] text-[#E4322B] group-hover:text-[#FFF6E8] transition-colors flex items-center justify-center shrink-0">
                  <MessageCircle className="w-6 h-6" />
                </div>
                <div>
                  <span className="text-[10px] uppercase font-bold tracking-wider text-[#8A8A8F] block">
                    WhatsApp Delivery
                  </span>
                  <span className="font-heading text-sm font-bold text-[#FFF6E8] group-hover:text-[#F5A524] transition-colors tabular-nums">
                    {BUSINESS_INFO.whatsappDisplay}
                  </span>
                </div>
              </a>

              {/* Telefone Fixo */}
              <a
                href={`tel:${BUSINESS_INFO.phoneRaw}`}
                className="group p-5 rounded-2xl bg-[#141416] border border-white/10 hover:border-[#F5A524]/60 transition-all duration-300 flex items-center gap-4 hover:-translate-y-0.5"
              >
                <div className="w-12 h-12 rounded-xl bg-white/5 group-hover:bg-[#F5A524] text-[#F5A524] group-hover:text-[#0A0A0B] transition-colors flex items-center justify-center shrink-0">
                  <Phone className="w-6 h-6" />
                </div>
                <div>
                  <span className="text-[10px] uppercase font-bold tracking-wider text-[#8A8A8F] block">
                    Telefone Fixo
                  </span>
                  <span className="font-heading text-sm font-bold text-[#FFF6E8] group-hover:text-[#F5A524] transition-colors tabular-nums">
                    {BUSINESS_INFO.phoneDisplay}
                  </span>
                </div>
              </a>

              {/* Instagram */}
              <a
                href={BUSINESS_INFO.instagramUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="group p-5 rounded-2xl bg-[#141416] border border-white/10 hover:border-[#F5A524]/60 transition-all duration-300 flex items-center gap-4 hover:-translate-y-0.5"
              >
                <div className="w-12 h-12 rounded-xl bg-white/5 group-hover:bg-pink-600 text-pink-400 group-hover:text-white transition-colors flex items-center justify-center shrink-0">
                  <Instagram className="w-6 h-6" />
                </div>
                <div>
                  <span className="text-[10px] uppercase font-bold tracking-wider text-[#8A8A8F] block">
                    Instagram Oficial
                  </span>
                  <span className="font-heading text-sm font-bold text-[#FFF6E8] group-hover:text-[#F5A524] transition-colors">
                    {BUSINESS_INFO.instagramHandle}
                  </span>
                </div>
              </a>

              {/* Email */}
              <a
                href={`mailto:${BUSINESS_INFO.email}`}
                className="group p-5 rounded-2xl bg-[#141416] border border-white/10 hover:border-[#F5A524]/60 transition-all duration-300 flex items-center gap-4 hover:-translate-y-0.5"
              >
                <div className="w-12 h-12 rounded-xl bg-white/5 group-hover:bg-amber-600 text-[#F5A524] group-hover:text-[#0A0A0B] transition-colors flex items-center justify-center shrink-0">
                  <Mail className="w-6 h-6" />
                </div>
                <div>
                  <span className="text-[10px] uppercase font-bold tracking-wider text-[#8A8A8F] block">
                    E-mail Comercial
                  </span>
                  <span className="font-heading text-xs font-bold text-[#FFF6E8] group-hover:text-[#F5A524] transition-colors truncate block max-w-[160px]">
                    {BUSINESS_INFO.email}
                  </span>
                </div>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
