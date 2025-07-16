import { createSlice } from "@reduxjs/toolkit";

const filterSidebarSlice = createSlice({
  name: "filterSidebar",
  initialState: {
    type: "discover",
  },
  reducers: {
    setFilterType(state, action) {
      state.type = action.payload;
    },
  },
});

export default filterSidebarSlice.reducer;
export const filterSidebarActions = filterSidebarSlice.actions;
