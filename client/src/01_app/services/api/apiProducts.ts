import { AxiosInstance } from "axios";
import apiAxiosInstance from "./apiAxiosInstance";
import { TProduct } from "@shared/types/types";

class ProductsService {
  constructor(private client: AxiosInstance) {}

  async getAllProducts(): Promise<TProduct[]> {
    try {
      const response = await this.client<TProduct[]>("/products");
      if (response.status !== 200)
        return Promise.reject(
          new Error(
            `Wrong status code (expected 200, received: ${response.status})`
          )
        );
      return response.data;
    } catch (error) {
      console.error("Error fetching products:", error);
      return [];
    }
  }

  async getAllProductsByCategory(categoryId: number): Promise<TProduct[]> {
    try {
      const response = await this.client<TProduct[]>(`/products/${categoryId}`);

      if (response.status !== 200) {
        throw new Error(
          `Wrong status code (expected 200, received: ${response.status})`
        );
      }

      return response.data;
    } catch (error) {
      console.error("Error fetching products by category:", error);
      return [];
    }
  }
}

const productsService = new ProductsService(apiAxiosInstance);

export { productsService };
