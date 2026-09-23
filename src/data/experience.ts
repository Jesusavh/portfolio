/**
 * ➜ EXPERIENCIA LABORAL
 * Marcas con las que he trabajado gestionando sus redes y contenido.
 * - `icon`: set Tabler (https://tabler.io/icons).
 * - `sector`: rubro de la marca, se muestra como badge.
 * - `images`: galería de publicaciones (reels/posts). Si está vacía, la
 *   tarjeta se muestra compacta (solo texto). Las URLs actuales son
 *   placeholders (picsum) para la maqueta: reemplázalas por las URLs reales
 *   de tus publicaciones (Cloudinary, ImageKit o locales).
 */
export interface Experience {
  id: string;
  company: string;
  sector: string;
  icon: string;
  description: string;
  images?: string[];
}

export const experience: Experience[] = [
  {
    id: 'farmacia-hospisalud',
    company: 'Farmacia Hospisalud',
    sector: 'Salud & Farmacia',
    icon: 'tabler:first-aid-kit',
    description:
      'Gestión integral de redes con estrategia de planificación y rebranding de contenido. Landing page simple, posicionamiento en Google Maps, cobertura de eventos y piezas gráficas para invitaciones.',
    images: [
      'https://ik.imagekit.io/zxcnh2alc/estefany/19%20(1).png?updatedAt=1790112600511',
      'https://ik.imagekit.io/zxcnh2alc/estefany/32_20260812_134853_0005.png?updatedAt=1790112599038',
      'https://ik.imagekit.io/zxcnh2alc/estefany/crema%20miovit.png?updatedAt=1790112598114',
      'https://ik.imagekit.io/zxcnh2alc/estefany/24.png?updatedAt=1790112598944',
      'https://ik.imagekit.io/zxcnh2alc/estefany/36.png?updatedAt=1790112600863',
    ],
  },
  {
    id: 'patitas-mp',
    company: 'Patitas MP',
    sector: 'Mascotas',
    icon: 'tabler:paw',
    description:
      'Gestión integral de redes y rebranding de contenido, con posts, reels y atención de comunidad. Estrategia de planificación y diseño de tarjetas de presentación y de precios para productos.',
    images: [
      'https://ik.imagekit.io/zxcnh2alc/estefany/6%20(8).png?updatedAt=1790112601596',
      'https://ik.imagekit.io/zxcnh2alc/estefany/5%20(8).png?updatedAt=1790112601942',
      'https://ik.imagekit.io/zxcnh2alc/estefany/7%20(13).png?updatedAt=1790112602322',
      'https://ik.imagekit.io/zxcnh2alc/estefany/6%20(2).png?updatedAt=1790112600391',
    ],
  },
  {
    id: 'knitas-pet-shop',
    company: 'Knitas · Pet Shop',
    sector: 'Pet Shop',
    icon: 'tabler:paw',
    description:
      'Gestión integral de redes y rebranding de contenido, con diseño de posts, reels y atención de comunidad. Estrategia de planificación, posicionamiento en Google Maps y piezas gráficas para impresos.',
    images: ['https://ik.imagekit.io/zxcnh2alc/estefany/guarderia%20knitas4.png?updatedAt=1790112601635'],
  },
  {
    id: 'homeburger',
    company: 'Homeburger',
    sector: 'Gastronomía',
    icon: 'tabler:burger',
    description:
      'Gestión integral de redes y rebranding completo de contenido, con landing page propia. Diseño de posts, grabación y edición de reels, atención de mensajes y estrategia de planificación editorial.',
    images: [],
  },

  {
    id: 'agroveterinaria-oriente',
    company: 'Agroveterinaria Oriente',
    sector: 'Agro & Veterinaria',
    icon: 'tabler:plant',
    description:
      'Gestión integral de redes con rebranding de contenido, diseño de posts, reels y atención de mensajes. Estrategia de planificación y diseño de invitaciones para eventos de marca.',
    images: [],
  },

  {
    id: 'wow-shop',
    company: 'Wow Shop',
    sector: 'Retail',
    icon: 'tabler:shopping-bag',
    description:
      'Gestión integral de redes con estrategia de planificación y rebranding de contenido. Diseño de posts y reels, atención de comunidad, cobertura de eventos y piezas gráficas como stickers e invitaciones.',
    images: [],
  },
];
