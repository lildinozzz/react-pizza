import { configureStore, EnhancedStore } from "@reduxjs/toolkit";

import { TStore } from "../../06_shared/types/types";
import { reducer } from "./reducers";

export const store: EnhancedStore<TStore> = configureStore({
  reducer,
  devTools: true,
});
