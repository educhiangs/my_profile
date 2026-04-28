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
    image: "https://picsum.photos/200?random=1",
    description: "Switches blue, backlit, and ergonomic design."
  },
  { 
    id: 2, 
    name: "Mouse Gamer", 
    price: 45, 
    category: "Mouse", 
    image: "https://picsum.photos/200?random=2",
    description: "16000 DPI, customizable buttons, and programmable macros."
  },
  { 
    id: 3, 
    name: "Monitor Full HD", 
    price: 185, 
    category: "Monitores", 
    image: "https://picsum.photos/200?random=3",
    description: "Full HD resolution, 16:9 aspect ratio, and IPS display."
  },
  { 
    id: 4, 
    name: "Monitor Curvo Ultrawide", 
    price: 350, 
    category: "Monitores", 
    image: "https://picsum.photos/200?random=4",
    description: "Ultrawide 21:9 resolution, curved screen for immersive viewing."
  },
  { 
    id: 5, 
    name: "Altavoces Portátiles", 
    price: 130, 
    category: "Audio", 
    image: "https://picsum.photos/200?random=5",
    description: "Portable speakers with high sound quality and built-in battery."
  },
  { 
    id: 6, 
    name: "Cascos Inalámbricos", 
    price: 90, 
    category: "Audio", 
    image: "https://picsum.photos/200?random=6",
    description: "Wireless headphones with noise cancellation and long battery life."
  },
  { 
    id: 7, 
    name: "Teclado Membrana RGB", 
    price: 105,
    category: "Teclados",
    image: "https://picsum.photos/200?random=7",
    description: "RGB backlighting, tactile keys for a responsive feel."
  },
  { 
    id: 8, 
    name: "Mouse Logitech G Pro", 
    price: 150,
    category: "Mouse",
    image: "https://picsum.photos/200?random=8",
    description: "Professional gaming mouse with high DPI, customizable buttons."
  },
  { 
    id: 9, 
    name: "Monitor 4K Curvo", 
    price: 500,
    category: "Monitores",
    image: "https://picsum.photos/200?random=9",
    description: "4K resolution, curved display with a wide viewing angle."
  },
  { 
    id: 10, 
    name: "Monitor LG UltraFine", 
    price: 380,
    category: "Monitores",
    image: "https://picsum.photos/200?random=10",
    description: "UltraWide display with a stunning 5K resolution and OLED technology."
  },
  { 
    id: 11, 
    name: "Altavoces Bicicletas", 
    price: 80,
    category: "Audio",
    image: "https://picsum.photos/200?random=11",
    description: "Portable Bluetooth speakers with a durable design for cycling."
  },
  { 
    id: 12, 
    name: "Cascos Prosonic", 
    price: 75,
    category: "Audio",
    image: "https://picsum.photos/200?random=12",
    description: "High-quality noise-cancelling headphones with a comfortable fit."
  },
  { 
    id: 13, 
    name: "Teclado Backlit Logitech", 
    price: 65,
    category: "Teclados",
    image: "https://picsum.photos/200?random=13",
    description: "Logitech G213 mechanical keyboard with RGB backlighting."
  },
  { 
    id: 14, 
    name: "Mouse Logitech M560", 
    price: 40,
    category: "Mouse",
    image: "https://picsum.photos/200?random=14",
    description: "Wireless optical mouse with a comfortable ergonomic design."
  },
  { 
    id: 15, 
    name: "Monitor Dell UltraSharp", 
    price: 375,
    category: "Monitores",
    image: "https://picsum.photos/200?random=15",
    description: "4K UHD monitor with a wide viewing angle and fast response time."
  },
  { 
    id: 16, 
    name: "Monitor BenQ Zowie", 
    price: 390,
    category: "Monitores",
    image: "https://picsum.photos/200?random=16",
    description: "4K gaming monitor with ultra-thin frame and high refresh rate."
  },
  { 
    id: 17, 
    name: "Altavoces Bose QuietComfort", 
    price: 350,
    category: "Audio",
    image: "https://picsum.photos/200?random=17",
    description: "Noise-canceling headphones with long battery life and high sound quality."
  },
  { 
    id: 18, 
    name: "Cascos Beats Powerbeats Pro", 
    price: 95,
    category: "Audio",
    image: "https://picsum.photos/200?random=18",
    description: "In-ear wireless headphones with active noise cancellation and high sound quality."
  },
  { 
    id: 19, 
    name: "Teclado Logitech G513", 
    price: 70,
    category: "Teclados",
    image: "https://picsum.photos/200?random=19",
    description: "Mechanical gaming keyboard with a responsive feel and programmable keys."
  },
  { 
    id: 20, 
    name: "Mouse Logitech M650", 
    price: 30,
    category: "Mouse",
    image: "https://picsum.photos/200?random=20",
    description: "Wireless optical mouse with precision and durability."
  },
];