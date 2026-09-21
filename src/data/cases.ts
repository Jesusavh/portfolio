/**
 * ➜ CASOS DE ÉXITO
 * Cada caso muestra un mockup de celular (feed o reel) + sus KPIs.
 * - `media.type`: `'image'` para capturas/feeds o `'video'` para reels 9:16.
 * - `media.path`: ruta del asset dentro de tu ImageKit (p.ej. `portfolio/cliente-1/reel.mp4`).
 * - `kpis`: métricas destacadas (alcance, engagement, conversión, etc.).
 */
export interface CaseStudy {
  id: string;
  client: string;
  sector: string;
  summary: string;
  media: { type: 'image' | 'video'; path: string; alt: string };
  kpis: { label: string; value: string }[];
  result: string;
}

export const cases: CaseStudy[] = [
  {
    id: 'cafe-aurora',
    client: 'Café Aurora',
    sector: 'Gastronomía',
    summary:
      'Gestión integral de redes + campañas de Meta Ads para el lanzamiento de la nueva sucursal. Rebranding de contenido y calendario editorial.',
    media: { type: 'video', path: 'Jim_Martinez_video_no_watermark.mp4', alt: 'Reel promocional de Café Aurora' },
    kpis: [
      { label: 'Alcance prom.', value: '1.2M' },
      { label: 'Engagement', value: '8.4%' },
      { label: 'Conversión', value: '+38%' },
    ],
    result: 'Filas en la puerta el primer fin de semana',
  },
  {
    id: 'beauty-nail',
    client: 'Beauty & Nails Studio',
    sector: 'Belleza',
    summary:
      'Rediseño del feed y calendario de historias. Contenido en reels con formato 9:16 optimizado para máxima retención en TikTok e Instagram.',
    media: { type: 'image', path: 'portfolio/cliente-2/feed.jpg', alt: 'Feed de Instagram de Beauty & Nails Studio' },
    kpis: [
      { label: 'Alcance prom.', value: '840K' },
      { label: 'Engagement', value: '6.9%' },
      { label: 'Reservas', value: '+52%' },
    ],
    result: 'Agenda llena 3 semanas seguidas',
  },
  {
    id: 'fitness-flow',
    client: 'FitFlow Gym',
    sector: 'Fitness',
    summary:
      'Community management diario, pauta de adquisición y auditoría de contenidos. Estrategia de ads enfocada en captación de membresías.',
    media: { type: 'image', path: 'portfolio/cliente-3/feed.jpg', alt: 'Captura de analíticas de FitFlow Gym' },
    kpis: [
      { label: 'Alcance prom.', value: '2.3M' },
      { label: 'Engagement', value: '11.2%' },
      { label: 'CPA', value: '-27%' },
    ],
    result: 'Membresías x3 en 6 meses',
  },
];
