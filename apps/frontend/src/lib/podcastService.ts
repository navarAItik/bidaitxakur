export type PodcastPlatform = 'spotify' | 'ivoox' | 'apple';

export interface PodcastEpisode {
  id: string;
  podcastId: string;
  title: string;
  summary: string;
  duration: string;
  audioUrl: string;
  publishedAt: string;
}

export interface PodcastShow {
  id: string;
  name: string;
  host: string;
  theme: string;
  description: string;
  typicalDuration: string;
  lastUpdate: string;
  highlight: string;
  rssFeed: string;
  embedUrl?: string;
  accentColor: string;
  tags: string[];
  platformLinks: PodcastPlatformLink[];
  episodes: PodcastEpisode[];
}

export interface PodcastPlatformLink {
  platform: PodcastPlatform;
  url: string;
}

export const PODCAST_PLATFORM_INFO: Record<
  PodcastPlatform,
  { label: string; accent: string }
> = {
  spotify: {
    label: 'Spotify',
    accent: 'bg-emerald-100 text-emerald-900 border border-emerald-200',
  },
  ivoox: {
    label: 'iVoox',
    accent: 'bg-orange-100 text-orange-900 border border-orange-200',
  },
  apple: {
    label: 'Apple Podcasts',
    accent: 'bg-purple-100 text-purple-900 border border-purple-200',
  },
};

