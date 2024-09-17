import { Product } from "@/interface/interfaces";
import { Button } from "@nextui-org/react";
import Image from "next/image";
import { Suspense } from "react";

export default function ProductDetailImage({ product }: { product: Product }) {
  return (
    <Suspense fallback={<p>is loading</p>}>
      <div className="md:grid min-w-60 grid-cols-3 grid-rows-3 gap-2 md:max-w-60">
        <Image
          className="col-span-3 row-span-2 mx-auto aspect-square w-full rounded-xl object-contain dark:bg-slate-700 md:bg-slate-100"
          src={`data:image/png;base64,${product.images[0]["formatted_image"]}`}
          width={240}
          height={240}
          alt={product.name}
        />
        {product.images.slice(0, 3).map((image, idx) => (
          <Image
            key={idx}
            className="row-start-3 mx-auto aspect-square rounded-md object-contain dark:bg-slate-700 md:bg-slate-100 xs:hidden md:block"
            src={`data:image/png;base64,${image.formatted_image}`}
            width={200}
            height={100}
            alt={product.name}
          />
        ))}
        <Button className="row-start-3 h-[74px] w-[74px] rounded-md bg-slate-100 dark:bg-slate-700 xs:hidden md:block">
          ...
        </Button>
      </div>
    </Suspense>
  );
}
