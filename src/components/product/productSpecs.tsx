import { Product } from "@/interface/interfaces";
import ProductRate from "./productRate";

export default function ProductSpecs({ product }: { product: Product }) {
    return (
      <div className="px-4 flex flex-col gap-5 grow" id="description">
        <h1 className="font-semibold text-2xl">{product.name}</h1>
        <ProductRate rate={product.rate} />
      </div>
    );
  }