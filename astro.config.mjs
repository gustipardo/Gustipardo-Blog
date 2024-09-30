// @ts-check
import { defineConfig } from 'astro/config';

import tailwind from '@astrojs/tailwind';

import icon from 'astro-icon';

import sitemap from '@astrojs/sitemap';

import mdx from '@astrojs/mdx';

// https://astro.build/config
export default defineConfig({
  site: import.meta.env.PUBLIC_HOST_URL,
  integrations: [tailwind(), icon({
    include: {
      lucide: ["*"]
    }}
  ), sitemap(), mdx()]
});