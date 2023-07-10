import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  cart: [],
  // cart: [
  //   {
  //     pizzaId: 12,
  //     name: 'hallom',
  //     quantity: 2,
  //     unitPrice: 16,
  //     total: 32,
  //   },
  // ],
};

const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    addItem(state, action) {
      const pizza = state.cart.find(
        (item) => item.pizzaId === action.payload.pizzaId
      );
      if (pizza) {
        pizza.quantity++;
        pizza.totalPrice = pizza.quantity * pizza.unitPrice;
      } else {
        state.cart.push(action.payload);
      }
    },
    deleteItem(state, action) {
      state.cart = state.cart.filter(
        (item) => item.pizzaId !== +action.payload
      );
    },
    increaseItemQnt(state, action) {
      const pizza = state.cart.find((item) => item.pizzaId === action.payload);
      if (!pizza) return;
      pizza.quantity++;
      pizza.totalPrice = pizza.quantity * pizza.unitPrice;
    },
    decreaseItemQnt(state, action) {
      const pizza = state.cart.find((item) => item.pizzaId === action.payload);
      if (!pizza) return;
      pizza.quantity--;
      pizza.totalPrice = pizza.quantity * pizza.unitPrice;

      if (pizza.quantity === 0) {
        cartSlice.caseReducers.deleteItem(state, action);
      }
    },
    clearCart(state) {
      state.cart = [];
    },
  },
});

export const {
  addItem,
  clearCart,
  decreaseItemQnt,
  deleteItem,
  increaseItemQnt,
} = cartSlice.actions;

export default cartSlice.reducer;

export const getTotalCartQnt = (store) =>
  store.cart.cart.reduce((acc, item) => acc + item.quantity, 0);

export const getTotalCartPrice = (store) =>
  store.cart.cart.reduce((acc, item) => acc + item.totalPrice, 0);

export const getCurrentQntById = (id) => {
  return (state) =>
    state.cart.cart.find((item) => item.pizzaId === id)?.quantity ?? 0;
};
