import { TCategory } from "@shared/types/types";
import { categories } from "../../../../server/categories";

export const getAllCategories = (): TCategory[] => {
  try {
    return categories;
  } catch (error) {
    console.error("Error fetching all categories:", error);
    return [];
  }
};
