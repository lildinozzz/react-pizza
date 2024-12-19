import s from "./style.module.scss";

type TNumberInputProps = {
  min: number;
  placeholder?: string;
};

export const NumberInput = ({
  min,
  placeholder,
  onChange,
}: TNumberInputProps & React.InputHTMLAttributes<HTMLInputElement>) => {
  return (
    <div className={s.wrapper}>
      <input
        className={s.input}
        onChange={onChange}
        type="number"
        placeholder={placeholder}
        min={min}
      />
      <span className={s.inputCurrency}>₽</span>
    </div>
  );
};
