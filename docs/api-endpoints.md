# Documentación de Endpoints API

## Base URL
`http://localhost:8000/api/` (desarrollo)  
`https://api.petfriendly.com/api/` (producción)

## Autenticación
- **Tipo**: Token-based (opcional para lectura)
- **Header**: `Authorization: Token <token>` [TU_API_KEY_AQUI]-yEGFd7xHiUCS0psa9paC8kTDanhWxYz3mmyh2fDxlE2n756muYVHBIDT-4XwdR1I8oT3BlbkFJw4yn-CegIZL715faa3WgmCpj7zNcuD5Mz-vzVKpYp5ckc9pmFgIjydP6t2FjCHxNAarjXqIuAA
- **Registro/Login**: Implementar con Djoser o similar

## Endpoints Principales

### POIs (Puntos de Interés)
**GET /api/pois/**  
Lista todos los POIs con filtros opcionales.  
**Parámetros de query**:
- `region`: Slug de región (ej: `galicia`)
- `category`: Slug de categoría (ej: `alojamiento`)
- `type`: Tipo de POI (ej: `playa`)

**Respuesta**:

```json
{
  "count": 25,
  "next": null,
  "previous": null,
  "results": [
    {
      "id": 1,
      "region": "galicia",
      "category": "playa",
      "type": "playa",
      "name": "Praia da Cunchiña",
      "slug": "praia-da-cunchina",
      "description": "Playa canina en Cangas...",
      "location": {
        "latitude": 42.438,
        "longitude": -8.641,
        "address": "Cangas, Pontevedra",
        "town": "Cangas",
        "postalCode": "36940"
      },
      "pet_rules": {
        "allowed": true,
        "notes": "Acceso completo sin horario",
        "maxPets": null,
        "weightLimit": null,
        "typesAllowed": ["perro"],
        "restrictions": [],
        "extraFee": false
      },
      "contact": {
        "phone": "+34 986 123 456",
        "website": "https://ayto-cangas.es",
        "email": "info@ayto-cangas.es"
      },
      "images": ["https://example.com/image1.jpg"],
      "verified": true,
      "featured": false,
      "tags": ["playa", "verano"],
      "stats": {
        "reviews": 12,
        "rating": 4.5,
        "favorites": 45
      },
      "created_at": "2024-01-15T10:30:00Z",
      "updated_at": "2024-12-01T14:20:00Z"
    }
  ]
}
```

**GET /api/pois/{id}/**  
Detalle de un POI específico.

### Regiones
**GET /api/regions/**  
Lista todas las regiones.

**GET /api/regions/{slug}/**  
Detalle de una región.

### Categorías
**GET /api/categories/**  
Lista todas las categorías.

**GET /api/categories/{slug}/**  
Detalle de una categoría.

### Legislación
**GET /api/legislations/**  
Lista toda la legislación.

**GET /api/legislations/{slug}/**  
Detalle de una norma específica.

### Reviews (Comunidad)
**GET /api/reviews/**  
Lista todas las reseñas.  
**Parámetros**: `poi`: ID del POI

**POST /api/reviews/** (Autenticado)  
Crear nueva reseña.  
**Body**:

```json
{
  "poi": 1,
  "rating": 5,
  "comment": "Excelente playa para perros"
}
```

**GET /api/reviews/{id}/**  
Detalle de reseña.

**PUT/PATCH /api/reviews/{id}/** (Propietario)  
Actualizar reseña.

**DELETE /api/reviews/{id}/** (Propietario)  
Eliminar reseña.

### User Profiles
**GET /api/userprofiles/**  
Lista perfiles de usuario.

**GET /api/userprofiles/{id}/**  
Detalle de perfil.

**PUT/PATCH /api/userprofiles/{id}/** (Propietario)  
Actualizar perfil.

## Códigos de Estado
- `200`: OK
- `201`: Created
- `400`: Bad Request
- `401`: Unauthorized
- `403`: Forbidden
- `404`: Not Found
- `500`: Internal Server Error

## Rate Limiting
- Lectura: 1000 requests/hora
- Escritura: 100 requests/hora (autenticado)

## Versionado
- Actual: v1
- Futuro: `/api/v2/`

## Notas de Seguridad
- Validación de entrada en todos los endpoints
- Sanitización de datos
- Protección CSRF en POST/PUT/DELETE
- Logs de auditoría para cambios críticos