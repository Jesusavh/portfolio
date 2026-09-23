import { Cloudinary } from '@cloudinary/url-gen';
import { scale } from '@cloudinary/url-gen/actions/resize';
import { trim } from '@cloudinary/url-gen/actions/videoEdit';

// El cloud name es público (aparece en cada URL de asset). Se lee de la
// variable de entorno y, si no está definida (p. ej. build sin .env), se
// usa este valor por defecto para no romper el build.
const cloudName = import.meta.env.PUBLIC_CLOUDINARY_CLOUD_NAME || 'vhqilnly';

const cld = new Cloudinary({
  cloud: { cloudName },
  url: { analytics: false, forceVersion: false },
});

export interface CloudinaryUrlOptions {
  width?: number;
  height?: number;
}

const VIDEO_EXTENSION = /\.(mp4|webm|mov|m4v|avi|mkv|mpeg|ogv)$/i;

/**
 * Normaliza el public ID: Cloudinary sirve con `f_auto`, por lo que la
 * extensión (`.mp4`, etc.) va como formato de entrega, no en el ID.
 */
const normalizePublicId = (publicId: string): string => publicId.replace(VIDEO_EXTENSION, '');

const buildResize = ({ width, height }: CloudinaryUrlOptions = {}) => {
  const resize = scale();
  if (width) resize.width(width);
  if (height) resize.height(height);
  return resize;
};

/**
 * URL de vídeo optimizada para el plan gratuito: f_auto, q_auto y ancho
 * limitado (c_scale). El ancho por defecto es 720px.
 */
export const cldVideoUrl = (publicId: string, options: CloudinaryUrlOptions = {}): string => {
  const video = cld.video(normalizePublicId(publicId));
  video.format('auto').quality('auto');
  video.resize(buildResize({ width: 720, ...options }));
  return video.toURL();
};

/**
 * Thumbnail (poster) del primer fotograma: f_auto, q_auto y so_0.
 */
export const cldPosterUrl = (publicId: string, options: CloudinaryUrlOptions = {}): string => {
  const video = cld.video(normalizePublicId(publicId));
  video.format('auto').quality('auto').videoEdit(trim().startOffset(0));
  video.resize(buildResize({ width: 720, ...options }));
  return video.toURL();
};
