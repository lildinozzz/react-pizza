import { useLocation } from "react-router-dom";
import { TProduct } from "@shared/types/types";

export const MenuPage = () => {
  const location = useLocation();
  const product = location.state?.product as TProduct;

  return (
    <div>
      <h1>{product?.name}</h1>
      <p>Price: {product?.prices[0]} $</p>
      <img src={product?.imageUrl} alt={product?.name} />
      <p>Ingredients: {product?.ingredients.join(", ")}</p>
    </div>
  );
};
