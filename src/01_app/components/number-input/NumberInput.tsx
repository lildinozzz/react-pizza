import s from "./style.module.scss";

type TNumberInputProps = {
  min: number;
  max: number;
  defaultValue?: number;
  placeholder?: string;
};

export const NumberInput = ({
  min,
  max,
  defaultValue,
  placeholder,
}: TNumberInputProps) => {
  return (
    <div className={s.wrapper}>
      <input
        className={s.input}
        type="number"
        placeholder={placeholder}
        min={min}
        max={max}
        defaultValue={defaultValue}
      />
      <span className={s.inputCurrency}>₽</span>
    </div>
  );
};
