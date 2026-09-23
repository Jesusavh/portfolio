import { getPermalink } from './utils/permalinks';

/** ➜ Navegación del header: enlaza a las secciones de la página principal. */
export const headerData = {
  links: [
    { text: 'Inicio', href: getPermalink('/#inicio') },
    { text: 'Trabajo', href: getPermalink('/#trabajo') },
    { text: 'Experiencia', href: getPermalink('/#experiencia') },
    { text: 'Servicios', href: getPermalink('/#servicios') },
    { text: 'Resultados', href: getPermalink('/#resultados') },
    { text: 'Contacto', href: getPermalink('/#contacto') },
  ],
  actions: [{ text: 'Hablemos', href: getPermalink('/#contacto'), variant: 'primary' as const }],
};

/** ➜ Pie de página: enlaces rápidos y redes sociales. */
export const footerData = {
  links: [
    {
      title: 'Secciones',
      links: [
        { text: 'Inicio', href: getPermalink('/#inicio') },
        { text: 'Trabajo reciente', href: getPermalink('/#trabajo') },
        { text: 'Experiencia', href: getPermalink('/#experiencia') },
        { text: 'Servicios', href: getPermalink('/#servicios') },
        { text: 'Resultados', href: getPermalink('/#resultados') },
      ],
    },
  ],
  secondaryLinks: [],
  socialLinks: [
    { ariaLabel: 'Instagram', icon: 'tabler:brand-instagram', href: 'https://instagram.com/estefanymakeup_ve' },
    { ariaLabel: 'TikTok', icon: 'tabler:brand-tiktok', href: 'https://tiktok.com/@estefanyvh9' },
  ],
  footNote: 'Social Media & Community Management · Hecho con ♥',
};
