import { CartItem, CartState, Product } from "@/redux/interface/interfaces";
import { PayloadAction, createSelector, createSlice } from "@reduxjs/toolkit";
import { RootState } from "../store";

const getFromLocalStorage = (key: string) => {
  if (!key || typeof window === 'undefined') {
      return ""
  }
  return localStorage.getItem(key)
}

const initialState: CartState = {
  cartItems: getFromLocalStorage("cart") ? JSON.parse(getFromLocalStorage("cart") || "{}") : [],
  loading: false,
};
function saveToStorageCart(cart: CartItem[]) {
  localStorage.setItem("cart", JSON.stringify(cart));
}

const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    increment: (state, action: PayloadAction<Product>) => {
      const item = action.payload;
      const existItem = state.cartItems.find((x) => x.product.id === item.id);
      if (existItem) {
        existItem.qty++;
      } else {
        state.cartItems.push({
          product: item,
          qty: 1,
        });
      }
      saveToStorageCart(state.cartItems);
    },
    decrement: (state, action: PayloadAction<Product>) => {
      const item = action.payload;
      const existItem = state.cartItems.find((x) => x.product.id === item.id);
      if (existItem) {
        existItem.qty--;
      } else {
        state.cartItems = state.cartItems.filter(
          (x) => x.product.id !== item.id
        );
      }
      saveToStorageCart(state.cartItems);
    },
    removeFromCart: (state, action: PayloadAction<Product>) => {
      const item = action.payload;
      state.cartItems = state.cartItems.filter((x) => x.product.id !== item.id);
      saveToStorageCart(state.cartItems);
    },
    hideLoading: (state) => {
      state.loading = false;
    },
  },
});

const cartItems = (state: RootState) => state.cart.cartItems;

export const totalCartItemsSelector = createSelector(
  [cartItems],
  (cartItems) => {
    return cartItems.reduce((total: number, curr: CartItem) => total + curr.qty, 0);
  }
);
export const productQtyInCartSelector = createSelector(
  [cartItems, (cartItems, productId: number) => productId],
  (cartItems, productId) =>
    cartItems.find((x) => x.product.id === productId)?.qty
);
export const totalCartPriceSelector = createSelector(
  [cartItems],
  (cartItems) => {
    return cartItems.reduce(
      (total: number, curr: CartItem) => total + curr.qty * curr.product.price,
      0
    );
  }
);

export const { increment, decrement, removeFromCart } = cartSlice.actions;
export default cartSlice.reducer;
