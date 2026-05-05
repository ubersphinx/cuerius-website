import { defineConfig } from 'astro/config';

export default defineConfig({
  site: 'https://cueri.us',
  trailingSlash: 'never',
  build: {
    format: 'file',
  },
});
