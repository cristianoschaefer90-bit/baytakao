import { BUSINESS_INFO } from '../data/business';

/**
 * Builds direct WhatsApp URL with custom message.
 * User prompt requirement:
 * Mensagem padrão saindo do cliente: "Oi! Vim pelo site e quero fazer um pedido:"
 */
export function getWhatsAppUrl(customMessage?: string): string {
  const defaultText = "Oi! Vim pelo site e quero fazer um pedido:";
  const message = customMessage ? customMessage : defaultText;
  const encoded = encodeURIComponent(message);
  return `https://wa.me/${BUSINESS_INFO.whatsappNumber}?text=${encoded}`;
}

/**
 * Builds WhatsApp message pre-filled with the selected menu item.
 */
export function getItemWhatsAppUrl(itemName: string, price: string): string {
  const text = `Oi! Vim pelo site e quero fazer um pedido:\n- 1x ${itemName} (${price})\n\nPor favor, me informe o tempo de entrega para o meu bairro!`;
  return getWhatsAppUrl(text);
}
