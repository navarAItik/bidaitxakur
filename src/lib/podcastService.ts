import { PodcastEpisode } from '@/components/PodcastPlayer';

// URLs de los feeds RSS de los podcasts sugeridos
const PODCAST_FEEDS = {
  'Hablemos de Perros': 'https://www.ivoox.com/podcast-hablemos-de-perros_fg_f1131863_filtro_1.xml',
  'Perros by PAT': 'https://www.ivoox.com/podcast-perros-by-pat_fg_f1131863_filtro_1.xml',
  'Pongamos que Hablo de Perros': 'https://podcasts.apple.com/es/podcast/pongameos-que-hablo-de-perros/id1521783453',
  'Amores de garra': 'https://www.ivoox.com/podcast-amores-de-garra_fg_f1131863_filtro_1.xml',
  'PERROS': 'https://podcasts.apple.com/es/podcast/perros/id1521783453'
};

export interface PodcastFeedData {
  id: string;
  title: string;
  description: string;
  duration: string;
  audioUrl: string;
  podcastName: string;
  date: string;
  image?: string;
}

export async function fetchPodcastEpisodes(): Promise<PodcastEpisode[]> {
  // En una implementación real, aquí haríamos llamadas reales a las APIs o feeds RSS
  // Por ahora, devolveremos datos mock con información más realista

  return [
    {
      id: 'hdpp001',
      title: 'Educación Canina Positiva',
      description: 'Técnicas efectivas de entrenamiento basadas en el refuerzo positivo y respeto al perro.',
      duration: '22:15',
      audioUrl: 'https://www.soundhelix.com/examples/mp3/SoundHelix-Song-1.mp3', // URL de ejemplo que permite CORS
      podcastName: 'Hablemos de Perros',
      date: '2024-01-15'
    },
    {
      id: 'hdpp002',
      title: 'Comportamiento y Etología Canina',
      description: 'Entendiendo la conducta natural de los perros y su evolución.',
      duration: '25:40',
      audioUrl: 'https://www.soundhelix.com/examples/mp3/SoundHelix-Song-2.mp3', // URL de ejemplo que permite CORS
      podcastName: 'Hablemos de Perros',
      date: '2024-01-08'
    },
    {
      id: 'pbp001',
      title: 'El Lenguaje Corporal de los Perros',
      description: 'Cómo interpretar las señales de comunicación canina para mejorar la relación.',
      duration: '18:42',
      audioUrl: 'https://www.soundhelix.com/examples/mp3/SoundHelix-Song-3.mp3', // URL de ejemplo que permite CORS
      podcastName: 'Perros by PAT',
      date: '2024-01-10'
    },
    {
      id: 'pbp002',
      title: 'Crianza Científica de Perros',
      description: 'Basado en evidencia científica sobre crianza y educación canina.',
      duration: '21:30',
      audioUrl: 'https://www.soundhelix.com/examples/mp3/SoundHelix-Song-4.mp3', // URL de ejemplo que permite CORS
      podcastName: 'Perros by PAT',
      date: '2024-01-03'
    },
    {
      id: 'pqhdpp001',
      title: 'Conversaciones con Expertos',
      description: 'Entrevistas a profesionales del mundo canino sobre diversos temas.',
      duration: '25:30',
      audioUrl: 'https://www.soundhelix.com/examples/mp3/SoundHelix-Song-5.mp3', // URL de ejemplo que permite CORS
      podcastName: 'Pongamos que Hablo de Perros',
      date: '2024-01-05'
    },
    {
      id: 'adg001',
      title: 'Adopción Responsable',
      description: 'Consideraciones importantes al adoptar un perro rescatado.',
      duration: '20:18',
      audioUrl: 'https://www.soundhelix.com/examples/mp3/SoundHelix-Song-6.mp3', // URL de ejemplo que permite CORS
      podcastName: 'Amores de garra',
      date: '2024-01-01'
    },
    {
      id: 'perros001',
      title: 'Bienestar Animal en Viajes',
      description: 'Cómo garantizar el bienestar de tu perro durante los desplazamientos.',
      duration: '19:55',
      audioUrl: 'https://www.soundhelix.com/examples/mp3/SoundHelix-Song-7.mp3', // URL de ejemplo que permite CORS
      podcastName: 'PERROS',
      date: '2023-12-28'
    }
  ];
}

// Función para obtener episodios de un podcast específico
export async function fetchPodcastEpisodesByPodcast(podcastName: string): Promise<PodcastEpisode[]> {
  const allEpisodes = await fetchPodcastEpisodes();
  return allEpisodes.filter(episode => episode.podcastName === podcastName);
}
