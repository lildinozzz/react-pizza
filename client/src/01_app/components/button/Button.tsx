import cn from "classnames";
import s from "./style.module.scss";
import { ClipLoader } from "react-spinners";

type TButtonProps = {
  text?: string;
  renderLoader?: boolean;
  startAnimation?: boolean;
  icon?: React.ReactNode;
  theme?: "primary" | "secondary";
} & React.ButtonHTMLAttributes<HTMLButtonElement>;

export const Button = ({
  text,
  className,
  renderLoader,
  icon,
  disabled,
  theme = "primary",
  onClick,
}: TButtonProps) => {
  const isPrimaryTheme = theme === "primary";

  return (
    <button
      disabled={disabled}
      onClick={onClick}
      className={cn(s.button, className, {
        [s.buttonPrimary]: isPrimaryTheme,
      })}
    >
      {renderLoader && (
        <span className={s.loader}>
          <ClipLoader color="#fff" size={25} />
        </span>
      )}

      {!renderLoader && (
        <>
          {icon && <span className={s.icon}>{icon}</span>}
          {text && <span className={s.text}>{text}</span>}
        </>
      )}
    </button>
  );
};
