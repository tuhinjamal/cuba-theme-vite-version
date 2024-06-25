import { defineConfig } from "vite";
import vue from "@vitejs/plugin-vue";
import { fileURLToPath } from "url";
import vitePluginRequire from "vite-plugin-require";

// https://vitejs.dev/config/
export default defineConfig({
  server: {
    host: "0.0.0.0",
    port: 5000,
  },
  preview: {
    port: 8080,
  },
  plugins: [
    vue(),
    // vite4
    vitePluginRequire.default(),
  ],
  resolve: {
    alias: {
      "@": fileURLToPath(new URL("./src", import.meta.url)),
    },
  },
  build: {
    // Specify the Shared Worker script output file name
    rollupOptions: {
      output: {
        // You can choose any name, but it should match the path in the Vue component
        chunkFileNames: "shared-worker.js",
      },
    },
  },
  // Disable code splitting for Shared Workers
  optimizeDeps: {
    exclude: ["shared-worker.js"],
  },
});
