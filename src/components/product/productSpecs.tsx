import { Product } from "@/interface/interfaces";
import { ProductRate } from "./productRate";

export default function ProductSpecs({ product }: { product: Product }) {
  return (
    <div className="flex grow flex-col gap-5 px-4" id="description">
      <h1 className="text-2xl font-semibold">{product.name}</h1>
      <ProductRate rate={product.rate} />
    </div>
  );
}
