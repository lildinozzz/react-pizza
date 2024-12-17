import { Link } from "react-router-dom";
import s from "./style.module.scss";
import PizzaImage from "/images/navbar-pizza-image.png";
import { commonUISelectors } from "@store/reducers/common-ui/selectors";
import { Button, SearchInput } from "@components/index";
import { UserIcon, CartIcon } from "@icons/index";
import { setIsSidebarOpen } from "@store/reducers/common-ui/dispatchers";
import { useAuthModal } from "@features/auth/components/index";
import { useAppSelector } from "@app/store/hooks";

export const Navbar = () => {
  const { isMobile } = useAppSelector(commonUISelectors.commonUIInfo);
  const [authModal] = useAuthModal();

  const handleStartAuth = () => {
    authModal({});
  };

  return (
    <nav className={s.wrapper}>
      <Link to={"/"} className={s.wrapperMeta}>
        <img
          className={s.wrapperMetaImage}
          src={PizzaImage}
          alt="pizza-image"
        />
        <div className={s.wrapperMetaInfo}>
          <div>REACT PIZZA</div>
          <p>вкусней уже некуда</p>
        </div>
      </Link>
      <SearchInput />
      <div className={s.wrapperActions}>
        <Button
          onClick={handleStartAuth}
          icon={<UserIcon />}
          className={s.wrapperActionsFirst}
          text={!isMobile ? "Войти" : ""}
        />
        <Button onClick={() => setIsSidebarOpen(true)} icon={<CartIcon />} />
      </div>
    </nav>
  );
};
