import s from "./style.module.scss";

type TCheckboxRadioProps = {
  text?: string;
  value: string;
  selectedValue: string;
  onChange: (value: string) => void;
};

export const CheckboxRadio = ({
  text,
  onChange,
  value,
  selectedValue,
}: TCheckboxRadioProps) => {
  const handleChange = () => {
    onChange(value);
  };

  return (
    <div className={s.wrapper}>
      <input
        className={s.input}
        type="radio"
        checked={selectedValue === value}
        onChange={handleChange}
      />
      {text}
    </div>
  );
};
