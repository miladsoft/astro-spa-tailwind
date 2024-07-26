import { defineConfig } from 'astro/config';
import react from '@astrojs/react';
import tailwind from '@astrojs/tailwind';

export default defineConfig({
  base: '/astro-spa-tailwind/', //github repo name
  integrations: [
    react(),
    tailwind()
  ]
});
