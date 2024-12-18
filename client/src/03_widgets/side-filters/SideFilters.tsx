import s from "./style.module.scss";
import { Button } from "@components/button";
import { useState } from "react";
import { commonUISelectors } from "@store/reducers/common-ui/selectors";
import { useAppSelector } from "@app/store/hooks";
import { CategoryFilter } from "@features/category-filter/components";
import { IngredientsFilter } from "@features/ingredients-filter/components";
import { PriceFilter } from "@features/price-filter/components";
import { DoughFilter } from "@features/dough-filter/components";
import { OptionsFilter } from "@features/options-filter/components/OptionsFilter";

export const SideFilters = () => {
  const { isMobile } = useAppSelector(commonUISelectors.commonUIInfo);
  const [isLoading, setIsLoading] = useState(false);

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
      <OptionsFilter />

      <div className={s.divider}></div>

      <PriceFilter />

      {isMobile && (
        <>
          <div className={s.divider}></div>

          <CategoryFilter />
        </>
      )}

      <div className={s.divider}></div>

      <IngredientsFilter />

      <div className={s.divider}></div>

      <DoughFilter />

      <Button
        onClick={handleClickSubmit}
        className={s.buttonSubmit}
        text="Применить"
        renderLoader={isLoading}
      />
    </div>
  );
};
