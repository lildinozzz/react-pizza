import { Checkbox } from "@app/components";
import s from "./style.module.scss";

export const OptionsFilter = () => {
  return (
    <>
      <div className={s.title}>Фильтрация</div>

      <div className={s.wrapper}>
        <Checkbox text="Можно собирать" />
        <Checkbox text="Новинки" />
      </div>
    </>
  );
};
