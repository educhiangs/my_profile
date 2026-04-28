import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google"; // 1. Importamos las fuentes
import "./globals.css";
import { Navbar } from "@/components/Navbar";
import { MenuProvider } from "@/context/MenuContext"; // 2. Importamos el contexto
import { CartProvider } from "@/context/CartContext";
import CartSidebar from "@/components/CardSidebar";

// 3. Definimos las variables de las fuentes (ESTO ES LO QUE TE FALTA)
const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Mi Tienda Pro",
  description: "Catálogo de productos",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="es"
      // 4. Aquí usamos las variables 'geistSans' y 'geistMono'
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">
        {/* Envolvemos con el Provider para que el Navbar hable con el Sidebar */}
        <MenuProvider>
          <CartProvider>
            <Navbar />
            <CartSidebar/>
            <main className="grow">
              {children}
            </main>
          </CartProvider>
        </MenuProvider>
      </body>
    </html>
  );
}
