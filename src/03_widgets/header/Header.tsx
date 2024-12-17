import { useState, useEffect } from "react";
import s from "./style.module.scss";
import cn from "classnames";
import { useSelector } from "react-redux";
import { commonUISelectors } from "@store/reducers/common-ui/selectors";
import { commonFilterSelectors } from "@store/reducers/common-filter/selectors";
import { setPizzas } from "@store/reducers/common-filter/dispatchers";
import { getPizzasByCategory } from "@app/service/product";
import { TCategory } from "@shared/types/types";

export const Header = () => {
  const { isMobile } = useSelector(commonUISelectors.commonUIInfo);
  const { categories } = useSelector(commonFilterSelectors.commonFilter);
  const [currentTab, setCurrentTab] = useState<number | undefined>(undefined);

  useEffect(() => {
    if (categories?.length > 0 && currentTab === undefined) {
      setCurrentTab(categories[0].id);
    }
  }, [categories, currentTab]);

  const handleSetCurrentTab = async (categoryId: TCategory["id"]) => {
    try {
      const pizzas = await getPizzasByCategory(categoryId);

      setCurrentTab(categoryId);
      setPizzas(pizzas);
    } catch (error) {
      console.error("Ошибка при установке таба", error);
    }
  };

  return (
    <div className={s.wrapper}>
      {!isMobile && (
        <>
          <div className={s.wrapperTitle}>Все пиццы</div>
          <div className={s.wrapperFilters}>
            {categories?.map((cat) => (
              <button
                key={cat.id}
                className={cn(s.button, {
                  [s.buttonActive]: currentTab === cat.id,
                })}
                onClick={() => handleSetCurrentTab(cat.id)}
              >
                {cat.name}
              </button>
            ))}
          </div>
        </>
      )}
    </div>
  );
};
