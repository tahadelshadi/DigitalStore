import { Product } from "@/interface/interfaces";
import AddToCartBtn from "../buttons/addToCartBtn";

export default function PriceCard({ product }: { product: Product }) {
  return (
      <div className="z-10 min-w-60 xs:fixed xs:bottom-14 md:bottom-0 xs:left-0 xs:right-0 md:relative md:max-w-60">
        <div
          className="flex gap-4 bg-slate-100 p-4 dark:bg-slate-700 xs:flex-row xs:justify-between md:flex-col md:rounded-md "
          id="priceCard">
          <div className="flex flex-row items-center font-semibold">
            <p>{product.price}</p>
            <span>&#x24;</span>
          </div>
          <AddToCartBtn product={product} />
        </div>
      </div>
  );
}
