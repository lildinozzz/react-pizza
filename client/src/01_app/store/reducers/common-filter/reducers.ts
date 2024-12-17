import {
  TCommonFilterInitialState,
  TSetCategoriesPA,
  TSetPizzasPA,
} from "../../../../06_shared/types/types";

export const setCategories = (
  state: TCommonFilterInitialState,
  action: TSetCategoriesPA
) => {
  state.categories = action.payload;
};

export const setPizzas = (
  state: TCommonFilterInitialState,
  action: TSetPizzasPA
) => {
  state.pizzas = action.payload;
};
