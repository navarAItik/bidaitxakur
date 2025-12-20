# bidaitxakur - Guía Pet-Friendly del Norte de España

Plataforma integral para descubrir lugares aptos para viajar con mascotas en el norte de España. Incluye mapa interactivo, información legal, rutas, alojamientos y mucho más.

## Arquitectura

Este es un monorepo que contiene:

- `apps/backend`: API REST construida con Django y Django REST Framework
- `apps/frontend`: Aplicación web construida con Next.js
- `services/`: Servicios adicionales para contenido multimedia, podcasts y bots de IA

## Prerrequisitos

- Docker
- Docker Compose

## Configuración y Ejecución

### Desarrollo local

1. **Clonar el repositorio:**
   ```bash
   git clone <url-del-repositorio>
   cd bidaitxakur
   ```

2. **Configurar variables de entorno:**
   ```bash
   # Crear archivos .env para backend y frontend
   # En apps/backend/
   cp .env.example .env
   # En apps/frontend/
   cp .env.example .env.local
   # Configurar las variables según sea necesario
   ```

3. **Iniciar los servicios:**
   ```bash
   docker-compose up --build
   ```

Los servicios estarán disponibles en:
- Frontend: http://localhost:3000
- Backend API: http://localhost:3000/api (a través del proxy) o http://localhost:8000 directamente

### Variables de Entorno

Todas las claves de API, tokens y credenciales sensibles deben mantenerse en archivos `.env` que están excluidos del control de versiones:

- Backend: `apps/backend/.env`
- Frontend: `apps/frontend/.env.local`

**Nunca** commitear claves API, tokens u otros datos sensibles en el repositorio.

### Scripts útiles

```bash
# Iniciar en modo desarrollo
npm run dev

# Construir imágenes
npm run build

# Iniciar en modo daemon
npm run start

# Detener servicios
npm run stop

# Ver logs
npm run logs
```

## Estructura de Carpetas

```
bidaitxakur/
├── apps/
│   ├── backend/           # API Django
│   └── frontend/          # Aplicación Next.js
├── packages/              # Código compartido
├── services/              # Servicios adicionales
│   ├── media-manager/     # Gestión de videos, imágenes
│   ├── podcast-service/   # Gestión de podcasts
│   └── ai-bots/          # Bots de IA autogestionados
├── docker/                # Configuraciones de Docker
├── scripts/               # Scripts de utilidad
└── docs/                  # Documentación
```

## Seguridad

### Gestión de credenciales

- Todas las credenciales sensibles se almacenan en archivos `.env`
- Estos archivos están excluidos del control de versiones mediante `.gitignore`
- Se proporcionan archivos `.env.example` con plantillas para configuración
- Nunca commitear claves API, tokens de acceso ni contraseñas

### Variables de entorno

- Backend: Variables de Django, base de datos, claves de API externas
- Frontend: Variables públicas de Next.js, claves de API públicas (si las hay)
- Docker: Variables para configuración de contenedores

## Futuras Funcionalidades

- Integración de videos y podcasts
- Bots de IA autogestionados
- Sistema de reseñas y recomendaciones
- Notificaciones personalizadas
- Offline capabilities

## Contribuciones

Las contribuciones son bienvenidas. Por favor, abre un issue para discutir cambios antes de enviar pull requests.

**Importante**: No incluyas claves API, tokens u otros datos sensibles en tus contribuciones.
