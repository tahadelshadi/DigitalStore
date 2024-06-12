import { useAppSelector } from "@/redux/hooks";
import { Button } from "../buttons/button";
import { totalCartPriceSelector } from "@/redux/cart/cartSlice";

const BillCard = () => {
  const totalPrice = useAppSelector(totalCartPriceSelector);
  const promocode = 0;
  return (
    <div className="flex flex-col min-w-60">
      <div className="pb-4">
        <div className="flex flex-row justify-between ">
          <p>
            Subtotal{" "}
            <span className="text-slate-500">
              <span>&#40;</span>
              incl.tax<span>&#41;</span>
            </span>
          </p>
          <p>{totalPrice}</p>
        </div>

        <div className="flex flex-row justify-between">
          <p>
            Promocode{" "}
            <span className="text-slate-500">
              <span>&#40;</span>-{promocode}%<span>&#41;</span>
            </span>
          </p>
          <p>-$0</p>
        </div>
      </div>

      <div className="flex flex-row justify-between border-t-2 py-4">
        <p>TOTAL</p>
        <p>{totalPrice - promocode}</p>
      </div>
      <Button>Proceed To Checkout</Button>
    </div>
  );
};

export default BillCard;
