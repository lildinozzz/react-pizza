import { Checkbox } from "@app/components";
import s from "./style.module.scss";
import { useAppSelector } from "@app/store/hooks";
import { productInfoSelectors } from "@app/store/reducers/product-info/selectors";

export const IngredientsFilter = () => {
  const { ingredients } = useAppSelector(productInfoSelectors.productInfo);

  return (
    <>
      <div className={s.title}>Ингредиенты: </div>
      <div className={s.wrapper}>
        {ingredients.map((ingredient) => {
          const { id, name } = ingredient;
          return <Checkbox key={id} text={name} />;
        })}
      </div>
    </>
  );
};
