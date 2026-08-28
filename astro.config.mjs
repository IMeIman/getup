// @ts-check
import { defineConfig } from "astro/config";
import tailwindcss from "@tailwindcss/vite";

// https://astro.build/config
export default defineConfig({
  site: "https://IMeIman.github.io/getup",
  base: "/getup/",
  output: "static",
  vite: {
    plugins: [tailwindcss()],
  },
});
