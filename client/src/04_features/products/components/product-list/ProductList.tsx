import React from "react";
import { useAppSelector } from "@app/store/hooks";
import s from "./style.module.scss";
import { ProductCard } from "../product-card";
import { productInfoSelectors } from "@app/store/reducers/product-info/selectors";

export const ProductList: React.FC = () => {
  const { products } = useAppSelector(productInfoSelectors.productInfo);

  return (
    <div className={s.wrapper}>
      {products.map((product) => (
        <ProductCard key={product.id} product={product} />
      ))}
    </div>
  );
};
