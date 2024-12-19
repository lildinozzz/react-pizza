import { TProduct } from "@shared/types/types";
import s from "./style.module.scss";
import { Button } from "@app/components";
import {
  CartButtonIcon,
  ConstructorButtonIcon,
  ConstructorIcon,
} from "@shared/icons";

type TProductCardProps = {
  product: TProduct;
};

export const ProductCard = ({ product }: TProductCardProps) => {
  const { imageUrl, name, ingredients, prices, isConstructor } = product;

  const filteredIngredients = ingredients
    .map((ingredient) => ingredient.trim())
    .join(", ");

  const buttonTextComputed = () => {
    if (isConstructor) return "Собрать";

    return "Добавить";
  };

  const buttonIconComputed = () => {
    if (isConstructor) return <ConstructorButtonIcon />;

    return <CartButtonIcon />;
  };

  const buttonText = buttonTextComputed();
  const renderIcon = buttonIconComputed();

  return (
    <div className={s.wrapperCard}>
      {isConstructor && <ConstructorIcon className={s.wrapperCardIcon} />}

      <img src={imageUrl} alt={name} />

      <div className={s.wrapperCardTitle}>{name}</div>

      <p className={s.wrapperCardIngredients}>{filteredIngredients}</p>

      <div className={s.wrapperCardBottom}>
        <span>
          от
          <span className={s.wrapperCardBottomPrice}> {prices[0]} ₽</span>
        </span>
        <div className={s.wrapperCardBottomActions}>
          <Button icon={renderIcon} text={buttonText} />
        </div>
      </div>
    </div>
  );
};
