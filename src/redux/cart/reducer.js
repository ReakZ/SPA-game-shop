import { createSlice } from '@reduxjs/toolkit';

const cartSlise = createSlice({
  name: 'cart',
  initialState: {
    gameInCart: [],
  },
  reducers: {
    setItemInCart: (state, action) => {
      state.gameInCart.push(action.payload);
    },
    deleteItemFromCart: (state, action) => {
      state.gameInCart=state.gameInCart.filter((item) => item.id !== action.payload);
    },
  },
});
export const {setItemInCart,deleteItemFromCart}=cartSlise.actions
export default cartSlise.reducer;