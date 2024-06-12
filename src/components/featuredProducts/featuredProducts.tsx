import { Product } from "@/redux/interface/interfaces";
import { fetchProducts } from "@/utils/api";
import { ViewAllProducts } from "../buttons/bottons";
import ProductCard from "../product/productCard";

const FeaturedProducts = async () => {
  const products = await fetchProducts();
  return (
    <section id="featuredProducts">
      <div className="flex flex-row justify-between mb-6 ">
        <h1 className="title">Featured Products</h1>
        <ViewAllProducts />
      </div>
      <div className="grid xl:grid-cols-4 lg:grid-cols-3 sm:grid-cols-2 xs:grid-col-1 grid-rows-2 gap-2 ">
        {products.map((product: Product) => (
          <ProductCard product={product} key={product.id} />
        ))}
      </div>
    </section>
  );
};

export default FeaturedProducts;
