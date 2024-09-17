import { Product } from "@/interface/interfaces";
import Image from "next/image";
import Link from "next/link";
import { ProductRate } from "./productRate";

const RecommendedCard = ({ product }: { product: Product }) => {
  return (
    <div className="mx-auto  flex h-full w-full min-w-[300px] flex-col justify-between gap-4 xs:p-5 ">
      <Link
        className="flex gap-4 flex-col"
        href={`/products/${product.id}`}>
        <Image
          className="mx-auto xs:h-40 xs:w-40  object-contain aspect-square "
          src={`data:image/png;base64,${product.images[0]["formatted_image"]}`}
          width={200}
          height={200}
          alt={product.name}
        />
        <div className="md:text-md mt-4 flex w-full flex-col gap-2 xs:text-sm">
          <p>{product.name}</p>
          <div className="flex flex-col gap-2">
            <div className="flex w-10 flex-row rounded-lg">
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
  );
};

export default RecommendedCard;
