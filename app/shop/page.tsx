"use client";
import { useState } from "react";
import { useMenu } from "@/context/MenuContext"; // 1. Importar el hook
import { CategorySidebar } from "../../components/CategorySidebar";
import { Products } from "./Products/products";
import { ProductCard } from "../../components/ProductCard";

export default function ShopPage() {
  // 2. Extraer el estado y la función de cierre del contexto global
  const { isOpen, closeMenu } = useMenu();
  
  const [activeCategory, setActiveCategory] = useState("Todos");
  const categories = ["Todos", "Teclados", "Mouse", "Monitores", "Audio"];

  const filteredProducts = activeCategory === "Todos" 
    ? Products 
    : Products.filter(p => p.category === activeCategory);

  return (
    <div className="flex flex-col min-h-screen bg-gray-50">
      
      {/* 3. Pasar isOpen y closeMenu al Sidebar */}
      <CategorySidebar 
        isOpen={isOpen} 
        onClose={closeMenu}
        categories={categories}
        activeCategory={activeCategory}
        onSelectCategory={setActiveCategory}
      />

      <main className="p-6">
        {/* Tu cabecera y el grid de productos... */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredProducts.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      </main>
    </div>
  );
}
