import { CheckboxRadio } from "@app/components";
import s from "./style.module.scss";
import { useState } from "react";

export const DoughFilter = () => {
  const [selectedValue, setSelectedValue] = useState<string>("traditional");

  const handleRadioChange = (value: string) => {
    setSelectedValue(value);
  };

  return (
    <>
      <div className={s.title}>Тип теста:</div>

      <div className={s.wrapper}>
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
    </>
  );
};
