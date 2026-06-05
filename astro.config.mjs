// @ts-check
import { defineConfig } from "astro/config";

// https://astro.build/config
export default defineConfig({
    vite: {
        resolve: {
            // Allow folder-per-component imports to resolve `index.astro`
            extensions: [".mjs", ".js", ".mts", ".ts", ".jsx", ".tsx", ".json", ".astro"],
        },
    },
});
