// @ts-check
import { defineConfig } from 'astro/config';
import tailwind from "@astrojs/tailwind";

// https://astro.build/config
export default defineConfig({
  base: '/RC-Dental',
  build: {
    format: 'directory',
    client: 'dist/client',
    server: 'dist/server',
    assets: 'dist/assets'
  },
  integrations: [tailwind()],
  i18n: {
    defaultLocale: 'es',
    locales: ['es', 'en'],
    routing: {
      prefixDefaultLocale: false // es-> /, en-> /en/
    }
  }
});