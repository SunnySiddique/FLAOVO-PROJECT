import { configureStore } from "@reduxjs/toolkit";
import CartReducer from "../food/CartSlice";
import CategoryReducer from "../food/CategorySlice";
import SearchREducer from "../food/SearchSlice";
const store = configureStore({
  reducer: {
    cart: CartReducer,
    category: CategoryReducer,
    search: SearchREducer,
  },
});

export default store;
