import { TCategory, TProduct } from "@shared/types/types";
import { pizzas } from "../../../../server/pizzas";

export const getAllPizzas = (): TProduct[] => {
  try {
    return pizzas;
  } catch (error) {
    console.error("Error fetching all pizzas:", error);
    return [];
  }
};

export const geTProductsByCategory = async (
  categoryId: TCategory["id"]
): Promise<TProduct[]> => {
  try {
    const foundPizzas = await Promise.resolve(
      pizzas.filter((pizza) => pizza.categoryId === categoryId)
    );

    const filteredPizzas = foundPizzas.length > 0 ? foundPizzas : pizzas;

    return filteredPizzas;
  } catch (error) {
    console.error("Error fetching pizzas by category:", error);

    throw new Error("Failed to fetch pizzas by category");
  }
};

export const geTProductsByFilter = async (type: TProduct["type"]) => {
  try {
    const foundPizzas = await Promise.resolve(
      pizzas.filter((pizza) => pizza.type === type)
    );

    return foundPizzas || [];
  } catch (error) {
    console.error("Error fetching pizzas by type:", error);

    throw new Error("Failed to fetch pizzas by type");
  }
};
