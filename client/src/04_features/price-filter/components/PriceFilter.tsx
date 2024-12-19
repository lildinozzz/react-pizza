import { NumberInput } from "@app/components";
import s from "./style.module.scss";

type TPriceFilterProps = {
  onFromChange: (value: string) => void;
  onToChange: (value: string) => void;
};

export const PriceFilter = ({
  onFromChange,
  onToChange,
}: TPriceFilterProps) => {
  const handleFromChange = (value: string) => {
    onFromChange(value);
  };

  const handleToChange = (value: string) => {
    onToChange(value);
  };

  return (
    <>
      <div className={s.title}>Цена от и до:</div>

      <div className={s.wrapper}>
        <NumberInput
          onChange={(e) => handleFromChange(e.target.value)}
          min={0}
          placeholder="0"
        />
        <NumberInput
          onChange={(e) => handleToChange(e.target.value)}
          min={100}
          placeholder="3000"
        />
      </div>
    </>
  );
};
