import react from "@vitejs/plugin-react-swc";
import tsconfigPaths from "vite-tsconfig-paths";
import checker from "vite-plugin-checker";

export const buildPlugins = () => {
  return [
    react(),
    tsconfigPaths(),
    checker({
      overlay: {
        initialIsOpen: false,
        position: "br",
      },
      terminal: true,
      typescript: true,
      eslint: {
        lintCommand: 'eslint "src/**/*.{ts,tsx}"',
      },
    }),
  ];
};
