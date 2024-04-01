import path from 'path';
import { promises as fs } from 'fs';

export type Product = {
  id: string;
  name: string;
  price: number;
};

export async function getProducts(): Promise<Product[]> {
  const filePath = path.join(process.cwd(), 'data', 'products.json');
  console.log(filePath);
  const data = await fs.readFile(filePath, 'utf-8');
  // console.log(data);

  return JSON.parse(data);
}

export function getProduct(id: string) {
  return 'shirt';
}
