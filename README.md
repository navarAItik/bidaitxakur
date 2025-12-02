# Patas Navarricas

Directorio y guía **pet-friendly en Navarra** construido con **React + Vite + TypeScript** y **Tailwind CSS**. Incluye listados, fichas con mapa OpenStreetMap/Leaflet, formularios Netlify Forms y base de datos en ficheros TS para empezar rápido.

## Requisitos
- Node.js 18+
- npm

## Scripts
- `npm run dev`: entorno de desarrollo en `http://localhost:5173`
- `npm run build`: compila TypeScript y genera `dist`
- `npm run preview`: servidor local para revisar el build
- `npm run lint`: ESLint con reglas para React/TypeScript

## Instalación
```bash
npm install
```

## Ejecutar en local
```bash
npm run dev
```

## Desplegar en Netlify
1. Conecta el repo con Netlify.
2. Configura los ajustes de build:
   - **Build command:** `npm run build`
   - **Publish directory:** `dist`
3. Asegúrate de incluir las variables necesarias (ninguna obligatoria para el MVP).
4. Los formularios usan Netlify Forms, no necesitan backend adicional.

## Añadir nuevos lugares
1. Edita `src/data/places.ts` y añade un objeto con el esquema:
```ts
id, name, category, subcategory?, description,
town, province: "Navarra", address?, phone?, website?,
lat, lng,
tags: string[],
petPolicy: { allowed: boolean; notes?: string; },
verified: boolean,
featured: boolean,
affiliate?: { provider: "booking"|"otra"; url: string; disclaimer: string; }
hours?: string,
images?: string[]
```
2. Guarda y vuelve a ejecutar `npm run dev` o `npm run build`.
3. Para mover a backend en el futuro, usa la capa `placesService` como referencia.

## Roadmap Fase 2 (no implementada aún)
- **Firebase Auth** para que negocios gestionen su ficha.
- **Firestore** para almacenar lugares y claims (verificados, destacados) sustituyendo `src/data/`.
- **Netlify Functions** para validar envíos, antispam y operaciones de admin sin exponer claves.
- **Stripe** (opcional) para cobrar planes Destacado/Patrocinado con webhooks que actualicen Firestore.

## Estructura
- `src/pages`: páginas principales (home, directorio, categoría, ficha, planes, rutas, formularios, legal)
- `src/components`: UI reutilizable (cards, búsqueda, filtros, mapa, newsletter)
- `src/data`: datos de ejemplo
- `src/services`: capa de servicio para desacoplar UI y datos
- `src/types`: tipados compartidos

## SEO y assets
- Metadatos por página con `react-helmet-async`
- `public/robots.txt` y `public/sitemap.xml`
- Favicon SVG ligero

¡Lista para copiar/pegar y desplegar!
