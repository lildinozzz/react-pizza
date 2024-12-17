import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { useEffect } from "react";
import { useMediaQuery } from "@hooks/index";
import { commonUiConfig } from "../../config/commonUI/commonUIConfig";
import { setIsMobile } from "./store/reducers/common-ui/dispatchers";
import { MainPage, NotFoundPage } from "@pages/index";
import { useAppDispatch } from "./store/hooks";
import { refreshAuth } from "./store/reducers/user-info/reducers";

export const App = () => {
  const dispatch = useAppDispatch();
  const mobile = useMediaQuery("max-width", commonUiConfig.mediaSmallWidth);

  useEffect(() => {
    setIsMobile(mobile);
  }, [mobile]);

  useEffect(() => {
    void dispatch(refreshAuth());
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <Router>
      <Routes>
        <Route path="/" element={<MainPage />} />
        <Route path="*" element={<NotFoundPage />} />
      </Routes>
    </Router>
  );
};
