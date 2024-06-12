import { Product } from "@/redux/interface/interfaces";
import Image from "next/image";
import Link from "next/link";
import ProductRate from "./productRate";

const ProductCard = ({ product }: { product: Product }) => {
  return (
    <>
      <Link
        href={`/product/${product.id}`}
        key={product.id}
        className="sm:w-80 xs:w-full mx-auto ">
        <div className=" flex flex-col justify-between gap-4 w-full h-full py-4">
          <Image
            className="mx-auto"
            src={product.imageUrl}
            width={200}
            height={100}
            alt={product.name}
            style={{ objectFit: "contain", aspectRatio: 1 }}
          />
          <div className="flex flex-col gap-2">
            <p>{product.name}</p>
            <div className="flex flex-row">
              <ProductRate rate={product.rate} />
            </div>
            <div className="font-bold">
              <span>&#x24;</span>
              {product.price}
            </div>
          </div>
        </div>
      </Link>
    </>
  );
};

export default ProductCard;
