import { promises as fs } from 'fs';

export async function fetchCategory() {
    const file = await fs.readFile(process.cwd() + '/public/db/category.json', 'utf8');
    const data = JSON.parse(file);
    return data
  }