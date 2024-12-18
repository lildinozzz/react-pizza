import { Header, Navbar, SideFilters } from "@widgets/index";
import s from "./style.module.scss";
import { useEffect } from "react";
import {
  setCategories,
  seTProducts,
} from "@store/reducers/common-filter/dispatchers";
import { getAllPizzas } from "@app/service/product";
import { getAllCategories } from "@app/service/category";
import { ProductList } from "@features/products/components/product-list";
import { useSelector } from "react-redux";
import { commonUISelectors } from "@app/store/reducers/common-ui/selectors";

export const MainPage = () => {
  // const { isSidebarOpen } = useSelector(commonUISelectors.commonUIInfo);
  const { isMobile } = useSelector(commonUISelectors.commonUIInfo);
  const products = getAllPizzas();
  const categories = getAllCategories();

  useEffect(() => {
    setCategories(categories);
    seTProducts(products);
  }, [categories, products]);

  return (
    <div className={s.wrapper}>
      <Navbar />
      {!isMobile && <Header />}
      <div className={s.wrapperContent}>
        <SideFilters />
        <ProductList />
      </div>
      {/* {isSidebarOpen && <Sidebar />} */}
    </div>
  );
};
