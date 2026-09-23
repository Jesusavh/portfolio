import { Cloudinary } from '@cloudinary/url-gen';
import { scale } from '@cloudinary/url-gen/actions/resize';
import { trim } from '@cloudinary/url-gen/actions/videoEdit';

const cloudName = import.meta.env.PUBLIC_CLOUDINARY_CLOUD_NAME ?? '';

const cld = new Cloudinary({
  cloud: { cloudName },
  url: { analytics: false, forceVersion: false },
});

const assertCloudName = (): void => {
  if (!cloudName) {
    throw new Error('Falta PUBLIC_CLOUDINARY_CLOUD_NAME en el archivo .env');
  }
};

export interface CloudinaryUrlOptions {
  width?: number;
  height?: number;
}

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
  assertCloudName();
  const video = cld.video(publicId);
  video.format('auto').quality('auto');
  video.resize(buildResize({ width: 720, ...options }));
  return video.toURL();
};

/**
 * Thumbnail (poster) del primer fotograma: f_auto, q_auto y so_0.
 */
export const cldPosterUrl = (publicId: string, options: CloudinaryUrlOptions = {}): string => {
  assertCloudName();
  const video = cld.video(publicId);
  video.format('auto').quality('auto').videoEdit(trim().startOffset(0));
  video.resize(buildResize({ width: 720, ...options }));
  return video.toURL();
};
