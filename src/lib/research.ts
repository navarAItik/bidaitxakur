export type MarketIndicator = {
  indicator: string;
  value: string;
  category: string;
  source?: string;
};

export type RegionalInsightItem = {
  type: string;
  detail: string;
  location: string;
  source?: string;
};

export type RegionalInsight = {
  region: string;
  slug: string;
  items: RegionalInsightItem[];
};

export const MARKET_INDICATORS: MarketIndicator[] = [
  { indicator: 'Volumen de mercado total', value: '5.770 M€+', category: 'Economía' },
  { indicator: 'Hogares con mascota', value: '61% del total', category: 'Demografía' },
  { indicator: 'Mascotas registradas', value: '30 M+', category: 'Demografía' },
  { indicator: 'Perros en España', value: '9,3 millones', category: 'Demografía' },
  { indicator: 'Gatos en España', value: '5,8 millones', category: 'Demografía' },
  { indicator: 'Gasto medio anual', value: '1.000 €+ por hogar', category: 'Economía' },
  { indicator: 'Servicios veterinarios', value: '2.613 M€', category: 'Economía' },
  { indicator: 'Tendencias de mayor crecimiento', value: 'Pet food premium, snacks saludables, pet tech, seguros', category: 'Tendencias' },
  { indicator: 'Regulación clave', value: 'Ley 7/2023 de Bienestar Animal', category: 'Legal' },
];

