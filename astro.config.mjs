// @ts-check
import { defineConfig } from "astro/config";

import tailwindcss from "@tailwindcss/vite";
import react from "@astrojs/react";
import icon from "astro-icon";

// https://astro.build/config
export default defineConfig({
  site: "https://elpitagoras14.github.io/",
  vite: {
    plugins: [tailwindcss()],
  },
  integrations: [react(), icon()],
});
