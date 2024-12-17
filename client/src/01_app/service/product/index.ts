import { TCategory, TPizza } from "@shared/types/types";
import { pizzas } from "../../../../server/pizzas";

export const getAllPizzas = (): TPizza[] => {
  try {
    return pizzas;
  } catch (error) {
    console.error("Error fetching all pizzas:", error);
    return [];
  }
};

export const getPizzasByCategory = async (
  categoryId: TCategory["id"]
): Promise<TPizza[]> => {
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

export const getPizzasByFilter = async (type: TPizza["type"]) => {
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
