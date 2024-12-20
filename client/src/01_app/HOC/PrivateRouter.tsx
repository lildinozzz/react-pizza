import { NotAllowedPage } from "@pages/NotAllowedPage";
import { JSX } from "react";
import { Outlet } from "react-router-dom";

type TPrivateRouterProps = {
  children?: React.ReactElement;
  isAllowed: boolean;
};

export default function PrivateRouter({
  children,
  isAllowed,
}: TPrivateRouterProps): JSX.Element {
  if (!isAllowed) return <NotAllowedPage />;
  return children || <Outlet />;
}
