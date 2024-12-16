import { CSSOptions } from "vite";

export default function buildCss(): CSSOptions {
  return {
    modules: {
      generateScopedName: "[local]__[hash:base64:10]",
    },
    preprocessorOptions: {
      scss: {
        api: "modern",
        silenceDeprecations: ["mixed-decls", "slash-div"],
      },
    },
  };
}
