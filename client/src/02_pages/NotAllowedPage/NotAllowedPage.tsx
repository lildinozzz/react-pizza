import { useNavigate } from "react-router-dom";
import s from "./style.module.scss";
import { Button } from "@components/index";
import { LeftArrowIcon } from "@icons/index";
export const NotAllowedPage = () => {
  const navigate = useNavigate();

  const onGoToMainPage = () => {
    navigate("/");
  };

  const onRefreshPage = () => {
    window.location.reload();
  };

  return (
    <div className={s.wrapper}>
      <div className={s.wrapperMeta}>
        <div className={s.wrapperMetaTitle}>Доступ запрещен</div>

        <p>
          Данную страницу могут просматривать только авторизованные пользователи
        </p>

        <div className={s.wrapperActions}>
          <Button
            onClick={onGoToMainPage}
            icon={<LeftArrowIcon />}
            text="На главную"
          />
          <Button onClick={onRefreshPage} theme="secondary" text="Обновить" />
        </div>
      </div>
      <img className={s.wrapperImage} src="/images/403.png" alt="404-image" />
    </div>
  );
};
