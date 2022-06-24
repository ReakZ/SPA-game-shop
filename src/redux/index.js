import { configureStore } from "@reduxjs/toolkit";
import cartReducer from './cart/reducer'
import filterReducer from './filter/reducer'

export const store=configureStore({
  reducer:{
    cart:cartReducer,
    filters:filterReducer
  }
})