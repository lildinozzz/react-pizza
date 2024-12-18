import { TCategory } from "@shared/types/types";
import { useEffect, useState } from "react";
import { useAppSelector } from "@app/store/hooks";
import { commonFilterSelectors } from "@store/reducers/common-filter/selectors";
import { geTProductsByCategory } from "@app/service/product";
import { seTProducts } from "@app/store/reducers/common-filter/dispatchers";
import s from "./style.module.scss";
import cn from "classnames";
import { commonUISelectors } from "@app/store/reducers/common-ui/selectors";
export const CategoryFilter = () => {
  const { isMobile } = useAppSelector(commonUISelectors.commonUIInfo);
  const { categories } = useAppSelector(commonFilterSelectors.commonFilter);
  const [currentTab, setCurrentTab] = useState<number | undefined>(undefined);

  useEffect(() => {
    if (categories?.length > 0 && currentTab === undefined) {
      setCurrentTab(categories[0].id);
    }
  }, [categories, currentTab]);

  const handleSetCurrentTab = async (categoryId: TCategory["id"]) => {
    try {
      const pizzas = await geTProductsByCategory(categoryId);
      setCurrentTab(categoryId);
      seTProducts(pizzas);
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
