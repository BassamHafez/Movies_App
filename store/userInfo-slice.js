import { createSlice } from "@reduxjs/toolkit";

const userInfoSlice = createSlice({
  name: "userInfo",
  initialState: {
    info: null,
    token: "",
  },
  reducers: {
    setUserInfo(state, action) {
      state.info = action.payload;
    },
    setToken(state, action) {
      state.token = action.payload;
    },

    clearAuth(state) {
      state.token = "";
      state.info = null;
    },
  },
});

export default userInfoSlice.reducer;
export const userActions = userInfoSlice.actions;
