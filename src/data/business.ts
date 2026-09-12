export interface BusinessSchedule {
  day: string;
  hours: string;
  isOpenToday: (dayOfWeek: number, hour: number, minute: number) => boolean;
}

export const BUSINESS_INFO = {
  name: "Bayta Kão Lanches",
  shortName: "Bayta Kão",
  slogan: "Tempero especial há 11 anos pra ti.",
  cityTag: "Zona Sul de Porto Alegre",
  address: "Av. Capivari, 833 — esquina com Av. Icaraí, Cristal, Porto Alegre/RS",
  cep: "90810-070",
  googleMapsUrl: "https://maps.google.com/?q=Av.+Capivari,+833+-+Cristal,+Porto+Alegre+-+RS,+90810-070",
  googleMapsEmbed: "https://maps.google.com/maps?q=Av.+Capivari,+833+-+Cristal,+Porto+Alegre+-+RS,+90810-070&t=&z=16&ie=UTF8&iwloc=&output=embed",
  
  phoneDisplay: "(51) 3013-9233",
  phoneRaw: "555130139233",
  
  whatsappDisplay: "(51) 99666-0936",
  whatsappNumber: "5551996660936",
  
  email: "baytakao2018@gmail.com",
  instagramHandle: "@bayta_kao",
  instagramUrl: "https://instagram.com/bayta_kao",
  cnpj: "29.876.543/0001-20",
  
  category: "Lanchonete / Loja de sanduíches",
  features: ["Com esplanada", "Ambiente familiar", "$$"],
  
  stats: [
    { value: 11, label: "anos de casa", suffix: "" },
    { value: 4255, label: "seguidores", suffix: "" },
    { value: 193, label: "publicações", suffix: "" },
    { value: 100, label: "Zona Sul de POA", suffix: "%" },
  ],

  schedule: [
    {
      days: "Terça a sábado",
      hours: "11h–14h e 18h–00h30",
    },
    {
      days: "Domingo e feriados",
      hours: "18h–00h30",
    },
    {
      days: "Segunda-feira",
      hours: "Fechado para descanso da equipe",
    },
  ],
};

/**
 * Calculates whether Bayta Kão is currently open in Porto Alegre timezone (America/Sao_Paulo).
 * Schedule:
 * - Tuesday to Saturday: 11:00-14:00 and 18:00-00:30 (next day)
 * - Sunday: 18:00-00:30 (next day)
 * - Monday: Closed (except late night rollover from Sunday until 00:30)
 */
export function checkIsOpenNow(date: Date = new Date()): {
  isOpen: boolean;
  statusText: string;
  nextInfo: string;
} {
  try {
    // Direct calculation with America/Sao_Paulo (Porto Alegre) timezone
    const brDateStr = date.toLocaleString("en-US", { timeZone: "America/Sao_Paulo" });
    const brDate = new Date(brDateStr);
    const day = brDate.getDay(); // 0 = Sun, 1 = Mon, 2 = Tue, ..., 6 = Sat
    const hour = brDate.getHours();
    const minute = brDate.getMinutes();
    const timeInMinutes = hour * 60 + minute;

    // Check early morning rollover (00:00 to 00:30) from the previous evening
    // Wednesday to Sunday mornings (00:00 - 00:30) were opened from Tue-Sat night.
    // Monday morning (00:00 - 00:30) was opened from Sunday night.
    // Tuesday morning (00:00 - 00:30) is closed because Monday night is closed.
    if (timeInMinutes >= 0 && timeInMinutes <= 30) {
      if (day !== 2) { // Not Tuesday morning
        return {
          isOpen: true,
          statusText: "Aberto agora na chapa",
          nextInfo: "Fecha às 00h30",
        };
      }
    }

    // Tuesday (2) to Saturday (6):
    if (day >= 2 && day <= 6) {
      // Lunch: 11:00 - 14:00
      if (timeInMinutes >= 11 * 60 && timeInMinutes < 14 * 60) {
        return {
          isOpen: true,
          statusText: "Aberto agora no almoço",
          nextInfo: "Fecha às 14h00 • Reabre às 18h",
        };
      }
      // Dinner: 18:00 - 24:00 (00:00)
      if (timeInMinutes >= 18 * 60) {
        return {
          isOpen: true,
          statusText: "Aberto agora na chapa",
          nextInfo: "Fecha às 00h30",
        };
      }
      // Before lunch
      if (timeInMinutes < 11 * 60) {
        return {
          isOpen: false,
          statusText: "Fechado agora",
          nextInfo: "Abre hoje às 11h",
        };
      }
      // Between lunch and dinner
      return {
        isOpen: false,
        statusText: "Intervalo da tarde",
        nextInfo: "Reabre hoje às 18h",
      };
    }

    // Sunday (0):
    if (day === 0) {
      if (timeInMinutes >= 18 * 60) {
        return {
          isOpen: true,
          statusText: "Aberto agora na chapa",
          nextInfo: "Fecha às 00h30",
        };
      }
      return {
        isOpen: false,
        statusText: "Fechado agora",
        nextInfo: "Abre hoje às 18h",
      };
    }

    // Monday (1):
    return {
      isOpen: false,
      statusText: "Fechado hoje",
      nextInfo: "Abre terça-feira às 11h",
    };
  } catch {
    // Fallback safe return
    return {
      isOpen: true,
      statusText: "Aberto na chapa",
      nextInfo: "Pedidos direto no WhatsApp",
    };
  }
}
