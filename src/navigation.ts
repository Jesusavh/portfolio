import { getPermalink } from './utils/permalinks';

/** ➜ Navegación del header: enlaza a las secciones de la página principal. */
export const headerData = {
  links: [
    { text: 'Inicio', href: getPermalink('/#inicio') },
    { text: 'Casos', href: getPermalink('/#casos') },
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
        { text: 'Casos de éxito', href: getPermalink('/#casos') },
        { text: 'Servicios', href: getPermalink('/#servicios') },
        { text: 'Resultados', href: getPermalink('/#resultados') },
      ],
    },
  ],
  secondaryLinks: [],
  socialLinks: [
    { ariaLabel: 'Instagram', icon: 'tabler:brand-instagram', href: 'https://instagram.com/tu-perfil' },
    { ariaLabel: 'TikTok', icon: 'tabler:brand-tiktok', href: 'https://tiktok.com/@tu-perfil' },
    { ariaLabel: 'LinkedIn', icon: 'tabler:brand-linkedin', href: 'https://linkedin.com/in/tu-perfil' },
    { ariaLabel: 'YouTube', icon: 'tabler:brand-youtube', href: 'https://youtube.com/@tu-perfil' },
    { ariaLabel: 'WhatsApp', icon: 'tabler:brand-whatsapp', href: 'https://wa.me/584248672859' },
  ],
  footNote: 'Social Media & Community Management · Hecho con ♥',
};
