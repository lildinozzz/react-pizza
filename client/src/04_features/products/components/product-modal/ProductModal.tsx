import { TProduct } from "@shared/types/types";
import s from "./style.module.scss";
import { createModalHook, Modal, TModalProps } from "@shared/modal";
import cn from "classnames";
import { useState } from "react";
import { Button } from "@app/components";

type TProductModalProps = TModalProps & {
  product: TProduct;
};

const sizes = ["Маленькая", "Средняя", "Большая"];
const dough = ["Традиционное", "Тонкое"];

const AuthModal = ({ onClose, product }: TProductModalProps) => {
  const [currentTabSize, setCurrentTabSize] = useState("Маленькая");
  const [currentTabDough, setCurrentTabDough] = useState("Традиционное");

  return (
    <Modal.Root>
      <Modal.Content onClose={onClose}>
        <div className={s.wrapper}>
          <div className={s.wrapperLeft}>
            <img
              src={product.imageUrl}
              alt={product.name}
              className={s.pizzaImage}
            />
            <div className={s.wrapperLeftContainerMiddle}></div>
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
              <div className={s.wrapperRightSelectTitle}>Добавить по вкусу</div>
            </div>
            <Button
              className={s.buttonSubmit}
              text="Добавить в корзину за 554$"
            />
          </div>
        </div>
      </Modal.Content>
    </Modal.Root>
  );
};

export const useProductModal = createModalHook<TProductModalProps>((props) => (
  <AuthModal {...props} />
));
