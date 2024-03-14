import React from 'react';
import Link from 'next/link';

const products = ['shirt', 'pants', 'skirt', 'shoes'];

export default function page() {
  return (
    <div>
      PRODUCT PAGE
      <h1> 제품 소개 페이지! </h1>
      <ul>
        {products.map((product, index) => (
          <li key={index}>
            <Link href={`/products/${product}`}>{product}</Link>
          </li>
        ))}
      </ul>
    </div>
  );
}
