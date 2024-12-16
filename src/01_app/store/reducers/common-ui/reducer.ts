import { createSlice } from "@reduxjs/toolkit";
import { TCommonUIInitialState } from "../../../../06_shared/types/types";
import * as reducers from "./reducers";

export const initialState: TCommonUIInitialState = {
  isMobile: false,
  isSidebarOpen: false,
};

export const { actions, reducer } = createSlice({
  name: "commonUI",
  initialState,
  reducers,
});
