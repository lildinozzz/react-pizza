import { JSX } from "react";
import { Navigate, Outlet } from "react-router-dom";
import { pathsConfig } from "../../../config/paths/paths";

type TPrivateRouterProps = {
  children?: React.ReactElement;
  isAllowed: boolean;
  redirect?: string;
};

export default function PrivateRouter({
  children,
  isAllowed,
  redirect = pathsConfig.home.link,
}: TPrivateRouterProps): JSX.Element {
  if (!isAllowed) return <Navigate to={redirect} />;
  return children || <Outlet />;
}
