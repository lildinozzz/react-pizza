export interface IRoute {
  link: string;
  key: string;
}

export interface IPathsConfig {
  home: IRoute;
  payment: IRoute;
}

export const pathsConfig: IPathsConfig = {
  home: {
    key: "home",
    link: "/",
  },

  payment: {
    key: "payment",
    link: "/payment",
  },
};
