import { defineConfig } from "astro/config";
import compressor from "astro-compressor";

// https://astro.build/config
export default defineConfig({
  build: {
    assets: "style/_astro",
  },
  integrations: [compressor()],
});
