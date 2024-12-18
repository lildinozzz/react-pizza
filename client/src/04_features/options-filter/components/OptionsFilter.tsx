import { Checkbox } from "@app/components";
import s from "./style.module.scss";

export const OptionsFilter = () => {
  return (
    <>
      <div className={s.title}>Фильтрация</div>

      <div className={s.wrapper}>
        <Checkbox name="constructor" text="Можно собирать" />
        <Checkbox name="new" text="Новинки" />
      </div>
    </>
  );
};
