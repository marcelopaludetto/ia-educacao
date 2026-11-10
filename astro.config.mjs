// @ts-check
import { defineConfig } from 'astro/config';

// No GitHub Pages o site fica em https://<usuario>.github.io/<repositorio>/.
// O workflow de deploy preenche SITE_URL e BASE_PATH; localmente vale "/".
export default defineConfig({
  site: process.env.SITE_URL || 'http://localhost:4321',
  base: process.env.BASE_PATH || '/',
  trailingSlash: 'ignore',
});
