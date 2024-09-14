"use client";

import dynamic from "next/dynamic";
import { useAppDispatch, useAppSelector } from "@/redux/hooks";
import { CiTrash } from "react-icons/ci";
import { Button } from "./button";
import { Product } from "@/interface/interfaces";
import {
  decrement,
  increment,
  productQtyInCartSelector,
} from "@/redux/cart/cartSlice";

const AddToCartComponent = ({ product }: { product: Product }) => {
  const dispatch = useAppDispatch();
  const qty = useAppSelector((state) =>
    productQtyInCartSelector(state, product.id)
  );

  if (!qty)
    return (
      <div className="items-center">
        <Button variant="blue" className="md:w-full"  onClick={() => dispatch(increment(product))}>
          Add to Cart
        </Button>
      </div>
    );

  return (
    <>
      <div className="flex flex-row gap-2 items-center justify-center">
        {qty !== 1 ? (
          <Button
            variant="danger"
            className="w-12 h-10"
            onClick={() => dispatch(decrement(product))}>
            -
          </Button>
        ) : (
          <Button
            variant="danger"
            className="flex justify-center items-center w-12 h-10 "
            onClick={() => dispatch(decrement(product))}>
            <CiTrash size={24} />
          </Button>
        )}
        <div className="w-[30px] text-center">{qty}</div>
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

const AddToCartBtn = dynamic(() => Promise.resolve(AddToCartComponent), {
  ssr: false,
  loading: () => <Button variant="blue">Add to Cart</Button>,
});
export default AddToCartBtn;
