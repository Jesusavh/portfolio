/**
 * ➜ SERVICIOS
 * Cada servicio se muestra como tarjeta con icono. Los iconos usan el
 * set Tabler (https://tabler.io/icons). Edita los textos a tu medida.
 */
export interface Service {
  icon: string;
  title: string;
  description: string;
}

export const services: Service[] = [
  {
    icon: 'tabler:users-group',
    title: 'Community Management',
    description:
      'Publicación, moderación y relación con la comunidad. Respuesta en tiempo real y cercanía que convierte seguidores en clientes.',
  },
  {
    icon: 'tabler:video',
    title: 'Edición de Reels',
    description:
      'Reels y TikToks 9:16 con ritmo, texto y sonido pensados para retener. Edición profesional lista para publicar.',
  },
  {
    icon: 'tabler:target',
    title: 'Meta Ads',
    description:
      'Campañas en Instagram y Facebook con audiencias bien segmentadas, creativos optimizados y reporting claro de ROAS y CPA.',
  },
  {
    icon: 'tabler:chart-bar',
    title: 'Auditorías de Redes',
    description:
      'Diagnóstico completo de tu presencia digital: perfil, contenido, algoritmo y oportunidades con plan de acción 90 días.',
  },
];
