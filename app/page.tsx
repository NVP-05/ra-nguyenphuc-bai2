"use client";
import { useEffect, useState } from 'react';

interface Product {
  id: number;
  title: string;
  price: number;
  image: string;
}

export default function Page() {
  const [products, setProducts] = useState<Product[]>([]);
  
  useEffect(() => {
    async function fetchProducts() {
      const res = await fetch('https://fakestoreapi.com/products');
      const data: Product[] = await res.json();
      setProducts(data);
    }

    fetchProducts();
  }, []);

  return (
    <div className="max-w-4xl mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-6">List of Products</h1>
      <ul className="space-y-4">
        {products.map((product) => (
          <li key={product.id} className="p-4 bg-white rounded shadow-md">
            <h2 className="text-xl font-semibold">{product.title}</h2>
            <p className="text-gray-700">${product.price}</p>
            <img src={product.image} alt={product.title} className="w-32 h-32 object-cover" />
          </li>
        ))}
      </ul>
    </div>
  );
}
