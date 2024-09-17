import { Product } from "@/interface/interfaces";
import Image from "next/image";
import { Suspense } from "react";

export default function ProductDetailImage({ product }: { product: Product }) {
  return (
    <Suspense fallback={<p>is loading</p>}>
      <div className="min-w-60 grid-cols-3 grid-rows-3 gap-2 md:grid md:max-w-60">
        <Image
          className="col-span-3 row-span-2 mx-auto aspect-square w-full rounded-xl object-contain dark:bg-slate-700 md:bg-slate-100"
          src={`data:image/png;base64,${product.images[0]["formatted_image"]}`}
          width={240}
          height={240}
          alt={product.name}
        />
        {Array(3)
          .fill(null)
          .map((_, id) => (
            <Image
              key={id}
              className="row-start-3 mx-auto aspect-square rounded-md object-contain dark:bg-slate-700 xs:hidden md:block md:bg-slate-100"
              src={`data:image/png;base64,${product.images[0]["formatted_image"]}`}
              width={200}
              height={100}
              alt={product.name}
            />
          ))}
      </div>
    </Suspense>
  );
}
