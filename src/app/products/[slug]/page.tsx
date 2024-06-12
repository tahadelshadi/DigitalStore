import AddToCartBtn from "@/components/buttons/addToCartBtn";
import ProductRate from "@/components/product/productRate";
import { Product as IProduct } from "@/redux/interface/interfaces";
import { fetchOneProduct } from "@/utils/api";
import Image from "next/image";

const Product = async ({ params }: { params: { slug: string } }) => {
  const product: IProduct = await fetchOneProduct(params.slug);
  return (
    <section className="min-h-screen">
      <div className=" flex md:flex-row xs:flex-col gap-4" id="productImage">
        <div className="grid grid-rows-3 grid-cols-3 gap-2 min-w-60">
          <Image
            className="bg-slate-100 dark:bg-slate-700 rounded-md mx-auto row-span-2 col-span-3 w-full "
            src={product.imageUrl}
            width={200}
            height={100}
            alt={product.name}
            style={{ objectFit: "contain", aspectRatio: 1 }}
          />
          {Array(3)
            .fill(0)
            .map((image, idx) => (
              <Image
                key={idx}
                className="bg-slate-100 dark:bg-slate-700 rounded-md mx-auto row-start-3"
                src={product.imageUrl}
                width={200}
                height={100}
                alt={product.name}
                style={{ objectFit: "contain", aspectRatio: 1 }}
              />
            ))}
        </div>
        <div className="px-4 flex flex-col gap-5" id="description">
          <h1 className="font-semibold text-2xl">{product.name}</h1>
          <ProductRate rate={product.rate} />
          <p className="text-justify">{product.discription}</p>
        </div>
        <div
          className="gap-4 h-full flex flex-col bg-slate-100 dark:bg-slate-700 p-4 rounded-md min-w-60"
          id="priceCard">
          <p className="font-semibold">
            {product.price}
            <span>&#x24;</span>
          </p>
          <AddToCartBtn product={product} />
        </div>
      </div>
    </section>
  );
};

export default Product;
