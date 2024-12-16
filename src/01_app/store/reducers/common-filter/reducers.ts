import {
  TCommonFilterInitialState,
  TSetCategoriesPA,
} from "../../../../06_shared/types/types";

export const setCategories = (
  state: TCommonFilterInitialState,
  action: TSetCategoriesPA
) => {
  state.categories = action.payload;
};
