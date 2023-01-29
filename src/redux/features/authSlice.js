import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

import * as api from "../api";

export const register = createAsyncThunk(
  "usuarios",
  async ({ userForm, navigate, toast }, { rejectWithValue }) => {
    try {
      const response = await api.signUp(userForm);
      toast.success("Registro exitoso");
      navigate("/");
      return response.data;
    } catch (err) {
      let error = err.response.data.msg
        ? err.response.data.msg
        : err.response && "Estamos presentando problemas internos";
      return rejectWithValue(error);
    }
  }
);
export const login = createAsyncThunk(
  "auth/login",
  async ({ userForm, navigate, toast }, { rejectWithValue }) => {
    try {
      const response = await api.signIn(userForm);
      toast.success("Inicio de sesión exitoso");
      navigate("/user-list");
      return response.data;
    } catch (err) {
      let error = err.response.data.msg
        ? err.response.data.msg
        : err.response && "Estamos presentando problemas internos";
      return rejectWithValue(error);
    }
  }
);

const authSlice = createSlice({
  name: "auth",
  initialState: {
    user: localStorage.getItem("profile")
      ? JSON.parse(localStorage.getItem("profile"))
      : null,
    error: "",
    loading: false,
  },
  reducers: {
    setUser: (state, action) => {
      state.user = action.payload;
    },
    updateUser: (state, action) => {
      state.user.userForm = action.payload;
    },
    setLogout: (state, action) => {
      localStorage.clear();
      state.user = null;
    },
    deleteError: (state, action) => {
      state.error = "";
    },
  },
  extraReducers: (builder) => {
    // Login
    builder.addCase(login.pending, (state, action) => {
      state.loading = true;
    });
    builder.addCase(login.rejected, (state, action) => {
      state.loading = false;
      state.error = action.payload;
    });
    builder.addCase(login.fulfilled, (state, action) => {
      state.loading = false;
      localStorage.setItem("profile", JSON.stringify({ ...action.payload }));
      state.user = action.payload;
    });
    // Register
    builder.addCase(register.pending, (state, action) => {
      state.loading = true;
    });
    builder.addCase(register.rejected, (state, action) => {
      state.loading = false;
      state.error = action.payload;
    });
    builder.addCase(register.fulfilled, (state, action) => {
      state.loading = false;
      localStorage.setItem("profile", JSON.stringify({ ...action.payload }));
      state.user = action.payload;
    });
  },
});

export const { setUser, setLogout, deleteError, updateUser } =
  authSlice.actions;
export default authSlice.reducer;
