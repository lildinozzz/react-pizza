import { resolve } from "path";

export const buildResolvers = () => {
  return {
    alias: {
      "@typography": resolve(
        __dirname,
        "../../src/01_app/scss/typography.scss"
      ),
      "@media": resolve(__dirname, "../../src/01_app/scss/media.scss"),
      "@mixins": resolve(__dirname, "../../src/01_app/scss/mixins.scss"),
      "@store": resolve(__dirname, "../../src/01_app/store"),
      "@widgets": resolve(__dirname, "../../src/03_widgets"),
      "@features": resolve(__dirname, "../../src/04_features"),
      "@components": resolve(__dirname, "../../src/01_app/components"),
      "@shared": resolve(__dirname, "../../src/06_shared"),
      "@icons": resolve(__dirname, "../../src/06_shared/icons"),
      "@hooks": resolve(__dirname, "../../src/06_shared/hooks"),
      "@pages": resolve(__dirname, "../../src/02_pages"),
    },
  };
};
