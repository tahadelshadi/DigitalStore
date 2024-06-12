import AddToCartBtn from "@/components/buttons/addToCartBtn";
import ProductRate from "@/components/product/productRate";
import { Product } from "@/redux/interface/interfaces";
import { fetchProducts } from "@/utils/api";
import Image from "next/image";
import Link from "next/link";

const Products = async () => {
  const products: Product[] = await fetchProducts();
  return (
    <section>
      <h1 className="text-2xl font-bold my-4">Products</h1>
      <div className="grid xl:grid-cols-4 lg:grid-cols-3 sm:grid-cols-2 xs:grid-col-1 grid-rows-2 gap-2 ">
        {products.map((product: Product) => (
          <div
            className=" flex flex-col justify-between gap-4 w-full h-full py-4 sm:w-80 xs:w-full mx-auto"
            key={product.id}>
            <Link href={`/products/${product.id}`}>
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
                  <span>&#x24;</span>
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
