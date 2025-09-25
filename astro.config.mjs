// @ts-check
import { defineConfig } from "astro/config";
import tailwindcss from "@tailwindcss/vite";
import icon from "astro-icon";

// https://astro.build/config
export default defineConfig({
  vite: {
    plugins: [tailwindcss()],
    server: {
      hmr: true,
      watch: {
        usePolling: true,
      },
    },
  },

  integrations: [icon()],
});
