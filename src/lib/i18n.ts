import type { CategorySlug } from './constants';

export const LANGUAGES = [
  { code: 'gl', label: 'GL', name: 'Gallego' },
  { code: 'ast', label: 'AST', name: 'Asturiano' },
  { code: 'es', label: 'ES', name: 'Español' },
  { code: 'eu', label: 'EU', name: 'Euskera' },
  { code: 'fr', label: 'FR', name: 'Français' },
  { code: 'en', label: 'EN', name: 'English' },
] as const;

export type LanguageCode = (typeof LANGUAGES)[number]['code'];

type CategoryDictionary = Record<CategorySlug, { label: string; description: string }>;

type HomeTranslations = {
  hero: {
    badge: string;
    title: string;
    description: string;
    pills: string[];
    primaryCta: string;
    secondaryCta: string;
  };
  search: {
    placeholder: string;
    regionPlaceholder: string;
    categoryPlaceholder: string;
    allRegions: string;
    allCategories: string;
    submitLabel: string;
    categories: Record<CategorySlug, string>;
  };
  trustBadges: { label: string; description: string }[];
  stats: { label: string; value: number; suffix: string; color: string }[];
  categoriesSection: {
    badge: string;
    title: string;
    description: string;
    cards: CategoryDictionary;
    cardCta: string;
  };
  regionsSection: {
    badge: string;
    title: string;
    description: string;
    guideCta: string;
    ownersLabel: string;
  };
  journey: {
    badge: string;
    title: string;
    description: string;
    steps: { badge: string; title: string; description: string; bullets: string[] }[];
  };
  marketplace: {
    badge: string;
    title: string;
    description: string;
    metrics: { label: string; value: string; helper: string }[];
  };
  transport: {
    badge: string;
    title: string;
    description: string;
    lastUpdated: string;
    entries: { title: string; coverage: string; highlights: string[]; status: string }[];
  };
  dogsShowcase: {
    badge: string;
    title: string;
    description: string;
    tags: string[];
    primaryCta: string;
    secondaryCta: string;
    monetizationLabel: string;
    monetizationValue: string;
    monetizationDescription: string;
    roadmapLabel: string;
    roadmapDescription: string;
  };
  testimonials: {
    badge: string;
    items: { id: number; name: string; location: string; text: string }[];
    prev: string;
    next: string;
  };
  cta: {
    badge: string;
    title: string;
    description: string;
    primaryCta: string;
    secondaryCta: string;
  };
  insights: {
    badge: string;
    title: string;
    description: string;
    globalTitle: string;
    regionalTitle: string;
    indicatorLabel: string;
    valueLabel: string;
    categoryLabel: string;
    sourceLabel: string;
    noSource: string;
  };
};

type PagesTranslations = {
  blog: {
    badge: string;
    title: string;
    description: string;
    ctaLabel: string;
    notFound: string;
    posts: { slug: string; tag: string; title: string; summary: string; content: string }[];
  };
  region: {
    badgePrefix: string;
    heroTitlePrefix: string;
    features: string[];
    categoryCta: string;
    metricsTitle: string;
    beachesTitle: string;
    naturalAreasTitle: string;
    servicesTitle: string;
    experiencesTitle: string;
    legalTitle: string;
  };
  category: {
    badgeTemplate: string;
    titleTemplate: string;
    emptyState: string;
  };
  legislation: {
    badge: string;
    titlePrefix: string;
    description: string;
    bullets: string[];
  };
  community: {
    badge: string;
    title: string;
    forum: string;
    events: string;
    adoptions: string;
    missing: string;
  };
};

type Translation = {
  nav: {
    regions: string;
    categories: string;
    blog: string;
    addBusiness: string;
  };
  ui: {
    languageLabel: string;
  };
  home: HomeTranslations;
  pages: PagesTranslations;
};

type DeepPartial<T> = {
  [K in keyof T]?: T[K] extends Array<infer U>
    ? Array<DeepPartial<U>>
    : T[K] extends object
      ? DeepPartial<T[K]>
      : T[K];
};

