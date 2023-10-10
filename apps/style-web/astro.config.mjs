import { defineConfig } from "astro/config";
import compressor from "astro-compressor";
import rehypeGithubBlockquotes from "@kth/rehype-github-blockquotes";

// https://astro.build/config
export default defineConfig({
  build: {
    assets: "style/_astro",
  },
  integrations: [compressor()],
  markdown: {
    rehypePlugins: [rehypeGithubBlockquotes],
  },
});
