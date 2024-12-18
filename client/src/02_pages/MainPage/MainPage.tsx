import { Header, Navbar, SideFilters } from "@widgets/index";
import s from "./style.module.scss";
import { useEffect } from "react";
import { ProductList } from "@features/products/components/product-list";
import { useSelector } from "react-redux";
import { commonUISelectors } from "@app/store/reducers/common-ui/selectors";
import {
  getAllCategories,
  getAllIngredients,
  getAllProducts,
} from "@app/store/reducers/product-info/reducers";
import { useAppDispatch } from "@app/store/hooks";
export const MainPage = () => {
  // const { isSidebarOpen } = useSelector(commonUISelectors.commonUIInfo);
  const { isMobile } = useSelector(commonUISelectors.commonUIInfo);
  const dispatch = useAppDispatch();

  useEffect(() => {
    void dispatch(getAllCategories());
    void dispatch(getAllIngredients());
    void dispatch(getAllProducts());
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

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
