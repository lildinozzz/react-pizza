import { JSX } from "react";
import { Outlet } from "react-router-dom";
import { Navbar } from "@widgets/navbar";

export default function Root(): JSX.Element {
  return (
    <>
      <Navbar />
      <Outlet />
    </>
  );
}
