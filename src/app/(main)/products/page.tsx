"use client";
import { useRouter, useSearchParams } from "next/navigation";
import { useEffect, useState } from "react";
import { Slider } from "@nextui-org/react";

import { ProductListApi } from "@/utils/api/productApi";
import { Product } from "@/interface/interfaces";
import Title from "@/components/title/title";
import Sort from "@/components/sort/sort";
import ProductCard from "@/components/product/productCard";

const Products = () => {
  const router = useRouter();
  const searchParams = useSearchParams();
  const ordering = searchParams.get("ordering");
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
    if (Array.isArray(value)) {
      const queryParams = new URLSearchParams({
        minPrice: Math.min(value[0],value[1]).toString(),
        maxPrice: Math.max(value[0],value[1]).toString(),
      }).toString();

      router.push(`/products?${queryParams}`);
    }
  };

  useEffect(() => {
    const fetchSortedProducts = async () => {
      const data = await ProductListApi(ordering || "");
      setProducts(data);
    };
    fetchSortedProducts();
  }, [ordering]);

  return (
    <section>
      <Title title="Products" />
      <div className="flex flex-row gap-1">
        <div className="sticky w-60 border rounded-lg p-5">
          <Slider
            label="Price range"
            size="md"
            step={50}
            color="primary"
            marks={[
              {
                value: 0,
                label: "0",
              },
              {
                value: 100000,
                label: "100000",
              },
            ]}
            formatOptions={{ style: "currency", currency: "USD" }}
            minValue={0}
            maxValue={100000}
            defaultValue={[100, 100000]}
            value={sliderValue}
            onChange={(value) => handleSliderChange(value)}
            onChangeEnd={(value) => handleSliderChangeEnd(value)}
            className="w-full"
          />
        </div>
        <div className="ml-2">
          <Sort />
          <div className="grid xl:grid-cols-4 lg:grid-cols-3 sm:grid-cols-2 xs:grid-col-1 grid-rows-2 gap-2 border-t">
            {products.map((product: Product) => (
              <ProductCard product={product} key={product.id}/>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Products;
