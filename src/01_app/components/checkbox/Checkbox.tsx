import s from "./style.module.scss";

type TCheckboxProps = {
  text?: string;
  onClick?: (event: React.MouseEvent<HTMLInputElement>) => void;
};

export const Checkbox = ({ text, onClick }: TCheckboxProps) => {
  return (
    <div className={s.wrapper}>
      <input onClick={onClick} className={s.input} type="checkbox" />
      {text}
    </div>
  );
};
