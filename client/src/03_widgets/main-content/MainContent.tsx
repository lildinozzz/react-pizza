import { TPizza } from "@shared/types/types";
import s from "./style.module.scss";
import { useSelector } from "react-redux";
import { commonFilterSelectors } from "@store/reducers/common-filter/selectors";

export const MainContent = () => {
  const { pizzas } = useSelector(commonFilterSelectors.commonFilter);

  return (
    <div className={s.wrapper}>
      {pizzas.map((el: TPizza) => (
        <div key={el.id}>
          <div className={s.wrapperCard}>
            <img src={el.imageUrl} />

            <div className={s.wrapperCardTitle}>{el.name}</div>

            <p className={s.wrapperCardIngredients}>
              {el.ingredients.map((ingredient, index, arr) => (
                <span key={index}>
                  {ingredient.trim()}
                  {index < arr.length - 1 && ", "}
                </span>
              ))}
            </p>

            <div className={s.wrapperCardBottom}>
              <div className={s.wrapperCardBottomPrice}>
                от {el.prices[0]} ₽
              </div>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};
