# Arquitectura híbrida (Next + Django)

| Servicio   | Tecnología           | Puerto | Notas clave |
|------------|----------------------|--------|-------------|
| frontend   | Next.js 14 (Node 20) | 3000   | Reutiliza este repo, enlaza con el backend mediante `NEXT_PUBLIC_API_BASE_URL`. |
| backend    | Django 5 + DRF       | 8000   | Expuesto en `/api/*`, pensado para aislar lógica de negocio, verificación de fichas y gestión legal. |
| db         | Postgres 15          | 5432   | Datos “vivos”: alojamientos, normativas, usuarios internos. Admite reemplazo por el servidor que ya tenéis. |

## Flujo local
```bash
docker compose up --build
```
- `frontend` monta el volumen del repositorio, así que hot reload sigue funcionando.
- `backend` también monta su carpeta para permitir `manage.py` y migraciones sin reconstruir la imagen.
- La variable `NEXT_PUBLIC_API_BASE_URL` ya apunta a `http://localhost:8000`, por lo que cualquier fetch desde Next caerá en Django.

## Deploy
- Mantén Front y Back como despliegues independientes (ej. Vercel + VPS / Kubernetes).  
- Reutiliza las mismas imágenes generadas por los Dockerfiles incluidos; sólo cambia los `ENV` (`DJANGO_SECRET_KEY`, `DATABASE_URL`, etc.).  
- Si ya tenéis un Postgres “en el otro servidor”, elimina el servicio `db` del compose y apunta `DATABASE_URL` a esa instancia.

## Próximos pasos sugeridos
1. Modelar recursos básicos en Django (`Region`, `Category`, `Listing`) y exponerlos vía DRF.
2. Implementar autenticación/admin para el equipo de verificación.
3. Sustituir los mocks de Next haciendo fetch al nuevo backend (ej. `getCuratedPodcasts` → API real).
