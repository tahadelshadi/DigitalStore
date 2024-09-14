import { server } from "@/utils/host";
export async function fetchCategory() {
  const url = `${server}/api/category/`;
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
