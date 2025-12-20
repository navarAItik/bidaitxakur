import type { RegionSlug } from './constants';

type RegionMetric = {
  label: string;
  value: string;
  helper: string;
};

type RegionBeach = {
  name: string;
  location: string;
  type: 'todo el año' | 'horario' | 'zona acotada';
  notes: string;
};

type RegionNaturalArea = {
  name: string;
  restriction: string;
  details: string;
};

type RegionService = {
  title: string;
  description: string;
  bullets: string[];
};

type RegionExperience = {
  title: string;
  description: string;
  location: string;
};

type RegionLegal = {
  summary: string;
  bullets: string[];
};

export type RegionContent = {
  intro: string;
  metrics: RegionMetric[];
  beaches: RegionBeach[];
  naturalAreas: RegionNaturalArea[];
  services: RegionService[];
  experiences: RegionExperience[];
  legal: RegionLegal;
};

export const REGION_CONTENT: Partial<Record<RegionSlug, RegionContent>> = {
  norte: {
    intro:
      'Hub estratégico que centraliza datos del arco cantábrico y sirve como punto de partida para familias que desean combinar varias regiones en un mismo viaje con normativa unificada.',
    metrics: [
      { label: 'Mercado pet friendly', value: '5.770 M€+', helper: 'Volumen estatal 2025' },
      { label: 'Hogares con mascota', value: '61%', helper: 'Penetración media en España' },
      { label: 'Playas validadas', value: '30+', helper: 'Galicia, Asturias, Cantabria e Iparralde' },
      { label: 'Servicios críticos', value: '2.613 M€', helper: 'Gasto anual en veterinaria' },
    ],
    beaches: [
      {
        name: 'Playón de Bayas',
        location: 'Castrillón (Asturias)',
        type: 'todo el año',
        notes: 'Arenal kilométrico para paseos largos sin restricciones estacionales.',
      },
      {
        name: 'Praia da Cunchiña',
        location: 'Cangas (Galicia)',
        type: 'todo el año',
        notes: 'Zona oficial en el Morrazo con servicios básicos y agua tranquila.',
      },
      {
        name: 'Playa Arcisero',
        location: 'Castro Urdiales (Cantabria)',
        type: 'todo el año',
        notes: 'Ejemplo de arenal gestionado con limpieza estricta y señalética.',
      },
    ],
    naturalAreas: [
      {
        name: 'Parques dunares y reservas',
        restriction: 'Acceso limitado',
        details:
          'Espacios como Corrubedo (Galicia) restringen la entrada a la playa pero permiten transitar con correa en zonas compatibles.',
      },
      {
        name: 'Zonas urbanas con horario',
        restriction: 'Correa obligatoria fuera de horario',
        details: 'Bilbao, Donostia o Gijón gestionan parques con ventanas de suelta; el resto del día es obligatorio el uso de correa.',
      },
      {
        name: 'Áreas semidesérticas',
        restriction: 'Control estricto',
        details: 'Bardenas Reales (Navarra) exige perros controlados para proteger la fauna autóctona.',
      },
    ],
    services: [
      {
        title: 'Transporte 360º',
        description: 'Cobertura conjunta de vuelos, trenes, autobuses y ferris costeros.',
        bullets: [
          'Renfe + FEVE sin límite de tamaño con bozal/correa.',
          'Tranvía/Metro Bilbao y Euskotren con normas específicas por línea.',
          'Barcos turísticos (Vigo, Santander) con acceso gratuito para mascotas.',
        ],
      },
      {
        title: 'Marketplace de servicios',
        description: 'Guarderías, adiestradores y veterinarios 24h distribuidos en todas las capitales.',
        bullets: [
          'Red de urgencias 24/7 en Vigo, A Coruña, Oviedo, Santander y Pamplona.',
          'Centros de adiestramiento homologados (Txakur Eskola, Urbandog, ACADE…).',
          'Guardianes y cuidadores certificados con filtros por peso y necesidades especiales.',
        ],
      },
      {
        title: 'Alojamientos multi-región',
        description: 'Casas valladas, hoteles urbanos y campings premium.',
        bullets: [
          'Fichas con evidencia de vallado certificado y fotos auditadas.',
          'Políticas transparentes sobre suplementos, limpieza y amenities (kit playa, toallas).',
          'Marketplace con conexión a experiencias (surf dog, rutas guiadas, enoturismo).',
        ],
      },
    ],
    experiences: [
      {
        title: 'Roadtrip cantábrico 5 días',
        description:
          'Comienza en Vigo con playas calmadas, sube por Asturias para el Sella y termina en Cantabria con Cabárceno y ferry a El Puntal.',
        location: 'Galicia · Asturias · Cantabria',
      },
      {
        title: 'Combinado Euskadi + Iparralde',
        description:
          'Bilbao para movilidad urbana, Zarautz para horarios nocturnos y salto a Anglet/Biarritz fuera de temporada.',
        location: 'Euskadi · Iparralde',
      },
      {
        title: 'Naturaleza + normativa segura',
        description:
          'Irati, Bardenas y Corrubedo en un mismo viaje aplicando las restricciones de cada parque y validando seguros RC.',
        location: 'Navarra · Galicia',
      },
    ],
    legal: {
      summary:
        'Toda la cobertura norte se rige por la Ley 7/2023 de Bienestar Animal (microchip obligatorio, seguro RC para perros) y añade ordenanzas específicas por concello/municipio.',
      bullets: [
        'Seguro de Responsabilidad Civil obligatorio para perros por Ley 7/2023.',
        'Formación en tenencia responsable para nuevos adoptantes.',
        'Revisiones veterinarias anuales recomendadas y registro en censo municipal/provincial.',
      ],
    },
  },
  euskadi: {
    intro:
      'Euskadi combina costa urbana, transporte público muy detallado y zonas de esparcimiento con horarios claros tanto en Bilbao como en Donostia, lo que facilita planificar viajes multi-ciudad.',
    metrics: [
      { label: 'Playas con horario', value: '2', helper: 'La Arena y Zarautz con ventanas invernales/nocturnas' },
      { label: 'Parques de suelta en Bilbao', value: '10', helper: 'Amézola, Doña Casilda, Etxebarria… con horario' },
      { label: 'Parques periurbanos Donostia', value: '6', helper: 'Urgull, Ulía, Miramón, Lau Haizeta, Otxoki, Ametzagaina' },
      { label: 'Centros acreditados', value: '2+', helper: 'Txakur Eskola, Kni2 y red oficial del GV' },
    ],
    beaches: [
      {
        name: 'Playa de La Arena',
        location: 'Zierbena (Bizkaia)',
        type: 'horario',
        notes: 'Sin restricciones del 1 de octubre al 31 de mayo; ideal para rutas por los acantilados cercanos.',
      },
      {
        name: 'Playa de Zarautz',
        location: 'Zarautz (Gipuzkoa)',
        type: 'horario',
        notes: 'Acceso permitido de 20:00 a 7:30 fuera de temporada de baño oficial.',
      },
    ],
    naturalAreas: [
      {
        name: 'Parques urbanos Bilbao',
        restriction: 'Horario de suelta',
        details:
          'Los 10 parques habilitados (Amézola, Doña Casilda, Rekalde…) permiten ir sin correa en invierno de 19h a 11h y en verano de 20h a 11h.',
      },
      {
        name: 'Parques periurbanos de Donostia',
        restriction: 'Horarios según estación',
        details:
          'Urgull, Ulía, Miramón, Lau Haizeta, Otxoki y Ametzagaina permiten suelta controlada. Ejemplo: Urgull 18h-12h en invierno y 19h-10h en verano.',
      },
    ],
    services: [
      {
        title: 'Transporte pet friendly',
        description:
          'La red vasca define reglas específicas por modo: tranvía, Euskotren, Metro y funicular.',
        bullets: [
          'Tranvía/Euskotren: cualquier tamaño con correa; PPP excluidos.',
          'Metro Bilbao: línea 3 admite perros grandes con correa, líneas 1-2 solo hasta 8kg en brazos o transportín.',
          'Funicular de Artxanda: requiere correa, bozal y usar el compartimento pet friendly.',
        ],
      },
      {
        title: 'Movilidad interurbana',
        description: 'Renfe Cercanías y Puente Bizkaia facilitan saltar entre márgenes de la ría.',
        bullets: [
          'Renfe Cercanías: un perro por viajero sin límite de tamaño, con bozal/correa o transportín.',
          'Puente Bizkaia: hasta 40 kg gratis en compartimentos laterales; barcaza central para todos los tamaños.',
          'ALSA y líneas regionales permiten perros certificados en trayectos concretos (consultar plazas).',
        ],
      },
      {
        title: 'Adiestramiento homologado',
        description: 'Centros acreditados ofrecen planes urbanos y de convivencia.',
        bullets: [
          'Txakur Eskola (Barakaldo): obediencia, socialización y terapia asistida.',
          'Kni2 Educación Canina (Bilbao): programas intensivos en entornos urbanos.',
          'Listado oficial de profesionales avalados por Gobierno Vasco.',
        ],
      },
    ],
    experiences: [
      {
        title: 'Bilbao multi-movilidad',
        description:
          'Recorre el paseo de la ría, sube al Funicular de Artxanda con tu perro y termina en los parques con horario de suelta.',
        location: 'Bilbao',
      },
      {
        title: 'Costa y surf dog friendly',
        description:
          'Aprovecha los horarios nocturnos de Zarautz, practica surf al amanecer y visita los bares dog friendly del malecón.',
        location: 'Zarautz',
      },
    ],
    legal: {
      summary: 'Las ordenanzas municipales se sincronizan con la Ley 7/2023 y añaden requisitos de horario y bozal en transporte.',
      bullets: [
        'Correa obligatoria en casco urbano salvo zonas señalizadas.',
        'Bozal requerido en Metro Bilbao (líneas 1-2) y funicular para perros medianos/grandes.',
        'PPP no admitidos en tranvía, funicular ni Puente Bizkaia.',
      ],
    },
  },
  galicia: {
    intro:
      'Galicia concentra la mayor cartera de playas caninas del norte, combina un tejido veterinario robusto en sus cuatro provincias y ofrece experiencias slow en rías y bosques atlánticos con normativa clara.',
    metrics: [
      { label: 'Playas dog friendly', value: '11', helper: 'Funcionando en 2025 entre Pontevedra, A Coruña y Lugo' },
      { label: 'Veterinarios colegiados', value: '3.083', helper: 'Datos 2020 · Consejo Gallego de Veterinarios' },
      { label: 'Clubes de agility RSCE', value: '4', helper: 'ACADE, NEGREIRA, PATAS y TERCANS activos' },
      { label: 'Servicios 24h / domicilio', value: 'Disponible', helper: 'Red provincial con urgencias y visita in situ' },
    ],
    beaches: [
      {
        name: 'Praia de O Espiño',
        location: 'O Grove (Pontevedra)',
        type: 'todo el año',
        notes: 'Arena fina en A Lanzada, muy utilizada por familias perrunas en temporada baja.',
      },
      {
        name: 'Praia da Cunchiña',
        location: 'Cangas (Pontevedra)',
        type: 'todo el año',
        notes: 'Primer arenal oficial del Morrazo con aparcamiento sencillo y agua calmada.',
      },
      {
        name: 'Praia de Cesantes + Chapela',
        location: 'Redondela (Pontevedra)',
        type: 'todo el año',
        notes: 'Zona amplia en la ría de Vigo, ideal para rutas al amanecer y paddle con perro.',
      },
      {
        name: 'Praia do Arenal',
        location: 'Pobra do Caramiñal (A Coruña)',
        type: 'zona acotada',
        notes: 'Sector señalizado junto a dunas y pasarelas de madera; vigilancia municipal en verano.',
      },
      {
        name: 'Praia de Ares',
        location: 'Ares (A Coruña)',
        type: 'todo el año',
        notes: 'Bahía tranquila cercana a Ferrol; negocios locales ofrecen agua y snacks.',
      },
      {
        name: 'Praia de Punta Corveira',
        location: 'Barreiros (Lugo)',
        type: 'todo el año',
        notes: 'Acantilados bajos y acceso rápido desde la N-634; muy recomendada para atardeceres.',
      },
      {
        name: 'Praia de Seiramar',
        location: 'Viveiro (Lugo)',
        type: 'todo el año',
        notes: 'Caleta protegida en Celeiro con duchas cercanas y parking gratuito.',
      },
    ],
    naturalAreas: [
      {
        name: 'Parque Natural de Corrubedo',
        restriction: 'Acceso prohibido a la playa (Zona II)',
        details:
          'El complejo dunar de Corrubedo declara la playa zona no apta para mascotas, pero permite tránsito con correa por caminos habilitados de la Zona II (Uso Compatible).',
      },
    ],
    services: [
      {
        title: 'Urgencias veterinarias 24/7',
        description:
          'Clínicas en Vigo, A Coruña, Santiago, Lugo y Ourense ofrecen hospitalización nocturna y desplazamiento a domicilio.',
        bullets: [
          'Atención a domicilio en menos de 60 minutos en áreas metropolitanas.',
          'Consultas telemáticas coordinadas con colegios oficiales.',
          'Planes de bienestar preventivo para razas grandes viajan al norte.',
        ],
      },
      {
        title: 'Adiestramiento y agility',
        description:
          'Clubes homologados por la RSCE en Santiago, Silleda y Moaña combinan circuitos de agility y obediencia urbana.',
        bullets: [
          'ACADE (Santiago) con calendario de pruebas y talleres de socialización.',
          'NEGREIRA y TERCANS (Moaña) con programas específicos para surf y paddle dog.',
          'PATAS (Moaña) conecta familias con monitores certificados en toda la ría.',
        ],
      },
      {
        title: 'Servicios costeros y alojamientos',
        description:
          'Hoteles y casas rurales en Rías Baixas y Costa da Morte preparan kits de playa, protectores de sofás y áreas valladas.',
        bullets: [
          'Alojamientos con zona de secado y mangueras para eliminar salitre.',
          'Restaurantes que admiten perro en terrazas cubiertas con agua gratuita.',
          'Empresas de rutas en barco dog friendly (Vigo, O Grove, Viveiro).',
        ],
      },
    ],
    experiences: [
      {
        title: 'Ruta slow por la Ría de Arousa',
        description:
          'Combina una mañana en la Praia de O Espiño con paseo por los viñedos de la Lanzada y comida pet friendly en Cambados.',
        location: 'O Grove · Cambados',
      },
      {
        title: 'Bosques atlánticos de Viveiro',
        description:
          'Paseo por Seiramar al amanecer, visita al Souto da Retorta (Eucaliptal de Chavín) y tarde gastro en Viveiro.',
        location: 'Viveiro · Lugo',
      },
      {
        title: 'Costa da Morte con alerta dunar',
        description:
          'Descubre O Ézaro y los faros de la zona incluyendo parada en Arenal (Pobra), respetando las restricciones de Corrubedo.',
        location: 'A Coruña · Costa da Morte',
      },
    ],
    legal: {
      summary:
        'Galicia aplica la Ley 7/2023 y adapta sus ordenanzas costeras. Cada concello define horarios y áreas señalizadas.',
      bullets: [
        'Mascotas obligadas a ir identificadas con microchip y seguro RC recomendado para playas concurridas.',
        'En playas mixtas respeta cartelería municipal y limpieza inmediata de excrementos.',
        'En parques naturales (Corrubedo, Fragas do Eume) la correa es obligatoria y se limita la entrada a determinadas zonas.',
      ],
    },
  },
  asturias: {
    intro:
      'Asturias es la comunidad con más playas caninas oficiales abiertas todo el año y mezcla actividades de aventura como el descenso del Sella con alojamientos y guarderías cercanas a Oviedo y Gijón.',
    metrics: [
      { label: 'Playas caninas', value: '6', helper: 'Funcionan sin restricción de fechas ni horarios' },
      { label: 'Veterinarios colegiados', value: '878', helper: 'Datos 2020 · Colegio Oficial del Principado' },
      { label: 'Guarderías registradas', value: '12+', helper: 'Gijón, Oviedo y Avilés' },
      { label: 'Centros integrales', value: 'Urbandog', helper: 'Adiestramiento + educación + guardería' },
    ],
    beaches: [
      { name: 'Playa de Cambaredo', location: 'El Franco', type: 'todo el año', notes: 'Arena oscura, acceso natural y oleaje moderado.' },
      { name: 'Cala Saliencia', location: 'Cudillero', type: 'todo el año', notes: 'Pequeña cala salvaje junto a acantilados verdes.' },
      { name: 'Playa de Campiechos', location: 'Valdés', type: 'todo el año', notes: 'Ideal para rutas fotográficas por las formaciones rocosas.' },
      { name: 'Playa de Quintana', location: 'Valdés', type: 'todo el año', notes: 'Arena dorada y fácil aparcamiento.' },
      { name: 'El Rinconín / Cervigón', location: 'Gijón', type: 'todo el año', notes: 'Única playa urbana oficial; cercana a parques caninos.' },
      { name: 'Playón de Bayas', location: 'Castrillón', type: 'todo el año', notes: 'Uno de los arenales más largos del Principado, ideal para paseos.' },
    ],
    naturalAreas: [
      {
        name: 'Playa de San Lorenzo',
        restriction: 'Horario invernal',
        details: 'Entre escaleras 2 y 8 se permite acceso del 1 de octubre al 30 de abril; fuera de esas fechas hay prohibición total.',
      },
    ],
    services: [
      {
        title: 'Guarderías y resorts caninos',
        description: 'En el eje Gijón-Oviedo-Avilés existen centros certificados con vigilancia 24h.',
        bullets: [
          'Eva Viñuela C.B. y HKU Resort ofrecen monitorización y servicios de adiestramiento básico.',
          'Recogida a domicilio en áreas metropolitanas.',
          'Planes de larga estancia con veterinario asociado.',
        ],
      },
      {
        title: 'Adiestramiento integral',
        description: 'Urbandog (Posada de Llanera) integra educación, guardería y clases grupales.',
        bullets: [
          'Sesiones personalizadas para familias viajeras.',
          'Programas específicos para surf, kayak y experiencias al aire libre.',
          'Traslados coordinados con hoteles pet friendly.',
        ],
      },
      {
        title: 'Alojamiento icónico',
        description: 'Hotel San Miguel (Gijón) lleva más de 20 años recibiendo perros con amenities incluidos.',
        bullets: [
          'Kit de cama, comedero y agua filtrada.',
          'Información actualizada sobre playas y parques cercanos.',
          'Descuentos con empresas de experiencias dog friendly.',
        ],
      },
    ],
    experiences: [
      {
        title: 'Descenso del Sella con perro',
        description:
          'Empresas de Ribadesella/Arriondas permiten subir a la canoa con tu mascota (o seguir la ruta paralela) y ofrecen chalecos específicos.',
        location: 'Ribadesella · Arriondas',
      },
      {
        title: 'Ruta sidrera dog friendly',
        description:
          'Visita el Llagar de Sidra Castañón: los perros pueden permanecer en exterior o en transportín y el equipo facilita agua.',
        location: 'Villaviciosa',
      },
    ],
    legal: {
      summary: 'Los concejos gestionan playas y parques; la Ley 7/2023 aplica a nivel estatal con microchip y responsabilidad.',
      bullets: [
        'San Lorenzo es la única playa con horario restringido; el resto de arenales oficiales funcionan todo el año.',
        'Las mascotas deben ir con correa en casco urbano salvo zonas habilitadas.',
        'Empresas de aventuras pueden requerir seguro RC y chaleco salvavidas para el animal.',
      ],
    },
  },
  cantabria: {
    intro:
      'Cantabria ofrece uno de los mayores listados de playas dog friendly del Cantábrico y complementa con experiencias como Cabárceno, paseos en barco y hoteles con políticas pet friendly en Solares y Santander.',
    metrics: [
      { label: 'Playas caninas', value: '9', helper: 'Operativas en 2025 desde Castro Urdiales hasta San Vicente' },
      { label: 'Censo animal', value: '235.765', helper: 'Registro Cántabro · 226k perros, 8.7k gatos, 521 hurones' },
      { label: 'Ordenanza Santander', value: '2023', helper: 'Permite acceso a transporte urbano y edificios públicos' },
      { label: 'Clínicas destacadas', value: '3', helper: 'Solares, Altamira, Hospital Bustamante' },
    ],
    beaches: [
      { name: 'Playa Arcisero', location: 'Castro Urdiales', type: 'todo el año', notes: 'Caleta rocosa ideal en marea baja.' },
      { name: 'Muelle de Oriñón', location: 'Castro Urdiales', type: 'todo el año', notes: 'Zona tranquila con aparcamiento cercano.' },
      { name: 'Cala Cargadero Mioño', location: 'Mioño', type: 'todo el año', notes: 'Acceso por senda costera con vistas industriales.' },
      { name: 'Playa de Los Molinucos', location: 'Santander', type: 'todo el año', notes: 'Pequeño arenal junto al Sardinero.' },
      { name: 'Playuca de la Cantera', location: 'Miengo', type: 'todo el año', notes: 'Permite ir sueltos; entorno familiar.' },
      { name: 'Playa La Riberuca', location: 'Suances', type: 'todo el año', notes: 'Estuario amplio con zonas de descanso.' },
      { name: 'Arenal del Jortín', location: 'Soto de la Marina', type: 'todo el año', notes: 'Arena fina y parking reducido.' },
      { name: 'Playa El Puntal', location: 'Somo', type: 'todo el año', notes: 'Se puede llegar en barco Los Reginas con perros gratis.' },
      { name: 'Playa La Maza', location: 'San Vicente de la Barquera', type: 'todo el año', notes: 'Zona protegida en la ría.' },
    ],
    naturalAreas: [
      {
        name: 'Parque de la Naturaleza de Cabárceno',
        restriction: 'Áreas limitadas',
        details: 'Admite perros con correa, aunque algunas actividades como el teleférico no permiten su acceso.',
      },
      {
        name: 'Jardines del Capricho de Gaudí',
        restriction: 'Solo exteriores',
        details: 'Entrada permitida en los jardines (Comillas); el interior del edificio es exclusivo para humanos.',
      },
    ],
    services: [
      {
        title: 'Turismo y ocio',
        description: 'Actividades para completar el viaje más allá de la playa.',
        bullets: [
          'Paseo en barco por la bahía de Santander con Los Reginas (mascotas gratis hacia El Puntal).',
          'Parque Cabárceno como plan familiar con amplias zonas verdes.',
          'Ruta cultural por el Capricho de Gaudí con tu perro en los jardines.',
        ],
      },
      {
        title: 'Alojamientos recomendados',
        description: 'Hoteles con políticas claras y amenities para perros.',
        bullets: [
          'Hotel Los Guardeses (Solares) con habitaciones adaptadas y jardín.',
          'NH Ciudad de Santander con bienvenida especial para mascotas.',
          'Casas rurales en la zona occidental con espacios vallados.',
        ],
      },
      {
        title: 'Servicios veterinarios',
        description: 'Red consolidada que apoya la nueva ordenanza.',
        bullets: [
          'Clínica Veterinaria Solares especializada en urgencias.',
          'Clínica Altamira con hospitalización.',
          'Hospital Bustamante con quirófano 24h y soporte a protectoras.',
        ],
      },
    ],
    experiences: [
      {
        title: 'Castro Urdiales en ruta',
        description:
          'Visita Arcisero y Oriñón a primera hora, come en el puerto y termina el día en la Cala Cargadero.',
        location: 'Castro Urdiales',
      },
      {
        title: 'Santander pet friendly',
        description:
          'Paseo por Los Molinucos y Parque de Mataleñas, trayecto en Los Reginas hasta El Puntal y cena en restaurantes dog friendly.',
        location: 'Santander · Somo',
      },
    ],
    legal: {
      summary: 'La modificación de la ordenanza santanderina habilita acceso a edificios públicos y transporte; se refuerza el registro regional de mascotas.',
      bullets: [
        'Obligatorio microchip y censo actualizado (Registro Cántabro).',
        'Transporte urbano de Santander admite perros cumpliendo normas de peso y correa.',
        'Recogida de excrementos vigilada en playas para mantener la red oficial.',
      ],
    },
  },
  navarra: {
    intro:
      'Navarra destaca por una regulación sanitaria estricta, zonas de esparcimiento controladas y una mezcla única de naturaleza (Bardenas, Selva de Irati) y enoturismo que admite mascotas bajo normas claras.',
    metrics: [
      { label: 'Reconocimiento veterinario', value: 'Anual', helper: 'Obligatorio para perros, gatos y hurones' },
      { label: 'Vacunación antirrábica', value: 'Obligatoria', helper: 'Aplica a perros, gatos y hurones' },
      { label: 'Zonas de esparcimiento', value: 'ZEC urbanas', helper: 'Portal de Francia, Magdalena, Parque del Mundo' },
      { label: 'Centros de acogida', value: '60 días máx.', helper: 'Estancias limitadas para animales abandonados' },
    ],
    beaches: [],
    naturalAreas: [
      {
        name: 'Bardenas Reales',
        restriction: 'Perro controlado',
        details: 'Se permiten mascotas, pero deben ir controladas y respetar la fauna protegida.',
      },
      {
        name: 'Selva de Irati / Señorío de Bertiz',
        restriction: 'Correa obligatoria',
        details: 'Bosques húmedos donde se exige correa para evitar conflictos con fauna local.',
      },
      {
        name: 'Nacedero del Urederra',
        restriction: 'Ruta guiada',
        details: 'Sendero regulado; recomendable inscripción previa y mantener correa durante todo el recorrido.',
      },
    ],
    services: [
      {
        title: 'Zonas urbanas ZEC',
        description: 'Pamplona habilita áreas específicas para suelta controlada.',
        bullets: [
          'Portal de Francia con zonas valladas.',
          'Puente de la Magdalena junto al Arga para paseos largos.',
          'Parque del Mundo como punto neurálgico para familias locales.',
        ],
      },
      {
        title: 'Enoturismo pet friendly',
        description: 'Bodegas Máximo Abete abre sus visitas a familias con perro.',
        bullets: [
          'Visitas guiadas con parada en exteriores para mascotas.',
          'Degustaciones enoturísticas con zonas de sombra.',
          'Posibilidad de combinar con rutas por viñedos de San Martín de Unx.',
        ],
      },
      {
        title: 'Apoyo a protectoras',
        description: 'Se financian programas CES/R para colonias felinas y recogida de animales abandonados.',
        bullets: [
          'Centros de corta estancia con límite de 60 días.',
          'Subvenciones para asociaciones que gestionan colonias.',
          'Campañas de identificación y esterilización.',
        ],
      },
    ],
    experiences: [
      {
        title: 'Bardenas en clave pet friendly',
        description:
          'Recorre pistas autorizadas al amanecer con tu perro controlado y termina en pueblos como Arguedas con terrazas dog friendly.',
        location: 'Bardenas Reales',
      },
      {
        title: 'Ruta Irati + enoturismo',
        description:
          'Paseo con correa por los hayedos de Irati y visita a Bodegas Máximo Abete con degustación al atardecer.',
        location: 'Selva de Irati · San Martín de Unx',
      },
    ],
    legal: {
      summary: 'El marco navarro exige reconocimiento veterinario anual, vacunación antirrábica y registro de residencias temporales.',
      bullets: [
        'Particulares que alojan animales por lucro deben registrarse como guardería/residencia.',
        'Seguro de RC recomendado para actividades en zonas naturales concurridas.',
        'Respetar las ZEC urbanas: fuera de ellas la correa es obligatoria.',
      ],
    },
  },
  iparralde: {
    intro:
      'El País Vasco francés (Pyrénées-Atlantiques) ofrece una oferta amplia de alojamiento pet friendly, numerosos restaurantes dog friendly y actividades de montaña y costa, aunque muchas playas restringen el acceso en verano.',
    metrics: [
      { label: 'Playas con restricción', value: 'Alta', helper: 'Mayoría cerradas en verano; abiertas tras 1 de septiembre' },
      { label: 'Destinos destacados', value: '5', helper: 'Anglet, Cambo-les-Bains, Bayona, Biarritz, St Jean de Luz' },
      { label: 'Actividades outdoor', value: '4+', helper: 'La Rhune, Kakuetta, Holzarte, surf/paddle dog' },
      { label: 'Campings pet friendly', value: 'Elevado', helper: 'Incluye camping OYAM (Bidart)' },
    ],
    beaches: [
      {
        name: 'Plages d’Anglet',
        location: 'Anglet',
        type: 'horario',
        notes: 'Generalmente prohibidas en verano; permiten paseos a partir de septiembre y horarios reducidos en temporada baja.',
      },
      {
        name: 'Playa central de Biarritz',
        location: 'Biarritz',
        type: 'horario',
        notes: 'Acceso fuera de temporada alta; muchos restaurantes cercanos ofrecen agua para perros.',
      },
    ],
    naturalAreas: [
      {
        name: 'Gargantas de Kakuetta',
        restriction: 'Correa obligatoria',
        details: 'Sendero espectacular donde se permite acceso con correa y respeto a la fauna.',
      },
      {
        name: 'Pasarela de Holzarte',
        restriction: 'Perros controlados',
        details: 'Ruta de montaña con puente colgante; exige buena condición física y correa corta.',
      },
      {
        name: 'La Rhune',
        restriction: 'Norma del trenecito',
        details: 'El tren cremallera admite perros; se recomienda bozal y reserva previa en temporada.',
      },
    ],
    services: [
      {
        title: 'Restauración dog friendly',
        description: 'Muchos restaurantes ofrecen cuencos de agua y snacks.',
        bullets: [
          'Bayona y Biarritz con terrazas cubiertas para perros.',
          'Pastelerías y cafés de Cambo-les-Bains con rincón pet friendly.',
          'Chiringuitos de Anglet adaptados para familias perrunas.',
        ],
      },
      {
        title: 'Actividades outdoor',
        description: 'Rutas y deportes adaptados a mascotas.',
        bullets: [
          'Surf/Paddle dog en Anglet con escuelas especializadas.',
          'Ascenso a La Rhune en tren y ruta circular en la cima.',
          'Visita a pueblos del interior como Sare, Ainhoa y Espelette.',
        ],
      },
      {
        title: 'Alojamientos variados',
        description: 'Mayor densidad de oferta pet friendly que en la parte española.',
        bullets: [
          'Camping OYAM (Bidart) admite perros con suplemento (excluye categorías 1 y 2).',
          'Casas rurales y chambres d’hôtes adaptadas con jardines.',
          'Campings costeros con acceso a pistas ciclistas dog friendly.',
        ],
      },
    ],
    experiences: [
      {
        title: 'Anglet surf & chill',
        description:
          'Pasea por las playas fuera de temporada, practica paddle con tu perro y come en restaurantes dog friendly del paseo.',
        location: 'Anglet',
      },
      {
        title: 'Montaña + pueblos con encanto',
        description:
          'Sube a La Rhune en tren, continúa hacia las gargantas de Kakuetta y termina visitando pueblos como Ainhoa y Espelette.',
        location: 'Laburdi · Baja Navarra',
      },
    ],
    legal: {
      summary:
        'Las comunas francesas regulan el acceso a playas y restauración; los perros categorizados (1 y 2) tienen restricciones adicionales en alojamientos y campings.',
      bullets: [
        'Verifica los periodos de prohibición en playas: generalmente del 1 de junio al 1 de septiembre.',
        'Categorías 1 y 2 necesitan bozal obligatorio y muchos alojamientos los excluyen.',
        'Siempre lleva cartilla sanitaria y seguro actualizado al cruzar la frontera.',
      ],
    },
  },
};
