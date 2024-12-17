import { PayloadAction as PA } from "@reduxjs/toolkit";

export type TCategory = {
  id: number;
  name: string;
};

export type TPizza = {
  id: number;
  type: "constructor" | "new";
  dough: "traditional" | "thin";
  prices: number[];
  ingredients: string[];
  isConstructor: boolean;
  name: string;
  imageUrl: string;
  categoryId: number;
};

export type TStore = {
  commonUI: TCommonUIInitialState;
  commonFilter: TCommonFilterInitialState;
};

export type TCommonUIInitialState = {
  isMobile: boolean;
  isSidebarOpen: boolean;
};

export type TCommonFilterInitialState = {
  categories: TCategory[];
  pizzas: TPizza[];
};

export type TSetCategoriesPA = PA<TCommonFilterInitialState["categories"]>;

export type TSetPizzasPA = PA<TCommonFilterInitialState["pizzas"]>;

export type TSetIsMobilePA = PA<TCommonUIInitialState["isMobile"]>;

export type TSetIsSidebarOpenPA = PA<TCommonUIInitialState["isSidebarOpen"]>;
