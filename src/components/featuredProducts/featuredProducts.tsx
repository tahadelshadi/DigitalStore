import Image from "next/image";
import Link from "next/link";
import { ViewAllProducts } from "../buttons/bottons";
import { getProducts } from "@/utils/api";
import { FaStar } from "react-icons/fa";
import { Key } from "react";

const FeaturedProducts = async () => {
  const products = await getProducts();
  return (
    <section id="featuredProducts">
      <div className="flex flex-row justify-between mb-6 ">
        <h1 className="title">Featured Products</h1>
        <ViewAllProducts />
      </div>
      <div className="grid xl:grid-cols-4 lg:grid-cols-3 sm:grid-cols-2 xs:grid-col-1 grid-rows-2 gap-2 ">
        {products.map((product: any, id: Key) => (
          <Link
            href={`/product/${product.id}`}
            key={id}
            className="sm:w-80 xs:w-full mx-auto ">
            <div className=" flex flex-col justify-between gap-4 w-full h-full py-4">
              <Image
                className="mx-auto "
                src={product.imageUrl}
                width={200}
                height={100}
                alt={product.name}
                style={{ objectFit: "contain",aspectRatio: 1 }}
              />
              <div className="flex flex-col gap-2">
                <p>{product.name}</p>
                <div className="flex flex-row">
                  {Array(product.rate)
                    .fill(0)
                    .map((x, idx) => (
                      <FaStar color="gold" key={idx} size={20} />
                    ))}
                </div>
                <div className="font-bold">
                  <span>$</span>
                  {product.price}
                </div>
              </div>
            </div>
          </Link>
        ))}
      </div>
    </section>
  );
};

export default FeaturedProducts;
