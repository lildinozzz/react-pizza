import { Checkbox } from "@app/components";
import s from "./style.module.scss";

type TOptionsFilter = {
  handleCheckboxChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
};

export const OptionsFilter = ({ handleCheckboxChange }: TOptionsFilter) => {
  return (
    <>
      <div className={s.title}>Filtering</div>

      <div className={s.wrapper}>
        <Checkbox
          onChange={handleCheckboxChange}
          name="isConstructor"
          text="Customizable"
        />
        <Checkbox
          onChange={handleCheckboxChange}
          name="isNew"
          text="New Arrivals"
        />
      </div>
    </>
  );
};
