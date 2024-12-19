import { createSlice, PayloadAction as PA } from "@reduxjs/toolkit";
import { TProductInfoState } from "@shared/types/types";
import {
  getAllCategories,
  getAllIngredients,
  getAllProducts,
  getAllProductsByCategory,
  getAllProductsByQuery,
  getAllProductsBySearch,
} from "./reducers";

const initialState: TProductInfoState = {
  categories: [],
  ingredients: [],
  products: [],
  currentCartCounter: 0,
};

export const { actions, reducer } = createSlice({
  name: "categories",
  initialState,
  reducers: {
    setCurrentCartCounter: (state, action: PA<(prev: number) => number>) => {
      state.currentCartCounter = action.payload(state.currentCartCounter);
    },
  },
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
    builder.addCase(getAllProductsByCategory.fulfilled, (state, action) => {
      state.products = action.payload;
    });
    builder.addCase(getAllProductsByQuery.fulfilled, (state, action) => {
      state.products = action.payload;
    });
    builder.addCase(getAllProductsBySearch.fulfilled, (state, action) => {
      state.products = action.payload;
    });
  },
});
