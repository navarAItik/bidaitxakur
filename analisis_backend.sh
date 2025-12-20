#!/bin/bash
# Script para analizar el estado del proyecto Backend (Django)

echo "=============== ANÁLISIS BACKEND - bidaitxakur ==============="
echo ""
echo "---------- 1. Modelos de Datos (api/models.py) ----------"
echo "Define la estructura de la base de datos."
cat apps/backend/api/models.py
echo ""
echo "---------- 2. Vistas/Lógica de API (api/views.py) ----------"
echo "Define la lógica para cada endpoint."
cat apps/backend/api/views.py
echo ""
echo "---------- 3. Endpoints/Rutas Definidas (api/urls.py) ----------"
echo "Define las URLs de la API."
cat apps/backend/api/urls.py
echo ""
echo "---------- 4. Dependencias del Backend (requirements.txt) ----------"
echo "Librerías de Python utilizadas."
cat apps/backend/requirements.txt
echo ""
echo "=============== FIN DEL ANÁLISIS BACKEND ==============="
