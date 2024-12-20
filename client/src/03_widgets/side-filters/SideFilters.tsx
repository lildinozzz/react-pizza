import s from "./style.module.scss";
import { Button } from "@components/button";
import { useAppDispatch, useAppSelector } from "@app/store/hooks";
import { IngredientsFilter } from "@features/ingredients-filter/components";
import { PriceFilter } from "@features/price-filter/components";
import { DoughFilter } from "@features/dough-filter/components";
import { OptionsFilter } from "@features/options-filter/components/OptionsFilter";
import { useState } from "react";
import { productInfoSelectors } from "@app/store/reducers/product-info/selectors";
import { getAllProductsByQuery } from "@app/store/reducers/product-info/reducers";
import { CategoryFilter } from "@features/category-filter/components";
import { commonUISelectors } from "@app/store/reducers/common-ui/selectors";

export const SideFilters = () => {
  const dispatch = useAppDispatch();
  const { ingredients } = useAppSelector(productInfoSelectors.productInfo);
  const { isMobile } = useAppSelector(commonUISelectors.commonUIInfo);

  const [formState, setFormState] = useState(() => {
    const initialState: { [key: string]: boolean | string | number } = {
      isConstructor: false,
      isNew: false,
      dough: "traditional",
      from: 0,
      to: 0,
    };

    ingredients.forEach((ingredient) => {
      initialState[ingredient.value] = false;
    });

    return initialState;
  });

  const handleCheckboxChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, checked } = e.target;
    setFormState((prevState) => ({
      ...prevState,
      [name]: checked,
    }));
  };

  const handleDoughChange = (value: string) => {
    setFormState((prevState) => ({
      ...prevState,
      dough: value,
    }));
  };

  const handleSubmit = () => {
    const filteredFormState = Object.fromEntries(
      // eslint-disable-next-line @typescript-eslint/no-unused-vars
      Object.entries(formState).filter(([key, value]) => value)
    );

    const queryString = new URLSearchParams(
      filteredFormState as Record<string, string>
    ).toString();

    dispatch(getAllProductsByQuery(queryString));
  };

  const handleFromChange = (value: string) => {
    setFormState((prevState) => ({
      ...prevState,
      from: value,
    }));
  };

  const handleToChange = (value: string) => {
    setFormState((prevState) => ({
      ...prevState,
      to: value,
    }));
  };

  return (
    <div className={s.wrapper}>
      <OptionsFilter handleCheckboxChange={handleCheckboxChange} />

      <div className={s.divider}></div>

      <PriceFilter
        onFromChange={handleFromChange}
        onToChange={handleToChange}
      />

      {isMobile && (
        <>
          <div className={s.divider}></div>

          <CategoryFilter />
        </>
      )}

      <div className={s.divider}></div>

      <IngredientsFilter handleCheckboxChange={handleCheckboxChange} />

      <div className={s.divider}></div>

      <DoughFilter
        selectedValue={formState.dough as string}
        onChange={handleDoughChange}
      />

      <Button onClick={handleSubmit} className={s.buttonSubmit} text="Apply" />
    </div>
  );
};
