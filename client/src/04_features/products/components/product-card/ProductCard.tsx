import { TProduct } from "@shared/types/types";
import s from "./style.module.scss";

type TProductCardProps = {
  product: TProduct;
};

export const ProductCard = ({ product }: TProductCardProps) => {
  const { imageUrl, name, ingredients, prices } = product;

  const filteredIngredients = ingredients
    .map((ingredient) => ingredient.trim())
    .join(", ");

  return (
    <div className={s.wrapperCard}>
      <img src={imageUrl} alt={name} />

      <div className={s.wrapperCardTitle}>{name}</div>

      <p className={s.wrapperCardIngredients}>{filteredIngredients}</p>

      <div className={s.wrapperCardBottom}>
        <span>
          от
          <span className={s.wrapperCardBottomPrice}> {prices[0]} ₽</span>
        </span>
        <div className={s.wrapperCardBottomActions}></div>
      </div>
    </div>
  );
};
