import type { AxiosInstance } from "axios";
import apiAxiosInstance from "./apiAxiosInstance";
import { TCategory } from "@shared/types/types";

class IngredientService {
  constructor(private client: AxiosInstance) {}

  async getAllIngredients(): Promise<TCategory[]> {
    const response = await this.client<TCategory[]>("/ingredients");
    if (response.status !== 200)
      return Promise.reject(
        new Error(
          `Wrong status code (expected 200, received: ${response.status})`
        )
      );
    return response.data;
  }
}

const ingredientService = new IngredientService(apiAxiosInstance);

export { ingredientService };