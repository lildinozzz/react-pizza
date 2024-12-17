import { useState } from "react";
import s from "./style.module.scss";
import { SearchIcon } from "@icons/index";
import cn from "classnames";

export const SearchInput = () => {
  const [isActive, setIsActive] = useState(false);
  const [searchValue, setSearchValue] = useState<string>("");
  const handleFocus = () => setIsActive((prev) => !prev);
  const handleBlur = () => setIsActive((prev) => !prev);

  const handleChange: React.ChangeEventHandler<HTMLInputElement> = (e) => {
    const value = e.target.value;
    setSearchValue(value);
  };

  return (
    <div className={s.searchWrapper}>
      <SearchIcon className={cn(s.icon, { [s.iconActive]: isActive })} />
      <input
        value={searchValue}
        onChange={handleChange}
        onFocus={handleFocus}
        onBlur={handleBlur}
        className={s.input}
        placeholder="Поиск пиццы..."
      />
    </div>
  );
};
