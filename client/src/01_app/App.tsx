import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { useEffect } from "react";
import { useMediaQuery } from "@hooks/index";
import { commonUiConfig } from "../../config/commonUI/commonUIConfig";
import { setIsMobile } from "./store/reducers/common-ui/dispatchers";
import {
  MainPage,
  NotFoundPage,
  PaymentPage,
  OrdersPage,
  MenuPage,
} from "@pages/index";
import { useAppDispatch } from "./store/hooks";
import { refreshAuth } from "./store/reducers/user-info/reducers";
import Root from "./Root";
import { pathsConfig } from "../../config/paths/paths";

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

  const router = createBrowserRouter([
    {
      path: pathsConfig.home.link,
      element: <Root />,
      errorElement: <NotFoundPage />,
      children: [
        { path: pathsConfig.home.link, element: <MainPage /> },
        { path: pathsConfig.payment.link, element: <PaymentPage /> },
        { path: pathsConfig.orders.link, element: <OrdersPage /> },
        { path: pathsConfig.menu.link, element: <MenuPage /> },
      ],
    },
  ]);

  return <RouterProvider router={router} />;
};
