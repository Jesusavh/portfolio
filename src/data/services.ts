/**
 * ➜ SERVICIOS
 * Cada servicio se muestra como una tarjeta estilo pricing con su
 * desglose de entregables. Los iconos usan el set Tabler
 * (https://tabler.io/icons).
 * - `badge`: etiqueta del plan (p. ej. "Plan Básico" / "Plan Completo").
 * - `highlight`: resalta la tarjeta (borde y badge en color primario).
 * - `price`/`period`: si se definen, muestran un precio. Si se omiten,
 *   la tarjeta muestra "A medida" con cotización personalizada.
 * - `note`: línea pequeña bajo el precio.
 * - `ctaText`: si se define, muestra el botón de la tarjeta con ese texto.
 */
export interface Service {
  icon: string;
  title: string;
  tagline?: string;
  badge?: string;
  highlight?: boolean;
  price?: string;
  period?: string;
  note?: string;
  ctaText?: string;
  items: string[];
}

/**
 * Planes de producción/edición de video: se muestran destacados arriba,
 * como la oferta principal de la sección.
 */
export const videoPlans: Service[] = [
  {
    icon: 'tabler:scissors',
    title: 'Edición de Reels y TikToks',
    tagline: 'Tú grabas, yo edito. Convierte tu material en videos que retienen.',
    badge: 'Plan Básico',
    price: 'Desde $15',
    period: '/ video',
    ctaText: 'Reservar este servicio',
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
    period: '/ video',
    note: 'Proyectos más grandes: cotización a medida.',
    ctaText: 'Cotizar este plan',
    items: [
      'Incluye todo el plan de edición',
      'Guion y concepto creativo',
      'Grabación y dirección (presencial o remota)',
      'Equipamiento audiovisual profesional (iluminación, audio y estabilizador)',
      'Selección de tomas y armado narrativo',
      'Hooks de alta retención',
      'Optimización para el algoritmo (TikTok / Reels)',
      '2 rondas de ajustes',
      'Entrega lista para publicar + portada',
    ],
  },
];

/** Otros servicios: se muestran en un grid 2x2 (sin botones individuales). */
export const services: Service[] = [
  {
    icon: 'tabler:pencil',
    title: 'Estrategia & Copywriting',
    items: [
      'Redacción de guiones y captions enfocados en enganchar a la audiencia desde el primer segundo.',
      'Definición de pilares de contenido para estructurar la comunicación de marca con propósito.',
      'Creación de hooks (ganchos) visuales y hablados para elevar la retención.',
      'Desarrollo de narrativa y tono de voz alineado a los objetivos comerciales.',
    ],
  },
  {
    icon: 'tabler:messages',
    title: 'Social Care & CM',
    items: [
      'Gestión activa de comunidad e interacción periódica con la audiencia.',
      'Monitoreo continuo del perfil para mantener la presencia de marca activa y cercana.',
      'Respuesta estratégica a DMs y comentarios orientada a la conversión de leads.',
      'Acompañamiento en consultas y derivación de oportunidades comerciales.',
    ],
  },
  {
    icon: 'tabler:camera',
    title: 'Cobertura UGC & Presencial',
    items: [
      'Captura de contenido genuino en locación o eventos.',
      'Generación de piezas tipo UGC (User Generated Content) para transmitir cercanía y confianza.',
      'Cobertura de eventos en vivo para publicación inmediata de Stories y registros visuales.',
      'Dirección de tomas y producción en sitio sin complicaciones para el cliente.',
    ],
  },
  {
    icon: 'tabler:artboard',
    title: 'Diseño & Conversión',
    items: [
      'Diseño de carruseles educativos e informativos optimizados para lograr alto volumen de guardados.',
      'Creación de plantillas dinámicas y piezas gráficas alineadas a la identidad visual de la marca.',
      'Desarrollo de piezas promocionales (Social Ads) orientadas a generar clics e interés directo.',
      'Estructuración de landing pages estilo link en bio para guiar el tráfico directamente a la venta.',
    ],
  },
];
