"use client";
import { useCart } from "@/context/CartContext";
import Image from "next/image";
import { useEffect, useState } from "react";

const CartSidebar = () => {
  const { cart, isCartOpen, closeCart, removeFromCart, totalPrice } = useCart();
  
  // Estado para controlar el montado en el cliente
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    // Desactivamos la regla de ESLint solo para esta línea, 
    // ya que en Next.js esto es necesario para evitar errores de hidratación.
    // eslint-disable-next-line react-hooks/set-state-in-effect
    setIsMounted(true);
  }, []);

  // Si no se ha montado (estamos en el servidor), no renderizamos el HTML
  if (!isMounted) return null;

  return (
    <>
      {/* Fondo oscuro (Overlay) */}
      <div 
        className={`fixed inset-0 bg-black/40 z-90 transition-opacity duration-300 ${
          isCartOpen ? "opacity-100 visible" : "opacity-0 invisible"
        }`}
        onClick={closeCart}
      />

      {/* Panel del Carrito */}
      <aside className={`fixed top-0 right-0 h-full w-md sm:w-400px bg-white z-100 shadow-2xl transform transition-transform duration-300 ease-in-out ${
        isCartOpen ? "translate-x-0" : "translate-x-full"
      }`}>
        <div className="flex flex-col h-full">
          {/* Header */}
          <div className="p-6 border-b flex justify-between items-center bg-gray-50">
            <div>
              <h2 className="font-black text-xl text-gray-800 uppercase tracking-tight">Tu Carrito</h2>
              {/* Usamos directamente cart.length del context */}
              <p className="text-xs text-gray-400 font-bold uppercase">{cart.length} Productos</p>
            </div>
            <button onClick={closeCart} className="text-gray-400 hover:text-gray-900 text-2xl transition-colors">✕</button>
          </div>

          {/* Lista de productos */}
          <div className="flex-1 overflow-y-auto p-6 space-y-6">
            {cart.length === 0 ? (
              <div className="flex flex-col items-center justify-center h-full text-gray-400">
                <span className="text-6xl mb-4">🛒</span>
                <p className="font-medium text-lg text-center">Tu carrito está vacío</p>
              </div>
            ) : (
              cart.map((item) => (
                <div key={item.id} className="flex gap-4 border-b border-gray-50 pb-6 group">
                  <div className="relative h-24 w-24 rounded-2xl overflow-hidden bg-gray-50 shrink-0 border border-gray-100">
                    <Image 
                      src={item.image ? `${item.image}/150/150` : "/placeholder.png"} 
                      alt={item.name} 
                      fill 
                      className="object-cover" 
                    />
                  </div>
                  <div className="flex flex-col justify-between flex-1 py-1">
                    <div>
                      <h3 className="font-bold text-sm text-gray-800 line-clamp-1">{item.name}</h3>
                      <p className="text-xs text-violet-500 font-bold uppercase">{item.category}</p>
                    </div>
                    <div className="flex justify-between items-end">
                      <div className="flex flex-col">
                        <span className="text-xs text-gray-400">Cant: {item.quantity}</span>
                        <span className="font-black text-violet-700">${(item.price * item.quantity).toFixed(2)}</span>
                      </div>
                      <button 
                        onClick={() => removeFromCart(item.id)}
                        className="text-[10px] font-bold text-red-400 uppercase tracking-widest hover:text-red-600 transition-colors"
                      >
                        Quitar
                      </button>
                    </div>
                  </div>
                </div>
              ))
            )}
          </div>

          {/* Footer con el Total */}
          {cart.length > 0 && (
            <div className="p-6 border-t bg-gray-50">
              <div className="flex justify-between items-center mb-6">
                <span className="text-gray-500 font-bold uppercase text-xs">Total a pagar:</span>
                <span className="text-3xl font-black text-violet-700">${totalPrice.toFixed(2)}</span>
              </div>
              <button className="w-full bg-green-950 text-white py-5 rounded-2xl font-black text-lg hover:bg-green-900 transition-all shadow-xl shadow-green-900/20 active:scale-[0.98]">
                Ir a Pagar
              </button>
            </div>
          )}
        </div>
      </aside>
    </>
  );
};

export default CartSidebar;
