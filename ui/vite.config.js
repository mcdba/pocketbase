import { defineConfig } from "vite";
import { svelte } from "@sveltejs/vite-plugin-svelte";

// see https://vitejs.dev/config
export default defineConfig({
    server: {
        port: 3000,
    },
    envPrefix: "PB",
    base: "./",
    build: {
        chunkSizeWarningLimit: 1000,
        reportCompressedSize: false,
    },
    plugins: [
        svelte({
            experimental: {
                useVitePreprocess: true,
            },
            onwarn: (warning, handler) => {
                if (warning.code.startsWith("a11y-")) {
                    return; // silence a11y warnings
                }
                handler(warning);
            },
        }),
    ],
    resolve: {
        alias: {
            "@": __dirname + "/src",
        },
    },
});
