"use client";

import { useState, use } from "react"; // Agregamos 'use'
import { Products } from "../Products/products";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { useCart } from "@/context/CartContext";
import Caracteristic from "@/components/Caracteristic";
import { caracteristicas } from "../Products/caracteristicas";

// Definimos la interfaz para los parámetros asíncronos
interface PageProps {
  params: Promise<{ id: string }>;
}

export default function ProductDetailPage({ params }: PageProps) {
  // En Next 15, debemos "desenvolver" los params con use()
  const {addToCart} = useCart()
  const resolvedParams = use(params);
  const [cantidad, setCantidad] = useState(1);
  
  const product = Products.find((p) => p.id === parseInt(resolvedParams.id));

  if (!product) notFound();

  return (
    <div className="min-h-screen bg-white">
      <div className="bg-white text-black py-3">
        <div className="container mx-auto px-6">
          <Link href="/shop" className="text-sm hover:text-blue-400 transition-colors flex items-center gap-2">
            <span>&larr;</span> Volver a productos
          </Link>
        </div>
      </div>

      <main className="container mx-auto px-6 py-2">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-start">
          
          <div className="relative aspect-square rounded-3xl overflow-hidden bg-gray-50 border border-gray-100 shadow-inner">
            <Image 
              src={`${product.image}/800/800?random=${product.id}`} 
              alt={product.name}
              fill
              priority
              className="object-cover hover:scale-105 transition-transform duration-500"
            />
          </div>

          <div className="flex flex-col">
            <p className="text-violet-600 font-bold text-sm uppercase tracking-tighter mb-2">
              {product.category}
            </p>
            
            <h1 className="text-5xl font-black text-gray-900 mb-6 tracking-tight">
              {product.name}
            </h1>

            

            <div className="flex items-end gap-4 mb-10">
              <span className="text-5xl font-black text-violet-700">
                ${product.price.toFixed(2)}
              </span>
              <span className="text-gray-400 text-sm mb-2">IVA incluido</span>
            </div>

            <div className="space-y-6">
              <div className="flex flex-col gap-3">
                <label className="font-bold text-gray-700 text-sm">Cantidad:</label>
                <div className="flex items-center w-32 border-2 border-gray-100 rounded-xl overflow-hidden">
                  <button 
                    onClick={() => setCantidad(Math.max(1, cantidad - 1))}
                    className="w-10 h-10 hover:bg-gray-100 transition-colors font-bold text-gray-600"
                  > - </button>
                  <span className="w-12 text-center font-bold text-gray-800">{cantidad}</span>
                  <button 
                    onClick={() => setCantidad(cantidad + 1)}
                    className="w-10 h-10 hover:bg-gray-100 transition-colors font-bold text-gray-600"
                  > + </button>
                </div>
              </div>

              <button onClick={() => addToCart(product, cantidad)} className="w-full bg-violet-600 text-white py-5 rounded-2xl font-black text-lg hover:bg-violet-800 transition-all shadow-xl shadow-violet-100 active:scale-95">
                Añadir al Carrito
              </button>
            </div>

            <div className="mt-12 grid grid-cols-3 gap-4 text-center border-t border-gray-100 pt-8">
              <div>
                <p className="text-xs font-bold text-gray-400">Stock</p>
                <p className="text-green-600 font-bold">Disponible</p>
              </div>
              <div>
                <p className="text-xs font-bold text-gray-400">Entrega</p>
                <p className="text-gray-700 font-bold">48 Horas</p>
              </div>
              <div>
                <p className="text-xs font-bold text-gray-400">SKU</p>
                <p className="text-gray-700 font-bold">#00{product.id}</p>
              </div>
            </div>
          </div>
        </div>
        <Caracteristic caracteristicas={caracteristicas} />
        <div className="bg-gray-50 w-full p-6 rounded-2xl mb-8">
            <h3 className="text-sm font-bold text-gray-400 uppercase mb-2">Descripción</h3>
            <p className="text-gray-600 leading-relaxed italic">
              &quot;{product.description}&quot;
            </p>
          </div>
      </main>
    </div>
  );
}
