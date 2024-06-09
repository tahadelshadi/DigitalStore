import AddToCartBtn from "@/components/buttons/addToCartBtn";
import ProductRate from "@/components/productRate/productRate";
import { Product } from "@/redux/interface/interfaces";
import { fetchProducts } from "@/utils/api";
import Image from "next/image";
import Link from "next/link";

const Products = async () => {
  const products: Product[] = await fetchProducts();
  return (
    <section>
      <div className="grid xl:grid-cols-4 lg:grid-cols-3 sm:grid-cols-2 xs:grid-col-1 grid-rows-2 gap-2 ">
        {products.map((product: Product) => (
          <div
            className=" flex flex-col justify-between gap-4 w-full h-full py-4 sm:w-80 xs:w-full mx-auto"
            key={product.id}>
            <Link href={`/product/${product.id}`}>
              <Image
                className="mx-auto "
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
                  <span>$</span>
                  {product.price}
                </div>
              </div>
            </Link>
            <div>
              <AddToCartBtn product={product} />
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Products;
