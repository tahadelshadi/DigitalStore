"use client";

import { useAppDispatch, useAppSelector } from "@/redux/hooks";
import { Product } from "@/redux/interface/interfaces";
import {
  decrement,
  increment,
  productQtyInCartSelector,
} from "@/redux/cart/cartSlice";
import { BiChevronDown, BiChevronUp } from "react-icons/bi";

const CartCounterBtn = ({ product }: { product: Product }) => {
  const dispatch = useAppDispatch();
  const qty = useAppSelector((state) =>
    productQtyInCartSelector(state, product.id)
  );
  return (
    <>
      <div className="w-fit flex flex-row border rounded-sm border-slate-300 min-w-32">
        <button
          disabled={qty === 1 ? true : false}
          className="p-2 disabled:opacity-10 mx-auto"
          onClick={() => dispatch(decrement(product))}>
          <BiChevronDown />
        </button>
        <p className="p-4">{qty}</p>
        <button
          className="p-2 mx-auto"
          onClick={() => dispatch(increment(product))}>
          <BiChevronUp />
        </button>
      </div>
    </>
  );
};

export default CartCounterBtn;
