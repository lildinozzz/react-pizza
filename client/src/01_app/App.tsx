import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { useEffect } from "react";
import { useMediaQuery } from "@hooks/index";
import { commonUiConfig } from "../../config/commonUI/commonUIConfig";
import { setIsMobile } from "./store/reducers/common-ui/dispatchers";
import { MainPage, NotFoundPage } from "@pages/index";
import { useAppDispatch, useAppSelector } from "./store/hooks";
import { refreshAuth } from "./store/reducers/user-info/reducers";
import { SettingsPage } from "@pages/SettingsPage";
import PrivateRouter from "./HOC/PrivateRouter";
import { userInfoSelectors } from "./store/reducers/user-info/selectors";

export const App = () => {
  const dispatch = useAppDispatch();
  const { isAuthed } = useAppSelector(userInfoSelectors.userInfo);
  const mobile = useMediaQuery("max-width", commonUiConfig.mediaSmallWidth);

  useEffect(() => {
    setIsMobile(mobile);
  }, [mobile]);

  useEffect(() => {
    void dispatch(refreshAuth());
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const router = createBrowserRouter([
    {
      errorElement: <NotFoundPage />,
      children: [
        { path: "/", element: <MainPage /> },
        {
          path: "/settings",
          element: (
            <PrivateRouter isAllowed={isAuthed}>
              <SettingsPage />
            </PrivateRouter>
          ),
        },
      ],
    },
  ]);

  return <RouterProvider router={router} />;
};
