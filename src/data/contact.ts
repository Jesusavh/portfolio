/**
 * ➜ CONTACTO Y CTA
 * - `whatsappNumber`: número en formato internacional sin "+", espacios ni guiones.
 *   Venezuela: 58 + 412 + 7 dígitos, p.ej. '584120000000'.
 * - `agendaHref`: enlace a tu agenda (Calendly, Cal.com, WhatsApp…).
 */
export const contact = {
  whatsappNumber: '584120000000',
  agendaHref: 'https://calendly.com/tu-usuario/llamada-estrategica',
  email: 'hola@tudominio.com',
};

export const whatsappLink =
  `https://wa.me/${contact.whatsappNumber}` +
  `?text=${encodeURIComponent('Hola, vi tu portafolio y quiero llevar mis redes al siguiente nivel 🚀')}`;
