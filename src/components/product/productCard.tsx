import { Product } from "@/interface/interfaces";
import Image from "next/image";
import Link from "next/link";
import ProductRate from "./productRate";

const ProductCard = ({ product }: { product: Product }) => {
  return (
    <>
      <div className=" flex flex-col justify-between gap-4 w-full h-full py-4 sm:w-80 xs:w-full mx-auto p-5 ">
        <Link href={`/products/${product.id}`}>
          <Image
            className="mx-auto "
            src={`data:image/png;base64,${product.images[0]["image"]}`}
            width={200}
            height={200}
            alt={product.name}
            style={{ objectFit: "contain", aspectRatio: 1 }}
          />
          <div className="flex flex-col gap-2 mt-2">
            <p>{product.name}</p>
            <div className="flex flex-row">
              <ProductRate rate={product.rate} />
            </div>
            <div className="font-bold">
              <span>&#x24;</span>
              {product.price}
            </div>
          </div>
        </Link>
      </div>
    </>
  );
};

export default ProductCard;
