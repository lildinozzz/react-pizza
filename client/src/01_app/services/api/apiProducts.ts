import { AxiosInstance } from "axios";
import apiAxiosInstance from "./apiAxiosInstance";
import { TProduct } from "@shared/types/types";

class ProductsService {
  constructor(private client: AxiosInstance) {}

  async getAllProducts(): Promise<TProduct[]> {
    const response = await this.client<TProduct[]>("/products");
    if (response.status !== 200)
      return Promise.reject(
        new Error(
          `Wrong status code (expected 200, received: ${response.status})`
        )
      );
    return response.data;
  }
}

const productsService = new ProductsService(apiAxiosInstance);

export { productsService };
