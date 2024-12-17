import s from "./style.module.scss";
import cn from "classnames";

export const Input = ({
  className,
  name,
  placeholder,
  onChange,
}: React.InputHTMLAttributes<HTMLInputElement>) => {
  return (
    <input
      name={name}
      onChange={onChange}
      className={cn(s.input, className)}
      placeholder={placeholder}
    />
  );
};
