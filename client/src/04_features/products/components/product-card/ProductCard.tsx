import { TProduct } from "@shared/types/types";
import s from "./style.module.scss";
import { Button } from "@app/components";
import {
  AddToCartIcon,
  CartButtonIcon,
  ConstructorButtonIcon,
  ConstructorIcon,
  RemoveFromCartIcon,
} from "@shared/icons";
import { useState } from "react";
import { setCurrentCartCounter } from "@app/store/reducers/product-info/dispatchers";
import cn from "classnames";
import { useProductModal } from "../product-modal";

type TProductCardProps = {
  product: TProduct;
};

export const ProductCard = ({ product }: TProductCardProps) => {
  const { imageUrl, name, ingredients, prices, isConstructor, productCount } =
    product;
  const [cartCounter, setCartCounter] = useState(0);
  const [productModal] = useProductModal();

  const filteredIngredients = ingredients
    .map((ingredient) => ingredient.trim())
    .join(", ");

  const buttonTextComputed = () => {
    if (isConstructor) return "Собрать";

    return "Добавить";
  };

  const handleAddToCart = () => {
    setCartCounter((prev) => prev + 1);
    setCurrentCartCounter((prev) => prev + 1);
  };
  const handleRemoveFromCart = () => {
    setCartCounter((prev) => prev - 1);
    setCurrentCartCounter((prev) => prev - 1);
  };

  const buttonIconComputed = () => {
    if (isConstructor) return <ConstructorButtonIcon />;

    return <CartButtonIcon />;
  };

  const handleClick = () => {
    if (isConstructor) return;

    productModal({
      product,
    });
  };

  const buttonText = buttonTextComputed();
  const renderIcon = buttonIconComputed();

  return (
    <div
      className={cn(s.wrapperCard, { [s.wrapperCardBlocked]: !productCount })}
    >
      {isConstructor && <ConstructorIcon className={s.wrapperCardIcon} />}

      <img src={imageUrl} alt={name} />

      <div className={s.wrapperCardTitle}>{name}</div>

      <p className={s.wrapperCardIngredients}>{filteredIngredients}</p>

      {!productCount && (
        <Button text="Нет в наличии" className={s.wrapperCardBlockedInfo} />
      )}

      <div className={s.wrapperCardBottom}>
        <span>
          от
          <span className={s.wrapperCardBottomPrice}> {prices[0]} ₽</span>
        </span>
        <div className={s.wrapperCardBottomActions}>
          {!cartCounter && (
            <Button
              className={s.wrapperCardBottomActionsButton}
              onClick={handleClick}
              icon={renderIcon}
              text={buttonText}
            />
          )}
          {!!cartCounter && (
            <>
              <Button
                onClick={handleRemoveFromCart}
                className={s.wrapperCardBottomActionsRemove}
                icon={<RemoveFromCartIcon />}
              />
              <div className={s.wrapperCardBottomActionsCount}>
                {cartCounter}
              </div>
              <Button
                onClick={handleAddToCart}
                className={s.wrapperCardBottomActionsAdd}
                icon={<AddToCartIcon />}
              />
            </>
          )}
        </div>
      </div>
    </div>
  );
};
