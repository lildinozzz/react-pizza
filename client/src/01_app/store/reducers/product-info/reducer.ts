import { createSlice } from "@reduxjs/toolkit";
import { TProductInfoState } from "@shared/types/types";
import {
  getAllCategories,
  getAllIngredients,
  getAllProducts,
} from "./reducers";

const initialState: TProductInfoState = {
  categories: [],
  ingredients: [],
  products: [],
};

export const { actions, reducer } = createSlice({
  name: "categories",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(getAllCategories.fulfilled, (state, action) => {
      state.categories = action.payload;
    });
    builder.addCase(getAllIngredients.fulfilled, (state, action) => {
      state.ingredients = action.payload;
    });
    builder.addCase(getAllProducts.fulfilled, (state, action) => {
      state.products = action.payload;
    });
  },
});
