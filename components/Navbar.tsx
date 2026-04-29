"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useMenu } from "@/context/MenuContext";
import { useCart } from "@/context/CartContext";
import { useMemo, useState, useEffect } from "react";
import { HamburgerIcon } from "./icon-svg/HamburgerIcon";

export const Navbar = () => {
  const [isMounted, setIsMounted] = useState(false);
  useEffect(() => {
    // eslint-disable-next-line react-hooks/set-state-in-effect
    setIsMounted(true);
  }, []);

  const pathname = usePathname();
  const { isOpen, openMenu, closeMenu } = useMenu();
  const { cart, openCart } = useCart();

  // Lógica de visibilidad
  const isShopList = pathname === "/shop";
  const isInsideShop = pathname.startsWith("/shop");

  // Contador de productos con useMemo para optimizar el renderizado
  const totalItems = useMemo(() => cart.reduce((acc, item) => acc + item.quantity, 0), [cart]);

  return (
    <nav className="bg-blue-950 text-green-50 shadow-sm sticky top-0 z-50">
      <div className="container mx-auto flex items-center p-4 px-6 justify-between">
        {/* IZQUIERDA: Menú de categorías + Home */}
        <div className="flex items-center gap-6">
          {/* Solo se muestra en la lista de la tienda */}
          {isShopList && (
            <button 
              onClick={isOpen ? closeMenu : openMenu}
              className="flex flex-col gap-1 group p-1"
              aria-label="Abrir categorías"
            >
              <HamburgerIcon 
                width={40} 
                height={40} 
                className="text-green-50 group-hover:text-blue-400 transition-colors" 
              />    
            </button>
          )}

          <Link href="/" className="text-lg font-bold hover:text-blue-400 transition-colors">
            Home
          </Link>
        </div>

        {/* DERECHA: Navegación + Carrito */}
        <div className="flex items-center gap-4 md:gap-8">
          <div className="hidden sm:flex items-center gap-6">
            <Link href="/shop" className="font-semibold hover:underline decoration-blue-400 underline-offset-4">
              Shop
            </Link>
            { !isShopList && (
              <Link href="/blog" className="font-semibold hover:underline capitalize">
                blog
              </Link>
            )}
          </div>

          {/* CARRITO: Aparece en cualquier ruta que empiece con /shop */}
          {isInsideShop && (
            <button 
              onClick={openCart}
              className="relative flex items-center gap-2 bg-green-900/40 hover:bg-green-900 px-3 py-2 rounded-xl transition-all group"
            >
              <span className="text-xl group-hover:rotate-12 transition-transform">🛒</span>
              <span className="hidden md:inline text-xs font-bold uppercase tracking-tight">Mi Carrito</span>
              
              {isMounted && totalItems > 0 && (
                <span 
                  className="absolute bg-violet-600 text-white text-[10px] font-black w-6 h-6 flex items-center justify-center rounded-full border-2 border-green-950 shadow-lg"
                  style={{ top: '-2px', right: '-2px' }}
                >
                  {totalItems}
                </span>
              )}
            </button>
          )}
        </div>      
      </div>
    </nav>
  )
}