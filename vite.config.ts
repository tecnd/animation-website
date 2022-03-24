import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import { imagetools } from "vite-imagetools";
import viteCompression from "vite-plugin-compression";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    react(),
    imagetools(),
    viteCompression(),
    viteCompression({ algorithm: "brotliCompress", ext: ".br" }),
  ],
  base: "/~zwang34/",
});
