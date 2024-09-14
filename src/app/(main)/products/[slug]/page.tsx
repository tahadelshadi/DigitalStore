import { ProductDetailApi } from "@/fetchApi/productApi";
import { Product } from "@/interface/interfaces";
import ProductSupport from "@/components/customerSupport/productSupport";
import ProductSpecs from "@/components/product/productSpecs";
import ProductDetailImage from "@/components/product/productDetailImage";
import PriceCard from "@/components/product/productPriceCard";
import ProductDescription from "@/components/product/productDescription";
import CustomerReviews from "@/components/product/customerReviews";
import RecommendedProducts from "@/components/product/recommendedProducts";

const ProductDetail = async ({ params }: { params: { slug: string } }) => {
  const product: Product = await ProductDetailApi(params.slug);

  return (
    <section className="min-h-screen relative pb-20">
      <div className="flex md:flex-row xs:flex-col gap-4" id="productImage">
        <ProductDetailImage product={product} />
        <ProductSpecs product={product} />
        <PriceCard product={product} /> 
      </div>
      <ProductSupport />
      <ProductDescription description={product.description} />
      <RecommendedProducts category={product.category} />
      <CustomerReviews />
    </section>
  );
};

export default ProductDetail;
