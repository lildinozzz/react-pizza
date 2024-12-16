import { createSlice } from "@reduxjs/toolkit";
import {
  TCategory,
  TCommonFilterInitialState,
} from "../../../../06_shared/types/types";
import * as reducers from "./reducers";

export const initialState: TCommonFilterInitialState = {
  categories: [] as TCategory[],
};

export const { actions, reducer } = createSlice({
  name: "commonFilter",
  initialState,
  reducers,
});
