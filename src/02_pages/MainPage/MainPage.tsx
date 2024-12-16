import { Header, MainContent, Navbar, SideFilters } from "@widgets/index";
import s from "./style.module.scss";

export const MainPage = () => {
  // const { isSidebarOpen } = useSelector(commonUISelectors.commonUIInfo);

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
