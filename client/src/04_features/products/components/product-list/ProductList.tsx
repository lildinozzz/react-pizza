import React from "react";
import { useAppSelector } from "@app/store/hooks";
import { commonFilterSelectors } from "@store/reducers/common-filter/selectors";
import s from "./style.module.scss";
import { ProductCard } from "../product-card";

export const ProductList: React.FC = () => {
  const { pizzas } = useAppSelector(commonFilterSelectors.commonFilter);

  return (
    <div className={s.wrapper}>
      {pizzas.map((pizza) => (
        <ProductCard key={pizza.id} pizza={pizza} />
      ))}
    </div>
  );
};
