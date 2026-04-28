"use client";
import { Dispatch, SetStateAction } from "react";

// Definimos qué props puede recibir el componente
interface CategorySidebarProps {
  isOpen: boolean;
  onClose: () => void;
  categories: string[];
  activeCategory: string;
  onSelectCategory: Dispatch<SetStateAction<string>>;
}

export const CategorySidebar = ({ 
  isOpen, 
  onClose, 
  categories, 
  activeCategory, 
  onSelectCategory 
}: CategorySidebarProps) => {
  console.log("El Sidebar recibio isOpen?:", isOpen);
  
  return (
    <>
      {/* Overlay */}
      <div 
        className={`fixed inset-0 bg-black/40 z-30 transition-opacity duration-300 ${
          isOpen ? "opacity-100 visible" : "opacity-0 invisible"
        }`}
        onClick={onClose}
      />

      {/* Sidebar */}
      <aside className={`fixed top-0 left-0 h-full w-72 bg-white z-40 shadow-2xl transform transition-transform duration-300 ease-in-out pt-17 ${
        isOpen ? "translate-x-0" : "-translate-x-full"
      }`}>
        <div className="flex flex-col h-full">
          <div className="p-6 border-b flex justify-between items-center bg-violet-50">
            <h2 className="font-bold text-violet-900">Categorías</h2>
            <button onClick={onClose} className="text-gray-400 hover:text-gray-600 text-xl">✕</button>
          </div>

          <nav className="flex-1 overflow-y-auto p-4 space-y-1">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => {
                  onSelectCategory(cat);
                  onClose(); // Se cierra al elegir una categoría
                }}
                className={`w-full text-left p-3 rounded-xl transition-all ${
                  activeCategory === cat 
                    ? "bg-violet-600 text-white font-bold" 
                    : "text-gray-600 hover:bg-violet-50"
                }`}
              >
                {cat}
              </button>
            ))}
          </nav>
        </div>
      </aside>
    </>
  );
};
