import { Product } from "@/interface/interfaces";
import Image from "next/image";
import Link from "next/link";
import ProductRate from "./productRate";

const ProductCard = ({ product }: { product: Product }) => {
  return (
    <>
      <div className="mx-auto flex h-full w-full flex-col justify-between gap-4 xs:w-full sm:w-80 sm:p-5 xs:py-2">
        <Link
          className="flex gap-4 xs:flex-row sm:flex-col"
          href={`/products/${product.id}`}>
          <Image
            className="mx-auto xs:h-40 xs:w-40 "
            src={`data:image/png;base64,${product.images[0]["formatted_image"]}`}
            width={200}
            height={200}
            alt={product.name}
            style={{ objectFit: "contain", aspectRatio: 1 }}
          />

          <div className="md:text-md mt-4 flex w-full flex-col gap-2 xs:text-sm">
            <p>{product.name}</p>
            <div className="flex flex-col gap-2">
              <div className="flex flex-row">
                <ProductRate rate={product.rate} />
              </div>
              <div className="font-bold ">
                <span>&#x24;</span>
                {product.price}
              </div>
            </div>
          </div>
        </Link>
      </div>
    </>
  );
};

export default ProductCard;
