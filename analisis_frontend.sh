#!/bin/bash
# Script para analizar el estado del proyecto Frontend (Next.js)

echo "=============== ANÁLISIS FRONTEND - Huellas del Norte ==============="
echo ""
echo "---------- 1. Estructura de Páginas (App Router) ----------"
ls -lR src/app | grep -E 'page.tsx|layout.tsx|loading.tsx|error.tsx'
echo ""
echo "---------- 2. Componentes Creados ----------"
ls -l src/components
echo ""
echo "---------- 3. Sub-componentes Específicos ----------"
ls -lR src/components/{layout,map,business,poi,sections,search}
echo ""
echo "---------- 4. Dependencias Principales del Frontend (package.json) ----------"
grep -E '"(react|next|@nextui-org|@headlessui|tailwindcss|mapbox-gl|@heroicons|framer-motion|zod)"' package.json
echo ""
echo "---------- 5. Configuración del Tema en Tailwind (tailwind.config.ts) ----------"
echo "Revisando si hay un tema personalizado (colors, fontFamily, etc.)..."
grep -A 10 "theme: {" tailwind.config.ts
echo ""
echo "=============== FIN DEL ANÁLISIS FRONTEND ==============="
