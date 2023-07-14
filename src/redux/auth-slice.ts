import { PayloadAction, createAsyncThunk, createSlice } from "@reduxjs/toolkit";

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
  reducers: {},
});
