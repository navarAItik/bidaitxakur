# Notas de implementación recientes

## Diciembre 2024 – Beta en construcción

- **Nuevo widget de podcasts**  
  - Sustituido el antiguo botón flotante por `PodcastWidget`, un panel accesible que lista playlists curadas, filtros por plataforma y mini–player persistente.  
  - La data mock se centraliza en `src/lib/podcastService.ts` con metadatos (feed, tags, duración) para cada show sugerido por el equipo editorial.

- **Cumplimiento y legal**  
  - Se añadió `CookieConsent`, banner de preferencias con almacenamiento versionado en `localStorage`, CTA a la guía legal y botón persistente para reabrir la configuración.  
  - Nueva página `docs/legal-framework` que resume requisitos RGPD/LOPDGDD, Ley 7/2023 y transparencia comercial; el banner enlaza aquí.

- **Modo “en obras” en la home**  
  - El hero comunica explícitamente que el proyecto está en construcción y se reemplazaron los CTA comerciales por enlaces informativos.  
  - Los bloques orientados a negocio (marketplace, CTA comercial, métricas) se ocultan mediante `showFullExperience` hasta que se abra la beta pública.

- **Correcciones de build**  
  - Se revirtió el uso de `next/font/google` por `<link>` clásico porque la sandbox no permite descargar fuentes durante `next build`. Tailwind vuelve a usar pilas CSS estándar.

> Esta hoja sirve como histórico rápido para futuros cambios; manténla actualizada cuando se activen nuevas fases. 

## Enero 2025 – Paso hacia arquitectura híbrida

- **Backend Django inicial**  
  - Carpeta `backend/` con proyecto `petfriendly_backend`, app `api` y endpoint `/api/health/` para monitorización.  
  - Configuración lista para Postgres (via `DATABASE_URL`) o SQLite por defecto; incluye `django-rest-framework` y `corsheaders`.
- **Contenedores y orquestación**  
  - `docker-compose.yml` levanta `frontend` (Next), `backend` (Django) y `db` (Postgres).  
  - Nuevos Dockerfiles (`Dockerfile.frontend`, `backend/Dockerfile`) más `.dockerignore` para aislar dependencias.  
  - Variables de entorno de ejemplo en `backend/.env.example`.
