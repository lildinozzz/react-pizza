import { Reducer } from "@reduxjs/toolkit";
import { TStore } from "../../../06_shared/types/types";
import { commonUI } from "./common-ui";
import { commonFilter } from "./common-filter";

type TReducer = {
  [K in keyof TStore]: Reducer<TStore[K]>;
};

export const reducer: TReducer = {
  commonUI,
  commonFilter,
};
