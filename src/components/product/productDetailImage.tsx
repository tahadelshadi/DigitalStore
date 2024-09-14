import { Product } from "@/interface/interfaces";
import Image from "next/image";

export default function ProductDetailImage({ product }: { product: Product }) {
  return (
    <div className="grid min-w-60 grid-cols-3 grid-rows-3 gap-2 md:max-w-60">
      <Image
        className="col-span-3 row-span-2 mx-auto w-full rounded-xl bg-slate-100 dark:bg-slate-700 "
        src={`data:image/png;base64,${product.images[0]["formatted_image"]}`}
        width={240}
        height={240}
        alt={product.name}
        style={{
          objectFit: "contain",
          aspectRatio: 1,
        }}
      />
      {product.images.slice(0, 3).map((image, idx) => (
        <Image
          key={idx}
          className="row-start-3 mx-auto rounded-md bg-slate-100 dark:bg-slate-700"
          src={`data:image/png;base64,${image.formatted_image}`}
          width={200}
          height={100}
          alt={product.name}
          style={{
            objectFit: "contain",
            aspectRatio: 1,
          }}
        />
      ))}
    </div>
  );
}
