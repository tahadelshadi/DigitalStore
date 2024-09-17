import { server } from "@/utils/host";
import { FetchProductsParams } from "@/interface/interfaces";

export async function ProductDetailApi(id: String) {
  const url = `${server}/api/products/${id}`;

  const response = await fetch(url, {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
    },
    cache: "no-cache",
  });

  if (!response.ok) {
    throw new Error(`Response status : ${response.status}`);
  }

  return await response.json();
}

export async function FeaturedProductApi() {
  const response = await fetch(`${server}/api/products/`, {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
    },
    cache: "no-cache",
  });

  if (!response.ok) {
    throw new Error(`Response status : ${response.status}`);
  }

  return await response.json();
}

export async function ProductListApi({
  ordering,
  minPrice,
  maxPrice,
  category,
}: FetchProductsParams) {
  const queryParams = new URLSearchParams();
  if (minPrice !== undefined)
    queryParams.append("minPrice", minPrice.toString());
  if (maxPrice !== undefined)
    queryParams.append("maxPrice", maxPrice.toString());
  if (ordering) queryParams.append("ordering", ordering);
  if (category) queryParams.append("category", category);

  const response = await fetch(
    `${server}/api/products?${queryParams.toString()}`,
    {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
      cache: "no-cache",
    }
  );

  if (!response.ok) {
    throw new Error(`Response status : ${response.status}`);
  }

  return await response.json();
}

export async function RecommendedProductApi() {
  const response = await fetch(`${server}/api/products/recommend/`, {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
    },
    cache: "no-cache",
  });

  if (!response.ok) {
    throw new Error(`Response status : ${response.status}`);
  }

  return await response.json();
}
