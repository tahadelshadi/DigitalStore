import AddToCartBtn from "@/components/buttons/addToCartBtn";
import ProductSupport from "@/components/customerSupport/productSupport";
import ProductRate from "@/components/product/productRate";
import { Product as IProduct } from "@/interface/interfaces";
import { ProductDetailApi } from "@/utils/api/productApi";
import Image from "next/image";

const Product = async ({ params }: { params: { slug: string } }) => {
  const product: IProduct = await ProductDetailApi(params.slug);
  const productImages: String[] = [];
  product.images.map((item) => productImages.push(item["image"]));
  return (
    <section className="min-h-screen">
      <div className=" flex md:flex-row xs:flex-col gap-4" id="productImage">
        <div className="grid grid-rows-3 grid-cols-3 gap-2 min-w-60 md:max-w-60">
          <Image
            className="bg-slate-100 dark:bg-slate-700 rounded-md mx-auto row-span-2 col-span-3 w-full "
            src={`data:image/png;base64,${productImages[0]}`}
            width={240}
            height={240}
            alt={product.name}
            style={{ objectFit: "contain", aspectRatio: 1 }}
          />
          {productImages.slice(0, 3).map((image, idx) => (
            <Image
              key={idx}
              className="bg-slate-100 dark:bg-slate-700 rounded-md mx-auto row-start-3"
              src={`data:image/png;base64,${image}`}
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
        </div>
        <div
          className="gap-4 flex flex-col bg-slate-100 dark:bg-slate-700 p-4 rounded-md min-w-60 md:max-w-60 h-60"
          id="priceCard">
          <p className="font-semibold">
            {product.price}
            <span>&#x24;</span>
          </p>
          <AddToCartBtn product={product} />
        </div>
      </div>
      <div className="border border-t-0 my-5"></div>
      <ProductSupport />
      <div className="border border-t-2 my-6"></div>
      <div className="flex flex-col gap-5 mt-5 px-10">
        <h1>Description</h1>
        <p className="text-justify">{product.description}</p>
      </div>
    </section>
  );
};

export default Product;