const baseHome: HomeTranslations = {
  hero: {
    badge: 'GPS con aviso de seguridad',
    title: 'Viaja con tu perro por el norte con datos verificados, rutas y transporte claro',
    description:
      'Alojamientos con terreno vallado certificado, normativa legal por provincia, transporte completo y marketplace de servicios pet friendly.',
    pills: ['Casas valladas', 'Transporte 360º', 'Legal seguro'],
    primaryCta: 'Explorar regiones',
    secondaryCta: 'Dar de alta mi negocio',
  },
  search: {
    placeholder: 'Busca un lugar, servicio o palabra clave',
    regionPlaceholder: 'Todas las regiones',
    categoryPlaceholder: 'Todas las categorías',
    allRegions: 'Todas las regiones',
    allCategories: 'Todas las categorías',
    submitLabel: 'Buscar',
    categories: {
      alojamiento: 'Alojamientos vallados',
      transporte: 'Transporte pet friendly',
      veterinarios: 'Veterinarios 24h',
      tiendas: 'Tiendas y alimentación',
      'ocio-naturaleza': 'Ocio y naturaleza',
      hosteleria: 'Hostelería',
      servicios: 'Servicios y cuidadores',
      comunidad: 'Comunidad y ayuda social',
    },
  },
  trustBadges: [
    { label: 'Verificado 100%', description: 'Contactamos con cada negocio antes de publicarlo.' },
    { label: 'Seguro y legal', description: 'Normativa regional y Real Decreto 1021/2022.' },
    { label: '+50 filtros expertos', description: 'Casas valladas, suplementos, límites de peso y más.' },
    { label: 'Equipo local', description: 'Exploramos el norte cada mes con nuestras mascotas.' },
  ],
  stats: [
    { label: 'Negocios verificados', value: 218, suffix: '+', color: 'text-emerald-500' },
    { label: 'Filtros expertos', value: 52, suffix: '+', color: 'text-sky-400' },
    { label: 'Entrevistas legales', value: 140, suffix: '+', color: 'text-amber-400' },
    { label: 'Usuarios en lista espera', value: 2800, suffix: '+', color: 'text-fuchsia-400' },
  ],
  categoriesSection: {
    badge: 'Cobertura completa',
    title: '8 categorías replicadas en cada región',
    description: 'Año 1 centrado en alojamientos vallados, transporte y servicios críticos.',
    cards: {
      alojamiento: {
        label: 'Alojamientos vallados',
        description: 'Casas rurales, hoteles, campings y apartamentos que admiten perros.',
      },
      transporte: {
        label: 'Transporte pet friendly',
        description: 'Vuelos, trenes, autobuses, cercanías y alquiler de coches con políticas claras.',
      },
      veterinarios: {
        label: 'Veterinarios 24h',
        description: 'Directorio de clínicas y hospitales con urgencias.',
      },
      tiendas: {
        label: 'Tiendas y alimentación',
        description: 'Tiendas especializadas y boutiques dog friendly.',
      },
      'ocio-naturaleza': {
        label: 'Ocio y naturaleza',
        description: 'Rutas con agua, playas caninas y parques.',
      },
      hosteleria: {
        label: 'Hostelería',
        description: 'Bares, restaurantes y cafés seguros para mascotas.',
      },
      servicios: {
        label: 'Servicios y cuidadores',
        description: 'Guarderías, cuidadores, adiestradores y marketplace.',
      },
      comunidad: {
        label: 'Comunidad y ayuda social',
        description: 'Foro, eventos, adopciones y perros desaparecidos.',
      },
    },
    cardCta: 'Ver listado →',
  },
  regionsSection: {
    badge: '7 regiones norte',
    title: 'Especialización geográfica',
    description: 'Cada subdominio tendrá datos hiperlocales, filtros legales y marketplace propio.',
    guideCta: 'Ver guía completa →',
    ownersLabel: 'dueños de perros',
  },
  journey: {
    badge: 'Metodología',
    title: 'Viajes seguros en tres pasos',
    description: 'Guiamos a cada familia perruna desde la inspiración hasta la reserva con evidencia verificada.',
    steps: [
      {
        badge: 'Paso 1',
        title: 'Selecciona región y necesidades',
        description: 'Aplica filtros legales o vallados certificados desde el primer clic.',
        bullets: ['Mapas hiperlocales', 'Alertas de normativa en tiempo real', 'Listas guardadas por viaje'],
      },
      {
        badge: 'Paso 2',
        title: 'Compara negocios verificados',
        description: 'Cada ficha incluye evidencias fotográficas, extras pet friendly y reseñas reales.',
        bullets: ['Checklist de seguridad', 'Política pet friendly detallada', 'Integración con reseñas'],
      },
      {
        badge: 'Paso 3',
        title: 'Reserva o solicita acompañamiento',
        description: 'Contacta con anfitriones y servicios críticos con contexto legal y rutas sugeridas.',
        bullets: ['Marketplace conectado', 'Soporte humano experto', 'Plan de viaje descargable'],
      },
    ],
  },
  marketplace: {
    badge: 'Marketplace',
    title: 'Base viva con datos verificables',
    description: 'Cada métrica se audita al cambiar la normativa o la ficha del negocio.',
    metrics: [
      { label: 'Negocios verificados', value: '340+', helper: '+18 añadidos en noviembre' },
      { label: 'Filtros de seguridad', value: '55', helper: 'Actualizados con normativa 2024' },
      { label: 'Expertos locales', value: '12', helper: 'Exploradores residentes en cada región' },
      { label: 'Solicitudes guiadas', value: '1.200', helper: 'Planes personalizados en beta privada' },
    ],
  },
  transport: {
    badge: 'Transporte 360º',
    title: 'Matrices de cumplimiento actualizadas',
    description: 'Validamos documentación, límites de peso y protocolos antes de cada temporada.',
    lastUpdated: 'Actualizado 2 dic 2024',
    entries: [
      {
        title: 'Vuelos con perro',
        coverage: '15 aerolíneas con políticas auditadas',
        highlights: ['Cabina y bodega detalladas', 'Documentación descargable', 'Alertas 24h antes'],
        status: 'Actualización mensual',
      },
      {
        title: 'Trenes y media distancia',
        coverage: 'Renfe, OUIGO y FEVE con límite actualizado',
        highlights: ['Simulador de tarifa', 'Guía paso a paso', 'Casos reales'],
        status: 'Cobertura total norte',
      },
      {
        title: 'Autobuses y rutas regionales',
        coverage: '12 operadores regionales + ALSA/Avanza',
        highlights: ['Paradas dog friendly', 'Contactos locales', 'Políticas por peso'],
        status: 'Piloto abierto',
      },
      {
        title: 'Cercanías y metro',
        coverage: 'Metro Bilbao, Euskotren y redes urbanas',
        highlights: ['Horarios recomendados', 'Mapa de accesos', 'Consejos de comunidad'],
        status: 'Datos horarios vivos',
      },
      {
        title: 'Alquiler de coches',
        coverage: '9 empresas sin sobrecoste oculto',
        highlights: ['Kit limpieza verificado', 'Coberturas por peso', 'Checklist de entrega'],
        status: 'Integración con seguros Q1',
      },
    ],
  },
  dogsShowcase: {
    badge: 'Community first',
    title: '8 categorías para cubrir todo el viaje',
    description:
      'Alojamientos vallados, transporte claro (vuelos, tren, bus, coche), ocio con agua y servicios esenciales.',
    tags: ['Casas con finca', 'Transporte completo', 'Veterinarios 24h', 'Playas caninas'],
    primaryCta: 'Añadir mi negocio',
    secondaryCta: 'Ver categorías',
    monetizationLabel: 'Monetización',
    monetizationValue: '€524k Año 1',
    monetizationDescription: 'Suscripciones + afiliación + marketplace.',
    roadmapLabel: 'Roadmap',
    roadmapDescription: 'MVP Euskadi → 7 regiones en 18 meses.',
  },
  testimonials: {
    badge: 'Testimonios reales',
    items: [
      {
        id: 1,
        name: 'Ane & Kovu',
        location: 'Bilbao',
        text: 'Encontramos una casa rural con 4.000m² vallados y rutas con agua a 10 minutos. El filtro “vallado certificado” nos ahorró horas.',
      },
      {
        id: 2,
        name: 'Laura & Max',
        location: 'A Coruña',
        text: 'Por fin un sitio que explica claramente cómo viajar en tren y avión con perro. La guía legal nos dio tranquilidad.',
      },
      {
        id: 3,
        name: 'Diego & Nuna',
        location: 'Donostia',
        text: 'Usamos el marketplace de cuidadores para una boda en Getxo. Todo verificado y con reviews reales.',
      },
    ],
    prev: 'Anterior',
    next: 'Siguiente',
  },
  cta: {
    badge: 'Beta privada Q1',
    title: '¿Tienes un negocio pet friendly en el norte? Obtén ficha verificada y funnel garantizado.',
    description:
      'Priorizamos alojamientos vallados, rutas guiadas, transporte y servicios críticos. Te ayudamos con la parte legal y el contenido visual.',
    primaryCta: 'Solicitar verificación',
    secondaryCta: 'Ver casos de uso →',
  },
  insights: {
    badge: 'Datos accionables',
    title: 'Base viva del sector pet friendly en el norte',
    description:
      'Combinamos investigación pública, normativa y validación en campo para anticipar oportunidades por región.',
    globalTitle: 'Indicadores generales',
    regionalTitle: 'Insights por región',
    indicatorLabel: 'Indicador',
    valueLabel: 'Valor',
    categoryLabel: 'Categoría',
    sourceLabel: 'Fuente',
    noSource: 'Pendiente',
  },
};

