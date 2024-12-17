import { createSlice } from "@reduxjs/toolkit";
import {
  TCategory,
  TCommonFilterInitialState,
  TPizza,
} from "../../../../06_shared/types/types";
import * as reducers from "./reducers";

export const initialState: TCommonFilterInitialState = {
  categories: [] as TCategory[],
  pizzas: [] as TPizza[],
};

export const { actions, reducer } = createSlice({
  name: "commonFilter",
  initialState,
  reducers,
});
