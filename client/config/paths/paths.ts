export interface IRoute {
  link: string;
  key: string;
}

export interface IPathsConfig {
  home: IRoute;
  payment: IRoute;
  orders: IRoute;
  menu: IRoute;
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

  orders: {
    key: "orders",
    link: "orders",
  },

  menu: {
    key: "menu",
    link: "menu",
  },
};
