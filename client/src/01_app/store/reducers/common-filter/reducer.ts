import { createSlice } from "@reduxjs/toolkit";
import {
  TCategory,
  TCommonFilterInitialState,
  TProduct,
} from "../../../../06_shared/types/types";
import * as reducers from "./reducers";

export const initialState: TCommonFilterInitialState = {
  categories: [] as TCategory[],
  pizzas: [] as TProduct[],
};

export const { actions, reducer } = createSlice({
  name: "commonFilter",
  initialState,
  reducers,
});
