import { Suspense } from "react";
import { ProductDetailApi } from "@/fetchApi/productApi";
import { Product } from "@/interface/interfaces";
import ProductSupport from "@/components/customerSupport/productSupport";
import ProductSpecs from "@/components/product/productSpecs";
import PriceCard from "@/components/product/productPriceCard";
import ProductDescription from "@/components/product/productDescription";
import CustomerReviews from "@/components/comment/customerReviews";
import RecommendedProducts from "@/components/product/recommendedProducts";
import ProductDetailImage from "@/components/product/productDetailImage";
import { RecommendedProductsSkeleton } from "@/components/skeleton/productSkeleton";

const ProductDetail = async ({ params }: { params: { slug: string } }) => {
  const product: Product = await ProductDetailApi(params.slug);

  return (
    <section className="relative min-h-screen pb-20">
      <div className="flex gap-4 xs:flex-col md:flex-row" id="productImage">
        <ProductDetailImage product={product} />
        <ProductSpecs product={product} />
        <PriceCard product={product} />
      </div>
      <ProductSupport />
      <ProductDescription description={product.description} />
      <Suspense fallback={<RecommendedProductsSkeleton />}>
        <RecommendedProducts/>
      </Suspense>
      <CustomerReviews comment={product.comment} />
    </section>
  );
};

export default ProductDetail;
