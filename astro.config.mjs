// @ts-check
import { defineConfig } from "astro/config";
import sitemap from "@astrojs/sitemap";

// https://astro.build/config
export default defineConfig({
    site: "https://zar.mx",
    integrations: [
        sitemap({
            // The /og pages are internal render targets, not content
            filter: (page) => !page.includes("/og"),
        }),
    ],
    vite: {
        resolve: {
            // Allow folder-per-component imports to resolve `index.astro`
            extensions: [".mjs", ".js", ".mts", ".ts", ".jsx", ".tsx", ".json", ".astro"],
        },
    },
});
