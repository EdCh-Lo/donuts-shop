import { createSlice, configureStore } from "@reduxjs/toolkit";

const initialCartState = { cart: 0 };

const cartSlice = createSlice({
  name: "cart",
  initialState: initialCartState,
  reducers: {
    increase(state, action) {
      state.cart = Math.round((state.cart + action.payload) * 100) / 100;
    },
  },
});

const store = configureStore({
  reducer: cartSlice.reducer,
});

export const cartActions = cartSlice.actions;

export default store;
