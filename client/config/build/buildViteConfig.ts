import { resolve } from "path";
import { BuildOptions } from "vite";

export const buildViteConfig = (): BuildOptions => {
  return {
    target: "modules",
    outDir: "dist",
    assetsDir: "static",
    sourcemap: false,
    minify: "esbuild",
    cssMinify: "esbuild",
    cssCodeSplit: true,
    chunkSizeWarningLimit: 700,
    rollupOptions: {
      input: {
        main: resolve(__dirname, "../../index.html"),
      },
      onwarn(warning, warn) {
        if (!warning.message.includes("eval")) {
          warn(warning);
        }
      },
      output: {
        manualChunks(id) {
          if (id.includes("node_modules")) {
            return id
              .toString()
              .split("node_modules/")[1]
              .split("/")[0]
              .toString();
          }

          return undefined;
        },
      },
    },
    assetsInlineLimit: 0,
  };
};
