import { createSlice } from "@reduxjs/toolkit";

const themeModeSlice = createSlice({
  name: "themeMode",
  initialState: {
    selected:"black",
    applied:"black",
  },
  reducers: {
    setTheme(state, action) {
      state.selected = action.payload;
    },
    setAppliedTheme(state, action) {
      state.applied = action.payload;
    },
  },
});

export const themeActions = themeModeSlice.actions;
export default themeModeSlice.reducer;
