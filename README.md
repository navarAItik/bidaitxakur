# BidaiTxakur Platform

Plataforma web para mapear recursos pet-friendly en el norte de España. Frontend en **Next.js 14 + Tailwind** y backend en **Django 5 + DRF** (recién iniciado). La meta es servir datos verificados, normativa y contenido editorial a través de un stack híbrido fácilmente desplegable en contenedores.

## Servicios

| Servicio | Puerto | Descripción |
|----------|--------|-------------|
| Next.js  | 3000   | UI pública, widget de podcasts, banner de cookies y secciones dinámicas. |
| Django   | 8000   | API REST (de momento sólo `/api/health/`). Aquí vivirá la lógica de negocio y la “base viva”. |
| Postgres | 5432   | Base de datos; usa el contenedor del compose o apunta a tu servidor propio mediante `DATABASE_URL`. |

## Requisitos
- Node.js 20+
- npm
- Docker (opcional pero recomendado para levantar los tres servicios a la vez)

## Scripts frontend
- `npm run dev`: servidor Next en `http://localhost:3000`
- `npm run lint`: ESLint
- `npm run build`: build + typecheck
- `npm run start`: sirve el build

## Levantar todo con Docker
```bash
docker compose up --build
```
Esto arranca:
- `frontend` con hot reload (usa `Dockerfile.frontend`).
- `backend` (Django `runserver`).
- `db` (Postgres 15). Si ya tienes una base externa, elimina este servicio y ajusta `DATABASE_URL` en `backend/.env.example`.

## Backend Django
Ubicación: `backend/`

```
backend/
├── api/                 # App inicial con /api/health/
├── petfriendly_backend/ # Proyecto Django
├── manage.py
├── requirements.txt
├── Dockerfile
└── .env.example
```

### Comandos útiles
```bash
cd backend
python -m venv .venv && source .venv/bin/activate
pip install -r requirements.txt
python manage.py migrate
python manage.py runserver
```

## Arquitectura y docs
- `docs/implementation-notes.md`: histórico de cambios.
- `docs/hybrid-architecture.md`: esquema de la solución híbrida, comandos y roadmap sugerido.
- `docs/legal-framework`: guía de cumplimiento (RGPD + Ley 7/2023).

## Próximos pasos sugeridos
1. Modelar los recursos reales en Django (regiones, categorías, listados, normativa).
2. Reemplazar los mocks de Next por peticiones al backend (`NEXT_PUBLIC_API_BASE_URL`).
3. Añadir autenticación/admin y flujos internos en Django.
4. Automatizar despliegues front/back con los Dockerfiles incluidos.

El proyecto está “en obras”, pero la base tecnológica ya permite crecer hacia un marketplace verificado con datos vivos. ¡Vamos allá! 
