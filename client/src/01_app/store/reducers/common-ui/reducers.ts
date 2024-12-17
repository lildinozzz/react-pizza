import {
  TCommonUIInitialState,
  TSetIsMobilePA,
  TSetIsSidebarOpenPA,
} from "../../../../06_shared/types/types";

export const setIsSidebarOpen = (
  state: TCommonUIInitialState,
  action: TSetIsSidebarOpenPA
) => {
  state.isSidebarOpen = action.payload;
};

export const setIsMobile = (
  state: TCommonUIInitialState,
  action: TSetIsMobilePA
) => {
  state.isMobile = action.payload;
};
