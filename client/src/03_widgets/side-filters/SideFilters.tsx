import s from "./style.module.scss";
import { Button } from "@components/button";
import { commonUISelectors } from "@store/reducers/common-ui/selectors";
import { useAppSelector } from "@app/store/hooks";
import { CategoryFilter } from "@features/category-filter/components";
import { IngredientsFilter } from "@features/ingredients-filter/components";
import { PriceFilter } from "@features/price-filter/components";
import { DoughFilter } from "@features/dough-filter/components";
import { OptionsFilter } from "@features/options-filter/components/OptionsFilter";

export const SideFilters = () => {
  const { isMobile } = useAppSelector(commonUISelectors.commonUIInfo);

  return (
    <form className={s.wrapper}>
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
        onClick={() => null}
        type="submit"
        className={s.buttonSubmit}
        text="Применить"
      />
    </form>
  );
};
