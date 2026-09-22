/**
 * ➜ SERVICIOS
 * Cada servicio se muestra como una tarjeta estilo pricing con su
 * desglose de entregables. Los iconos usan el set Tabler
 * (https://tabler.io/icons).
 * - `badge`: etiqueta del plan (p. ej. "Plan Básico" / "Plan Completo").
 * - `highlight`: resalta la tarjeta (borde y badge en color primario).
 * - `price`/`period`: si se definen, muestran un precio (p. ej.
 *   `Desde $10–15` / `por video`). Si se omiten, la tarjeta muestra
 *   "A medida" con cotización personalizada.
 * - `note`: línea pequeña bajo el precio.
 */
export interface Service {
  icon: string;
  title: string;
  tagline: string;
  badge?: string;
  highlight?: boolean;
  price?: string;
  period?: string;
  note?: string;
  items: string[];
}

export const services: Service[] = [
  {
    icon: 'tabler:scissors',
    title: 'Edición de Reels y TikToks',
    tagline: 'Tú grabas, yo edito. Convierte tu material en videos que retienen.',
    badge: 'Plan Básico',
    price: 'Desde $10–15',
    period: 'por video',
    items: [
      'Material proporcionado por ti (videos y fotos en bruto)',
      'Edición con ritmo y cortes estratégicos',
      'Subtítulos cinéticos sincronizados',
      'Audio en tendencia',
      'Corrección de color y encuadre',
      '1 ronda de ajustes incluida',
      'Entrega en 9:16 lista para publicar',
    ],
  },
  {
    icon: 'tabler:movie',
    title: 'Producción + Edición de Reels y TikToks',
    tagline: 'De la idea al video publicado. Concepto, grabación y edición completa.',
    badge: 'Plan Completo',
    highlight: true,
    price: 'Desde $25',
    period: 'por video',
    note: 'Proyectos más grandes: cotización a medida.',
    items: [
      'Incluye todo el plan de edición',
      'Guion y concepto creativo',
      'Grabación y dirección (presencial o remota)',
      'Selección de tomas y armado narrativo',
      'Hooks de alta retención',
      'Optimización para el algoritmo (TikTok / Reels)',
      '2 rondas de ajustes',
      'Entrega lista para publicar + portada',
    ],
  },
  {
    icon: 'tabler:messages',
    title: 'Atención de Mensajes & Social Care',
    tagline: 'Gestión de comunidad y conversión por DM.',
    items: [
      'Respuesta a mensajes y comentarios',
      'Engagement proactivo',
      'Secuencias de DMs que convierten',
      'Acompañamiento de seguidores a clientes',
    ],
  },
  {
    icon: 'tabler:calendar',
    title: 'Estrategia & Grillas de Contenido',
    tagline: 'Planificación basada en tendencias y SEO Social.',
    items: [
      'Pilares de contenido',
      'Optimización de keywords (TikTok / IG Search)',
      'Calendario editorial',
      'Flexibilidad para tendencias virales en tiempo real',
    ],
  },
  {
    icon: 'tabler:camera',
    title: 'Cobertura de Eventos / Presencial',
    tagline: 'UGC y cobertura on-the-go.',
    items: ['Captura de contenido UGC en vivo', 'Stories y Reels al instante', 'Cobertura de eventos de marca'],
  },
  {
    icon: 'tabler:artboard',
    title: 'Diseño visual integral y arquitectura de conversión',
    tagline: 'Piezas multiformato optimizadas para engagement y venta.',
    items: [
      'Carruseles educativos de alto guardado',
      'Social Ads (publicaciones promocionales)',
      'Posts de ubicación y precios',
      'Plantillas dinámicas para Stories',
      'Landing pages estilo link-in-bio para captar leads y cerrar ventas',
    ],
  },
];
