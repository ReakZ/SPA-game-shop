import { createSlice } from '@reduxjs/toolkit';

const filterSlise = createSlice({
  name: 'filter',
  initialState: {
    filtersGame: [],
  },
  reducers: {
    setFilter: (state, action) => {
      state.filtersGame.push(action.payload);
    },
    deleteFilter: (state, action) => {
      state.filtersGame=state.filtersGame.filter((item) => item !== action.payload);
    },
    clearFilters: (state, action) => {
      state.filtersGame=[]
    },
  },
});
export const {setFilter,deleteFilter,clearFilters}=filterSlise.actions
export default filterSlise.reducer;