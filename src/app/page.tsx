import Category from "@/components/category/category";
import CustomerSupport from "@/components/customerSupport/customerSupport";
import FeaturedProducts from "@/components/featuredProducts/featuredProducts";
import NewArrival from "@/components/newArrival/newArrival";
import TopProduct from "@/components/topProduct/topProduct";

export default async function HomePage() {
  return (
    <>
      <TopProduct/>
      <Category />
      <FeaturedProducts />
      <NewArrival />
      <CustomerSupport/>
    </>
  );
}