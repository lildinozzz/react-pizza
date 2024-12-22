import { Button, Checkbox } from "@app/components";
import s from "./style.module.scss";
import { useAppSelector } from "@app/store/hooks";
import { productInfoSelectors } from "@app/store/reducers/product-info/selectors";
import { useState } from "react";
import { CartButtonIcon } from "@shared/icons";

type TIngredientsFilter = {
  handleCheckboxChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
};

export const IngredientsFilter = ({
  handleCheckboxChange,
}: TIngredientsFilter) => {
  const { ingredients } = useAppSelector(productInfoSelectors.productInfo);
  const [showMore, setShowMore] = useState(false);

  const handleShowMoreClick = () => {
    setShowMore(true);
  };

  const displayedIngredients = showMore ? ingredients : ingredients.slice(0, 6);

  return (
    <>
      <div className={s.title}>Ingredients:</div>
      <div className={s.wrapper}>
        {displayedIngredients.map((ingredient) => {
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

      {ingredients.length > 6 && !showMore && (
        <Button
          text="Show more"
          icon={<CartButtonIcon />}
          className={s.showMoreButton}
          onClick={handleShowMoreClick}
        />
      )}
    </>
  );
};
