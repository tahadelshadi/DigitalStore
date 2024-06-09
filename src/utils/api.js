import { promises as fs } from 'fs';

export async function fetchProducts() {
    const file = await fs.readFile(process.cwd() + '/public/db/products.json', 'utf8');
    const data = JSON.parse(file);
    return data
  }
export async function fetchCategory() {
    const file = await fs.readFile(process.cwd() + '/public/db/category.json', 'utf8');
    const data = JSON.parse(file);
    return data
  }
  
//   export async function getOneProduct(id:string) {
//     const res = await fetch(`http://localhost:3500/products/${id}`);
//     if (!res.ok) {
//       throw new Error("Failed to fetch data");
//     }
//     return res.json();
//   }
//   export async function getOneCategory(id:string) {
//     const res = await fetch(`http://localhost:3500/category/${id}`);
//     if (!res.ok) {
//       throw new Error("Failed to fetch data");
//     }
//     return res.json();
//   }