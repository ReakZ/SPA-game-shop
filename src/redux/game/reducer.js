import { createSlice } from '@reduxjs/toolkit';

const gameSlice = createSlice({
  name: 'game',
  initialState: {
    currentGame: null,
  },
  reducers: {
    setGame: (state, action) => {
      state.currentGame=action.payload
    },

  },
});
export const {setGame}=gameSlice.actions
export default gameSlice.reducer;