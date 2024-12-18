import { PayloadAction as PA } from "@reduxjs/toolkit";
import { TAuthState, TUserFromBackend } from "./auth/auth";

export type TCategory = {
  id: number;
  name: string;
};

export type TIngredient = TCategory;

export type TProductInfoState = {
  categories: TCategory[];
  ingredients: TIngredient[];
  products: TProduct[];
};

export type TProduct = {
  id: number;
  type: "constructor" | "new";
  prices: number[];
  ingredients: string[];
  dough: "traditional" | "thin";
  isConstructor: boolean;
  name: string;
  imageUrl: string;
};

export type TStore = {
  commonUI: TCommonUIInitialState;
  userInfo: TAuthState;
  productInfo: TProductInfoState;
};

export type TCommonUIInitialState = {
  isMobile: boolean;
  isSidebarOpen: boolean;
};

export type TUserInfoState = {
  user: TUserFromBackend;
};

export type TSetIsMobilePA = PA<TCommonUIInitialState["isMobile"]>;

export type TSetIsSidebarOpenPA = PA<TCommonUIInitialState["isSidebarOpen"]>;
