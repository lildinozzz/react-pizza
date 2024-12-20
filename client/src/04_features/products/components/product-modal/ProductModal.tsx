import { TProduct } from "@shared/types/types";
import s from "./style.module.scss";
import { createModalHook, Modal, TModalProps } from "@shared/modal";
import cn from "classnames";
import { useState } from "react";
import { Button } from "@app/components";
import { CloseIcon } from "@shared/icons";

type TProductModalProps = TModalProps & {
  product: TProduct;
};

const sizes = ["Small", "Medium", "Large"];
const dough = ["Traditional", "Thin"];

const ProductModal = ({ onClose, product }: TProductModalProps) => {
  const [currentTabSize, setCurrentTabSize] = useState("Small");
  const [currentTabDough, setCurrentTabDough] = useState("Traditional");

  const renderButtonText = () => {
    if (currentTabSize === "Small") return product.prices[0];

    if (currentTabSize === "Medium") return product.prices[1];

    if (currentTabSize === "Large") return product.prices[2];
  };

  const buttonText = renderButtonText();

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
                [s.pizzaImageMedium]: currentTabSize === "Medium",
                [s.pizzaImageLarge]: currentTabSize === "Large",
              })}
            />
            <div className={s.wrapperLeftContainerMedium}></div>
            <div className={s.wrapperLeftContainerLarge}></div>
          </div>
          <div className={s.wrapperRight}>
            <div className={s.wrapperRightMeta}>
              <div className={s.wrapperRightMetaTitle}>{product.name}</div>
              <div className={s.wrapperRightMetaDescription}>
                {product.name}
              </div>
            </div>
            <div>
              <div className={s.wrapperRightButtons}>
                {sizes.map((size, index) => (
                  <button
                    key={index}
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
                {dough.map((dough, index) => (
                  <button
                    key={index}
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
                <div className={s.wrapperRightSelectIngredient}>
                  <img src={product.imageUrl} alt={product.name} />
                  <div className={s.wrapperRightSelectIngredientDescription}>
                    Creamy Mozzarella
                  </div>
                  <div className={s.wrapperRightSelectIngredientPrice}>
                    79 ₽
                  </div>
                </div>
                <div className={s.wrapperRightSelectIngredient}>
                  <img src={product.imageUrl} alt={product.name} />
                  <div className={s.wrapperRightSelectIngredientDescription}>
                    Creamy Mozzarella
                  </div>
                  <div className={s.wrapperRightSelectIngredientPrice}>
                    79 ₽
                  </div>
                </div>
                <div className={s.wrapperRightSelectIngredient}>
                  <img src={product.imageUrl} alt={product.name} />
                  <div className={s.wrapperRightSelectIngredientDescription}>
                    Creamy Mozzarella
                  </div>
                  <div className={s.wrapperRightSelectIngredientPrice}>
                    79 ₽
                  </div>
                </div>

                <div className={s.wrapperRightSelectIngredient}>
                  <img src={product.imageUrl} alt={product.name} />
                  <div className={s.wrapperRightSelectIngredientDescription}>
                    Creamy Mozzarella
                  </div>
                  <div className={s.wrapperRightSelectIngredientPrice}>
                    79 $
                  </div>
                </div>
              </div>
            </div>
            <Button
              className={s.buttonSubmit}
              text={`Add to Cart for ${buttonText} $`}
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
