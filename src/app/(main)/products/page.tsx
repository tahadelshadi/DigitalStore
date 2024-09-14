"use client";
import { useRouter, useSearchParams } from "next/navigation";
import { Suspense, useEffect, useState } from "react";

import { ProductListApi } from "@/fetchApi/productApi";
import { Product } from "@/interface/interfaces";
import Title from "@/components/title/title";
import Sort from "@/components/sort/sort";
import ProductCard from "@/components/product/productCard";
import FilterSidebar from "@/components/filter/filterSidebar";

const Products = () => {
  const router = useRouter();
  const searchParams = useSearchParams();
  const [category, setcategory] = useState<string>(
    searchParams.get("category") || ""
  );
  const [ordering, setOrdering] = useState<string>(
    searchParams.get("ordering") || ""
  );
  const [products, setProducts] = useState([]);
  const [sliderValue, setSliderValue] = useState<[number, number]>([
    Number(searchParams.get("minPrice")) || 0,
    Number(searchParams.get("maxPrice")) || 10000,
  ]);

  const handleSliderChange = (value: number | number[]) => {
    if (Array.isArray(value)) {
      setSliderValue(value as [number, number]);
    }
  };

  const handleSliderChangeEnd = (value: number | number[]) => {
    const currentParams = new URLSearchParams(searchParams.toString());
    if (Array.isArray(value)) {
      currentParams.set("minPrice", value[0].toString());
      currentParams.set("maxprice", value[1].toString());
      router.push(`/products?${currentParams.toString()}`);
    }
  };

  useEffect(() => {
    const fetchSortedProducts = async () => {
      const data = await ProductListApi({
        minPrice: sliderValue[0],
        maxPrice: sliderValue[1],
        ordering,
        category,
      });
      setProducts(data);
    };
    fetchSortedProducts();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [searchParams]);

  if (!products) return <>loading...</>;
  return (
    <section>
      <Title title="Products" />
      <div className="relative flex flex-row gap-1 ">
        <FilterSidebar
          sliderValue={sliderValue}
          handleSliderChange={handleSliderChange}
          handleSliderChangeEnd={handleSliderChangeEnd}></FilterSidebar>
        <div className="xs:w-full">
          <Sort setOrdering={setOrdering} />
          <div className="xs:grid-col-1 grid grid-rows-2 xs:divide-y-1 sm:grid-cols-2 sm:divide-y-0 lg:grid-cols-3 xl:grid-cols-4">
            {products.map((product: Product) => (
              <ProductCard product={product} key={product.id} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default function ProductsPage() {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <Products />
    </Suspense>
  );
}
