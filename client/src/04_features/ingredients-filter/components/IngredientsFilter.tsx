import { Checkbox } from "@app/components";
import s from "./style.module.scss";
import { useAppSelector } from "@app/store/hooks";
import { productInfoSelectors } from "@app/store/reducers/product-info/selectors";

type TIngredientsFilter = {
  handleCheckboxChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
};

export const IngredientsFilter = ({
  handleCheckboxChange,
}: TIngredientsFilter) => {
  const { ingredients } = useAppSelector(productInfoSelectors.productInfo);

  return (
    <>
      <div className={s.title}>Ингредиенты: </div>
      <div className={s.wrapper}>
        {ingredients.map((ingredient) => {
          const { id, name, value } = ingredient;
          return (
            <Checkbox
              name={value}
              onChange={handleCheckboxChange}
              key={id}
              text={name}
            />
          );
        })}
      </div>
    </>
  );
};
