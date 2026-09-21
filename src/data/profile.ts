import { ik } from '~/constants';

/**
 * ➜ DATOS PERSONALES DE LA PROFESIONAL
 * Reemplaza cada campo por los datos reales.
 * - `photo`: sube tu foto a ImageKit (p.ej. `portfolio/perfil.jpg`).
 * - Los iconos usan el set Tabler (https://tabler.io/icons).
 */
export const profile = {
  name: 'Estefany Vivas',
  handle: '@lucreates',
  role: 'Social Media Manager · Content Creator',
  city: 'El Tigre, Venezuela',
  bio: 'Ayudo a marcas a conectar de verdad con su audiencia: estrategia de contenido, community management, edición de reels y campañas de Meta Ads que generan resultados medibles.',
  photoUrl: ik('estefanyv.jpg', { w: 600 }),
  availableLabel: 'Disponible para nuevos proyectos',
};

export const socialLinks = [
  { label: 'Instagram', icon: 'tabler:brand-instagram', href: 'https://instagram.com/tu-perfil' },
  { label: 'TikTok', icon: 'tabler:brand-tiktok', href: 'https://tiktok.com/@tu-perfil' },
  { label: 'LinkedIn', icon: 'tabler:brand-linkedin', href: 'https://linkedin.com/in/tu-perfil' },
  { label: 'YouTube', icon: 'tabler:brand-youtube', href: 'https://youtube.com/@tu-perfil' },
];
