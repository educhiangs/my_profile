// Products/products.ts
export interface Product {
    id: number,
    name: string,
    price: number,
    category: string,
    image: string,
    description: string
}
export const Products: Product[] = [
  { 
    id: 1,
    name: "Teclado Mecánico",
    price: 85,
    category: "Teclados",
    image: "https://picsum.photos",
    description: "Switches blue..."
 },
  { 
    id: 2, 
    name: "Mouse Gamer", 
    price: 45, 
    category: "Mouse", 
    image: "https://picsum.photos", 
    description: "16000 DPI..."
 },
  // ... añade category: "Monitores" o "Audio" a los demás
];
