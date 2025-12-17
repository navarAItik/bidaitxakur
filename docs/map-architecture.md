## Arquitectura del visor pet friendly (Módulo 1.1)

### Frontend (micrositio web)

- **Stack**: Next.js (app router) + React + Tailwind para UI. Mapa renderizado con `react-leaflet` (Leaflet) o Mapbox GL JS.
- **Capas**:
  - `MapView`: renderiza el tile layer, clusters y popups.
  - `FiltersPanel`: filtros por región, categoría, temporada y accesibilidad.
  - `ServiceDrawer`: muestra la ficha extendida cuando se selecciona un POI.
  - `InsightsPanel`: métricas por región (ya disponibles en `REGION_CONTENT`).
- **Datos**: se consumen como GeoJSON desde `/api/services` (SSG revalidado cada X horas) o desde `/public/data/services.geojson` mientras no haya backend.

### Backend ligero / APIs

- **Opción sin servidor**: almacenar el GeoJSON en GitHub/S3 y desplegarlo como asset público.
- **Opción servidor**: Supabase/Firebase con autenticación para colaboradores, endpoints REST/GraphQL para CRUD de puntos, y triggers que recalculen métricas.
- **Validación**: cada POI guarda `lastVerifiedAt`, `sources` y `verifiedBy`.

### Aplicación móvil / RA (fase posterior)

- **Stack sugerido**: React Native (Expo) + Mapbox SDK. La app comparte endpoints con el micrositio.
- **Funcionalidades**:
  - Descarga offline por región (Galicia, Asturias…).
  - Alertas push sobre playas, transporte y normativa.
  - Modo RA opcional que muestra overlays en parques/playas (similar a apps turísticas).

## Flujos de datos (Módulo 1.2 y 1.3)

1. **Ingesta**: se mantiene una hoja maestra (CSV/Sheet) con columnas `name, region, category, lat, lon, policy, description`. Un job (GitHub Action, cron) la convierte a GeoJSON y la sube a `/public/data/services.geojson`.
2. **Normalización**: cada registro se enriquece con etiquetas (`seasonalAccess`, `requiresLeash`, `allowsIndoor`, etc.) para facilitar filtros.
3. **Navegación**:
   - Filtro primario por región (Galicia, Asturias, Cantabria, Euskadi, Navarra, Iparralde).
   - Filtros secundarios por categoría (playa, alojamiento, veterinario, transporte, experiencia, servicio crítico).
   - Buscador por texto para localizar un punto en concreto.
4. **POI detail**:
   - `policy`: normativa (correa, bozal, PPP, temporada).
   - `service`: tipo (casa rural vallada, metro pet friendly…).
   - `booking`: enlaces a reserva/contacto.
   - `lastVerifiedAt` y `sources` para dejar claro cómo se validó.

## App móvil / funcionalidades futuras

- **API compartida**: `/api/services`, `/api/reports`, `/api/alerts`.
- **Realtime**: canales de feedback (reportar error, compartir foto) guardados en base de datos y moderados desde panel.
- **Contexto**: la app puede leer la preferencia de idioma y el viaje actual (lista de favoritos) sincronizado con el mapa web.
