import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  userInfo: {
    email: "asd@gmail.com",
    password: "asdasd",
  },
  forgotStep: 1,
  authError: null,
  authSuccess: null,
  userRegistrationType: null,
};

const authSlice = createSlice({
  name: "counter",
  initialState,
  reducers: {
    setForgotStep: (state, action) => {
      state.forgotStep = action.payload;
    },
    setAuthSuccess: (state, action) => {
      state.authSuccess = action.payload;
    },
    setAuthError: (state, action) => {
      state.authError = action.payload;
    },
    setUserRegistrationType: (state, action) => {
      state.userRegistrationType = action.payload;
    },
  },
});

export const { setForgotStep, setAuthSuccess, setUserRegistrationType } =
  authSlice.actions;

export const selectUserInfo = (state) => state.auth.userInfo;
export const selectForgotStep = (state) => state.auth.forgotStep;
export const selectAuthSuccess = (state) => state.auth.authSuccess;
export const selectAuthError = (state) => state.auth.authError;
export const selectUserRegistrationType = (state) =>
  state.auth.userRegistrationType;

export default authSlice.reducer;
