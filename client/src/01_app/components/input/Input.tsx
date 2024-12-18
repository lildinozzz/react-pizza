import s from "./style.module.scss";
import cn from "classnames";

type TInputProps = {
  isError?: boolean;
  errorMessage?: string;
};

export const Input = ({
  className,
  name,
  placeholder,
  onChange,
  isError,
  errorMessage,
}: React.InputHTMLAttributes<HTMLInputElement> & TInputProps) => {
  return (
    <div className={s.wrapper}>
      <input
        name={name}
        onChange={onChange}
        className={cn(s.input, className, { [s.inputError]: isError })}
        placeholder={placeholder}
      />

      <div className={s.inputErrorMessage}>{errorMessage}</div>
    </div>
  );
};
