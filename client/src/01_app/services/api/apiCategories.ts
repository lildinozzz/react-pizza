import type { AxiosInstance } from "axios";
import apiAxiosInstance from "./apiAxiosInstance";
import { TCategory } from "@shared/types/types";

class CategoriesService {
  constructor(private client: AxiosInstance) {}

  async getAllCategories(): Promise<TCategory[]> {
    const response = await this.client<TCategory[]>("/categories");
    if (response.status !== 200)
      return Promise.reject(
        new Error(
          `Wrong status code (expected 200, received: ${response.status})`
        )
      );
    return response.data;
  }
}

const categoriesService = new CategoriesService(apiAxiosInstance);

export { categoriesService };
