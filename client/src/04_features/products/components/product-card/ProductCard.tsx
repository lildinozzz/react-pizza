import { TProduct } from "@shared/types/types";
import s from "./style.module.scss";

type TProductCardProps = {
  pizza: TProduct;
};

export const ProductCard = ({ pizza }: TProductCardProps) => {
  return (
    <div className={s.wrapperCard}>
      <img src={pizza.imageUrl} alt={pizza.name} />

      <div className={s.wrapperCardTitle}>{pizza.name}</div>

      <p className={s.wrapperCardIngredients}>{pizza.ingredients}</p>

      <div className={s.wrapperCardBottom}>
        <span>
          от
          <span className={s.wrapperCardBottomPrice}> {pizza.prices[0]} ₽</span>
        </span>
        <div className={s.wrapperCardBottomActions}></div>
      </div>
    </div>
  );
};
