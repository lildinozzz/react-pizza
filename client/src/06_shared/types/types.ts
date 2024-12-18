import { PayloadAction as PA } from "@reduxjs/toolkit";
import { TAuthState, TUserFromBackend } from "./auth/auth";

export type TCategory = {
  id: number;
  name: string;
};

export type TProduct = {
  id: number;
  type: "constructor" | "new";
  dough: "traditional" | "thin";
  prices: number[];
  ingredients: string;
  isConstructor: boolean;
  name: string;
  imageUrl: string;
  categoryId: number;
};

export type TStore = {
  commonUI: TCommonUIInitialState;
  commonFilter: TCommonFilterInitialState;
  userInfo: TAuthState;
};

export type TCommonUIInitialState = {
  isMobile: boolean;
  isSidebarOpen: boolean;
};

export type TCommonFilterInitialState = {
  categories: TCategory[];
  pizzas: TProduct[];
};

export type TUserInfoState = {
  user: TUserFromBackend;
};

export type TSetCategoriesPA = PA<TCommonFilterInitialState["categories"]>;

export type TSeTProductsPA = PA<TCommonFilterInitialState["pizzas"]>;

export type TSetIsMobilePA = PA<TCommonUIInitialState["isMobile"]>;

export type TSetIsSidebarOpenPA = PA<TCommonUIInitialState["isSidebarOpen"]>;
