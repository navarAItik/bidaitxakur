export const REGION_DATA = [
  {
    slug: 'norte',
    name: 'Norte',
    subdomain: 'www',
    description:
      'Hub general con acceso a todas las regiones, rutas destacadas y recursos legales del norte de España.',
    population: 6000000,
    dogOwners: 1900000,
    image: '/dogs-illustration.svg',
  },
  {
    slug: 'galicia',
    name: 'Galicia',
    subdomain: 'galicia',
    description:
      'Acantilados de la Costa da Morte, bosques mágicos y casas rurales con pradera vallada.',
    population: 2695000,
    dogOwners: 720000,
    image: 'https://images.unsplash.com/photo-1500534314209-a25ddb2bd429',
  },
  {
    slug: 'asturias',
    name: 'Asturias',
    subdomain: 'asturias',
    description:
      'Montañas verdes, ríos con agua todo el año y rutas pet friendly en Picos de Europa.',
    population: 1018000,
    dogOwners: 310000,
    image: 'https://images.unsplash.com/photo-1500534623283-312aade485b7',
  },
  {
    slug: 'cantabria',
    name: 'Cantabria',
    subdomain: 'cantabria',
    description:
      'Playas pet friendly, senderos costeros y naturaleza infinita.',
    population: 589000,
    dogOwners: 180000,
    image: 'https://images.unsplash.com/photo-1508921912186-1d1a45ebb3c1',
  },
  {
    slug: 'euskadi',
    name: 'Euskadi',
    subdomain: 'euskadi',
    description:
      'Rutas urbanas + verdes y la mejor gastronomía dog friendly del norte.',
    population: 2228000,
    dogOwners: 610000,
    image: 'https://images.unsplash.com/photo-1507146426996-ef05306b995a',
  },
  {
    slug: 'navarra',
    name: 'Navarra',
    subdomain: 'navarra',
    description:
      'Bosques milenarios, bardenas y la mejor red de veterinarios 24h.',
    population: 661000,
    dogOwners: 190000,
    image: 'https://images.unsplash.com/photo-1469474968028-56623f02e42e',
  },
  {
    slug: 'iparralde',
    name: 'Iparralde',
    subdomain: 'iparralde',
    description:
      'Costa vasca francesa, acantilados verdes y normativa europea.',
    population: 315000,
    dogOwners: 86000,
    image: 'https://images.unsplash.com/photo-1470770903676-69b98201ea1c',
  },
] as const;

export type RegionSlug = (typeof REGION_DATA)[number]['slug'];

export const REGIONS: RegionSlug[] = REGION_DATA.map((region) => region.slug);

export const CATEGORIES = [
  { slug: 'alojamiento', label: 'Alojamientos vallados', description: 'Casas rurales, hoteles, campings y apartamentos que admiten perros.' },
  { slug: 'transporte', label: 'Transporte pet friendly', description: 'Vuelos, trenes, autobuses, cercanías y alquiler de coches con políticas claras.' },
  { slug: 'veterinarios', label: 'Veterinarios 24h', description: 'Directorio de clínicas y hospitales con urgencias.' },
  { slug: 'tiendas', label: 'Tiendas y alimentación', description: 'Tiendas especializadas y boutiques dog friendly.' },
  { slug: 'ocio-naturaleza', label: 'Ocio y naturaleza', description: 'Rutas con agua, playas caninas y parques.' },
  { slug: 'hosteleria', label: 'Hostelería', description: 'Bares, restaurantes y cafés seguros para mascotas.' },
  { slug: 'servicios', label: 'Servicios y cuidadores', description: 'Guarderías, cuidadores, adiestradores y marketplace.' },
  { slug: 'comunidad', label: 'Comunidad y ayuda social', description: 'Foro, eventos, adopciones y perros desaparecidos.' },
] as const;

export type CategorySlug = (typeof CATEGORIES)[number]['slug'];

export const TRANSPORT_MODES = [
  { slug: 'vuelos', label: 'Vuelos con perro', description: 'Políticas de Iberia, Air Europa, Vueling y Air Nostrum.' },
  { slug: 'autobus', label: 'Autobús', description: 'Condiciones de ALSA, Avanza y compañías regionales.' },
  { slug: 'tren', label: 'Tren y media distancia', description: 'Normativa Renfe y OUIGO con mascotas de hasta 40 cm.' },
  { slug: 'cercanias', label: 'Cercanías/Metro', description: 'Reglamentos por provincia y horarios recomendados.' },
  { slug: 'coches', label: 'Coches de alquiler', description: 'Empresas que permiten mascotas y coberturas de limpieza.' },
] as const;

export const FEATURE_FLAGS = {
  enableFirebase: true,
  enableMapbox: false,
  enableMarketplace: true,
};

export const NAV_LINKS = [
  { label: 'Regiones', href: '#regiones' },
  { label: 'Categorías', href: '#categorias' },
  { label: 'Blog', href: '/blog' },
  { label: 'Alta negocios', href: '/alta-negocio' },
];

export const BUSINESS_FILTERS = {
  alojamiento: ['vallado-certificado', 'sin-suplmento', 'sin-limite-peso'],
  transporte: ['cabina', 'bodega', 'grandes', 'sin-limite'],
  veterinarios: ['urgencias-24h', 'especialidades', 'domicilio'],
  servicios: ['cuidadores', 'guarderias', 'adiestradores'],
};

export const TRUST_BADGES = [
  { label: 'Verificado 100%', description: 'Contactamos con cada negocio antes de publicarlo.' },
  { label: 'Seguro y legal', description: 'Normativa regional y Real Decreto 1021/2022.' },
  { label: '+50 filtros expertos', description: 'Casas valladas, suplementos, límites de peso y más.' },
  { label: 'Equipo local', description: 'Exploramos el norte cada mes con nuestras mascotas.' },
];

export const HERO_IMAGES = [
  'https://images.unsplash.com/photo-1507146426996-ef05306b995a',
  'https://images.unsplash.com/photo-1500534623283-312aade485b7',
  'https://images.unsplash.com/photo-1508672019048-805c876b67e2',
];
