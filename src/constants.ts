/**
 * Configuración central de ImageKit.io.
 *
 * 1. Crea tu cuenta en https://imagekit.io (plan gratuito).
 * 2. Sube las imágenes/reels en la carpeta `portfolio/`.
 * 3. Reemplaza `tu-id-de-imagekit` por tu ImageKit ID público
 *    (lo encuentras en Dashboard → URL endpoints).
 *
 * Todas las imágenes y vídeos del sitio se sirven desde ImageKit con
 * transformaciones al vuelo (formato/calidad adaptativas).
 */
export const imagekitId = 'zxcnh2alc';

export const imagekitBase =
  imagekitId === 'zxcnh2alc'
    ? 'https://ik.imagekit.io/zxcnh2alc'
    : `https://ik.imagekit.io/${imagekitId}`;

export interface IkOptions {
  /** Ancho en píxeles. */
  w?: number;
  /** Alto en píxeles. */
  h?: number;
  /** Calidad (1-100). */
  q?: number;
  /** Formato: `auto`, `webp`, `avif`, `jpg`, `png`. */
  f?: string;
}

/**
 * Construye la URL de un asset de ImageKit con transformaciones al vuelo.
 * Ejemplo: ik('portfolio/cliente-1/feed.jpg', { w: 800 })
 */
export const ik = (path: string, { w, h, q = 80, f = 'auto' }: IkOptions = {}): string => {
  const transforms = [...(w ? [`w-${w}`] : []), ...(h ? [`h-${h}`] : []), `f-${f}`, `q-${q}`];
  const query = `?tr=${transforms.join(',')}`;
  return `${imagekitBase}/${path.replace(/^\/+/, '')}${query}`;
};
