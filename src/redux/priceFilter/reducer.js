import { createSlice } from '@reduxjs/toolkit';
const PriceReducer = createSlice({
  name: 'priceFilter',
  initialState: { priceFilter: {min:999,max:3999} },
  reducers: {
    setPriceFilter: (state, action) => {
      state.priceFilter=action.payload;
    },
    deletePriceFilter: (state, action) => {
      state.priceFilter = {min:999,max:3999} 
    },
  },
});
export const { setPriceFilter, deletePriceFilter } = PriceReducer.actions;
export default PriceReducer.reducer;
