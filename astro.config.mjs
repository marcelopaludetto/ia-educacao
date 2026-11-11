// @ts-check
import { defineConfig } from 'astro/config';

// Vercel: a URL de produção vem de VERCEL_PROJECT_PRODUCTION_URL e o site fica na raiz.
// GitHub Pages: o workflow preenche SITE_URL e BASE_PATH. Localmente vale "/".
const vercel = process.env.VERCEL_PROJECT_PRODUCTION_URL;
export default defineConfig({
  site: process.env.SITE_URL || (vercel ? `https://${vercel}` : 'http://localhost:4321'),
  base: process.env.BASE_PATH || '/',
  trailingSlash: 'ignore',
});
