import { products } from "../menuList"
import { updatePriceAndAmount } from "../utils"
import { createSlice } from "@reduxjs/toolkit";

const basketSlice = createSlice({
  name: "basket",
  initialState: {
    basket: {},
    totalPrice: 0,
    totalAmount: 0,
  },
  reducers: {
    addProduct(state, action) {
      const id = action.payload;
      if (state.basket.hasOwnProperty(id)) {
        state.basket[id] += 1;
      } else {
        state.basket[id] = 1;
      }
      [state.totalPrice, state.totalAmount] = updatePriceAndAmount(state.basket, products);
    },
    removeProduct(state, action) {
      const id = action.payload;
      delete state.basket[id];
      [state.totalPrice, state.totalAmount] = updatePriceAndAmount(state.basket, products);
    },
    incProductAmount(state, action) {
      const id = action.payload;
      state.basket[id] += 1;
      [state.totalPrice, state.totalAmount] = updatePriceAndAmount(state.basket, products);
    },
    decProductAmount(state, action) {
      const id = action.payload;
      if (state.basket[id] > 1) {
        state.basket[id] -= 1;
        
        [state.totalPrice, state.totalAmount] = updatePriceAndAmount(state.basket, products);
      }
    },
    basketClean(state, action) {
      state.basket = {};
      [state.totalPrice, state.totalAmount] = updatePriceAndAmount(state.basket, products);
    }
  }
});

export const {addProduct, removeProduct, incProductAmount, decProductAmount, basketClean} = basketSlice.actions;
export default basketSlice.reducer;
