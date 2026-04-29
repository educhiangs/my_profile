// components/ProductCard.tsx
"use client";

import Image from "next/image";
import Link from "next/link";
import { useCart } from "@/context/CartContext"; // ← 1️⃣ import the cart hook

interface Product {
  id: number;
  name: string;
  price: number;
  description: string;
  image: string;
  category: string;
}

export const ProductCard = ({ product }: { product: Product }) => {
  const { addToCart } = useCart(); // ← 2️⃣ obtain the function from context

  // Helper that adds a single unit of the product
  const handleAdd = () => {
    addToCart(product, 1);
  };

  return (
    <div className="group border border-violet-50 rounded-xl overflow-hidden bg-white shadow-sm hover:shadow-lg transition-all flex flex-col">
      {/* Imagen clickable → lleva a la página del producto */}
      <Link href={`/shop/${product.id}`} className="aspect-square relative bg-gray-50 overflow-hidden">
        <Image
          src={`${product.image}/300/300?random=${product.id}`}
          alt={product.name}
          fill
          unoptimized
          className="object-cover group-hover:scale-105 transition-transform duration-300"
          loading="eager"
        />
      </Link>

      <div className="p-4 flex flex-col grow">
        {/* Nombre clickable */}
        <Link href={`/shop/${product.id}`}>
          <h2 className="font-bold text-gray-800 line-clamp-1 group-hover:text-violet-600 transition-colors">
            {product.name}
          </h2>
        </Link>

        <p className="text-xs text-violet-500 font-semibold mb-2">{product.category}</p>
        <p className="text-sm text-gray-500 mb-4 line-clamp-2 grow">{product.description}</p>

        <div className="flex items-center justify-between mt-auto">
          <span className="text-xl font-bold text-violet-700">{product.price.toFixed(2)}</span>

          {/* 3️⃣ Botón que llama a addToCart */}
          <button
            onClick={handleAdd}
            className="bg-violet-600 text-white px-3 py-2 rounded-lg text-sm font-bold hover:bg-violet-800 transition-colors"
          >
            + Añadir
          </button>
        </div>
      </div>
    </div>
  );
};
