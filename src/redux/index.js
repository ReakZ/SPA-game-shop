import { configureStore } from '@reduxjs/toolkit';
import cartReducer from './cart/reducer';
import filterReducer from './filter/reducer';
import gameReducer from './game/reducer';
import PriceReducer from './priceFilter/reducer';

export const store = configureStore({
  reducer: {
    cart: cartReducer,
    filters: filterReducer,
    game: gameReducer,
    priceFilters: PriceReducer,
  },
});
