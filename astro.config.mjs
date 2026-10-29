// Astro config — personal homepage v0 (local build only; deploy target later: GitHub Pages, me.sommeatlas.com)
import { defineConfig } from 'astro/config';

export default defineConfig({
  site: 'https://me.sommeatlas.com',
  i18n: {
    defaultLocale: 'en',
    locales: ['en', 'ja'],
    routing: { prefixDefaultLocale: false },
  },
});
