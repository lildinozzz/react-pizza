import cn from "classnames";
import s from "./style.module.scss";

type TPaymentButtonProps = {
  text?: string;
  className?: string;
  icon?: React.ReactNode;
  onClick?: () => void;
};

export const PaymentButton = ({
  text,
  className,
  icon,
  onClick,
}: TPaymentButtonProps) => {
  return (
    <button onClick={onClick} className={cn(s.button, className)}>
      {text && <span className={s.text}>{text}</span>}
      {icon && <span className={s.icon}>{icon}</span>}
    </button>
  );
};
