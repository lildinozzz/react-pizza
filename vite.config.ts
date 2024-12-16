import { defineConfig, loadEnv } from "vite";
import { buildResolvers } from "./config/build/buildResolvers";
import { buildViteConfig } from "./config/build/buildViteConfig";
import react from "@vitejs/plugin-react-swc";
import buildCss from "./config/build/buildCss";
import buildDevServer from "./config/build/buildDevServer";

export default defineConfig(({ mode }) => {
  const configEnv = loadEnv(mode, process.cwd(), "");

  return {
    plugins: [react()],
    resolve: buildResolvers(),
    css: buildCss(),
    define: {
      "process.env": JSON.stringify(configEnv),
    },
    build: buildViteConfig(),
    server: buildDevServer(configEnv),
    envPrefix: "REACT",
  };
});
