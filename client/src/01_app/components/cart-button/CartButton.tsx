import cn from "classnames";
import s from "./style.module.scss";
import { useAppSelector } from "@app/store/hooks";
import { productInfoSelectors } from "@app/store/reducers/product-info/selectors";
import { TopDividerIcon } from "@shared/icons";
import { commonUISelectors } from "@app/store/reducers/common-ui/selectors";

type TButtonProps = {
  text?: string;
  renderLoader?: boolean;
  startAnimation?: boolean;
  icon?: React.ReactNode;
  theme?: "primary" | "secondary";
} & React.ButtonHTMLAttributes<HTMLButtonElement>;

export const CartButton = ({
  text,
  className,
  icon,
  disabled,
  onClick,
}: TButtonProps) => {
  const { currentCartCounter } = useAppSelector(
    productInfoSelectors.productInfo
  );
  const { isMobile } = useAppSelector(commonUISelectors.commonUIInfo);

  return (
    <button
      disabled={disabled}
      onClick={onClick}
      className={cn(s.button, className, {
        [s.buttonActive]: !!currentCartCounter,
      })}
    >
      {!!currentCartCounter && !isMobile && (
        <>
          {text && <span className={s.text}>{text}</span>}
          <TopDividerIcon className={s.buttonIcon} />
        </>
      )}

      {icon && <span className={s.icon}>{icon}</span>}
      {!!currentCartCounter && (
        <span className={cn(s.text, { [s.textMobile]: isMobile })}>
          {currentCartCounter}
        </span>
      )}
    </button>
  );
};
