import { Product } from "@/interface/interfaces";
import { ViewAllProducts } from "../../buttons/bottons";
import ProductCard from "../productCard";
import { FeaturedProductApi } from "@/fetchApi/productApi";

const FeaturedProducts = async () => {
  const products = await FeaturedProductApi();
  return (
    <section id="featuredProducts">
      <div className="flex flex-row justify-between mb-6 ">
        <h1 className="title">Featured Products</h1>
        <ViewAllProducts />
      </div>
      <div className="grid xl:grid-cols-4 md:grid-cols-3 sm:grid-cols-2 xs:grid-col-1 grid-rows-2 gap-2 ">
        {products.map((product: Product) => (
          <ProductCard product={product} key={product.id} />
        ))}
      </div>
    </section>
  );
};

export default FeaturedProducts;
