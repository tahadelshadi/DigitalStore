import { Product } from "@/interface/interfaces";
import AddToCartBtn from "../buttons/addToCartBtn";

export default function PriceCard({ product }: { product: Product }) {
  return (
    <div className="xs:fixed xs:bottom-0 xs:left-0 xs:right-0 md:relative min-w-60 md:max-w-60 z-10">
      <div
        className="gap-4 flex md:flex-col xs:flex-row xs:justify-between bg-slate-100 dark:bg-slate-700 p-4 md:rounded-md "
        id="priceCard">
        <div className="flex flex-row font-semibold items-center">
          <p>{product.price}</p>
          <span>&#x24;</span>
        </div>
        <AddToCartBtn product={product} />
      </div>
    </div>
  );
}
