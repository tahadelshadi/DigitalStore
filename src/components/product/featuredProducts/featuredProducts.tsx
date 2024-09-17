import { Product } from "@/interface/interfaces";
import { ViewAllProducts } from "../../buttons/bottons";
import ProductCard from "../productCard";
import { FeaturedProductApi } from "@/fetchApi/productApi";

const FeaturedProducts = async () => {
  const products = await FeaturedProductApi();
  return (
    <section id="featuredProducts">
      <div className="mb-6 flex flex-row justify-between ">
        <h1 className="title">Featured Products</h1>
        <ViewAllProducts />
      </div>
      <div className="gap-5 xs:grid-col-1 grid-rows-auto grid rounded-medium sm:grid-cols-2  lg:grid-cols-3 xl:grid-cols-4">
        {products.slice(0, 6).map((product: Product) => (
          <div className="border rounded-medium" key={product.id}>
            <ProductCard product={product} />
          </div>
        ))}
      </div>
    </section>
  );
};

export default FeaturedProducts;
