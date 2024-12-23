import { Link, useLocation, useNavigate } from "react-router-dom";
import s from "./style.module.scss";
import PizzaImage from "/images/navbar-pizza-image.png";
import { commonUISelectors } from "@store/reducers/common-ui/selectors";
import { Button, SearchInput } from "@components/index";
import { UserIcon, CartIcon, CartActiveIcon } from "@icons/index";
import { useAuthModal } from "@features/auth/components/index";
import { useAppDispatch, useAppSelector } from "@app/store/hooks";
import { userInfoSelectors } from "@app/store/reducers/user-info/selectors";
import { logout } from "@app/store/reducers/user-info/reducers";
import { useState } from "react";
import { CartButton } from "@app/components/cart-button";
import { productInfoSelectors } from "@app/store/reducers/product-info/selectors";
import { pathsConfig } from "../../../config/paths/paths";

export const Navbar = () => {
  const dispatch = useAppDispatch();
  const { isMobile } = useAppSelector(commonUISelectors.commonUIInfo);
  const { isAuthed } = useAppSelector(userInfoSelectors.userInfo);
  const { currentCartCounter } = useAppSelector(
    productInfoSelectors.productInfo
  );
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [authModal] = useAuthModal();
  const navigate = useNavigate();
  const location = useLocation();

  const showNavbarElements = location.pathname !== pathsConfig.payment.link;

  const handleStartAuth = () => {
    if (isAuthed) {
      setIsMenuOpen(!isMenuOpen);
      return;
    }

    authModal({});
  };

  const handleLogout = () => {
    dispatch(logout());
  };

  const onGoToCart = () => {
    navigate(pathsConfig.payment.link);

    setIsMenuOpen(!isMenuOpen);
  };

  const renderButtonText = (): string => {
    if (isMobile) return "";

    if (isAuthed) return "Profile";

    return "Login";
  };

  const renderCartIcon = () => {
    if (!currentCartCounter) return <CartIcon />;

    return <CartActiveIcon />;
  };

  const iconToRender = renderCartIcon();
  const textToRender = renderButtonText();

  return (
    <nav className={s.wrapper}>
      <Link to={pathsConfig.home.link} className={s.wrapperMeta}>
        <img
          className={s.wrapperMetaImage}
          src={PizzaImage}
          alt="pizza-image"
        />
        <div className={s.wrapperMetaInfo}>
          <div>REACT PIZZA</div>
          <p>It doesn't get any tastier.</p>
        </div>
      </Link>
      {showNavbarElements && <SearchInput />}
      <div className={s.wrapperActions}>
        <Button
          onClick={handleStartAuth}
          icon={<UserIcon />}
          className={s.wrapperActionsFirst}
          text={textToRender}
        />
        {isMenuOpen && isAuthed && (
          <div className={s.wrapperLoggedMenu}>
            <Button onClick={onGoToCart} text="Orders" />
            <Button onClick={handleLogout} text="Logout" />
          </div>
        )}
        {showNavbarElements && <CartButton text="520 ₽" icon={iconToRender} />}
      </div>
    </nav>
  );
};
