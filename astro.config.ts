import mdx from "@astrojs/mdx";
import { defineConfig } from "astro/config";
// import { config as mdxConfig } from './src/config/mdx.config'
import { config as shikiConfig } from "./src/config/syntax-highlighter.config";
import keystatic from "@keystatic/astro";
import react from "@astrojs/react";
import node from "@astrojs/node";

export default defineConfig({
  adapter: node({ mode: "standalone" }),
  integrations: [keystatic(), mdx(), react()],
  markdown: {
    shikiConfig,
  },
  output: "hybrid",
  server: {
    port: 3000,
  },
});
