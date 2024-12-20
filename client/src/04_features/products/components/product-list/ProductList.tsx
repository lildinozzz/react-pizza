import React from "react";
import { useAppSelector } from "@app/store/hooks";
import s from "./style.module.scss";
import { ProductCard } from "../product-card";
import { productInfoSelectors } from "@app/store/reducers/product-info/selectors";

export const ProductList: React.FC = () => {
  const { products } = useAppSelector(productInfoSelectors.productInfo);

  return (
    <>
      {!!products.length && (
        <div className={s.wrapper}>
          {products.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      )}

      {!products.length && (
        <div className={s.wrapperEmpty}>
          <div className={s.wrapperEmptyMeta}>
            <div className={s.wrapperEmptyMetaTitle}>
              Unfortunately, we couldn't find any pizzas matching your filters
            </div>

            <p>Try adjusting the filters or check back later</p>
          </div>

          <img src="/images/products-empty.png" alt="No products found" />
        </div>
      )}
    </>
  );
};
