import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { Provider } from "react-redux";
import { store } from "./store/index";
import { useEffect } from "react";
import { useMediaQuery } from "@hooks/index";
import { commonUiConfig } from "../../config/commonUI/commonUIConfig";
import { setIsMobile } from "./store/reducers/common-ui/dispatchers";
import { MainPage, NotFoundPage } from "@pages/index";
import { setCategories } from "@store/reducers/common-filter/dispatchers";
import { TCategory } from "06_shared/types/types";
import { ModalProvider } from "@shared/modal";

const category: TCategory[] = [
  { name: "Все" },
  { name: "Мясные" },
  { name: "Острые" },
  { name: "Сладкие" },
  { name: "Вегетарианские" },
  { name: "С курицей" },
];

export const App = () => {
  const mobile = useMediaQuery("max-width", commonUiConfig.mediaSmallWidth);

  useEffect(() => {
    setIsMobile(mobile);
  }, [mobile]);

  useEffect(() => {
    setCategories(category);
  }, []);

  return (
    <Provider store={store}>
      <ModalProvider>
        <Router>
          <Routes>
            <Route path="/" element={<MainPage />} />
            <Route path="*" element={<NotFoundPage />} />
          </Routes>
        </Router>
      </ModalProvider>
    </Provider>
  );
};
