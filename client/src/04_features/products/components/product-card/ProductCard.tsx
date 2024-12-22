import { TProduct } from "@shared/types/types";
import s from "./style.module.scss";
import { Button } from "@app/components";
import {
  CartButtonIcon,
  ConstructorButtonIcon,
  ConstructorIcon,
} from "@shared/icons";
import { useProductModal } from "../product-modal";
import { useNavigate } from "react-router-dom";
import { pathsConfig } from "../../../../../config/paths/paths";

type TProductCardProps = {
  product: TProduct;
};

export const ProductCard = ({ product }: TProductCardProps) => {
  const { imageUrl, name, ingredients, prices, isConstructor } = product;
  const [productModal] = useProductModal();
  const navigate = useNavigate();

  const filteredIngredients = ingredients
    .map((ingredient) => ingredient.trim())
    .join(", ");

  const buttonTextComputed = () => {
    if (isConstructor) return "Build";

    return "Add";
  };

  const buttonIconComputed = () => {
    if (isConstructor) return <ConstructorButtonIcon />;

    return <CartButtonIcon />;
  };

  const handleClick = () => {
    if (!isConstructor) {
      return navigate(pathsConfig.menu.link, { state: { product } });
    }

    productModal({
      product,
    });
  };

  const buttonText = buttonTextComputed();
  const renderIcon = buttonIconComputed();

  return (
    <div className={s.wrapperCard}>
      {isConstructor && <ConstructorIcon className={s.wrapperCardIcon} />}

      <img className={s.wrapperCardImage} src={imageUrl} alt={name} />

      <div className={s.wrapperCardTitle}>{name}</div>

      <p className={s.wrapperCardIngredients}>{filteredIngredients}</p>

      <div className={s.wrapperCardBottom}>
        <span>
          from
          <span className={s.wrapperCardBottomPrice}> {prices[0]} $</span>
        </span>
        <div className={s.wrapperCardBottomActions}>
          <Button
            className={s.wrapperCardBottomActionsButton}
            onClick={handleClick}
            icon={renderIcon}
            text={buttonText}
          />
        </div>
      </div>
    </div>
  );
};
