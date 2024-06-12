import { promises as fs } from 'fs';
import { Product } from "@/redux/interface/interfaces";

export async function fetchProducts() {
    const file = await fs.readFile(process.cwd() + '/public/db/products.json', 'utf8');
    const data = JSON.parse(file);
    return data
  }
export async function fetchOneProduct(slug:string) {
    const file = await fs.readFile(process.cwd() + '/public/db/products.json', 'utf8');
    const data = JSON.parse(file);
    return data.find((item:Product)=>item.id === Number(slug))
  }
export async function fetchProductByCat(slug:string) {
    const file = await fs.readFile(process.cwd() + '/public/db/products.json', 'utf8');
    const data = JSON.parse(file);
    return data.filter((item:Product) => item.category.toLowerCase() === slug.toLowerCase())
  }
export async function fetchCategory() {
    const file = await fs.readFile(process.cwd() + '/public/db/category.json', 'utf8');
    const data = JSON.parse(file);
    return data
  }
  
  export async function getOneProduct(id:string) {
    const res = await fetch(`https://jsonplaceholder.typicode.com/posts/${id}`);
    if (!res.ok) {
      throw new Error("Failed to fetch data");
    }
    return res.json();
  }
//   export async function getOneCategory(id:string) {
//     const res = await fetch(`http://localhost:3500/category/${id}`);
//     if (!res.ok) {
//       throw new Error("Failed to fetch data");
//     }
//     return res.json();
//   }