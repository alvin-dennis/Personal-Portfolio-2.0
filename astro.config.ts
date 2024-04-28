import { defineConfig } from 'astro/config';
import react from '@astrojs/react';
import tailwind from '@astrojs/tailwind';
import sitemap from "@astrojs/sitemap";

// https://astro.build/config
export default defineConfig({
  site: process.env.CI ? 'https://alvindennis.vercel.app' : 'http://localhost:4321',
  integrations: [react(), tailwind({
    applyBaseStyles: false
  }), sitemap({
    filter: (page) => page !== 'https://alvindennis.vercel.app/',
  })]
});