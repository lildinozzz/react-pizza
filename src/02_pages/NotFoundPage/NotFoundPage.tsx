import { useNavigate } from "react-router-dom";
import s from "./style.module.scss";
import { Button } from "@components/index";
import { LeftArrowIcon } from "@icons/index";
export const NotFoundPage = () => {
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
        <div className={s.wrapperMetaTitle}>Страница не найдена</div>

        <p>
          Проверьте корректность введённого адреса или повторите попытку позже
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
      <img className={s.wrapperImage} src="/images/404.png" alt="404-image" />
    </div>
  );
};
