import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  value: 111,
};

const authSlice = createSlice({
  name: "counter",
  initialState,
  reducers: {},
});

export const {} = authSlice.actions;

export const selectAuthInfo = (state) => state.auth.value;

export default authSlice.reducer;
