// @ts-check
import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';

// Change `site` to the final domain before deploying (keep it in sync with src/data/site.ts).
export default defineConfig({
  site: 'https://pritam-haldar.vercel.app',
  trailingSlash: 'always',
  integrations: [sitemap()],
  // The archive was renamed to the gallery; keep old links working.
  redirects: { '/archive': '/gallery/' },
});
