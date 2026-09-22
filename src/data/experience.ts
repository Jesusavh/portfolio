/**
 * ➜ EXPERIENCIA LABORAL
 * Marcas con las que he trabajado gestionando sus redes y contenido.
 * - `icon`: set Tabler (https://tabler.io/icons).
 * - `sector`: rubro de la marca, se muestra como badge.
 */
export interface Experience {
  id: string;
  company: string;
  sector: string;
  icon: string;
  description: string;
}

export const experience: Experience[] = [
  {
    id: 'homeburger',
    company: 'Homeburger',
    sector: 'Gastronomía',
    icon: 'tabler:burger',
    description:
      'Gestión integral de redes y rebranding completo de contenido, con landing page propia. Diseño de posts, grabación y edición de reels, atención de mensajes y estrategia de planificación editorial.',
  },
  {
    id: 'knitas-pet-shop',
    company: 'Knitas · Pet Shop',
    sector: 'Pet Shop',
    icon: 'tabler:paw',
    description:
      'Gestión integral de redes y rebranding de contenido, con diseño de posts, reels y atención de comunidad. Estrategia de planificación, posicionamiento en Google Maps y piezas gráficas para impresos.',
  },
  {
    id: 'agroveterinaria-oriente',
    company: 'Agroveterinaria Oriente',
    sector: 'Agro & Veterinaria',
    icon: 'tabler:plant',
    description:
      'Gestión integral de redes con rebranding de contenido, diseño de posts, reels y atención de mensajes. Estrategia de planificación y diseño de invitaciones para eventos de marca.',
  },
  {
    id: 'patitas-mp',
    company: 'Patitas MP',
    sector: 'Mascotas',
    icon: 'tabler:paw',
    description:
      'Gestión integral de redes y rebranding de contenido, con posts, reels y atención de comunidad. Estrategia de planificación y diseño de tarjetas de presentación y de precios para productos.',
  },
  {
    id: 'wow-shop',
    company: 'Wow Shop',
    sector: 'Retail',
    icon: 'tabler:shopping-bag',
    description:
      'Gestión integral de redes con estrategia de planificación y rebranding de contenido. Diseño de posts y reels, atención de comunidad, cobertura de eventos y piezas gráficas como stickers e invitaciones.',
  },
  {
    id: 'farmacia-hospisalud',
    company: 'Farmacia Hospisalud',
    sector: 'Salud & Farmacia',
    icon: 'tabler:first-aid-kit',
    description:
      'Gestión integral de redes con estrategia de planificación y rebranding de contenido. Landing page simple, posicionamiento en Google Maps, cobertura de eventos y piezas gráficas para invitaciones.',
  },
];
