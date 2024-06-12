import { useAppDispatch } from "@/redux/hooks";
import { CartItem } from "@/redux/interface/interfaces";
import Image from "next/image";
import CartCounterBtn from "../buttons/cartCounterBtn";
import { removeFromCart } from "@/redux/cart/cartSlice";

const CartBag = ({ cartItems }: { cartItems: CartItem[] }) => {
  const dispatch = useAppDispatch();
  return (
    <div className="flex flex-col gap-2" id="cartShoppingList">
      {cartItems.map((items: CartItem) => (
        <div
          className="flex flex-row w-full  py-8 px-4 border-b-2"
          key={items.product.id}>
          <Image
            className=""
            src={items.product.imageUrl}
            width={200}
            height={100}
            alt={items.product.name}
            style={{ objectFit: "contain", aspectRatio: 1 }}
          />
          <div className="flex flex-col grow justify-between px-4">
            <p>{items.product.name}</p>
            <CartCounterBtn product={items.product} />
          </div>
          <div className="flex flex-col justify-between px-4">
            <button
              className="text-slate-500"
              onClick={() => dispatch(removeFromCart(items.product))}>
              Remove
            </button>
            <p>
              <span>&#x24;</span>
              {items.product.price}
            </p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default CartBag;
