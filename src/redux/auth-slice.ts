import { PayloadAction, createSlice } from "@reduxjs/toolkit";

interface User {
  login: string;
  password: string;
}

interface AuthState {
  status: string;
  error: null | boolean;
  isAuthenticated: boolean;
  user: User | null;
}

const initialState: AuthState = {
  status: "idle",
  error: null,
  isAuthenticated: false,
  user: null,
};

export const authSlice = createSlice({
  name: "@@auth",
  initialState,
  reducers: {
    loginStart: (state) => {
      state.status = "loading";
      state.error = null;
    },
    loginSuccess: (state, action: PayloadAction<User>) => {
      state.status = "received";
      state.isAuthenticated = true;
      state.user = action.payload;
      // Сохраняем данные об авторизации в localStorage
      localStorage.setItem("authData", JSON.stringify(action.payload));
    },
    loginFailure: (state, action: PayloadAction<boolean>) => {
      state.status = "rejected";
      state.error = action.payload;
    },
  },
});
