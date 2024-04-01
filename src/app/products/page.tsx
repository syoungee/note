import React from 'react';
import { getProducts } from '../service/products';
import Link from 'next/link';
import styles from './page.module.css';
import MeowArticle from '@/components/MeowArticle';

// const products = ['shirt', 'pants', 'skirt', 'shoes'];

// export const revalidate = 3;

export default async function page() {
  // 서버 파일(데이터베이스)에 있는 제품의 리스트를 읽어와서, 그걸 보여줌
  const products = await getProducts();
  const res = await fetch('https://meowfacts.herokuapp.com', { next: { revalidate: 3 } });
  const data = await res.json();
  const factText = data.data[0];

  return (
    <div>
      PRODUCT PAGE
      <h1> 제품 소개 페이지! </h1>
      <ul>
        {products.map((product, index) => (
          <li key={index}>
            <Link href={`/products/${product.id}`}>{product.name}</Link>
          </li>
        ))}
        <MeowArticle />
      </ul>
    </div>
  );
}
