import { TCategory } from "@shared/types/types";
import { useState } from "react";
import { useAppDispatch, useAppSelector } from "@app/store/hooks";
import s from "./style.module.scss";
import cn from "classnames";
import { commonUISelectors } from "@app/store/reducers/common-ui/selectors";
import { productInfoSelectors } from "@app/store/reducers/product-info/selectors";
import {
  getAllProducts,
  getAllProductsByCategory,
} from "@app/store/reducers/product-info/reducers";
export const CategoryFilter = () => {
  const dispatch = useAppDispatch();
  const { isMobile } = useAppSelector(commonUISelectors.commonUIInfo);
  const { categories } = useAppSelector(productInfoSelectors.productInfo);
  const [currentTab, setCurrentTab] = useState<number | undefined>(undefined);

  const handleSetCurrentTab = async (categoryId: TCategory["id"]) => {
    try {
      if (categoryId === 1) {
        dispatch(getAllProducts());
        setCurrentTab(categoryId);

        return;
      }

      dispatch(getAllProductsByCategory(categoryId));
      setCurrentTab(categoryId);
    } catch (error) {
      console.error("Ошибка при установке таба", error);
    }
  };

  return (
    <>
      {isMobile && <div className={s.title}>Категория</div>}
      <div className={s.wrapper}>
        {categories?.map((cat) => (
          <button
            key={cat.id}
            className={cn(s.wrapperButton, {
              [s.wrapperButtonActive]: currentTab === cat.id,
            })}
            onClick={() => handleSetCurrentTab(cat.id)}
          >
            {cat.name}
          </button>
        ))}
      </div>
    </>
  );
};
