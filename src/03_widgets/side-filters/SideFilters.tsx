import { Checkbox } from "@components/checkbox";
import s from "./style.module.scss";
import { NumberInput } from "@components/number-input";
import { CheckboxRadio } from "@components/checkbox-radio";
import { Button } from "@components/button";
import { useState } from "react";
import cn from "classnames";
import { useSelector } from "react-redux";
import { commonUISelectors } from "@store/reducers/common-ui/selectors";
import { commonFilterSelectors } from "@store/reducers/common-filter/selectors";

export const SideFilters = () => {
  const { isMobile } = useSelector(commonUISelectors.commonUIInfo);
  const { categories } = useSelector(commonFilterSelectors.commonFilter);
  const [selectedValue, setSelectedValue] = useState<string>("traditional");
  const [currentTab, setCurrentTab] = useState(categories[0]);
  const [isLoading, setIsLoading] = useState(false);

  const handleSetCurrentTab = (index: number) => {
    setCurrentTab(categories[index]);
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
            max={1000}
            defaultValue={1000}
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
              {categories?.map((cat, i) => (
                <button
                  className={cn(s.button, {
                    [s.buttonActive]: currentTab?.name === cat?.name,
                  })}
                  onClick={() => handleSetCurrentTab(i)}
                >
                  {cat?.name}
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