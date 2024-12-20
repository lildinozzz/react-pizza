import { useNavigate } from "react-router-dom";
import s from "./style.module.scss";
import { Button } from "@components/index";
import { LeftArrowIcon } from "@icons/index";
import { pathsConfig } from "../../../config/paths/paths";

export const NotFoundPage = () => {
  const navigate = useNavigate();

  const onGoToMainPage = () => {
    navigate(pathsConfig.home.link);
  };

  const onRefreshPage = () => {
    window.location.reload();
  };

  return (
    <div className={s.wrapper}>
      <div className={s.wrapperMeta}>
        <div className={s.wrapperMetaTitle}>Page Not Found</div>

        <p>Please check the URL for correctness or try again later.</p>

        <div className={s.wrapperActions}>
          <Button
            onClick={onGoToMainPage}
            icon={<LeftArrowIcon />}
            text="Go to Home"
          />
          <Button onClick={onRefreshPage} theme="secondary" text="Refresh" />
        </div>
      </div>
      <img className={s.wrapperImage} src="/images/404.png" alt="404 image" />
    </div>
  );
};
