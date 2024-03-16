import { defineConfig } from "vite";
import solid from "vite-plugin-solid";
import { resolve } from "path";
import dts from "vite-plugin-dts";

export default defineConfig({
  build: {
    lib: {
      // entry: resolve(__dirname, "src/index.ts"),
      entry: resolve(__dirname, "src/headless/index.ts"),
      formats: ["es", "cjs"],
      fileName: "index",
    },
    outDir: 'headless',
    sourcemap: true,
    rollupOptions: {
      external: ["solid-js"],
    },
  },
  plugins: [dts(), solid()],
});
