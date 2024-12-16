import { PayloadAction as PA } from "@reduxjs/toolkit";

export type TCategory = {
  name: string;
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
};

export type TSetCategoriesPA = PA<TCommonFilterInitialState["categories"]>;

export type TSetIsMobilePA = PA<TCommonUIInitialState["isMobile"]>;

export type TSetIsSidebarOpenPA = PA<TCommonUIInitialState["isSidebarOpen"]>;
