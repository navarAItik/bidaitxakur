## Protocolo de validación y feedback

### Validación continua (Módulo 4.1)

- **Playas y transporte**: revisar cada 15 días los boletines municipales de Galicia, Asturias, Cantabria y Euskadi. Actualizar `PET_SERVICES` con la fecha `verifiedAt` y fuente oficial.
- **Servicios críticos**: los alojamientos, veterinarios y transportes se revisan trimestralmente o cuando los usuarios reportan cambios. Se solicita evidencia (fotos, normativa, enlace oficial).
- **Automatización**: job semanal (GitHub Actions) que compara la hoja maestra con la API. Si encuentra cambios en normativas clave, abre un issue para revisión manual.

### Feedback de usuarios (Módulo 4.2)

- **Canal en cada ficha**: añadir un botón “Reportar actualización” que abra un formulario (Notion/Airtable) con coordenadas pre-rellenadas.
- **Foro/comunidad**: la sección `/[region]/comunidad` recogerá testimonios, fotos y alertas (perros perdidos, eventos). Moderación regional revisa y publica.
- **Gamificación ligera**: usuarios validados pueden ganar puntos por aportar datos útiles (fotos actualizadas, normativa, rutas).

### Documentación legal y responsabilidades (Módulo 4.3)

- **Aviso en cada ficha**: “La normativa puede variar. Lleva siempre documentación de tu mascota. El tutor es responsable de daños/incidentes”.
- **RGPD**: los formularios de feedback almacenan nombre, email y contenido. Deben incluir consentimiento explícito y enlace a Política de Privacidad.
- **Cookies**: el visor usa mapas externos (My Maps, Mapbox). Añadir banner de cookies informando del uso de servicios de terceros.
- **Seguro RC obligatorio**: recordar que la Ley 7/2023 exige seguro de responsabilidad civil para perros, resaltando la recomendación en playas y rutas concurridas.
