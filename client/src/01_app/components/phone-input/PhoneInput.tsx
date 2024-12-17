import s from "./style.module.scss";
import cn from "classnames";

type TPhoneInputProps = {
  className?: string;
  placeholder?: string;
};

export const PhoneInput = ({ className, placeholder }: TPhoneInputProps) => {
  return <input className={cn(s.input, className)} placeholder={placeholder} />;
};
