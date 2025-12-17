export type PetServiceCategory =
  | 'playa'
  | 'alojamiento'
  | 'veterinario'
  | 'transporte'
  | 'experiencia'
  | 'servicio';

export type PetService = {
  id: string;
  name: string;
  region: 'galicia' | 'asturias' | 'cantabria' | 'euskadi' | 'navarra' | 'iparralde';
  category: PetServiceCategory;
  description: string;
  coordinates: { lat: number; lon: number };
  policy: {
    leashRequired: boolean;
    muzzleRequired?: boolean;
    seasonalAccess?: string;
    notes?: string;
  };
  serviceDetails: string[];
  verifiedAt: string;
  sources: string[];
};

export const PET_SERVICES: PetService[] = [
  {
    id: 'playa-cunchinha',
    name: 'Praia da Cunchiña',
    region: 'galicia',
    category: 'playa',
    description: 'Zona oficial dog friendly no Morrazo, accesible todo o ano.',
    coordinates: { lat: 42.2591, lon: -8.7796 },
    policy: {
      leashRequired: true,
      seasonalAccess: 'Todo el año',
    },
    serviceDetails: ['Arena fina', 'Agua tranquila', 'Parking cercano'],
    verifiedAt: '2025-01-05',
    sources: ['Concello de Cangas'],
  },
  {
    id: 'playa-cesantes',
    name: 'Praia de Cesantes',
    region: 'galicia',
    category: 'playa',
    description: 'Zona ampla na ría de Vigo cunha área dog friendly sinalizada.',
    coordinates: { lat: 42.3166, lon: -8.6158 },
    policy: {
      leashRequired: true,
      seasonalAccess: 'Todo el año',
      notes: 'Ideal para paddle con mascota e rutas ao amencer.',
    },
    serviceDetails: ['Arenal extenso', 'Aparcamento próximo', 'Acceso a duchas'],
    verifiedAt: '2025-01-08',
    sources: ['Concello de Redondela'],
  },
  {
    id: 'alojamiento-san-miguel',
    name: 'Hotel San Miguel',
    region: 'asturias',
    category: 'alojamiento',
    description: 'Hotel urbano pet friendly en Gijón con amenities caninos.',
    coordinates: { lat: 43.5407, lon: -5.654 },
    policy: {
      leashRequired: true,
      notes: 'Se admite acceso interior, suplemento incluido en la tarifa.',
    },
    serviceDetails: ['Kit de cama y comedero', 'Información sobre playas', 'Atención 24h'],
    verifiedAt: '2025-01-07',
    sources: ['Propiedad'],
  },
  {
    id: 'playa-playon-bayas',
    name: 'Playón de Bayas',
    region: 'asturias',
    category: 'playa',
    description: 'Un dos areais máis longos do Principado, aberto todo o ano.',
    coordinates: { lat: 43.5649, lon: -6.0269 },
    policy: {
      leashRequired: true,
      seasonalAccess: 'Todo el año',
    },
    serviceDetails: ['Pistas sinalizadas', 'Zona de dunas protexida', 'Parking amplo'],
    verifiedAt: '2024-12-29',
    sources: ['Ayuntamiento de Castrillón'],
  },
  {
    id: 'servicio-urbandog',
    name: 'Urbandog',
    region: 'asturias',
    category: 'servicio',
    description: 'Centro integral de adestramento e gardería en Posada de Llanera.',
    coordinates: { lat: 43.4409, lon: -5.8266 },
    policy: {
      leashRequired: true,
      notes: 'Reservas previas imprescindibles, persoal especializado.',
    },
    serviceDetails: ['Sesións personalizadas', 'Gardería 24h', 'Transporte propio'],
    verifiedAt: '2025-01-04',
    sources: ['Urbandog'],
  },
  {
    id: 'playa-arcisero',
    name: 'Playa Arcisero',
    region: 'cantabria',
    category: 'playa',
    description: 'Caleta en Castro Urdiales habilitada todo el año.',
    coordinates: { lat: 43.3833, lon: -3.2124 },
    policy: {
      leashRequired: true,
      seasonalAccess: 'Todo el año',
    },
    serviceDetails: ['Acceso sencillo', 'Zonas rocosas'],
    verifiedAt: '2024-12-18',
    sources: ['Ayuntamiento de Castro Urdiales'],
  },
  {
    id: 'transporte-los-reginas',
    name: 'Ferry Los Reginas',
    region: 'cantabria',
    category: 'transporte',
    description: 'Barco Santander – El Puntal que permite viaxar con mascotas gratis.',
    coordinates: { lat: 43.4623, lon: -3.8099 },
    policy: {
      leashRequired: true,
      notes: 'Bozal recomendado en tempada alta. Acceso exterior.',
    },
    serviceDetails: ['Trayectos todo o ano', 'Ideal para acceder á praia do Puntal'],
    verifiedAt: '2025-01-06',
    sources: ['Los Reginas'],
  },
  {
    id: 'experiencia-cabarceno',
    name: 'Parque de la Naturaleza de Cabárceno',
    region: 'cantabria',
    category: 'experiencia',
    description: 'Admite cans con correa en gran parte do percorrido.',
    coordinates: { lat: 43.3354, lon: -3.806 },
    policy: {
      leashRequired: true,
      notes: 'Acceso restrinxido ao teleférico; seguir sinalización.',
    },
    serviceDetails: ['Zonas verdes amplas', 'Servizos e restauración', 'Actividades familiares'],
    verifiedAt: '2024-12-15',
    sources: ['Cantur'],
  },
  {
    id: 'metro-bilbao-l3',
    name: 'Metro Bilbao · Línea 3',
    region: 'euskadi',
    category: 'transporte',
    description: 'Permite perros de cualquier tamaño con correa. PPP excluidos.',
    coordinates: { lat: 43.2569, lon: -2.9237 },
    policy: {
      leashRequired: true,
      muzzleRequired: true,
      notes: 'PPP no admitidos; líneas 1 y 2 limitadas a 8 kg en brazos/transportín.',
    },
    serviceDetails: ['Cobertura urbana', 'Normativa actualizada 2025'],
    verifiedAt: '2025-01-03',
    sources: ['Metro Bilbao'],
  },
  {
    id: 'playa-zarautz',
    name: 'Playa de Zarautz (horario pet friendly)',
    region: 'euskadi',
    category: 'playa',
    description: 'Permite acceso nocturno fóra de tempada oficial.',
    coordinates: { lat: 43.2848, lon: -2.0049 },
    policy: {
      leashRequired: true,
      seasonalAccess: '20:00 - 7:30 fora de tempada de baño',
    },
    serviceDetails: ['Paseo marítimo', 'Sinalización municipal', 'Servizos próximos'],
    verifiedAt: '2024-12-20',
    sources: ['Ayuntamiento de Zarautz'],
  },
  {
    id: 'transporte-puente-bizkaia',
    name: 'Puente Bizkaia',
    region: 'euskadi',
    category: 'transporte',
    description: 'Conectan Getxo e Portugalete con compartimentos pet friendly.',
    coordinates: { lat: 43.3234, lon: -3.0163 },
    policy: {
      leashRequired: true,
      notes: 'Ata 40 kg gratis en carros laterais; barcaza central para todos os tamaños.',
    },
    serviceDetails: ['Vista icónica', 'Cruce rápido entre marxes', 'Acceso directo a paseo marítimo'],
    verifiedAt: '2025-01-01',
    sources: ['Consorcio del Puente Colgante'],
  },
  {
    id: 'bardenas-experience',
    name: 'Ruta Bardenas con perro',
    region: 'navarra',
    category: 'experiencia',
    description: 'Ruta recomendada por pistas habilitadas en Bardenas Reales.',
    coordinates: { lat: 42.2014, lon: -1.5068 },
    policy: {
      leashRequired: true,
      notes: 'Control estricto para proteger fauna; se recomienda seguro RC.',
    },
    serviceDetails: ['Guías acreditados', 'Puntos de agua', 'Horarios recomendados (amanecer/atardecer)'],
    verifiedAt: '2025-01-02',
    sources: ['Turismo de Navarra'],
  },
  {
    id: 'bodega-maximo-abete',
    name: 'Bodega Máximo Abete',
    region: 'navarra',
    category: 'experiencia',
    description: 'Visitas enoturísticas que aceptan mascotas en exteriores.',
    coordinates: { lat: 42.5069, lon: -1.5758 },
    policy: {
      leashRequired: true,
      notes: 'Interior condicionado; reservar con antelación.',
    },
    serviceDetails: ['Degustación guiada', 'Sombras e puntos de auga', 'Vistas aos viñedos'],
    verifiedAt: '2024-12-12',
    sources: ['Bodega Máximo Abete'],
  },
  {
    id: 'anglet-surf-dog',
    name: 'Surf/Paddle dog Anglet',
    region: 'iparralde',
    category: 'experiencia',
    description: 'Escuela que permite practicar surf o paddle con tu perro fuera de temporada alta.',
    coordinates: { lat: 43.4933, lon: -1.5219 },
    policy: {
      leashRequired: false,
      seasonalAccess: '1 de octubre - 31 de mayo',
      notes: 'Durante temporada alta solo en horarios restringidos.',
    },
    serviceDetails: ['Monitor bilingüe', 'Equipos adaptados', 'Seguro incluido'],
    verifiedAt: '2024-12-10',
    sources: ['Oficina de turismo de Anglet'],
  },
  {
    id: 'camping-oyam',
    name: 'Camping OYAM',
    region: 'iparralde',
    category: 'alojamiento',
    description: 'Camping en Bidart que admite cans con suplemento (agás categorías 1 e 2).',
    coordinates: { lat: 43.4412, lon: -1.5856 },
    policy: {
      leashRequired: true,
      notes: 'Consultar suplemento e requisitos sanitarios ao reservar.',
    },
    serviceDetails: ['Parcelas con sombra', 'Piscina', 'Acceso a praias próximas'],
    verifiedAt: '2024-12-08',
    sources: ['Camping OYAM'],
  },
];
