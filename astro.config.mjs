// @ts-check
import { defineConfig } from "astro/config";
import tailwindcss from "@tailwindcss/vite";
import icon from "astro-icon";
import mdx from "@astrojs/mdx";
import sitemap from "@astrojs/sitemap";

// https://astro.build/config
export default defineConfig({
  site: "https://wintertia.pages.dev",
  devToolbar: {
    enabled: false,
  },
  vite: {
    plugins: [tailwindcss()],
    server: {
      hmr: true,
      watch: {
        usePolling: true,
      },
    },
  },
  markdown: {
    shikiConfig: {
      theme: "rose-pine-moon",
    },
  },

  integrations: [icon(), mdx(), sitemap()],
});
