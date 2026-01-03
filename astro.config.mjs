// @ts-check
import { defineConfig } from 'astro/config';
import tailwindcss from '@tailwindcss/vite';
import sitemap from '@astrojs/sitemap';

// https://astro.build/config
export default defineConfig({
  // MENTOR NOTE: A URL abaixo é essencial para o SEO e para o Mapa do Site
  site: 'https://amz-sites.netlify.app',
  
  vite: {
    plugins: [tailwindcss()]
  },

  integrations: [sitemap()]
});