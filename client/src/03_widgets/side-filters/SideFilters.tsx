import { Checkbox } from "@components/checkbox";
import s from "./style.module.scss";
import { NumberInput } from "@components/number-input";
import { CheckboxRadio } from "@components/checkbox-radio";
import { Button } from "@components/button";
import { useEffect, useState } from "react";
import cn from "classnames";
import { commonUISelectors } from "@store/reducers/common-ui/selectors";
import { commonFilterSelectors } from "@store/reducers/common-filter/selectors";
import { setPizzas } from "@store/reducers/common-filter/dispatchers";
import { TCategory } from "@shared/types/types";
import { getPizzasByCategory } from "@app/service/product";
import { useAppSelector } from "@app/store/hooks";

export const SideFilters = () => {
  const { isMobile } = useAppSelector(commonUISelectors.commonUIInfo);
  const { categories } = useAppSelector(commonFilterSelectors.commonFilter);
  const [selectedValue, setSelectedValue] = useState<string>("traditional");
  const [currentTab, setCurrentTab] = useState<number | undefined>(undefined);
  const [isLoading, setIsLoading] = useState(false);

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

  const handleRadioChange = (value: string) => {
    setSelectedValue(value);
  };

  const handleClickSubmit = () => {
    setIsLoading(true);
    try {
      // console.log("Loader started: ", isLoading); // Check the value here
    } catch (error) {
      // throw error
      console.error(error);
    } finally {
      // setIsLoading(false);
    }
  };

  return (
    <div className={s.wrapper}>
      {isMobile && (
        <>
          <div className={s.wrapperPizzaTitle}>Все пиццы</div>
          <div className={s.dividerPizzaTitle}></div>
        </>
      )}
      <div className={s.wrapperTitle}>Фильтрация</div>

      <div className={s.checkboxes}>
        <Checkbox text="Можно собирать" />
        <Checkbox text="Новинки" />
      </div>

      <div className={s.divider}></div>

      <div className={s.priceCounter}>
        <div className={s.titleLarge}>Цена от и до:</div>

        <div className={s.priceCounterInputs}>
          <NumberInput min={0} max={1000} placeholder="0" defaultValue={0} />
          <NumberInput
            min={100}
            max={2000}
            defaultValue={2000}
            placeholder="1000"
          />
        </div>
      </div>

      {isMobile && (
        <>
          <div className={s.divider}></div>

          <div className={s.priceCounter}>
            <div className={s.titleLarge}>Категория</div>

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
          </div>
        </>
      )}

      <div className={s.divider}></div>

      <div className={s.checkboxes}>
        <div className={s.titleLarge}>Ингридиенты: </div>
        <Checkbox text="Сырный соус" />
        <Checkbox text="Чеснок" />
        <Checkbox text="Солённые огурчики" />
        <Checkbox text="Томаты" />
        <Checkbox text="Красный лук" />
        <Checkbox text="Моцарелла" />
      </div>

      <div className={s.divider}></div>

      <div className={s.checkboxes}>
        <div className={s.titleLarge}>Тип теста: </div>
        <CheckboxRadio
          text="Традиционное"
          value="traditional"
          selectedValue={selectedValue}
          onChange={handleRadioChange}
        />
        <CheckboxRadio
          text="Тонкое"
          value="thin"
          selectedValue={selectedValue}
          onChange={handleRadioChange}
        />
      </div>

      <Button
        onClick={handleClickSubmit}
        className={s.buttonSubmit}
        text="Применить"
        renderLoader={isLoading}
      />
    </div>
  );
};