const basePages: PagesTranslations = {
  blog: {
    badge: 'Blog',
    title: 'Contenido que posiciona y convierte',
    description: 'SEO local + guías prácticas para dueños de perros que viajan por el norte.',
    ctaLabel: 'Leer artículo →',
    notFound: 'Contenido no disponible.',
    posts: [
      {
        slug: 'viajar-en-tren-con-perro',
        tag: 'SEO / Comunidad',
        title: 'Guía completa para viajar en tren con perro por el norte',
        summary: 'Normativa Renfe, OUIGO y Euskotren con checklists descargables.',
        content:
          'Explicamos la normativa de Renfe, OUIGO, Euskotren y FEVE con tablas por peso, tamaños y horarios recomendados.',
      },
      {
        slug: 'mejores-playas-caninas',
        tag: 'SEO / Comunidad',
        title: 'Las mejores playas caninas del norte',
        summary: 'Mapa interactivo y calendario por temporada, con servicios cercanos.',
        content:
          'Listado provincia a provincia con servicios cercanos y avisos de socorrismo que aceptan perros.',
      },
    ],
  },
  region: {
    badgePrefix: 'Región',
    heroTitlePrefix: 'Guía pet friendly de',
    features: ['Casas valladas', 'Transporte 360º', 'Veterinarios 24h', 'Marketplace de cuidadores'],
    categoryCta: 'Ver listado →',
    metricsTitle: 'Datos accionables',
    beachesTitle: 'Playas y litoral',
    naturalAreasTitle: 'Áreas naturales y restricciones',
    servicesTitle: 'Servicios destacados',
    experiencesTitle: 'Planes recomendados',
    legalTitle: 'Normativa esencial',
  },
  category: {
    badgeTemplate: '{region} / {category}',
    titleTemplate: '{category} en {region}',
    emptyState: 'Estamos validando nuevos negocios en esta categoría.',
  },
  legislation: {
    badge: 'Normativa',
    titlePrefix: 'Legislación pet friendly en',
    description: 'Real Decreto 1021/2022 + ordenanzas municipales aplicables.',
    bullets: ['Identificación y vacunas al día', 'Seguro de RC recomendable', 'Normativa específica por municipio'],
  },
  community: {
    badge: 'Comunidad',
    title: 'Huellas del Norte',
    forum: 'Funcionalidad en desarrollo.',
    events: 'Calendario próximamente.',
    adoptions: 'Listado de asociaciones con filtros transparentes.',
    missing: 'Publicaremos alertas verificadas por asociación.',
  },
};

export const BASE_BLOG_POSTS = basePages.blog.posts;

function mergeObject<T>(base: T, overrides?: DeepPartial<T>): T {
  const clone = structuredClone(base);
  if (!overrides) return clone;

  const merge = (target: Record<string, any>, source: Record<string, any>) => {
    Object.entries(source).forEach(([key, value]) => {
      if (value === undefined) return;
      if (Array.isArray(value)) {
        target[key] = value;
      } else if (value !== null && typeof value === 'object') {
        target[key] = target[key] ?? {};
        merge(target[key], value as Record<string, any>);
      } else {
        target[key] = value;
      }
    });
  };

  merge(clone as Record<string, any>, overrides as Record<string, any>);
  return clone;
}

const mergeHome = (overrides?: DeepPartial<HomeTranslations>) => mergeObject(baseHome, overrides);
const mergePages = (overrides?: DeepPartial<PagesTranslations>) => mergeObject(basePages, overrides);

