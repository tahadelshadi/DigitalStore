"use client";
import { useAppSelector } from "@/redux/hooks";
import { RootState } from "@/redux/store";
import CartBag from "@/components/cart/cartBag";
import BillCard from "@/components/cart/billCard";
import Discount from "@/components/cart/discount";

const Cart = () => {
  const { cartItems } = useAppSelector((state: RootState) => state.cart);
  console.log(cartItems);
  if (cartItems.length === 0) {
    return (
      <section className="min-h-screen">
        <p className="mx-auto">Shopping Cart Is Empty ... !</p>
      </section>
    );
  } else {
    return (
      <section>
        <div className="flex flex-row mt-4 gap-2 border-b-2 py-4" id="title">
          <h1 className="text-2xl font-bold ">Shopping Bag</h1>
          <p className="text-slate-500 self-end">4 items</p>
        </div>
        <CartBag cartItems={cartItems} />
        <div className="flex flex-row justify-between mt-6">
          <Discount />
          <BillCard />
        </div>
      </section>
    );
  }
};
export default Cart;
