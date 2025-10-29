import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

export default defineConfig({
  base: "/Intensivo_M365_C/",
  plugins: [react()],
  build: {
    outDir: "dist",
    sourcemap: true
  }
});