export const TRANSLATIONS: Record<LanguageCode, Translation> = {
  gl: {
    nav: {
      regions: 'Rexións',
      categories: 'Categorías',
      blog: 'Blog',
      addBusiness: 'Dar de alta o meu negocio',
    },
    ui: {
      languageLabel: 'Lingua',
    },
    home: mergeHome({
      hero: {
        badge: 'GPS con aviso de seguridade',
        title: 'Viaxa co teu can polo norte con datos verificados e transporte claro',
        description:
          'Filtros legais por provincia, aloxamentos con terreo valado e marketplace local para servizos críticos.',
        pills: ['Casas valadas', 'Transporte 360º', 'Legal seguro'],
        primaryCta: 'Explorar rexións',
        secondaryCta: 'Dar de alta o meu negocio',
      },
      search: {
        placeholder: 'Busca un lugar ou servizo',
        regionPlaceholder: 'Todas as rexións',
        categoryPlaceholder: 'Todas as categorías',
        allRegions: 'Todas as rexións',
        allCategories: 'Todas as categorías',
        submitLabel: 'Buscar',
        categories: {
          alojamiento: 'Aloxamentos valados',
          transporte: 'Transporte amigable',
          veterinarios: 'Veterinarios 24h',
          tiendas: 'Tendas e alimentación',
          'ocio-naturaleza': 'Lecer e natureza',
          hosteleria: 'Hostalaría',
          servicios: 'Servizos e coidadores',
          comunidad: 'Comunidade e axuda social',
        },
      },
      categoriesSection: {
        badge: 'Cobertura completa',
        title: '8 categorías replicadas en cada rexión',
        description: 'Prioridade en aloxamentos valados, transporte e servizos críticos.',
        cards: {
          alojamiento: {
            label: 'Aloxamentos valados',
            description: 'Casas rurais e hoteis cos requisitos pet friendly claros.',
          },
          transporte: {
            label: 'Transporte pet friendly',
            description: 'Voo, tren, bus e coche coas políticas explicadas en galego.',
          },
          veterinarios: {
            label: 'Veterinarios 24h',
            description: 'Clínicas e hospitais con urxencias en todo o norte.',
          },
          tiendas: {
            label: 'Tendas e alimentación',
            description: 'Produtos locais e alimentación específica.',
          },
          'ocio-naturaleza': {
            label: 'Lecer e natureza',
            description: 'Rutas con auga e praias caninas homologadas.',
          },
          hosteleria: {
            label: 'Hostalaría',
            description: 'Bares e restaurantes dog friendly certificados.',
          },
          servicios: {
            label: 'Servizos e coidadores',
            description: 'Marketplace de coidados e profesionais.',
          },
          comunidad: {
            label: 'Comunidade e axuda',
            description: 'Foro, eventos solidarios e adopcións.',
          },
        },
        cardCta: 'Ver listado →',
      },
      regionsSection: {
        badge: '7 rexións norte',
        title: 'Especialización xeográfica',
        description: 'Cada subdominio ten datos hiperlocais e marketplace propio.',
        guideCta: 'Ver guía completa →',
        ownersLabel: 'propietarios de cans',
      },
      journey: {
        badge: 'Metodoloxía',
        title: 'Viaxes seguros en tres pasos',
        description: 'Acompañamos dende a inspiración ata a reserva cunha guía clara.',
        steps: [
          {
            badge: 'Paso 1',
            title: 'Elixe rexión e filtros',
            description: 'Activa filtros legais e de valado antes de comezar.',
            bullets: ['Mapas hiperlocais', 'Alertas legais', 'Listas por viaxe'],
          },
          {
            badge: 'Paso 2',
            title: 'Compara negocios verificados',
            description: 'Mostramos evidencias fotográficas e reseñas reais.',
            bullets: ['Checklist de seguridade', 'Políticas detalladas', 'Opinións da comunidade'],
          },
          {
            badge: 'Paso 3',
            title: 'Reserva con contexto',
            description: 'Contacto directo e soporte humano en galego.',
            bullets: ['Marketplace conectado', 'Soporte experto', 'Plan descargable'],
          },
        ],
      },
      marketplace: {
        badge: 'Marketplace',
        title: 'Datos auditados continuamente',
        description: 'Actualizamos métricas cando cambia a normativa ou a ficha.',
        metrics: [
          { label: 'Negocios verificados', value: '340+', helper: '+18 engadidos en novembro' },
          { label: 'Filtros de seguridade', value: '55', helper: 'Normativa 2024' },
          { label: 'Exploradores locais', value: '12', helper: 'Equipo residente' },
          { label: 'Solicitudes guiadas', value: '1.200', helper: 'Planes personalizados' },
        ],
      },
      transport: {
        badge: 'Transporte 360º',
        title: 'Matriz actualizada por tempada',
        description: 'Documentación, límites de peso e protocolos auditados.',
        lastUpdated: 'Actualizado 2 dec 2024',
      },
      dogsShowcase: {
        badge: 'Community first',
        title: '8 categorías para todo o viaxe',
        description: 'Datos validados con negocios e normativa galega.',
        tags: ['Casas con finca', 'Transporte completo', 'Veterinarios 24h', 'Playas caninas'],
        primaryCta: 'Engadir o meu negocio',
        secondaryCta: 'Ver categorías',
        monetizationLabel: 'Monetización',
        monetizationValue: '€524k Ano 1',
        monetizationDescription: 'Subscripcións + marketplace.',
        roadmapLabel: 'Roadmap',
        roadmapDescription: 'Euskadi → 7 rexións en 18 meses.',
      },
      testimonials: {
        badge: 'Testemuños reais',
        prev: 'Anterior',
        next: 'Seguinte',
      },
      cta: {
        badge: 'Beta privada Q1',
        title: 'Tes un negocio pet friendly no norte?',
        description: 'Axudámosche coa ficha verificada e os requisitos legais.',
        primaryCta: 'Solicitar verificación',
        secondaryCta: 'Ver casos de uso →',
      },
      insights: {
        badge: 'Datos accionables',
        title: 'Base viva do sector pet friendly no norte',
        description:
          'Investigación pública, normativa e traballo en campo para adiantar oportunidades por rexión.',
        globalTitle: 'Indicadores xerais',
        regionalTitle: 'Insights por rexión',
        indicatorLabel: 'Indicador',
        valueLabel: 'Valor',
        categoryLabel: 'Categoría',
        sourceLabel: 'Fonte',
        noSource: 'Pendente',
      },
    }),
    pages: mergePages({
      blog: {
        title: 'Contido que posiciona e converte',
        description: 'SEO local e guías prácticas para familias con cans no norte.',
        ctaLabel: 'Ler artigo →',
        notFound: 'Contido non dispoñible.',
        posts: [
          {
            slug: 'viajar-en-tren-con-perro',
            tag: 'SEO / Comunidade',
            title: 'Guía para viaxar en tren con can polo norte',
            summary: 'Normativa Renfe, OUIGO e Euskotren con checklist descargable.',
            content:
              'Explicamos a normativa de Renfe, OUIGO, Euskotren e FEVE con táboas por peso, tamaños e horarios recomendados.',
          },
          {
            slug: 'mejores-playas-caninas',
            tag: 'SEO / Comunidade',
            title: 'As mellores praias caninas de Galicia, Asturias e Cantabria',
            summary: 'Mapa interactivo e calendario por tempada con servizos próximos.',
            content:
              'Listado provincia a provincia con servizos próximos e avisos de socorrismo que aceptan cans.',
          },
        ],
      },
      region: {
        badgePrefix: 'Rexión',
        heroTitlePrefix: 'Guía pet friendly de',
        features: ['Casas valadas', 'Transporte 360º', 'Veterinarios 24h', 'Marketplace de coidados'],
        categoryCta: 'Ver listado →',
        metricsTitle: 'Datos accionables',
        beachesTitle: 'Praias e litoral',
        naturalAreasTitle: 'Áreas naturais e restricións',
        servicesTitle: 'Servizos destacados',
        experiencesTitle: 'Plans recomendados',
        legalTitle: 'Normativa esencial',
      },
      category: {
        badgeTemplate: '{region} / {category}',
        titleTemplate: '{category} en {region}',
        emptyState: 'Estamos a validar novos negocios nesta categoría.',
      },
      legislation: {
        badge: 'Normativa',
        titlePrefix: 'Leis pet friendly en',
        description: 'Real Decreto 1021/2022 + ordenanzas municipais aplicables.',
        bullets: [
          'Transporte público: horarios recomendados e tamaños.',
          'Hostalaría: protocolo de acceso e carteis oficiais.',
          'Praias: calendario por tempada + recursos oficiais.',
        ],
      },
      community: {
        badge: 'Comunidade',
        title: 'Huellas del Norte',
        forum: 'Funcionalidade en desenvolvemento.',
        events: 'Calendario moi pronto.',
        adoptions: 'Listado de asociacións con filtros transparentes.',
        missing: 'Publicaremos alertas verificadas por asociación.',
      },
    }),
  },
  ast: {
    nav: {
      regions: 'Rexones',
      categories: 'Categoríes',
      blog: 'Blog',
      addBusiness: "Dar d'alta'l mio negociu",
    },
    ui: {
      languageLabel: 'Llingua',
    },
    home: mergeHome({
      hero: {
        badge: 'GPS con avisu de seguridá',
        title: 'Viaxa col to perru pel norte con datos verificaos',
        description:
          'Filtros legales, terrenes zarrados y marketplace de servicios críticos nes rexones del norte.',
        pills: ['Cases zarrades', 'Transporte 360º', 'Legal segur'],
        primaryCta: 'Esplorar rexones',
        secondaryCta: "Dar d'alta'l mio negociu",
      },
      search: {
        placeholder: 'Busca un llugar o serviciu',
        regionPlaceholder: 'Toles rexones',
        categoryPlaceholder: 'Toles categoríes',
        allRegions: 'Toles rexones',
        allCategories: 'Toles categoríes',
        submitLabel: 'Buscar',
        categories: {
          alojamiento: 'Alloxamientos zarrados',
          transporte: 'Transporte amigable',
          veterinarios: 'Veterinarios 24h',
          tiendas: 'Tendes y alimentación',
          'ocio-naturaleza': 'Ociu y naturaleza',
          hosteleria: 'Hostelería',
          servicios: 'Servicios y cuidadores',
          comunidad: 'Comunidá y ayuda social',
        },
      },
      testimonials: {
        badge: 'Testimonios reales',
        prev: 'Anterior',
        next: 'Siguiente',
      },
      insights: {
        badge: 'Datos accionables',
        title: 'Base viva del sector pet friendly nel norte',
        description:
          'Mixamos investigación pública, normativa y verificación en campu pa detetar oportunidaes per rexón.',
        globalTitle: 'Indicadores xenerales',
        regionalTitle: 'Insights por rexón',
        indicatorLabel: 'Indicador',
        valueLabel: 'Valor',
        categoryLabel: 'Categoría',
        sourceLabel: 'Fonte',
        noSource: 'Pendente',
      },
    }),
    pages: mergePages({
      blog: {
        title: 'Conteníu que posiciona y convierte',
        description: 'SEO llocal y guíes práutiques pa families con perros pel norte.',
        ctaLabel: 'Lleer artículu →',
        notFound: 'Conteníu non disponible.',
        posts: [
          {
            slug: 'viajar-en-tren-con-perro',
            tag: 'SEO / Comunidá',
            title: 'Guía pa viaxar en tren col to perru pel norte',
            summary: 'Normativa Renfe, OUIGO y Euskotren con checklist descargable.',
            content:
              'Esplicamos la normativa de Renfe, OUIGO, Euskotren y FEVE con tables por pesu, tamañu y horarios.',
          },
          {
            slug: 'mejores-playas-caninas',
            tag: 'SEO / Comunidá',
            title: 'Les meyores sableres canines del norte',
            summary: 'Mapa interactivo y calendariu por temporada con servicios cercanos.',
            content:
              'Llistáu provincia a provincia con servicios cercanos y avisos de socorrismu que acepten perros.',
          },
        ],
      },
      region: {
        badgePrefix: 'Rexón',
        heroTitlePrefix: 'Guía pet friendly de',
        features: ['Cases zarrades', 'Transporte 360º', 'Veterinarios 24h', 'Marketplace de cuidadores'],
        categoryCta: 'Ver llistáu →',
        metricsTitle: 'Datos accionables',
        beachesTitle: 'Sableres y litoral',
        naturalAreasTitle: 'Árees naturales y restricciones',
        servicesTitle: 'Servicios destacaos',
        experiencesTitle: 'Planes recomendaos',
        legalTitle: 'Normativa esencial',
      },
      category: {
        badgeTemplate: '{region} / {category}',
        titleTemplate: '{category} en {region}',
        emptyState: 'Tamos validando negocios nuevos nesta categoría.',
      },
      legislation: {
        badge: 'Normativa',
        titlePrefix: 'Lleis pet friendly en',
        description: 'Real Decreto 1021/2022 + ordenances municipales aplicables.',
        bullets: [
          'Transporte públicu: horarios recomendados y tamaños.',
          'Hostelería: protocolu d\'accesu y cartelería oficial.',
          'Sableres: calendariu por temporada y recursos oficiales.',
        ],
      },
      community: {
        badge: 'Comunidá',
        title: 'Huellas del Norte',
        forum: 'Funcionalidá en desarrollu.',
        events: 'Calendariu mui ceo.',
        adoptions: 'Llistáu d\'asociaciones con filtros claros.',
        missing: 'Publicaremos alertes verificaes por asociación.',
      },
    }),
  },
  es: {
    nav: {
      regions: 'Regiones',
      categories: 'Categorías',
      blog: 'Blog',
      addBusiness: 'Dar de alta mi negocio',
    },
    ui: {
      languageLabel: 'Idioma',
    },
    home: baseHome,
    pages: mergePages(),
  },
  eu: {
    nav: {
      regions: 'Eskualdeak',
      categories: 'Kategoriak',
      blog: 'Bloga',
      addBusiness: 'Nire negozioa gehitu',
    },
    ui: {
      languageLabel: 'Hizkuntza',
    },
    home: mergeHome({
      hero: {
        badge: 'Segurtasun abisuarekin GPSa',
        title: 'Bidaiatu zure txakurrarekin iparraldean datu egiaztatuekin',
        description:
          'Lurraldeko araudia, hesitutako ostatuak eta tokiko marketplace bakarrean.',
        pills: ['Hesitutako etxeak', 'Garraio 360º', 'Lege babesa'],
        primaryCta: 'Eskualdeak arakatu',
        secondaryCta: 'Nire negozioa gehitu',
      },
      search: {
        placeholder: 'Bilatu leku edo zerbitzu bat',
        regionPlaceholder: 'Eskualde guztiak',
        categoryPlaceholder: 'Kategoria guztiak',
        allRegions: 'Eskualde guztiak',
        allCategories: 'Kategoria guztiak',
        submitLabel: 'Bilatu',
        categories: {
          alojamiento: 'Hesitutako ostatuak',
          transporte: 'Pet friendly garraioa',
          veterinarios: '24 orduko albaitariak',
          tiendas: 'Dendak eta elikadura',
          'ocio-naturaleza': 'Aisia eta natura',
          hosteleria: 'Ostalaria',
          servicios: 'Zerbitzu eta zaintzaileak',
          comunidad: 'Komunitatea eta laguntza',
        },
      },
      testimonials: {
        badge: 'Benetako testigantzak',
        prev: 'Aurrekoa',
        next: 'Hurrengoa',
      },
      cta: {
        badge: 'Beta pribatua Q1',
        title: 'Iparraldeko pet friendly negozioa duzu?',
        description: 'Egiaztatutako fitxa eta laguntza legala eskaintzen dizkizugu.',
        primaryCta: 'Balidazioa eskatu',
        secondaryCta: 'Erabilera kasuak ikusi →',
      },
      insights: {
        badge: 'Datu eraginkorrak',
        title: 'Iparraldeko pet friendly ekosistemaren datu-base bizia',
        description:
          'Iturri publikoak, araudia eta lurraldeko lanak uztartzen ditugu eskualdeko aukerak aurreikusteko.',
        globalTitle: 'Adierazle orokorrak',
        regionalTitle: 'Eskualdeko insight-ak',
        indicatorLabel: 'Adierazlea',
        valueLabel: 'Balioa',
        categoryLabel: 'Kategoria',
        sourceLabel: 'Iturria',
        noSource: 'Laster',
      },
    }),
    pages: mergePages({
      blog: {
        badge: 'Bloga',
        title: 'Posizionatzeko eta bihurtzeko edukia',
        description: 'Tokiko SEOa eta familia txakurkideentzako gida praktikoak iparraldean.',
        ctaLabel: 'Artikulua irakurri →',
        notFound: 'Eduki erabilgarri ez.',
        posts: [
          {
            slug: 'viajar-en-tren-con-perro',
            tag: 'SEO / Komunitatea',
            title: 'Trenez bidaiatzeko gida zure txakurrarekin iparraldean',
            summary: 'Renfe, OUIGO eta Euskotren araudia checklistekin.',
            content:
              'Renfe, OUIGO, Euskotren eta FEVE araudia azaltzen dugu, pisu eta neurri taulak eta ordutegi gomendatuak gehituta.',
          },
          {
            slug: 'mejores-playas-caninas',
            tag: 'SEO / Komunitatea',
            title: 'Iparraldeko hondartza dog friendly onenak',
            summary: 'Mapa interaktiboa eta denboraldiko egutegia, zerbitzu gertukoekin.',
            content:
              'Probintziaz probintzia egindako zerrenda, zerbitzu hurbilekin eta txakurrak onartzen dituzten salbamendu-zerbitzuekin.',
          },
        ],
      },
      region: {
        badgePrefix: 'Eskualdea',
        heroTitlePrefix: 'Pet friendly gida -',
        features: ['Hesitutako etxeak', 'Garraio 360º', '24 orduko albaitariak', 'Marketplace konektatua'],
        categoryCta: 'Zerrenda ikusi →',
        metricsTitle: 'Datu nagusiak',
        beachesTitle: 'Hondartzak eta kostaldea',
        naturalAreasTitle: 'Eremu naturalak eta murrizketak',
        servicesTitle: 'Zerbitzu nabarmenduak',
        experiencesTitle: 'Gomendatutako planak',
        legalTitle: 'Araudi nagusia',
      },
      category: {
        badgeTemplate: '{region} · {category}',
        titleTemplate: '{region}ko {category}',
        emptyState: 'Kategoria honetan negozio berriak balioztatzen ari gara.',
      },
      legislation: {
        badge: 'Araudia',
        titlePrefix: 'Lege pet friendly',
        description: '1021/2022 Errege Dekretua + udal ordenantza aplikagarriak.',
        bullets: [
          'Garraio publikoa: gomendatutako ordutegiak eta neurriak.',
          'Ostalaria: sarbide protokoloa eta kartel ofizialak.',
          'Hondartzak: denboraldiko egutegia eta baliabideak.',
        ],
      },
      community: {
        badge: 'Komunitatea',
        title: 'Huellas del Norte',
        forum: 'Garapen fasean dagoen funtzionalitatea.',
        events: 'Egutegia laster.',
        adoptions: 'Elkarte eta babesleen zerrenda, iragazki gardenekin.',
        missing: 'Elkarteek egiaztatutako alertak argitaratuko ditugu.',
      },
    }),
  },
  fr: {
    nav: {
      regions: 'Régions',
      categories: 'Catégories',
      blog: 'Blog',
      addBusiness: 'Référencer mon commerce',
    },
    ui: {
      languageLabel: 'Langue',
    },
    home: mergeHome({
      hero: {
        badge: 'GPS et alertes sécurité',
        title: 'Voyagez avec votre chien dans le Nord avec des données vérifiées',
        description:
          'Filtres légaux par province, hébergements clôturés et marketplace local pour chaque service critique.',
        pills: ['Maisons clôturées', 'Transport 360º', 'Sécurité légale'],
        primaryCta: 'Explorer les régions',
        secondaryCta: 'Inscrire mon commerce',
      },
      search: {
        placeholder: 'Rechercher un lieu ou un service',
        regionPlaceholder: 'Toutes les régions',
        categoryPlaceholder: 'Toutes les catégories',
        allRegions: 'Toutes les régions',
        allCategories: 'Toutes les catégories',
        submitLabel: 'Rechercher',
        categories: {
          alojamiento: 'Hébergements clôturés',
          transporte: 'Transport pet friendly',
          veterinarios: 'Vétérinaires 24h',
          tiendas: 'Boutiques & alimentation',
          'ocio-naturaleza': 'Loisirs & nature',
          hosteleria: 'Restauration',
          servicios: 'Services & pet-sitters',
          comunidad: 'Communauté & aide',
        },
      },
      marketplace: {
        badge: 'Marketplace',
        title: 'Base vivante et vérifiée',
        description: 'Chaque métrique est auditée dès que la réglementation change.',
      },
      testimonials: {
        badge: 'Témoignages réels',
        prev: 'Précédent',
        next: 'Suivant',
      },
      cta: {
        badge: 'Beta privée Q1',
        title: 'Commerce pet friendly dans le Nord ?',
        description: 'Nous validons votre fiche et vous aidons sur la partie légale et contenu.',
        primaryCta: 'Demander la vérification',
        secondaryCta: 'Voir des cas d\'usage →',
      },
      insights: {
        badge: 'Données actionnables',
        title: 'Base vivante du secteur pet friendly dans le Nord',
        description:
          'Croisons recherches publiques, réglementation et terrain pour anticiper les opportunités par région.',
        globalTitle: 'Indicateurs généraux',
        regionalTitle: 'Insights par région',
        indicatorLabel: 'Indicateur',
        valueLabel: 'Valeur',
        categoryLabel: 'Catégorie',
        sourceLabel: 'Source',
        noSource: 'À confirmer',
      },
    }),
    pages: mergePages({
      blog: {
        badge: 'Blog',
        title: 'Contenus qui positionnent et convertissent',
        description: 'SEO local et guides pratiques pour voyager avec votre chien dans le nord.',
        ctaLabel: 'Lire l\'article →',
        notFound: 'Contenu non disponible.',
        posts: [
          {
            slug: 'viajar-en-tren-con-perro',
            tag: 'SEO / Communauté',
            title: 'Guide complet pour voyager en train avec son chien',
            summary: 'Réglementation Renfe, OUIGO et Euskotren avec checklists téléchargeables.',
            content:
              'Nous détaillons les règles de Renfe, OUIGO, Euskotren et FEVE avec tableaux de poids/taille et horaires recommandés.',
          },
          {
            slug: 'mejores-playas-caninas',
            tag: 'SEO / Communauté',
            title: 'Les meilleures plages dog friendly du nord',
            summary: 'Carte interactive, calendrier saisonnier et services à proximité.',
            content:
              'Liste province par province avec services proches et informations sur les maîtres nageurs acceptant les chiens.',
          },
        ],
      },
      region: {
        badgePrefix: 'Région',
        heroTitlePrefix: 'Guide pet friendly de',
        features: ['Hébergements clôturés', 'Transport 360º', 'Vétérinaires 24h', 'Marketplace local'],
        categoryCta: 'Voir la liste →',
        metricsTitle: 'Données clés',
        beachesTitle: 'Plages et littoral',
        naturalAreasTitle: 'Espaces naturels et restrictions',
        servicesTitle: 'Services phares',
        experiencesTitle: 'Expériences recommandées',
        legalTitle: 'Réglementation essentielle',
      },
      category: {
        badgeTemplate: '{region} · {category}',
        titleTemplate: '{category} en {region}',
        emptyState: 'Nous vérifions de nouveaux établissements pour cette catégorie.',
      },
      legislation: {
        badge: 'Réglementation',
        titlePrefix: 'Lois pet friendly à',
        description: 'Décret royal 1021/2022 et arrêtés municipaux applicables.',
        bullets: [
          'Transport public : horaires conseillés et limites de taille.',
          'Restauration : protocole d\'accès et signalétique officielle.',
          'Plages : calendrier saisonnier et ressources officielles.',
        ],
      },
      community: {
        badge: 'Communauté',
        title: 'Huellas del Norte',
        forum: 'Fonctionnalité en cours de développement.',
        events: 'Calendrier disponible bientôt.',
        adoptions: 'Associations avec filtres transparents.',
        missing: 'Alertes vérifiées publiées en coordination avec les associations.',
      },
    }),
  },
  en: {
    nav: {
      regions: 'Regions',
      categories: 'Categories',
      blog: 'Blog',
      addBusiness: 'List my business',
    },
    ui: {
      languageLabel: 'Language',
    },
    home: mergeHome({
      hero: {
        badge: 'Safety GPS alerts',
        title: 'Travel across Northern Spain with verified data for dog families',
        description:
          'Legal filters per province, fenced stays, transport breakdowns and a curated marketplace in one place.',
        pills: ['Fenced stays', 'Transport 360º', 'Legal peace of mind'],
        primaryCta: 'Explore regions',
        secondaryCta: 'List my business',
      },
      search: {
        placeholder: 'Search for a place or service',
        regionPlaceholder: 'All regions',
        categoryPlaceholder: 'All categories',
        allRegions: 'All regions',
        allCategories: 'All categories',
        submitLabel: 'Search',
        categories: {
          alojamiento: 'Fenced stays',
          transporte: 'Pet friendly transport',
          veterinarios: '24h vets',
          tiendas: 'Shops & food',
          'ocio-naturaleza': 'Outdoors & nature',
          hosteleria: 'Food & drink',
          servicios: 'Services & carers',
          comunidad: 'Community & help',
        },
      },
      categoriesSection: {
        badge: 'Full coverage',
        title: 'Eight categories replicated per region',
        description: 'Year one focuses on fenced stays, transport and critical services.',
        cards: {
          alojamiento: {
            label: 'Fenced stays',
            description: 'Rural homes, hotels and campsites audited for dogs.',
          },
          transporte: {
            label: 'Pet friendly transport',
            description: 'Flights, trains, buses and rentals explained clearly.',
          },
          veterinarios: {
            label: '24h veterinarians',
            description: 'Clinics and hospitals on call throughout the north.',
          },
          tiendas: {
            label: 'Shops & supplies',
            description: 'Boutiques and food suppliers verified by the team.',
          },
          'ocio-naturaleza': {
            label: 'Outdoors & nature',
            description: 'Water routes, dog beaches and safe trails.',
          },
          hosteleria: {
            label: 'Hospitality',
            description: 'Bars, cafés and restaurants with clear policies.',
          },
          servicios: {
            label: 'Services & carers',
            description: 'Marketplace of walkers, trainers and sitters.',
          },
          comunidad: {
            label: 'Community & help',
            description: 'Forums, events, rescues and missing dogs.',
          },
        },
        cardCta: 'See listings →',
      },
      regionsSection: {
        badge: '7 northern regions',
        title: 'Hyperlocal expertise',
        description: 'Each subdomain has its own legal filters and marketplace.',
        guideCta: 'View full guide →',
        ownersLabel: 'dog owners',
      },
      journey: {
        badge: 'Methodology',
        title: 'Three steps to a safe trip',
        description: 'From inspiration to booking with verified evidence.',
        steps: [
          {
            badge: 'Step 1',
            title: 'Choose region & filters',
            description: 'Activate legal or fenced filters from the start.',
            bullets: ['Hyperlocal maps', 'Live legal alerts', 'Trip lists'],
          },
          {
            badge: 'Step 2',
            title: 'Compare verified businesses',
            description: 'Photo evidence, extras and real reviews in every card.',
            bullets: ['Safety checklist', 'Pet policy details', 'Community feedback'],
          },
          {
            badge: 'Step 3',
            title: 'Book with context',
            description: 'Direct contact plus legal and routing help.',
            bullets: ['Connected marketplace', 'Human experts', 'Downloadable plan'],
          },
        ],
      },
      marketplace: {
        badge: 'Marketplace',
        title: 'Living database with proof',
        description: 'We refresh the metrics whenever policies or businesses change.',
        metrics: [
          { label: 'Verified businesses', value: '340+', helper: '+18 added in November' },
          { label: 'Safety filters', value: '55', helper: 'Aligned with 2024 law' },
          { label: 'Local scouts', value: '12', helper: 'Residents exploring monthly' },
          { label: 'Guided requests', value: '1,200', helper: 'Tailored plans in private beta' },
        ],
      },
      transport: {
        badge: 'Transport 360º',
        title: 'Compliance matrices kept fresh',
        description: 'Documentation, weight limits and protocols reviewed each season.',
        lastUpdated: 'Updated Dec 2, 2024',
      },
      dogsShowcase: {
        badge: 'Community first',
        title: '8 categories to cover the full journey',
        description:
          'Fenced stays, transport clarity, watery adventures and critical services validated with locals.',
        tags: ['Fenced homes', 'Full transport', '24h vets', 'Dog beaches'],
        primaryCta: 'Add my business',
        secondaryCta: 'See categories',
        monetizationLabel: 'Monetization',
        monetizationValue: '€524k Year 1',
        monetizationDescription: 'Subscriptions + affiliate + marketplace.',
        roadmapLabel: 'Roadmap',
        roadmapDescription: 'MVP Euskadi → 7 regions in 18 months.',
      },
      testimonials: {
        badge: 'Real testimonials',
        prev: 'Prev',
        next: 'Next',
      },
      cta: {
        badge: 'Private beta Q1',
        title: 'Have a pet friendly business in the north?',
        description: 'We verify your profile and help with legal/product storytelling.',
        primaryCta: 'Request verification',
        secondaryCta: 'See use cases →',
      },
      insights: {
        badge: 'Actionable data',
        title: 'Living knowledge base for the northern pet friendly economy',
        description:
          'We blend public research, regulation tracking and on-site scouting to anticipate opportunities per region.',
        globalTitle: 'Market indicators',
        regionalTitle: 'Regional insights',
        indicatorLabel: 'Indicator',
        valueLabel: 'Value',
        categoryLabel: 'Category',
        sourceLabel: 'Source',
        noSource: 'Pending',
      },
    }),
    pages: mergePages({
      blog: {
        badge: 'Blog',
        title: 'Content that ranks and converts',
        description: 'Local SEO content plus practical guides for dog families exploring the north.',
        ctaLabel: 'Read article →',
        notFound: 'Content not available.',
        posts: [
          {
            slug: 'viajar-en-tren-con-perro',
            tag: 'SEO / Community',
            title: 'Complete guide to travelling by train with your dog',
            summary: 'Renfe, OUIGO and Euskotren rules with downloadable checklists.',
            content:
              'We break down Renfe, OUIGO, Euskotren and FEVE regulations with weight/size tables and recommended schedules.',
          },
          {
            slug: 'mejores-playas-caninas',
            tag: 'SEO / Community',
            title: 'Top dog friendly beaches in Northern Spain',
            summary: 'Interactive map, seasonal calendar and nearby services.',
            content:
              'Province-by-province list with nearby services and lifeguard details for beaches that welcome dogs.',
          },
        ],
      },
      region: {
        badgePrefix: 'Region',
        heroTitlePrefix: 'Pet friendly guide to',
        features: ['Fenced stays', 'Transport 360º', '24h vets', 'Connected marketplace'],
        categoryCta: 'See listings →',
        metricsTitle: 'Key data',
        beachesTitle: 'Beaches & coastline',
        naturalAreasTitle: 'Natural areas & restrictions',
        servicesTitle: 'Key services',
        experiencesTitle: 'Recommended experiences',
        legalTitle: 'Legal essentials',
      },
      category: {
        badgeTemplate: '{region} · {category}',
        titleTemplate: '{category} in {region}',
        emptyState: 'We are validating new businesses in this category.',
      },
      legislation: {
        badge: 'Regulation',
        titlePrefix: 'Pet friendly laws in',
        description: 'Royal Decree 1021/2022 plus applicable municipal bylaws.',
        bullets: [
          'Public transport: recommended schedules and size limits.',
          'Hospitality: access protocol and official signage.',
          'Beaches: seasonal calendar and official resources.',
        ],
      },
      community: {
        badge: 'Community',
        title: 'Huellas del Norte',
        forum: 'Feature under development.',
        events: 'Calendar coming soon.',
        adoptions: 'Directory of associations with transparent filters.',
        missing: 'We will publish verified alerts with local associations.',
      },
    }),
  },
};
