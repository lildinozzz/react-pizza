import { useState } from "react";
import s from "./style.module.scss";
import cn from "classnames";
import { useSelector } from "react-redux";
import { commonUISelectors } from "@store/reducers/common-ui/selectors";
import { commonFilterSelectors } from "@store/reducers/common-filter/selectors";

export const Header = () => {
  const { isMobile } = useSelector(commonUISelectors.commonUIInfo);
  const { categories } = useSelector(commonFilterSelectors.commonFilter);
  const [currentTab, setCurrentTab] = useState(categories[0]);

  const handleSetCurrentTab = (index: number) => {
    setCurrentTab(categories[index]);
  };

  return (
    <div className={s.wrapper}>
      {!isMobile && (
        <>
          <div className={s.wrapperTitle}> Все пиццы</div>
          <div className={s.wrapperFilters}>
            {categories?.map((cat, i) => (
              <button
                key={i}
                className={cn(s.button, {
                  [s.buttonActive]: currentTab?.name === cat?.name,
                })}
                onClick={() => handleSetCurrentTab(i)}
              >
                {cat?.name}
              </button>
            ))}
          </div>
        </>
      )}
    </div>
  );
};
