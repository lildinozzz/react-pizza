import { PayloadAction as PA } from "@reduxjs/toolkit";
import { TAuthState, TUserFromBackend } from "./auth/auth";

export type TCategory = {
  id: number;
  name: string;
};

export type TIngredient = TCategory & { value: string };

export type TProductInfoState = {
  categories: TCategory[];
  ingredients: TIngredient[];
  products: TProduct[];
  currentCartCounter: number;
};

export type TProduct = {
  id: number;
  type: "constructor" | "new";
  prices: string[];
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

export type TSetCurrentCartCounter = PA<
  TProductInfoState["currentCartCounter"]
>;

export type TSetIsSidebarOpenPA = PA<TCommonUIInitialState["isSidebarOpen"]>;
