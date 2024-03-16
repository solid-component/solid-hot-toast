import { defineConfig } from "vite";
import solid from "vite-plugin-solid";
import { resolve } from "path";
import dts from "vite-plugin-dts";

export default defineConfig({
  build: {
    lib: {
      entry: resolve(__dirname, "src/index.ts"),
      formats: ["es", 'cjs'],
      fileName: "index",
    },
    sourcemap: true,
    rollupOptions: {
      external: ["solid-js"],
    },
  },
  plugins: [
    dts({
      outDir: "./types",
    }),
    solid(),
  ],
});
