import ProductDetailTitle from "@/components/title/productDetailTitle";
import ProductCard from "./productCard";
import { RecommendedProductApi } from "@/fetchApi/productApi";
import { Product } from "@/interface/interfaces";

const RecommendedProducts = async (category: { category: string }) => {
  const products: Product[] = await RecommendedProductApi(category);
  return (
    <div>
      <ProductDetailTitle title={"Recommended Products For You"} />
      <div className="flex flex-row">
        {products.map((product) => (
          <>
            <ProductCard product={product} key={product.id} />
          </>
        ))}
      </div>
    </div>
  );
};

export default RecommendedProducts;
