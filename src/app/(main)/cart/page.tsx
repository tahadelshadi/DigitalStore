"use client";
import { useAppSelector } from "@/redux/hooks";
import { RootState } from "@/redux/store";
import CartBag from "@/components/cart/cartBag";
import BillCard from "@/components/cart/billCard";
import Discount from "@/components/cart/discount";
import dynamic from "next/dynamic";

const CartComponent = () => {
  const { cartItems } = useAppSelector((state: RootState) => state.cart);

    return (
      <section className="min-h-screen md:mx-10 xs:mx-3">
        <div className="h-4 border-b-2 text-left ">
          <span className="bg-white text-xl pr-5 items-center">
            Shopping Cart
          </span>
        </div>
        {cartItems.length === 0 ? (
          <p className="font-semibold mx-auto mt-10 p-10 ">
            Your Shopping Cart Is Empty ... !
          </p>
        ) : (
          <>
            <CartBag cartItems={cartItems} />
            <div className="flex md:flex-row xs:flex-col justify-between mt-6">
              <Discount />
              <BillCard />
            </div>
          </>
        )}
      </section>
    );
};
const Cart = dynamic(() => Promise.resolve(CartComponent), {
  ssr: false,
});
export default Cart;

