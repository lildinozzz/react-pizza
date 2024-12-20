import { CheckboxRadio } from "@app/components";
import s from "./style.module.scss";

type TDoughFilter = {
  selectedValue: string;
  onChange: (value: string) => void;
};

export const DoughFilter = ({ selectedValue, onChange }: TDoughFilter) => {
  return (
    <>
      <div className={s.title}>Тип теста:</div>

      <div className={s.wrapper}>
        <CheckboxRadio
          text="Traditional"
          name="traditional"
          value="traditional"
          selectedValue={selectedValue}
          onChange={onChange}
        />
        <CheckboxRadio
          text="Thin"
          name="thin"
          value="thin"
          selectedValue={selectedValue}
          onChange={onChange}
        />
      </div>
    </>
  );
};
