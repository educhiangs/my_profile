# 🏗️ Estructura y Tecnologías del Proyecto — `my-profile`

> Documento de referencia para agentes de IA y desarrolladores.  
> Define las tecnologías, arquitectura, convenciones y buenas prácticas del proyecto.

---

## 1. Tech Stack

| Categoría           | Tecnología                           | Versión    | Notas                                              |
| ------------------- | ------------------------------------ | ---------- | -------------------------------------------------- |
| **Framework**       | [Next.js](https://nextjs.org)        | `16.x`     | App Router, RSC por defecto                        |
| **Lenguaje**        | TypeScript                           | `^5`       | Modo `strict`, sin `any`                           |
| **UI Library**      | React                                | `19.x`     | Server Components + `'use client'` cuando aplique  |
| **Styling**         | Tailwind CSS                         | `^4`       | CSS-first config con `@theme inline`               |
| **PostCSS**         | `@tailwindcss/postcss`               | `^4`       | Plugin único en `postcss.config.mjs`               |
| **Linting**         | ESLint                               | `^9`       | `eslint-config-next` (core-web-vitals + typescript) |
| **Package Manager** | Yarn                                 | —          | Lockfile: `yarn.lock`                              |
| **Iconos**          | `lucide-react`                       | —          | Preferido para iconos SVG                          |
| **Imágenes**        | `next/image`                         | Built-in   | Optimización automática, dominios remotos habilitados |

---

## 2. Arquitectura de Carpetas

```
my-profile/
├── .agents/
│   └── rules/
│       └── frontend-rules.md       # Reglas de generación de código para agentes IA
├── app/                            # 📁 App Router (rutas y layouts)
│   ├── layout.tsx                  # Layout raíz (fuentes, metadata, providers)
│   ├── page.tsx                    # Página principal (Home)
│   ├── globals.css                 # Estilos globales + tokens Tailwind (@theme)
│   ├── favicon.ico
│   ├── contacto/                   # /contacto — Página de contacto
│   │   └── page.tsx
│   ├── shop/                       # /shop — Tienda de productos
│   │   └── page.tsx
│   └── sobre-mi/                   # /sobre-mi — Página About
│       └── page.tsx
├── components/                     # 📁 Componentes reutilizables
│   ├── Navbar.tsx                  # Navegación principal
│   ├── Hero.tsx                    # Sección Hero
│   ├── Carousel.tsx                # Carrusel de imágenes/contenido
│   ├── ProductCard.tsx             # Tarjeta de producto
│   ├── CardSidebar.tsx             # Sidebar con tarjetas
│   ├── CategorySidebar.tsx         # Sidebar de categorías
│   └── Caracteristic.tsx           # Sección de características
├── context/                        # 📁 React Context Providers
│   ├── CartContext.tsx              # Estado global del carrito
│   └── MenuContext.tsx              # Estado global del menú
├── public/                         # 📁 Assets estáticos
├── postcss.config.mjs              # Configuración PostCSS
├── tsconfig.json                   # Configuración TypeScript
├── next.config.ts                  # Configuración Next.js
├── eslint.config.mjs               # Configuración ESLint (flat config)
├── package.json
└── yarn.lock
```

### Carpetas adicionales recomendadas (crear cuando se necesiten)

```
├── lib/                            # 📁 Utilidades, helpers y constantes
│   ├── utils.ts                    # Funciones auxiliares (cn(), formatPrice(), etc.)
│   ├── constants.ts                # Constantes del proyecto
│   └── types.ts                    # Tipos e interfaces compartidas
├── hooks/                          # 📁 Custom Hooks
│   └── useMediaQuery.ts            # Ejemplo: detección de breakpoints
├── services/                       # 📁 Servicios y llamadas API
│   └── api.ts                      # Funciones de fetch/data
└── data/                           # 📁 Datos estáticos (mock, JSON)
    └── products.json               # Ejemplo: catálogo de productos
```

---

## 3. Configuración de Estilos (Tailwind CSS v4 + PostCSS)

### `postcss.config.mjs`

```js
const config = {
  plugins: {
    "@tailwindcss/postcss": {},
  },
};

export default config;
```

> **Nota:** Tailwind CSS v4 usa `@tailwindcss/postcss` como plugin único. No se necesita `autoprefixer` por separado.

### `globals.css` — Design Tokens

```css
@import "tailwindcss";

:root {
  --background: grey;
  --foreground: #171717;
}

@theme inline {
  --color-background: var(--background);
  --color-foreground: var(--foreground);
  --font-sans: var(--font-geist-sans);
  --font-mono: var(--font-geist-mono);
}

@media (prefers-color-scheme: dark) {
  :root {
    --background: grey;
    --foreground: black;
  }
}

body {
  background: var(--background);
  color: var(--foreground);
  font-family: Arial, Helvetica, sans-serif;
}
```

> **`@theme inline`** permite definir tokens de Tailwind directamente en CSS sin archivo `tailwind.config`. Este es el enfoque CSS-first de Tailwind v4.

---

## 4. TypeScript — Configuración

```jsonc
// tsconfig.json — Puntos clave
{
  "compilerOptions": {
    "target": "ES2017",
    "strict": true,           // ✅ Modo estricto obligatorio
    "jsx": "react-jsx",
    "moduleResolution": "bundler",
    "paths": {
      "@/*": ["./*"]           // ✅ Alias de importación: @/components/Navbar
    }
  }
}
```

### Convenciones de TypeScript

| Regla                                | Ejemplo                                           |
| ------------------------------------ | ------------------------------------------------- |
| Props siempre tipadas con `interface`| `interface HeroProps { title: string; }`           |
| Evitar `any` — usar `unknown` si es necesario | `const data: unknown = await fetch(...)`  |
| Exportar tipos desde `lib/types.ts`  | `export interface Product { id: string; ... }`     |
| Nombrar interfaces con PascalCase    | `CardSidebarProps`, `CartContextType`               |
| Componentes como funciones con tipo  | `const Hero: React.FC<HeroProps> = ({ title }) =>` |

---

## 5. Convenciones de Componentes

### Reglas generales

1. **Server Components por defecto** — Solo agregar `'use client'` cuando el componente necesite:
   - Hooks (`useState`, `useEffect`, `useContext`)
   - Event handlers (`onClick`, `onChange`)
   - APIs del navegador (`window`, `localStorage`)

2. **Estructura de un componente**:

```tsx
// components/ExampleCard.tsx
'use client'; // ← Solo si es necesario

import Image from 'next/image';
import { type FC } from 'react';

interface ExampleCardProps {
  title: string;
  description: string;
  imageUrl: string;
}

const ExampleCard: FC<ExampleCardProps> = ({ title, description, imageUrl }) => {
  return (
    <article className="rounded-2xl bg-white/10 p-6 backdrop-blur-md shadow-lg transition-transform hover:scale-[1.02]">
      <Image
        src={imageUrl}
        alt={title}
        width={400}
        height={300}
        className="rounded-xl object-cover"
      />
      <h3 className="mt-4 text-xl font-semibold text-foreground">{title}</h3>
      <p className="mt-2 text-sm text-foreground/70">{description}</p>
    </article>
  );
};

export default ExampleCard;
```

3. **Nombrado de archivos**: PascalCase para componentes (`ProductCard.tsx`), camelCase para utilidades (`formatPrice.ts`).

4. **Un componente por archivo** — Si un componente crece, extraer subcomponentes.

---

## 6. Gestión de Estado

| Prioridad | Mecanismo              | Cuándo usarlo                                  |
| --------- | ---------------------- | ---------------------------------------------- |
| 1️⃣        | **Server Components**   | Datos que no necesitan interactividad           |
| 2️⃣        | **URL State** (`searchParams`) | Filtros, paginación, búsquedas           |
| 3️⃣        | **Server Actions**      | Mutaciones de datos (forms, API calls)          |
| 4️⃣        | **React Context**       | Estado UI compartido (carrito, menú, theme)     |
| 5️⃣        | **`useState`/`useReducer`** | Estado local de un componente               |

### Contextos existentes

- **`CartContext.tsx`** → Estado del carrito de compras
- **`MenuContext.tsx`** → Estado de apertura/cierre del menú móvil

> ⚠️ Evitar librerías externas de estado (Redux, Zustand) salvo que la complejidad lo justifique.

---

## 7. Rutas y Navegación

| Ruta          | Archivo                    | Descripción             |
| ------------- | -------------------------- | ----------------------- |
| `/`           | `app/page.tsx`             | Página principal (Home) |
| `/contacto`   | `app/contacto/page.tsx`    | Formulario de contacto  |
| `/shop`       | `app/shop/page.tsx`        | Tienda de productos     |
| `/sobre-mi`   | `app/sobre-mi/page.tsx`    | Sobre mí / About        |

### Agregar nuevas rutas

```
app/
└── nueva-ruta/
    ├── page.tsx              # Obligatorio — contenido de la página
    ├── layout.tsx            # Opcional — layout específico de la ruta
    ├── loading.tsx           # Opcional — UI de carga (Suspense)
    └── error.tsx             # Opcional — manejo de errores
```

---

## 8. SEO y Performance

### Metadata (en cada `page.tsx` o `layout.tsx`)

```tsx
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Mi Perfil — Inicio',
  description: 'Portafolio personal y tienda online.',
  openGraph: {
    title: 'Mi Perfil',
    description: 'Portafolio personal y tienda online.',
    type: 'website',
  },
};
```

### Checklist de Performance

- [x] Usar `next/image` para todas las imágenes
- [x] Dominios remotos configurados en `next.config.ts` (`hostname: '**'`)
- [ ] Usar `next/font` para tipografías optimizadas
- [ ] Implementar `loading.tsx` para rutas con data fetching
- [ ] Usar `dynamic()` para componentes pesados que no se necesiten en el primer render

---

## 9. Next.js Config

```ts
// next.config.ts
import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: '**',    // Permite cualquier dominio HTTPS
      },
    ],
  },
};

export default nextConfig;
```

> **Seguridad:** En producción, restringir `hostname` a dominios específicos en lugar de `'**'`.

---

## 10. Comandos del Proyecto

```bash
# Desarrollo
yarn dev              # Inicia servidor de desarrollo (http://localhost:3000)

# Build y producción
yarn build            # Genera el build de producción
yarn start            # Inicia el servidor de producción

# Linting
yarn lint             # Ejecuta ESLint en todo el proyecto
```

---

## 11. Reglas para Agentes de IA

> Estas reglas aplican a cualquier agente que genere código para este proyecto.

### ✅ HACER

1. Usar **TypeScript estricto** — siempre tipar props, retornos y variables.
2. Usar **Tailwind CSS v4** para estilos — nunca CSS plano en archivos separados.
3. Preferir **Server Components** — solo `'use client'` cuando haya interactividad.
4. Usar **`next/image`** para toda imagen — nunca `<img>` nativo.
5. Usar **`@/`** como alias de importación — nunca rutas relativas profundas (`../../..`).
6. Definir **metadata** en cada página nueva.
7. Crear componentes **pequeños y reutilizables**.
8. Seguir la **estructura de carpetas existente** (`app/`, `components/`, `context/`).
9. Usar **`lucide-react`** para iconos.
10. Verificar que el código compila: `yarn build`.

### ❌ NO HACER

1. No usar `any` — usar `unknown` o tipos concretos.
2. No crear archivos CSS separados — todo va por Tailwind.
3. No instalar dependencias sin justificación.
4. No usar `React.Component` (clases) — solo componentes funcionales.
5. No hardcodear strings repetidos — extraer a constantes en `lib/constants.ts`.
6. No mezclar Server y Client logic en el mismo componente sin separar.
7. No usar `<a>` para navegación interna — usar `<Link>` de `next/link`.
8. No ignorar errores de TypeScript con `@ts-ignore`.

---

## 12. Dependencias Recomendadas (instalar solo cuando se necesiten)

| Paquete             | Propósito                                | Comando                          |
| ------------------- | ---------------------------------------- | -------------------------------- |
| `lucide-react`      | Iconos SVG                               | `yarn add lucide-react`          |
| `clsx`              | Clases condicionales                     | `yarn add clsx`                  |
| `tailwind-merge`    | Merge inteligente de clases Tailwind     | `yarn add tailwind-merge`        |
| `framer-motion`     | Animaciones declarativas                 | `yarn add framer-motion`         |
| `zod`               | Validación de schemas                    | `yarn add zod`                   |
| `@shadcn/ui`        | Componentes UI accesibles                | Seguir docs de shadcn            |
| `next-themes`       | Soporte de dark/light mode               | `yarn add next-themes`           |

### Función `cn()` recomendada

```ts
// lib/utils.ts
import { clsx, type ClassValue } from 'clsx';
import { twMerge } from 'tailwind-merge';

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}
```

---

> **Última actualización:** 27 de abril de 2026  
> **Mantenido por:** Eduardo Chiang
