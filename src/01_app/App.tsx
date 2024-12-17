import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { Provider } from "react-redux";
import { store } from "./store/index";
import { useEffect } from "react";
import { useMediaQuery } from "@hooks/index";
import { commonUiConfig } from "../../config/commonUI/commonUIConfig";
import { setIsMobile } from "./store/reducers/common-ui/dispatchers";
import { MainPage, NotFoundPage } from "@pages/index";
import { ModalProvider } from "@shared/modal";

export const App = () => {
  const mobile = useMediaQuery("max-width", commonUiConfig.mediaSmallWidth);

  useEffect(() => {
    setIsMobile(mobile);
  }, [mobile]);

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
