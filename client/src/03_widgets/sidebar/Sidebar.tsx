import { setIsSidebarOpen } from "@store/reducers/common-ui/dispatchers";
import s from "./style.module.scss";
import { commonUISelectors } from "@store/reducers/common-ui/selectors";
import cn from "classnames";
import { MouseEvent } from "react";
import { PaymentButton } from "@components/payment-button";
import { CloseIcon, RightArrowIcon } from "@icons/index";
import { useAppSelector } from "@app/store/hooks";

export const Sidebar = () => {
  const { isSidebarOpen } = useAppSelector(commonUISelectors.commonUIInfo);
  const handleClickOutside = (e: MouseEvent<HTMLDivElement>) => {
    if (e.target === e.currentTarget) {
      setIsSidebarOpen(false);
    }
  };

  const handleClose = () => {
    setIsSidebarOpen(false);
  };

  return (
    <div onClick={handleClickOutside} className={s.wrapper}>
      <div
        className={cn(s.sidebar, {
          [s.sidebarOpen]: isSidebarOpen,
        })}
      >
        <div className={s.sidebarHeader}>
          В корзине <span>3 товара</span>
          <CloseIcon onClick={handleClose} className={s.sidebarHeaderIcon} />
        </div>

        <div className={s.sidebarScrollable}>
          <div className={s.sidebarItem}>111</div>
          <div className={s.sidebarItem}>222</div>
          <div className={s.sidebarItem}>333</div>
          <div className={s.sidebarItem}>444</div>
          <div className={s.sidebarItem}>555</div>
          <div className={s.sidebarItem}>666</div>
          <div className={s.sidebarItem}>666</div>
        </div>

        <div className={s.sidebarBottom}>
          <div className={s.sidebarBottomText}>
            Итого:
            <span className={s.dots}>.....</span>
            <span className={s.sidebarBottomTextBold}>2245 ₽ </span>
          </div>
          <div className={s.sidebarBottomText}>
            Налог 5%:
            <span className={s.dots}>....</span>
            <span className={s.sidebarBottomTextBold}>112 ₽</span>
          </div>
          <PaymentButton text="Оформить заказ" icon={<RightArrowIcon />} />
        </div>
      </div>
    </div>
  );
};
