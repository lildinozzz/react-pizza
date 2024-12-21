import { TProduct } from "@shared/types/types";
import s from "./style.module.scss";
import { createModalHook, Modal, TModalProps } from "@shared/modal";
import cn from "classnames";
import { useState } from "react";
import { Button } from "@app/components";
import { CloseIcon } from "@shared/icons";
import { ActiveIngredientCartIcon } from "@shared/icons/ActiveIngredientCartIcon";
import { useAppSelector } from "@app/store/hooks";
import { productInfoSelectors } from "@app/store/reducers/product-info/selectors";

enum ESizeVariants {
  Small = "Small",
  Medium = "Medium",
  Large = "Large",
}

enum EDoughVariants {
  Traditional = "Traditional",
  Thin = "Thin",
}

type TProductModalProps = TModalProps & {
  product: TProduct;
};

const ProductModal = ({ onClose, product }: TProductModalProps) => {
  const { prices } = product;
  const { ingredients } = useAppSelector(productInfoSelectors.productInfo);
  const [currentTabSize, setCurrentTabSize] = useState<ESizeVariants>(
    ESizeVariants.Small
  );
  const [currentTabDough, setCurrentTabDough] = useState<EDoughVariants>(
    EDoughVariants.Traditional
  );

  const [activeIngredients, setActiveIngredients] = useState<
    Record<number, boolean>
  >({});

  const calculateTotalPrice = () => {
    let basePrice = 0;

    if (currentTabSize === ESizeVariants.Small) basePrice = Number(prices[0]);
    if (currentTabSize === ESizeVariants.Medium) basePrice = Number(prices[1]);
    if (currentTabSize === ESizeVariants.Large) basePrice = Number(prices[2]);

    const ingredientsPrice = ingredients.reduce((acc: number, ingredient) => {
      const { price, id } = ingredient;

      if (activeIngredients[id]) {
        return acc + Number(price);
      }

      return acc;
    }, 0);

    return basePrice + ingredientsPrice;
  };

  const renderDescription = () => {
    if (currentTabSize === ESizeVariants.Small)
      return `25 cm, ${currentTabDough} dough, 250 g`;

    if (currentTabSize === ESizeVariants.Medium)
      return `30 cm, ${currentTabDough} dough, 300 g`;

    if (currentTabSize === ESizeVariants.Large)
      return `35 cm, ${currentTabDough} dough, 350 g`;
  };

  const handleIngredientClick = (id: number) => {
    setActiveIngredients((prev) => ({
      ...prev,
      [id]: !prev[id],
    }));
  };

  const totalPrice = calculateTotalPrice();
  const productDescription = renderDescription();

  return (
    <Modal.Root>
      <Modal.Content onClose={onClose}>
        <div className={s.wrapper}>
          <CloseIcon onClick={onClose} className={s.wrapperCloseIcon} />
          <div className={s.wrapperLeft}>
            <img
              src={product.imageUrl}
              alt={product.name}
              className={cn(s.pizzaImage, {
                [s.pizzaImageMedium]: currentTabSize === ESizeVariants.Medium,
                [s.pizzaImageLarge]: currentTabSize === ESizeVariants.Large,
              })}
            />
            <div className={s.wrapperLeftContainerMedium}></div>
            <div className={s.wrapperLeftContainerLarge}></div>
          </div>
          <div className={s.wrapperRight}>
            <div className={s.wrapperRightMeta}>
              <div className={s.wrapperRightMetaTitle}>{product.name}</div>
              <div className={s.wrapperRightMetaDescription}>
                {productDescription}
              </div>
            </div>
            <div>
              <div className={s.wrapperRightButtons}>
                {Object.values(ESizeVariants).map((size) => (
                  <button
                    key={size}
                    className={cn(s.wrapperRightButton, {
                      [s.wrapperRightButtonActive]: currentTabSize === size,
                    })}
                    onClick={() => setCurrentTabSize(size)}
                  >
                    {size}
                  </button>
                ))}
              </div>
              <div className={s.wrapperRightButtons}>
                {Object.values(EDoughVariants).map((dough) => (
                  <button
                    key={dough}
                    className={cn(s.wrapperRightButton, {
                      [s.wrapperRightButtonActive]: currentTabDough === dough,
                    })}
                    onClick={() => setCurrentTabDough(dough)}
                  >
                    {dough}
                  </button>
                ))}
              </div>
            </div>
            <div className={s.wrapperRightSelect}>
              <div className={s.wrapperRightSelectTitle}>Add to your taste</div>

              <div className={s.wrapperRightSelectCarousel}>
                {ingredients.map((ingredient) => (
                  <div
                    key={ingredient.id}
                    className={cn(s.wrapperRightSelectIngredient, {
                      [s.wrapperRightSelectIngredientActive]:
                        activeIngredients[ingredient.id],
                    })}
                    onClick={() => handleIngredientClick(ingredient.id)}
                  >
                    {activeIngredients[ingredient.id] && (
                      <ActiveIngredientCartIcon
                        className={s.wrapperRightSelectIngredientActiveIcon}
                      />
                    )}
                    <img src={ingredient.imageUrl} alt={ingredient.name} />
                    <div className={s.wrapperRightSelectIngredientMeta}>
                      <div
                        className={s.wrapperRightSelectIngredientDescription}
                      >
                        {ingredient.name}
                      </div>
                      <div className={s.wrapperRightSelectIngredientPrice}>
                        {ingredient.price} $
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            <Button
              className={s.buttonSubmit}
              text={`Add to Cart for ${totalPrice} $`}
            />
          </div>
        </div>
      </Modal.Content>
    </Modal.Root>
  );
};

export const useProductModal = createModalHook<TProductModalProps>((props) => (
  <ProductModal {...props} />
));
