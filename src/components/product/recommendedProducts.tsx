import ProductDetailTitle from "@/components/title/productDetailTitle";
import { RecommendedProductApi } from "@/fetchApi/productApi";
import { Product } from "@/interface/interfaces";
import RecommendedCard from "./recommendedCard";

const RecommendedProducts = async () => {
  const products: Product[] = await RecommendedProductApi();
  return (
    <div className="my-8 ">
      <ProductDetailTitle title={"Recommended Products For You"} />
      <div className="flex flex-row border rounded-md p-2 divide-x-1 overflow-clip">
        {products.map((product) => (
            <RecommendedCard product={product} key={product.id} />
        ))}
      </div>
    </div>
  );
};

export default RecommendedProducts;
