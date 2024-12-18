import s from "./style.module.scss";

type TCheckboxProps = {
  text?: string;
  onClick?: (event: React.MouseEvent<HTMLInputElement>) => void;
  name?: string;
} & React.InputHTMLAttributes<HTMLInputElement>;

export const Checkbox = ({ text, onClick, name }: TCheckboxProps) => {
  return (
    <div className={s.wrapper}>
      <input
        name={name}
        onClick={onClick}
        className={s.input}
        type="checkbox"
      />
      {text}
    </div>
  );
};
