import { configureStore } from "@reduxjs/toolkit";
import { reducer } from "./reducers";

export const store = configureStore({
  middleware: (getDefaultMiddleWare) =>
    getDefaultMiddleWare({
      serializableCheck: {
        ignoredActions: ["productInfo/setCurrentCartCounter"],
        ignoredActionPaths: ["payload"],
        ignoredPaths: ["items.dates"],
      },
    }),
  reducer,
  devTools: true,
});

export type StoreT = typeof store;
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
