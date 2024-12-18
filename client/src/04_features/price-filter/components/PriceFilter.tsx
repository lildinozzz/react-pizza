import { NumberInput } from "@app/components";
import s from "./style.module.scss";

export const PriceFilter = () => {
  return (
    <>
      <div className={s.title}>Цена от и до:</div>

      <div className={s.wrapper}>
        <NumberInput min={0} max={1000} placeholder="0" defaultValue={0} />
        <NumberInput
          min={100}
          max={2000}
          defaultValue={2000}
          placeholder="1000"
        />
      </div>
    </>
  );
};
