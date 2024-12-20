import { CategoryFilter } from "@features/category-filter/components";
import s from "./style.module.scss";

export const Header = () => {
  return (
    <div className={s.wrapper}>
      <div className={s.wrapperTitle}>Browse Our Pizzas</div>

      <CategoryFilter />
    </div>
  );
};
