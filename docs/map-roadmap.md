## Roadmap de mapa pet friendly

### 1. Lanzamiento inmediato con plataformas existentes

1. **Google My Maps como MVP**
   - Exporta los datos de `REGION_CONTENT` + futuras tablas (alojamientos, veterinarios, experiencias) a CSV/Google Sheets con columnas `name`, `category`, `region`, `lat`, `lon`, `policy`.
   - Importa la hoja en My Maps creando una capa por tipología (playas, servicios, alojamientos). Activa los filtros automáticos para que los usuarios puedan activar/desactivar categorías.
   - Inserta el iframe de My Maps en una nueva sección `/mapa` del sitio actual. Esto da visibilidad inmediata sin nuevo backend.

2. **Aprovechar mapas existentes**
   - **Mapas interactivos externos**: enlaza desde `/mapa` a los My Maps ya existentes de playas caninas (Asturias, Cantabria, Galicia) mientras completas tu base de datos.
   - **Dog Trip (códigos QR)**: crea una sección “Guías externas” que enlace al QR del libro por comunidad autónoma para que el usuario pueda ampliar rutas alojamientos y experiencias.
   - **SrPerro**: incluye un CTA “Explorar negocios cercanos” que abra el mapa público de SrPerro en una pestaña nueva, útil para complementar tus datos en ciudades aún no cubiertas.

3. **Contenido y mantenimiento**
   - Define un flujo semanal para validar nuevos puntos: formulario Notion → revisión → actualización del CSV/Sheet → My Maps refleja cambios automáticamente.
   - Documenta la política de iconos y colores para mantener coherencia con la marca (ej. playas = azul, alojamientos = verde, veterinarios = rojo).

### 2. Visor cartográfico propio (web)

1. **Stack y arquitectura**
   - Frontend: Next.js (proyecto actual) + `react-leaflet` (Leaflet) o Mapbox GL para mejor rendimiento.
   - Datos: colección GeoJSON servida desde el propio repositorio (`/public/data/services.geojson`) o un backend ligero (Supabase, Firebase). Cada feature contiene:
     ```json
     {
       "type": "Feature",
       "geometry": { "type": "Point", "coordinates": [-8.641, 42.438] },
       "properties": {
         "name": "Praia da Cunchiña",
         "region": "galicia",
         "category": "playa",
         "availability": "todo el año",
         "policy": "Acceso completo sin horario",
         "sources": ["Ayto. Cangas"]
       }
     }
     ```
   - Backend opcional: API REST para CRUD y autenticación cuando abras el sistema a colaboradores.

2. **Componentes clave**
   - `MapFilters`: filtros por región, categoría, temporada y servicios (transporte, alojamiento, veterinario, experiencias).
   - `MapLegend`: iconos, horario, alerta de normativa.
   - `MapPopup`: ficha con CTA hacia la página del recurso (ya existente en `/[region]/…` o futura `/servicios/[slug]`).
   - `DataSyncJob`: script cron (GitHub Actions o servidor) que refresque datos según cambios en hojas o CMS.

3. **Roadmap**
   - **S1**: MVP con playas + servicios críticos (veterinarios 24h, guarderías).
   - **S2**: Integrar alojamientos vallados con fotos verificadas.
   - **S3**: Añadir rutas y normativa dinámica (ej. horarios de playas mediante tabla estacional).
   - **S4**: Conectar con autenticación para que negocios soliciten cambios directamente desde el mapa.

4. **Accesibilidad**
   - Soporte teclado y lectores: navega entre marcadores con `Tab`.
   - Contraste alto y modo oscuro opcional.
   - Considera módulos como LISIO o alternativas open-source para lectura fácil.

### 3. App / guía digital avanzada

1. **Objetivo**
   - Ofrecer experiencia offline y notificaciones (alertas de playas cerradas, eventos, normativa) y, a futuro, capas AR.

2. **Stack sugerido**
   - React Native / Expo (reutiliza buena parte del código y estilos).
   - Datos sincronizados mediante GraphQL/REST del mismo backend que el visor web.
   - Mapas móviles: Mapbox SDK o Google Maps SDK con tiles descargables para uso offline.

3. **Funciones prioritarias**
   - Descarga regional: el usuario elige “Galicia” y descarga puntos + normativa para viajar sin cobertura.
   - Alertas push: cambios de normativa (playas cerradas) o eventos/comunidad.
   - Rutas guiadas con navegación paso a paso y recordatorios de documentación (cartilla, bozal, seguro).
   - Modo RA opcional: mostrar overlays en playas/parques destacando zonas permitidas.

4. **Gobernanza y actualizaciones**
   - CMS central (ej. Sanity, Strapi) con workflows de aprobación para nuevos puntos.
   - Moderadores regionales (uno por comunidad) que validen envíos.
   - Telemetría: medir búsquedas por categoría para priorizar contenido (ej. si transporte se consulta mucho en Euskadi, reforzar data).

5. **Dependencias adicionales**
   - Push notifications (Expo Notifications o Firebase Cloud Messaging).
   - Inicio de sesión (NextAuth + providers sociales o e-mail magic link).
   - Pago in-app (suscripción premium para contenido extra o rutas personalizadas).

### Próximos pasos

1. Recopilar latitud/longitud de todos los puntos existentes y definir atributos mínimos (categoría, región, política).
2. Crear hoja base exportable a My Maps y publicar el MVP embebido en `/mapa`.
3. Paralelamente, generar los primeros GeoJSON con playas y servicios críticos para comenzar el visor propio en la web.
4. Diseñar el backlog de la app (MVP offline + alertas) tras validar el visor web y la respuesta del público.
