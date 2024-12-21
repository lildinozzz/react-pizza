import { CategoryFilter } from "@features/category-filter/components";
import s from "./style.module.scss";
import { ArrowTopBottomIcon } from "@shared/icons";

export const Header = () => {
  return (
    <div className={s.wrapper}>
      <div className={s.wrapperTitle}>Browse Our Pizzas</div>

      <div className={s.wrapperFilters}>
        <CategoryFilter />

        <button className={s.wrapperFiltersSortButton}>
          <ArrowTopBottomIcon className={s.wrapperFiltersSortButtonIcon} />
          <span className={s.wrapperFiltersSortButtonTitle}>Сортировка:</span>
          <span className={s.wrapperFiltersSortButtonType}>рейтингу</span>
        </button>
      </div>
    </div>
  );
};
