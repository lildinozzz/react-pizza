import {
  TCommonFilterInitialState,
  TSetCategoriesPA,
  TSeTProductsPA,
} from "../../../../06_shared/types/types";

export const setCategories = (
  state: TCommonFilterInitialState,
  action: TSetCategoriesPA
) => {
  state.categories = action.payload;
};

export const seTProducts = (
  state: TCommonFilterInitialState,
  action: TSeTProductsPA
) => {
  state.pizzas = action.payload;
};