export const REGIONAL_INSIGHTS: RegionalInsight[] = [
  {
    region: 'Euskadi',
    slug: 'euskadi',
    items: [
      {
        type: 'Regulación de playas',
        detail: 'Acceso canino prohibido en temporada u horario de baño en la mayoría de arenales.',
        location: 'Litoral vasco',
      },
      {
        type: 'Playas con horario abierto',
        detail: 'Playa de La Arena sin restricciones del 1 de octubre al 31 de mayo.',
        location: 'Zierbena',
      },
      {
        type: 'Playas con horario nocturno',
        detail: 'Playa de Zarautz permite perros de 20:00 a 7:30 fuera de temporada oficial.',
        location: 'Zarautz',
      },
      {
        type: 'Transporte urbano',
        detail: 'Tranvía de Bilbao y Euskotren admiten perros de cualquier tamaño con correa (sin PPP).',
        location: 'Bilbao',
      },
      {
        type: 'Metro Bilbao',
        detail: 'Línea 3 admite todos los tamaños con correa; líneas 1 y 2 limitadas a 8 kg en brazos o transportín.',
        location: 'Bilbao',
      },
      {
        type: 'Funicular de Artxanda',
        detail: 'Perros permitidos con bozal y correa en el compartimento pet friendly (sin PPP).',
        location: 'Bilbao',
      },
      {
        type: 'Renfe Cercanías',
        detail: 'Un perro por viajero, sin límite de tamaño, con correa y bozal o transportín.',
        location: 'Red general',
      },
      {
        type: 'Puente Bizkaia',
        detail: 'Perros hasta 40 kg viajan gratis en compartimento lateral; todos los tamaños en barcaza central.',
        location: 'Getxo / Portugalete',
      },
      {
        type: 'Zonas de esparcimiento',
        detail: 'Bilbao habilita 10 parques (Amézola, Doña Casilda, etc.) con horario suelta: Invierno 19h-11h, Verano 20h-11h.',
        location: 'Bilbao',
      },
      {
        type: 'Zonas periurbanas',
        detail: 'San Sebastián habilita Urgull, Ulía, Miramón, Lau Haizeta, Otxoki y Ametzagaina con horarios por temporada.',
        location: 'Donostia',
      },
      {
        type: 'Adiestramiento',
        detail: 'Centros acreditados por el Gobierno Vasco como Txakur Eskola (Barakaldo) y Kni2 (Bilbao).',
        location: 'Bizkaia',
      },
    ],
  },
  {
    region: 'Asturias',
    slug: 'asturias',
    items: [
      {
        type: 'Playas caninas',
        detail: 'Seis playas oficiales abiertas todo el año (Cambaredo, Saliencia, Campiechos, Quintana, Rinconín y Playón de Bayas).',
        location: 'Varios concejos',
      },
      {
        type: 'Profesionales veterinarios',
        detail: '878 veterinarios colegiados (2020).',
        location: 'Principado de Asturias',
      },
      {
        type: 'Restricción urbana',
        detail: 'Playa de San Lorenzo autoriza perros del 1 de octubre al 30 de abril (escaleras 2 a 8).',
        location: 'Gijón',
      },
      {
        type: 'Ocio activo',
        detail: 'Descenso del Sella admite mascotas en canoa bajo supervisión de empresas.',
        location: 'Ribadesella / Arriondas',
      },
      {
        type: 'Experiencia sidrera',
        detail: 'Llagar de Sidra Castañón permite perros en exterior o transportín en interior.',
        location: 'Villaviciosa',
      },
      {
        type: 'Guarderías caninas',
        detail: 'Más de 12 centros registrados en Gijón, Oviedo y Avilés (ej. Eva Viñuela C.B., HKU Resort).',
        location: 'Áreas urbanas',
      },
      {
        type: 'Adiestramiento integral',
        detail: 'Urbandog (Posada de Llanera) combina adiestramiento, educación y guardería a 20 min de Oviedo/Gijón.',
        location: 'Posada de Llanera',
      },
      {
        type: 'Alojamiento icónico',
        detail: 'Hotel San Miguel lleva más de 20 años aceptando mascotas y ofrece servicios específicos.',
        location: 'Gijón',
      },
    ],
  },
  {
    region: 'Cantabria',
    slug: 'cantabria',
    items: [
      {
        type: 'Playas caninas (2025)',
        detail: 'Arcisero, Oriñón, Cargadero, Los Molinucos, Playuca de la Cantera, La Riberuca, Arenal del Jortín, El Puntal y La Maza.',
        location: 'Costa cántabra',
      },
      {
        type: 'Censo regional',
        detail: '235.765 mascotas registradas (226.513 perros, 8.731 gatos, 521 hurones).',
        location: 'Registro Cántabro',
      },
      {
        type: 'Normativa Santander',
        detail: 'La ordenanza municipal permite perros en edificios públicos y transporte urbano desde 2023.',
        location: 'Santander',
      },
      {
        type: 'Parque de Cabárceno',
        detail: 'Admite perros con restricciones (no en teleférico).',
        location: 'Obregón',
      },
      {
        type: 'Experiencia náutica',
        detail: 'Los Reginas acepta perros gratis hacia El Puntal.',
        location: 'Bahía de Santander',
      },
      {
        type: 'Turismo cultural',
        detail: 'Jardines del Capricho de Gaudí admiten perros en zonas exteriores.',
        location: 'Comillas',
      },
      {
        type: 'Alojamiento destacado',
        detail: 'Hotel Los Guardeses (Solares) y NH Ciudad de Santander con políticas dog friendly.',
        location: 'Solares / Santander',
      },
      {
        type: 'Servicios veterinarios',
        detail: 'Clínicas como Solares, Altamira y Hospital Bustamante apoyan el nuevo marco pet friendly.',
        location: 'Varios municipios',
      },
    ],
  },
  {
    region: 'Galicia',
    slug: 'galicia',
    items: [
      {
        type: 'Playas caninas (2025)',
        detail: 'Pontevedra: O Espiño, O Portiño, Cunchiña, Cesantes, Chapela. A Coruña: Arenal, Ares, Magdalena. Lugo: Punta Corveira y Seiramar.',
        location: 'Costa gallega',
      },
      {
        type: 'Restricción natural',
        detail: 'Parque Natural de Corrubedo prohíbe acceso a playa (Zona II) aunque permite paso con correa en caminos habilitados.',
        location: 'Ribeira (A Coruña)',
      },
      {
        type: 'Veterinarios colegiados',
        detail: '3.083 profesionales (2020).',
        location: 'Galicia',
      },
      {
        type: 'Clubes de agility',
        detail: 'ACADE (Santiago), NEGREIRA y TERCANS (Moaña) y PATAS (Moaña) vinculados a RSCE.',
        location: 'A Coruña / Pontevedra',
      },
      {
        type: 'Servicios 24h',
        detail: 'Red de veterinarios de urgencia y atención a domicilio por provincia.',
        location: 'Galicia',
      },
    ],
  },
  {
    region: 'Navarra',
    slug: 'navarra',
    items: [
      {
        type: 'Regulación sanitaria',
        detail: 'Reconocimiento veterinario anual y vacunación antirrábica obligatoria para perros, gatos y hurones.',
        location: 'Foral de Navarra',
      },
      {
        type: 'Registro de residencias',
        detail: 'Particulares con alojamiento temporal de animales deben inscribirse como guarderías/residencias.',
        location: 'Navarra',
      },
      {
        type: 'Zonas de esparcimiento',
        detail: 'ZEC habilitadas como Portal de Francia, Puente de la Magdalena y Parque del Mundo.',
        location: 'Pamplona',
      },
      {
        type: 'Naturaleza pet friendly',
        detail: 'Bardenas Reales, Selva de Irati y Señorío de Bertiz admiten perros controlados; Urederra con correa.',
        location: 'Varios enclaves',
      },
      {
        type: 'Enoturismo',
        detail: 'Bodegas Máximo Abete permite mascotas en visitas guiadas.',
        location: 'San Martín de Unx',
      },
      {
        type: 'Protección animal',
        detail: 'Ayudas a asociaciones CES/R y centros de corta estancia (máx. 60 días).',
        location: 'Navarra',
      },
    ],
  },
  {
    region: 'Iparralde',
    slug: 'iparralde',
    items: [
      {
        type: 'Playas',
        detail: 'La mayoría restringe acceso en verano; reapertura general tras el 1 de septiembre.',
        location: 'Costa vasco-francesa',
      },
      {
        type: 'Restauración',
        detail: 'Restaurantes suelen aceptar perros y ofrecen agua o snacks.',
        location: 'Zonas urbanas',
      },
      {
        type: 'Destinos clave',
        detail: 'Anglet y Cambo-les-Bains como polos dog friendly; Bayona, Biarritz y Saint Jean de Luz con servicios urbanos.',
        location: 'Pyrénées-Atlantiques',
      },
      {
        type: 'Actividades',
        detail: 'Tren de La Rhune admite perros; rutas Kakuetta y Holzarte dog friendly; surf/paddle en Anglet.',
        location: 'Montaña y costa',
      },
      {
        type: 'Alojamientos',
        detail: 'Campings y casas rurales con amplia oferta; camping OYAM admite perros con suplemento (excluye cat. 1 y 2).',
        location: 'Bidart y alrededores',
      },
    ],
  },
];
