import Category from "@/components/category/category";
import CustomerSupport from "@/components/customerSupport/customerSupport";
import FeaturedProducts from "@/components/featuredProducts/featuredProducts";
import NewArrival from "@/components/newArrival/newArrival";
import TopProduct from "@/components/topProduct/topProduct";

export default async function HomePage() {
  return (
    <div className="w-full max-w-[1644px] mx-auto">
      <TopProduct/>
      <Category />
      <FeaturedProducts />
      <NewArrival />
      <CustomerSupport/>
    </div>
  );
}