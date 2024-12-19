import s from "./style.module.scss";

type TCheckboxProps = {
  text?: string;
  onClick?: (event: React.MouseEvent<HTMLInputElement>) => void;
  name?: string;
} & React.InputHTMLAttributes<HTMLInputElement>;

export const Checkbox = ({ text, onClick, name, onChange }: TCheckboxProps) => {
  return (
    <div className={s.wrapper}>
      <input
        name={name}
        onChange={onChange}
        onClick={onClick}
        className={s.input}
        type="checkbox"
      />
      {text}
    </div>
  );
};
