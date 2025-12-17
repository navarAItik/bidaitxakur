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

export const FEATURE_FLAGS = {
  enableFirebase: true,
  enableMapbox: false,
  enableMarketplace: true,
};

export const NAV_LINKS = [
  { key: 'categories', href: '#categorias' },
  { key: 'map', href: '/mapa' },
  { key: 'blog', href: '/blog' },
  { key: 'addBusiness', href: '/alta-negocio' },
] as const;

export const BUSINESS_FILTERS = {
  alojamiento: ['vallado-certificado', 'sin-suplmento', 'sin-limite-peso'],
  transporte: ['cabina', 'bodega', 'grandes', 'sin-limite'],
  veterinarios: ['urgencias-24h', 'especialidades', 'domicilio'],
  servicios: ['cuidadores', 'guarderias', 'adiestradores'],
};

export const HERO_IMAGES = [
  'https://images.unsplash.com/photo-1507146426996-ef05306b995a',
  'https://images.unsplash.com/photo-1500534623283-312aade485b7',
  'https://images.unsplash.com/photo-1508672019048-805c876b67e2',
];

export const JOURNEY_STEPS = [
  {
    id: 'descubre',
    badge: 'Paso 1',
    title: 'Selecciona región y necesidades',
    description: 'Aplica filtros legales, vallado certificado o transporte desde el primer clic.',
    bullets: ['Mapas hiperlocales', 'Alertas de normativa en tiempo real', 'Listas guardadas por viaje'],
  },
  {
    id: 'verifica',
    badge: 'Paso 2',
    title: 'Compara negocios verificados',
    description: 'Cada ficha incluye evidencias fotográficas, extras pet friendly y reseñas reales.',
    bullets: ['Checklist de seguridad', 'Política pet friendly detallada', 'Integración con reseñas de la comunidad'],
  },
  {
    id: 'reserva',
    badge: 'Paso 3',
    title: 'Reserva o solicita acompañamiento',
    description: 'Contacta con anfitriones y servicios críticos con contexto legal y rutas sugeridas.',
    bullets: ['Conexión con marketplace', 'Soporte humano experto', 'Plan de viaje descargable'],
  },
] as const;

export const MARKETPLACE_METRICS = [
  { label: 'Negocios verificados', value: '340+', helper: '+18 añadidos en noviembre' },
  { label: 'Filtros de seguridad', value: '55', helper: 'Actualizados con normativa 2024' },
  { label: 'Expertos locales', value: '12', helper: 'Exploradores residentes en cada región' },
  { label: 'Solicitudes guiadas', value: '1.200', helper: 'Planes personalizados en beta privada' },
] as const;

export const TRANSPORT_NETWORK = [
  {
    mode: 'vuelos',
    coverage: '15 aerolíneas con políticas auditadas',
    highlights: ['Cabina y bodega detalladas', 'Docs de viaje en PDF'],
    status: 'Actualización mensual',
  },
  {
    mode: 'tren',
    coverage: 'Renfe, OUIGO y FEVE con límite actualizado',
    highlights: ['Simulador de tarifa', 'Alertas 24h antes'],
    status: 'Cobertura total norte',
  },
  {
    mode: 'autobus',
    coverage: '12 operadores regionales + ALSA/Avanza',
    highlights: ['Rutas con paradas dog friendly', 'Contactos locales'],
    status: 'Piloto abierto',
  },
  {
    mode: 'cercanias',
    coverage: 'Metro Bilbao, Euskotren y redes urbanas',
    highlights: ['Horarios recomendados', 'Mapa accesos'],
    status: 'Datos horarios vivos',
  },
  {
    mode: 'coches',
    coverage: '9 empresas de alquiler sin sobrecoste oculto',
    highlights: ['Kit limpieza verificado', 'Coberturas por peso'],
    status: 'Integración con seguros Q1',
  },
] as const;
