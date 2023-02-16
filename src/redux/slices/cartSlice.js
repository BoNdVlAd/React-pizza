import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  totalPrice: 0,
  items: [],
};

const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    // addItem(state, action) {
    //   state.items.push(action.payload);
    //   state.totalPrice = state.items.reduce((x, y) => {
    //     return x + y.price;
    //   }, 0);
    // },
    addItem(state, action) {
      const findItem = state.items.find((obj) => obj.id === action.payload.id);
      if (findItem) {
        findItem.count++;
      } else {
        state.items.push({
          ...action.payload,
          count: 1,
        });
      }
      state.totalPrice = state.items.reduce((x, y) => {
        return x + y.count * y.price;
      }, 0);
    },

    removeItem(state, action) {
      // state.items = state.items.filter((obj) => obj.id != action.payload);
      const findItem = state.items.find((obj) => obj.id === action.payload.id);

      if (findItem && findItem.count >= 1) {
        findItem.count--;
      }
      if (findItem.count === 0) {
        state.items = state.items.filter((obj) => obj.id != action.payload.id);
      }
      state.totalPrice = state.items.reduce((x, y) => {
        return x + y.count * y.price;
      }, 0);
    },

    removeItems(state, action) {
      const findItem = state.items.find((obj) => obj.id === action.payload.id);
      state.items = state.items.filter((obj) => obj.id != action.payload.id);
      state.totalPrice = state.items.reduce((x, y) => {
        return x + y.count * y.price;
      }, 0);
    },
    clearItems(state, action) {
      state.items = [];
      state.totalPrice = 0;
    },
    setCart(state, action) {
      state.items = Number(action.payload.items);
    },
  },
});

export const cartSelector = (state) => state.cart.items;
export const cartPriceSelector = (state) => state.cart;

export const { addItem, removeItem, removeItems, clearItems, setCart } = cartSlice.actions;

export default cartSlice.reducer;
