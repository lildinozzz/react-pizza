import { Checkbox } from "@app/components";
import s from "./style.module.scss";

type TOptionsFilter = {
  handleCheckboxChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
};

export const OptionsFilter = ({ handleCheckboxChange }: TOptionsFilter) => {
  return (
    <>
      <div className={s.title}>Фильтрация</div>

      <div className={s.wrapper}>
        <Checkbox
          onChange={handleCheckboxChange}
          name="isConstructor"
          text="Можно собирать"
        />
        <Checkbox onChange={handleCheckboxChange} name="isNew" text="Новинки" />
      </div>
    </>
  );
};
