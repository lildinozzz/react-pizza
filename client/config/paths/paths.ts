export interface IRoute {
  link: string;
  key: string;
}

export interface IPathsConfig {
  home: IRoute;
  settings: IRoute;
  cart: IRoute;
}

export const pathsConfig: IPathsConfig = {
  home: {
    key: "home",
    link: "/",
  },

  settings: {
    key: "settings",
    link: "/settings",
  },

  cart: {
    key: "cart",
    link: "/cart",
  },
};
