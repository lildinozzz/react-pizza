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
              К сожалению, мы не нашли пиццы по вашим фильтрам
            </div>

            <p>Попробуйте изменить фильтры или попробовать позже</p>
          </div>

          <img src="/images/products-empty.png" />
        </div>
      )}
    </>
  );
};
