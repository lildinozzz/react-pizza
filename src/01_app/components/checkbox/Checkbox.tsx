import s from "./style.module.scss";

type TCheckboxProps = {
  text?: string;
};

export const Checkbox = ({ text }: TCheckboxProps) => {
  return (
    <div className={s.wrapper}>
      <input className={s.input} type="checkbox" />
      {text}
    </div>
  );
};
