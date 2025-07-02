import { createSlice } from "@reduxjs/toolkit";

const userInfoSlice = createSlice({
  name: "userInfo",
  initialState: {
    role: "user",
    token: "jwejfpiowjfipnweondoiqnwoi221393120",
  },
  reducers: {
    setRole(state, action) {
      state.role = action.payload;
    },
    setToken(state, action) {
      state.token = action.payload;
    },
  },
});

export default userInfoSlice.reducer;
export const userActions = userInfoSlice.actions;
