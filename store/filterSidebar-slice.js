import { createSlice } from "@reduxjs/toolkit";

const initialFilters = {
  include_adult: false,
  primary_release_year: null,
};

const filterSidebarSlice = createSlice({
  name: "filterSidebar",
  initialState: {
    type: "discover",
    filters: initialFilters,
    lastClickedMovieId: null, 
  },
  reducers: {
    setFilterType(state, action) {
      state.type = action.payload;
    },
    setFilter(state, action) {
      const { key, value } = action.payload;
      state.filters[key] = value;
    },
    setAllFilters(state, action) {
      state.filters = { ...state.filters, ...action.payload };
    },
    resetFilters(state) {
      state.filters = initialFilters;
    },
  },
});

export default filterSidebarSlice.reducer;
export const filterSidebarActions = filterSidebarSlice.actions;
