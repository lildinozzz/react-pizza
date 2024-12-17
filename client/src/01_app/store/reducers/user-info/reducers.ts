import { createAsyncThunk } from "@reduxjs/toolkit";
import { authService } from "../../../services/auth/authService";
import { TAuthForm, TAuthState } from "@shared/types/auth/auth";

export const authenticateThunk = createAsyncThunk<TAuthState, TAuthForm>(
  "auth/authenticateThunk",
  (formData) => authService.authenticate(formData)
);

export const refreshAuth = createAsyncThunk<TAuthState>(
  "auth/refreshAuth",
  () => authService.refresh()
);

export const logoutThunk = createAsyncThunk("/auth/logout", async () => {
  await authService.logout();
});
