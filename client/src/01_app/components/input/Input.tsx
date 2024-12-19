import s from "./style.module.scss";
import cn from "classnames";

type TInputProps = {
  isError?: boolean;
  errorMessage?: string;
  label?: string;
};

export const Input = ({
  className,
  name,
  label = "",
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

      <label
        htmlFor={name}
        className={cn(s.label, { [s.labelError]: isError })}
      >
        {label}
      </label>

      <div className={s.inputErrorMessage}>{errorMessage}</div>
    </div>
  );
};
