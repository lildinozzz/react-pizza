import { createAsyncThunk } from "@reduxjs/toolkit";
import { authService } from "../../../services/auth/authService";
import { TAuthForm, TAuthState } from "@shared/types/auth/auth";

export const authenticate = createAsyncThunk<TAuthState, TAuthForm>(
  "auth/authenticate",
  (formData) => authService.authenticate(formData)
);

export const refreshAuth = createAsyncThunk<TAuthState>(
  "auth/refreshAuth",
  () => authService.refresh()
);

export const logout = createAsyncThunk("/auth/logout", async () => {
  await authService.logout();
});
