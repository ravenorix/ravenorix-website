// @ts-check
import { defineConfig } from 'astro/config';
import tailwindcss from '@tailwindcss/vite';
import sitemap from '@astrojs/sitemap';
import mdx from '@astrojs/mdx';
import cloudflare from '@astrojs/cloudflare';

// https://astro.build/config
export default defineConfig({
  site: 'https://ravenorix.com',
  output: 'server',
  adapter: cloudflare(),

  vite: {
    plugins: [tailwindcss()]
  },

  integrations: [
    sitemap(),
    mdx()
  ]
});