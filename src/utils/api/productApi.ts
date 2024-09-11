import { server } from "@/utils/host";
export async function ProductDetailApi(id: String) {
  const url = `${server}/api/products/${id}`;
  const response: Response = await fetch(url, {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
    },
    cache: "no-store",
  });
  if (!response.ok) {
    throw new Error(`Response status : ${response.status}`);
  }
  const data = await response.json();
  return data;
}

export async function ProductListApi(ordering: String | String[]) {
  const url = `${server}/api/products?ordering=${ordering}`;
  const response: Response = await fetch(url, {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
    },
    cache: "no-store",
  });
  if (!response.ok) {
    throw new Error(`Response status : ${response.status}`);
  }
  const data = await response.json();
  return data;
}
