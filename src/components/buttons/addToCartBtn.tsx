"use client";

import { useAppDispatch, useAppSelector } from "@/redux/hooks";
import { Product } from "@/redux/interface/interfaces";
import {
  decrement,
  increment,
  productQtyInCartSelector,
} from "@/redux/cart/cartSlice";
import { Button } from "./button";
import { CiTrash } from "react-icons/ci";

const AddToCartBtn = ({ product }: { product: Product }) => {
  const dispatch = useAppDispatch();
  const qty = useAppSelector((state) =>
    productQtyInCartSelector(state, product.id)
  );

  if (!qty)
    return (
      <button
        className="gap-2 flex flex-row h-fit justify-center items-center bg-blue-700 px-5 py-2.5 rounded-md text-sm text-white"
        onClick={() => dispatch(increment(product))}>
        Add to Cart
      </button>
    );

  return (
    <>
      <div className="flex flex-row gap-2 justify-center items-center">
        {qty !== 1 ? (
          <Button
          disabled
            variant="danger"
            className="w-12 h-10"
            onClick={() => dispatch(decrement(product))}>
            -
          </Button>
        ) : (
          <Button
            variant="danger"
            className="flex items-center justify-center w-12 h-10"
            onClick={() => dispatch(decrement(product))}>
            <CiTrash size={24} />
          </Button>
        )}
        <p className="p-4">{qty}</p>
        <Button
          variant="success"
          className="w-12 h-10"
          onClick={() => dispatch(increment(product))}>
          +
        </Button>
      </div>
    </>
  );
};

export default AddToCartBtn;
