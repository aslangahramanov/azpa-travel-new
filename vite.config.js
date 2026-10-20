import { defineConfig } from "vite";
import { resolve } from "node:path";

const pages = [
  "index",
  "about",
  "contact",
  "articles",
  "article",
  "tours",
  "tour-detail",
  "vizas",
  "viza-detail",
  "countries",
  "country-detail",
];

export default defineConfig({
  build: {
    rollupOptions: {
      input: Object.fromEntries(
        pages.map((page) => [
          page,
          resolve(__dirname, `${page}.html`),
        ]),
      ),
    },
  },
});