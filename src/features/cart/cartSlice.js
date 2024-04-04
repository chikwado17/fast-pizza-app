import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  cart: [],
  //   cart: [
  //     {
  //       pizzaId: 21,
  //       name: 'Mediterranean',
  //       quantity: 2,
  //       unitPrice: 16,
  //       totalPrice: 32,
  //     },
  //   ],
};

const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    addItem(state, action) {
      //payload == newItem
      state.cart.push(action.payload);
    },
    deleteItem(state, action) {
      //payload == pizzaId
      state.cart = state.cart.filter((item) => item.pizzaId !== action.payload);
    },
    increaseItemQuantity(state, action) {
      //payload == pizzaId
      const item = state.cart.find((item) => item.pizzaId === action.payload);
      item.quantity++;
      item.totalPrice = item.quantity * item.unitPrice;
    },
    decreaseItemQuantity(state, action) {
      //payload == pizzaId
      const item = state.cart.find((item) => item.pizzaId === action.payload);
      item.quantity--;
      item.totalPrice = item.quantity * item.unitPrice;

      //deleting the item from the cart when the quantity is reached to zero
      if (item.quantity === 0) {
        cartSlice.caseReducers.deleteItem(state, action);
      }

      //   if (item.quantity <= 0) {
      //     state.cart = state.cart.filter((i) => i !== item);
      //   }
    },
    clearCart(state) {
      state.cart = [];
    },
  },
});

export const {
  addItem,
  deleteItem,
  increaseItemQuantity,
  decreaseItemQuantity,
  clearCart,
} = cartSlice.actions;
export default cartSlice.reducer;

//export totalCartQuantity
export const getTotalCartQuantity = (state) =>
  state.carts.cart.reduce((sum, cur) => sum + cur.quantity, 0);

//export totalCartPrice
export const getTotalCartPrices = (state) =>
  state.carts.cart.reduce((sum, cur) => sum + cur.totalPrice, 0);

//getting the total selected cart item quantity by using the id
export const getCurrentQuantityById = (id) => (state) =>
  state.carts.cart.find((item) => item.pizzaId === id)?.quantity ?? 0;
