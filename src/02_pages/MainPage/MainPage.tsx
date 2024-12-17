import { Header, MainContent, Navbar, SideFilters } from "@widgets/index";
import s from "./style.module.scss";
import { useEffect } from "react";
import {
  setCategories,
  setPizzas,
} from "@store/reducers/common-filter/dispatchers";
import { getAllPizzas } from "@app/service/product";
import { getAllCategories } from "@app/service/category";

export const MainPage = () => {
  // const { isSidebarOpen } = useSelector(commonUISelectors.commonUIInfo);

  const products = getAllPizzas();
  const categories = getAllCategories();

  useEffect(() => {
    setCategories(categories);
    setPizzas(products);
  }, [categories, products]);

  return (
    <div className={s.wrapper}>
      <Navbar />
      <Header />
      <div className={s.contentWrapper}>
        <div className={s.sideFilters}>
          <SideFilters />
        </div>
        <MainContent />
      </div>
      {/* {isSidebarOpen && <Sidebar />} */}
    </div>
  );
};
