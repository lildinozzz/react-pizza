import { createAsyncThunk } from "@reduxjs/toolkit";
import { authService } from "../../../services/auth/authService";
import { TAuthForm, TAuthState } from "@shared/types/auth/auth";

export const loginThunk = createAsyncThunk<TAuthState, TAuthForm>(
  "auth/loginThunk",
  (formData) => authService.login(formData)
);

export const registerThunk = createAsyncThunk<TAuthState, TAuthForm>(
  "auth/registerThunk",
  (formData) => authService.register(formData)
);

export const refreshAuth = createAsyncThunk<TAuthState>(
  "auth/refreshAuth",
  () => authService.refresh()
);

export const logoutThunk = createAsyncThunk("/auth/logout", async () => {
  await authService.logout();
});
