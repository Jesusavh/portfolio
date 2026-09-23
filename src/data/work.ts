/**
 * ➜ TRABAJO / REELS
 * Agrega aquí los links (rutas de ImageKit) de tus videos/reels.
 * Por cada entrada se genera automáticamente un mockup de celular en el
 * carrusel. Solo edita esta lista; no necesitas tocar el componente.
 */
export interface WorkVideo {
  /** Ruta del asset en ImageKit, p. ej. 'portfolio/reels/reel-1.mp4'. */
  path: string;
  /** Texto alternativo del video. */
  alt?: string;
  /** Texto opcional que se muestra debajo del mockup. */
  caption?: string;
}

export const workVideos: WorkVideo[] = [
  {
    path: 'estefany/VID_20260622_194615_767.mp4',
    alt: 'Reel promocional',
    caption: 'Reel promocional',
  },
  {
    path: 'estefany/2026-05-25-163846387.mp4',
    alt: 'Reel promocional',
    caption: 'Reel promocional',
  },
  // Agrega más videos aquí (se creará un mockup por cada uno):
  // { path: 'portfolio/reels/reel-2.mp4', alt: '...', caption: '...' },
  // { path: 'portfolio/reels/reel-3.mp4', alt: '...', caption: '...' },
];
