import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  email: 111,
  forgotStep: 1,
};

const authSlice = createSlice({
  name: "counter",
  initialState,
  reducers: {
    setForgotStep: (state, action) => {
      state.forgotStep = action.payload;
    },
  },
});

export const { setForgotStep } = authSlice.actions;

export const selectRegisteredEmail = (state) => state.auth.email;

export default authSlice.reducer;
