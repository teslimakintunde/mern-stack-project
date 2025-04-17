import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  build: {
    outDir: "../.vercel/output/static",
    emptyOutDir: true,
    sourcemap: true, // Recommended for debugging
  },
});
