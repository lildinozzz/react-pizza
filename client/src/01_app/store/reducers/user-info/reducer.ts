import { createSlice } from "@reduxjs/toolkit";
import { TAuthState } from "@shared/types/auth/auth";
import { logoutThunk, refreshAuth, authenticateThunk } from "./reducers";

const initialState: TAuthState = {
  accessToken: "",
  user: {
    status: "unknown",
  },
};

export const { actions, reducer } = createSlice({
  name: "auth",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(refreshAuth.fulfilled, (state, action) => action.payload);
    builder.addCase(refreshAuth.rejected, (state) => {
      state.user.status = "guest";
    });
    builder.addCase(
      authenticateThunk.fulfilled,
      (state, action) => action.payload
    );
    builder.addCase(logoutThunk.fulfilled, (state) => {
      state.user.status = "guest";
      state.accessToken = "";
    });
  },
});
