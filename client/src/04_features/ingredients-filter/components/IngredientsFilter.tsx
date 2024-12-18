import { Checkbox } from "@app/components";
import s from "./style.module.scss";

const ingredients = [
  "Сырный соус",
  "Чеснок",
  "Солённые огурчики",
  "Томаты",
  "Красный лук",
  "Моцарелла",
];

export const IngredientsFilter = () => {
  return (
    <>
      <div className={s.title}>Ингридиенты: </div>
      <div className={s.wrapper}>
        {ingredients.map((ingredient, index) => (
          <Checkbox key={index} text={ingredient} />
        ))}
      </div>
    </>
  );
};
