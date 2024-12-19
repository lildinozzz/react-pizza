import { categoriesService } from "@app/services/api/apiCategories";
import { ingredientService } from "@app/services/api/apiIngredients";
import { productsService } from "@app/services/api/apiProducts";
import { createAsyncThunk } from "@reduxjs/toolkit";
import { TCategory, TIngredient, TProduct } from "@shared/types/types";

export const getAllCategories = createAsyncThunk<TCategory[]>(
  "categories/getAllCategories",
  () => categoriesService.getAllCategories()
);

export const getAllIngredients = createAsyncThunk<TIngredient[]>(
  "ingredients/getAllIngredients",
  () => ingredientService.getAllIngredients()
);

export const getAllProducts = createAsyncThunk<TProduct[]>(
  "products/getAllProducts",
  () => productsService.getAllProducts()
);

export const getAllProductsByCategory = createAsyncThunk<TProduct[], number>(
  "products/getAllProductsByCategory",
  (categoryId: number) => productsService.getAllProductsByCategory(categoryId)
);

export const getAllProductsByQuery = createAsyncThunk<TProduct[], string>(
  "products/getAllProductsByQuery",
  (query: string) => productsService.getAllProductsByQuery(query)
);
