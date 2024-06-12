import { configureStore } from "@reduxjs/toolkit";
import cartReducer from "./cart/cartSlice";

export const Store = () => {
  return configureStore({
    reducer: {
      cart: cartReducer,
    },
  });
};
export type AppStore = ReturnType<typeof Store>;
export type RootState = ReturnType<AppStore["getState"]>;
export type AppDispatch = AppStore["dispatch"];
