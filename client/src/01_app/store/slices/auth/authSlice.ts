import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";
import {
  loginThunk,
  logoutThunk,
  refreshAuth,
  registerThunk,
} from "./authThunks";
import { TAuthState } from "@shared/types/auth/auth";

const initialState: TAuthState = {
  accessToken: "",
  user: {
    status: "unknown",
  },
};

export const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    login: (state, action: PayloadAction<TAuthState>) => action.payload,
    logout: (state) => {
      state.user.status = "guest";
      state.accessToken = "";
    },
  },
  extraReducers: (builder) => {
    builder.addCase(loginThunk.fulfilled, (state, action) => action.payload);
    builder.addCase(refreshAuth.fulfilled, (state, action) => action.payload);
    builder.addCase(refreshAuth.rejected, (state) => {
      state.user.status = "guest";
    });
    builder.addCase(registerThunk.fulfilled, (state, action) => action.payload);
    builder.addCase(logoutThunk.fulfilled, (state) => {
      state.user.status = "guest";
      state.accessToken = "";
    });
  },
});

export const { login, logout } = authSlice.actions;

export default authSlice.reducer;
