/**
 * ➜ TRABAJO / REELS
 * Agrega aquí los public IDs de Cloudinary de tus videos/reels.
 * Por cada entrada se genera automáticamente un mockup de celular en el
 * carrusel. Solo edita esta lista; no necesitas tocar el componente.
 */
export interface WorkVideo {
  /** Public ID del vídeo en Cloudinary (sin extensión), p. ej. 'estefany/reel-1'. */
  publicId: string;
  /** Texto alternativo del video. */
  alt?: string;
  /** Texto opcional que se muestra debajo del mockup. */
  caption?: string;
}

export const workVideos: WorkVideo[] = [
  {
    publicId: 'VID_20260622_194615_767.mp4',
    alt: 'Reel promocional',
    caption: 'Reel/tiktok promocional para patitas',
  },
  {
    publicId: 'lv_0_20260225094658.mp4',
    alt: 'Reel promocional',
    caption: 'Reel/tiktok promocional Knitas',
  },
  {
    publicId: '2026-06-05-093722981.mp4',
    alt: 'Reel promocional',
    caption: 'Short educacional vaca santa',
  },
  {
    publicId: 'lv_0_20260615121133.mp4',
    alt: 'Reel promocional',
    caption: 'Reel/tiktok promocional hospisalud',
  },
  // Agrega más videos aquí (se creará un mockup por cada uno):
  // { publicId: 'estefany/reel-2', alt: '...', caption: '...' },
  // { publicId: 'estefany/reel-3', alt: '...', caption: '...' },
];
