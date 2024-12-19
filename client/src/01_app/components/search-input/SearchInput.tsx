import { useEffect, useState } from "react";
import s from "./style.module.scss";
import { SearchIcon } from "@icons/index";
import cn from "classnames";
import { useAppDispatch } from "@app/store/hooks";
import { getAllProductsBySearch } from "@app/store/reducers/product-info/reducers";
import { useDebounce } from "@shared/hooks";

export const SearchInput = () => {
  const dispatch = useAppDispatch();
  const [isActive, setIsActive] = useState(false);
  const [searchValue, setSearchValue] = useState<string>("");
  const debouncedSearchValue = useDebounce(searchValue, 300);

  const handleFocus = () => setIsActive(true);
  const handleBlur = () => setIsActive(false);

  const handleChange: React.ChangeEventHandler<HTMLInputElement> = (e) => {
    const value = e.target.value;
    setSearchValue(value);
  };

  useEffect(() => {
    dispatch(getAllProductsBySearch(debouncedSearchValue));

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [debouncedSearchValue]);

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
