import { Reducer } from "@reduxjs/toolkit";
import { TStore } from "../../../06_shared/types/types";
import { commonUI } from "./common-ui";
import { productInfo } from "./product-info";
import { userInfo } from "./user-info";

type TReducer = {
  [K in keyof TStore]: Reducer<TStore[K]>;
};

export const reducer: TReducer = {
  commonUI,
  productInfo,
  userInfo,
};