const CURATED_PODCASTS: PodcastShow[] = [
  {
    id: 'hablemos-de-perros',
    name: 'Hablemos de Perros',
    host: 'Sonia Losada',
    theme: 'Conducta canina y convivencia diaria',
    description:
      'Consejos de etología amable para resolver conflictos cotidianos entre humanos y perros que viajan juntos.',
    typicalDuration: '15-25 min',
    lastUpdate: '2024-01-15',
    highlight: 'Etología aplicada para hogares reales',
    rssFeed: 'https://www.ivoox.com/podcast-hablemos-de-perros_fg_f1131863_filtro_1.xml',
    embedUrl: 'https://open.spotify.com/embed/episode/7m9Mn1KzJYpNqafgAvFp8Z?utm_source=generator',
    accentColor: '#fef3c7',
    tags: ['Etología', 'Convivencia', 'Perros reactivos'],
    platformLinks: [
      {
        platform: 'spotify',
        url: 'https://open.spotify.com/show/4hablemosdeperros',
      },
      {
        platform: 'ivoox',
        url: 'https://www.ivoox.com/podcast-hablemos-de-perros_fg_f1131863_filtro_1.xml',
      },
    ],
    episodes: [
      {
        id: 'hdp-educacion-positiva',
        podcastId: 'hablemos-de-perros',
        title: 'Educación canina positiva en ruta',
        summary: 'Rutinas breves para reforzar conductas calmadas durante escapadas de fin de semana.',
        duration: '22:15',
        audioUrl: 'https://www.soundhelix.com/examples/mp3/SoundHelix-Song-1.mp3',
        publishedAt: '2024-01-15',
      },
      {
        id: 'hdp-lenguaje-corporal',
        podcastId: 'hablemos-de-perros',
        title: 'Lenguaje corporal en destinos pet friendly',
        summary: 'Claves para detectar estrés y anticipar conflictos en terrazas o alojamientos compartidos.',
        duration: '18:42',
        audioUrl: 'https://www.soundhelix.com/examples/mp3/SoundHelix-Song-2.mp3',
        publishedAt: '2024-01-08',
      },
    ],
  },
  {
    id: 'perros-by-pat',
    name: 'Perros by PAT',
    host: 'Patricia Guerrero',
    theme: 'Educación canina basada en ciencia',
    description:
      'Pat comparte protocolos muy prácticos para planificar viajes seguros y lecturas de bienestar animal.',
    typicalDuration: '20-30 min',
    lastUpdate: '2024-01-10',
    highlight: 'Metodologías fáciles de aplicar en viajes',
    rssFeed: 'https://www.ivoox.com/podcast-perros-by-pat_fg_f1131863_filtro_1.xml',
    embedUrl: 'https://open.spotify.com/embed/episode/7y9kOdwLaUsM8cIvxZtmhZ?utm_source=generator',
    accentColor: '#fee2e2',
    tags: ['Entrenamiento', 'Familias viajeras', 'Prevención'],
    platformLinks: [
      {
        platform: 'spotify',
        url: 'https://open.spotify.com/show/1perrosbypat',
      },
    ],
    episodes: [
      {
        id: 'pbp-lenguaje-corporal',
        podcastId: 'perros-by-pat',
        title: 'Tu perro como copiloto',
        summary: 'Checklist de seguridad vial, descansos y enriquecimiento olfativo durante los trayectos largos.',
        duration: '21:30',
        audioUrl: 'https://www.soundhelix.com/examples/mp3/SoundHelix-Song-3.mp3',
        publishedAt: '2024-01-10',
      },
      {
        id: 'pbp-ciencia',
        podcastId: 'perros-by-pat',
        title: 'Crianza científica y vínculo',
        summary: 'Cómo entrenar desde la calma y reforzar la autonomía antes de una gran escapada.',
        duration: '24:05',
        audioUrl: 'https://www.soundhelix.com/examples/mp3/SoundHelix-Song-4.mp3',
        publishedAt: '2024-01-03',
      },
    ],
  },
  {
    id: 'pongamos-que-hablo-de-perros',
    name: 'Pongamos que Hablo de Perros',
    host: 'Jonás Thulin',
    theme: 'Conversaciones con expertos y filosofía canina',
    description:
      'Entrevistas largas con especialistas internacionales que cuestionan la tenencia responsable.',
    typicalDuration: '30-40 min',
    lastUpdate: '2024-01-05',
    highlight: 'Tenencia responsable con voces globales',
    rssFeed: 'https://podcasts.apple.com/es/podcast/pongamos-que-hablo-de-perros/id1521783453',
    embedUrl: 'https://embed.podcasts.apple.com/es/podcast/pongamos-que-hablo-de-perros/id1521783453',
    accentColor: '#dbeafe',
    tags: ['Entrevistas', 'Responsabilidad', 'Tendencias'],
    platformLinks: [
      {
        platform: 'apple',
        url: 'https://podcasts.apple.com/es/podcast/pongamos-que-hablo-de-perros/id1521783453',
      },
      {
        platform: 'spotify',
        url: 'https://open.spotify.com/show/6pongamosquehablodeperros',
      },
    ],
    episodes: [
      {
        id: 'pqh-expertos',
        podcastId: 'pongamos-que-hablo-de-perros',
        title: 'Conversaciones con etólogos nórdicos',
        summary: 'Visión escandinava sobre licencias obligatorias y ciudades dog friendly.',
        duration: '32:10',
        audioUrl: 'https://www.soundhelix.com/examples/mp3/SoundHelix-Song-5.mp3',
        publishedAt: '2024-01-05',
      },
      {
        id: 'pqh-tenencia',
        podcastId: 'pongamos-que-hablo-de-perros',
        title: 'Tenencia responsable en 2024',
        summary: 'Checklist legal y ética para familias que se mueven por España.',
        duration: '29:55',
        audioUrl: 'https://www.soundhelix.com/examples/mp3/SoundHelix-Song-6.mp3',
        publishedAt: '2023-12-30',
      },
    ],
  },
  {
    id: 'amores-de-garra',
    name: 'Amores de garra',
    host: 'Dominique Peralta',
    theme: 'Vínculo humano-animal y bienestar emocional',
    description:
      'Historias reales y recomendaciones veterinarias para disfrutar viajes lentos y respetuosos.',
    typicalDuration: '20-25 min',
    lastUpdate: '2024-01-03',
    highlight: 'Bienestar emocional en cada viaje',
    rssFeed: 'https://www.ivoox.com/podcast-amores-de-garra_fg_f1131863_filtro_1.xml',
    embedUrl: 'https://open.spotify.com/embed/episode/1bamoresdegarra?utm_source=generator',
    accentColor: '#fce7f3',
    tags: ['Bienestar', 'Historias', 'Cuidados'],
    platformLinks: [
      {
        platform: 'spotify',
        url: 'https://open.spotify.com/show/5amoresdegarra',
      },
      {
        platform: 'ivoox',
        url: 'https://www.ivoox.com/podcast-amores-de-garra_fg_f1131863_filtro_1.xml',
      },
    ],
    episodes: [
      {
        id: 'adg-adopcion',
        podcastId: 'amores-de-garra',
        title: 'Adopción responsable en escapadas',
        summary: 'Qué revisar antes de viajar con un perro recién adoptado.',
        duration: '20:18',
        audioUrl: 'https://www.soundhelix.com/examples/mp3/SoundHelix-Song-7.mp3',
        publishedAt: '2024-01-03',
      },
      {
        id: 'adg-bienestar',
        podcastId: 'amores-de-garra',
        title: 'Bienestar animal en bodegas y hoteles',
        summary: 'Protocolos para espacios pequeños o con afluencia constante.',
        duration: '21:02',
        audioUrl: 'https://www.soundhelix.com/examples/mp3/SoundHelix-Song-8.mp3',
        publishedAt: '2023-12-27',
      },
    ],
  },
  {
    id: 'perros-podcast',
    name: 'PERROS',
    host: 'Rafa Morales Luna',
    theme: 'Salud, activismo y prevención del abandono',
    description:
      'Actualidad veterinaria y campañas contra el abandono con foco en el norte de España.',
    typicalDuration: '25-35 min',
    lastUpdate: '2023-12-28',
    highlight: 'Protocolos de salud y activismo',
    rssFeed: 'https://podcasts.apple.com/es/podcast/perros/id1521783453',
    embedUrl: 'https://embed.podcasts.apple.com/es/podcast/perros/id1521783453',
    accentColor: '#ede9fe',
    tags: ['Salud', 'Activismo', 'Emergencias'],
    platformLinks: [
      {
        platform: 'apple',
        url: 'https://podcasts.apple.com/es/podcast/perros/id1521783453',
      },
    ],
    episodes: [
      {
        id: 'perros-bienestar',
        podcastId: 'perros-podcast',
        title: 'Bienestar animal en viajes largos',
        summary: 'Revisiones veterinarias, botiquín y seguros recomendados.',
        duration: '19:55',
        audioUrl: 'https://www.soundhelix.com/examples/mp3/SoundHelix-Song-9.mp3',
        publishedAt: '2023-12-28',
      },
      {
        id: 'perros-activismo',
        podcastId: 'perros-podcast',
        title: 'Activismo local contra el abandono',
        summary: 'Iniciativas ciudadanas y cómo apoyar desde el turismo responsable.',
        duration: '23:11',
        audioUrl: 'https://www.soundhelix.com/examples/mp3/SoundHelix-Song-10.mp3',
        publishedAt: '2023-12-20',
      },
    ],
  },
];

const cloneShow = (show: PodcastShow): PodcastShow => ({
  ...show,
  tags: [...show.tags],
  platformLinks: show.platformLinks.map((link) => ({ ...link })),
  episodes: show.episodes.map((episode) => ({ ...episode })),
});

export function getCuratedPodcasts(): PodcastShow[] {
  return CURATED_PODCASTS.map(cloneShow);
}

export function getEpisodesByPodcast(podcastId: string): PodcastEpisode[] {
  const show = CURATED_PODCASTS.find((podcast) => podcast.id === podcastId);
  return show ? show.episodes.map((episode) => ({ ...episode })) : [];
}
