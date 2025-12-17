'use client';

import { useState, useEffect, useRef } from 'react';
import { useLanguage } from '@/contexts/LanguageContext';

interface PodcastEpisode {
  id: string;
  title: string;
  description: string;
  duration: string;
  audioUrl: string;
  podcastName: string;
  date: string;
}

interface PodcastPlayerProps {
  isOpen: boolean;
  toggleOpen: () => void;
}

export default function PodcastPlayer({ isOpen, toggleOpen }: PodcastPlayerProps) {
  const [currentEpisode, setCurrentEpisode] = useState<PodcastEpisode | null>(null);
  const [isPlaying, setIsPlaying] = useState(false);
  const [progress, setProgress] = useState(0);
  const [volume, setVolume] = useState(1);
  const [isVolumeVisible, setIsVolumeVisible] = useState(false);
  const audioRef = useRef<HTMLAudioElement>(null);

  const { translations } = useLanguage();
  const { home } = translations;

  // Mock data for podcast episodes
  const podcastEpisodes: PodcastEpisode[] = [
    {
      id: '1',
      title: 'Educación Canina Positiva',
      description: 'Técnicas de entrenamiento basadas en el refuerzo positivo',
      duration: '22:15',
      audioUrl: 'https://example.com/podcast1.mp3',
      podcastName: 'Hablemos de Perros',
      date: '2024-01-15'
    },
    {
      id: '2',
      title: 'El Lenguaje Corporal de los Perros',
      description: 'Interpretar las señales de comunicación canina',
      duration: '18:42',
      audioUrl: 'https://example.com/podcast2.mp3',
      podcastName: 'Perros by PAT',
      date: '2024-01-10'
    },
    {
      id: '3',
      title: 'Viajar con Perros: Consejos Prácticos',
      description: 'Cómo preparar tu viaje con mascotas de forma segura',
      duration: '25:30',
      audioUrl: 'https://example.com/podcast3.mp3',
      podcastName: 'Pongamos que Hablo de Perros',
      date: '2024-01-05'
    },
    {
      id: '4',
      title: 'Rescatar y Adoptar',
      description: 'Consideraciones al adoptar un perro rescatado',
      duration: '20:18',
      audioUrl: 'https://example.com/podcast4.mp3',
      podcastName: 'Amores de garra',
      date: '2024-01-01'
    },
    {
      id: '5',
      title: 'Bienestar Animal en Viajes',
      description: 'Cuidados esenciales durante desplazamientos',
      duration: '19:55',
      audioUrl: 'https://example.com/podcast5.mp3',
      podcastName: 'PERROS',
      date: '2023-12-28'
    }
  ];

  useEffect(() => {
    const audio = audioRef.current;
    if (!audio) return;

    const updateProgress = () => {
      if (audio.duration) {
        setProgress((audio.currentTime / audio.duration) * 100);
      }
    };

    audio.addEventListener('timeupdate', updateProgress);
    audio.addEventListener('ended', () => setIsPlaying(false));

    return () => {
      audio.removeEventListener('timeupdate', updateProgress);
      audio.removeEventListener('ended', () => setIsPlaying(false));
    };
  }, [currentEpisode]);

  const togglePlay = () => {
    if (!currentEpisode) return;

    if (isPlaying) {
      audioRef.current?.pause();
    } else {
      if (audioRef.current?.src !== currentEpisode.audioUrl) {
        audioRef.current!.src = currentEpisode.audioUrl;
      }
      audioRef.current?.play().catch(e => console.error('Playback failed:', e));
    }
    setIsPlaying(!isPlaying);
  };

  const handlePlayEpisode = (episode: PodcastEpisode) => {
    setCurrentEpisode(episode);
    setIsPlaying(true);
  };

  const handleProgressChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const newProgress = parseFloat(e.target.value);
    setProgress(newProgress);
    if (audioRef.current && audioRef.current.duration) {
      audioRef.current.currentTime = (newProgress / 100) * audioRef.current.duration;
    }
  };

  const handleVolumeChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const newVolume = parseFloat(e.target.value);
    setVolume(newVolume);
    if (audioRef.current) {
      audioRef.current.volume = newVolume;
    }
  };

  // Manejar teclas de acceso rápido para accesibilidad
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === ' ' && document.activeElement?.id === 'podcast-play-button') {
        e.preventDefault();
        togglePlay();
      } else if (e.key === 'Escape' && isOpen) {
        toggleOpen();
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [isPlaying, currentEpisode, isOpen, toggleOpen]);

  return (
    <>
      <button
        id="podcast-open-button"
        onClick={toggleOpen}
        className={`fixed bottom-6 right-6 z-50 flex items-center justify-center w-16 h-16 rounded-full shadow-lg bg-primary-600 text-white hover:bg-primary-700 transition-all duration-300 ${
          isOpen ? 'opacity-0 pointer-events-none' : 'opacity-100'
        }`}
        aria-label={home?.podcastPlayer?.ariaLabel || 'Abrir reproductor de podcasts'}
        aria-expanded={isOpen}
      >
        <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
          <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM9.555 7.168A1 1 0 008 8v4a1 1 0 001.555.832l3-2a1 1 0 000-1.664l-3-2z" clipRule="evenodd" />
        </svg>
      </button>

      <div
        className={`fixed inset-0 bg-black bg-opacity-50 z-40 transition-opacity duration-300 ${
          isOpen ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'
        }`}
        onClick={toggleOpen}
        aria-hidden={!isOpen}
      >
        <div
          className={`absolute bottom-0 right-0 w-full max-w-md h-5/6 bg-white rounded-t-3xl shadow-2xl transform transition-transform duration-300 ${
            isOpen ? 'translate-y-0' : 'translate-y-full'
          }`}
          onClick={e => e.stopPropagation()}
          role="dialog"
          aria-modal="true"
          aria-labelledby="podcast-dialog-title"
        >
          <div className="p-6 h-full flex flex-col">
            <div className="flex justify-between items-center mb-6">
              <h2 id="podcast-dialog-title" className="text-xl font-bold text-neutral-900">
                {home?.podcastPlayer?.title || 'Podcasts Pet Friendly'}
              </h2>
              <button
                onClick={toggleOpen}
                className="text-neutral-500 hover:text-neutral-700 focus:outline-none focus:ring-2 focus:ring-primary-500 rounded-full p-1"
                aria-label="Cerrar panel de podcasts"
              >
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>
            </div>

            <div className="flex-1 overflow-y-auto" id="podcast-list">
              <div className="space-y-4">
                {podcastEpisodes.map((episode) => (
                  <div
                    key={episode.id}
                    className={`p-4 rounded-xl border cursor-pointer transition-all focus:outline-none focus:ring-2 focus:ring-primary-500 ${
                      currentEpisode?.id === episode.id
                        ? 'border-primary-500 bg-primary-50'
                        : 'border-neutral-200 hover:bg-neutral-50'
                    }`}
                    onClick={() => handlePlayEpisode(episode)}
                    onKeyDown={(e) => e.key === 'Enter' && handlePlayEpisode(episode)}
                    tabIndex={0}
                    role="button"
                    aria-label={`Reproducir episodio ${episode.title} del podcast ${episode.podcastName}`}
                  >
                    <div className="flex justify-between">
                      <h3 className="font-semibold text-neutral-900">{episode.title}</h3>
                      <span className="text-sm text-neutral-500">{episode.duration}</span>
                    </div>
                    <p className="text-sm text-neutral-600 mt-1">{episode.podcastName}</p>
                    <p className="text-xs text-neutral-500 mt-1">{episode.date}</p>
                  </div>
                ))}
              </div>
            </div>

            {currentEpisode && (
              <div className="mt-6 pt-6 border-t border-neutral-200">
                <div className="flex items-center mb-4">
                  <div className="flex-shrink-0 mr-4">
                    <div className="w-12 h-12 bg-primary-100 rounded-lg flex items-center justify-center">
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-primary-600" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                        <path d="M18 3a1 1 0 00-1.196-.98l-10 2A1 1 0 006 5v9.114A4.369 4.369 0 005 14c-1.657 0-3 .895-3 2s1.343 2 3 2 3-.895 3-2V7.82l8-1.6v5.894A4.37 4.37 0 0015 12c-1.657 0-3 .895-3 2s1.343 2 3 2 3-.895 3-2V3z" />
                      </svg>
                    </div>
                  </div>
                  <div className="flex-1 min-w-0">
                    <h4 className="font-semibold text-neutral-900 truncate" id="current-episode-title">{currentEpisode.title}</h4>
                    <p className="text-sm text-neutral-600 truncate">{currentEpisode.podcastName}</p>
                  </div>
                </div>

                <div className="sr-only" aria-live="polite">
                  Progreso actual: {Math.round(progress)}%
                </div>
                <input
                  type="range"
                  id="progress-slider"
                  min="0"
                  max="100"
                  value={progress}
                  onChange={handleProgressChange}
                  className="w-full h-2 bg-neutral-200 rounded-lg appearance-none cursor-pointer accent-primary-600"
                  aria-label="Control de progreso"
                  aria-valuemin={0}
                  aria-valuemax={100}
                  aria-valuenow={Math.round(progress)}
                  aria-valuetext={`Progreso actual ${Math.round(progress)}%`}
                />

                <div className="flex items-center justify-between mt-4">
                  <div className="flex items-center space-x-4">
                    <button
                      id="podcast-play-button"
                      onClick={togglePlay}
                      className="p-2 rounded-full bg-primary-600 text-white hover:bg-primary-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary-500"
                      aria-label={isPlaying ? 'Pausar' : 'Reproducir'}
                      aria-pressed={isPlaying}
                    >
                      {isPlaying ? (
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                          <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zM7 8a1 1 0 012 0v4a1 1 0 11-2 0V8zm5-1a1 1 0 00-1 1v4a1 1 0 102 0V8a1 1 0 00-1-1z" clipRule="evenodd" />
                        </svg>
                      ) : (
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                          <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM9.555 7.168A1 1 0 008 8v4a1 1 0 001.555.832l3-2a1 1 0 000-1.664l-3-2z" clipRule="evenodd" />
                        </svg>
                      )}
                    </button>
                  </div>

                  <div className="flex items-center space-x-2">
                    <button
                      className="text-neutral-500 hover:text-neutral-700 focus:outline-none focus:ring-2 focus:ring-primary-500 rounded-full p-1"
                      onClick={() => setIsVolumeVisible(!isVolumeVisible)}
                      aria-label={isVolumeVisible ? 'Ocultar control de volumen' : 'Mostrar control de volumen'}
                      aria-expanded={isVolumeVisible}
                    >
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                        <path fillRule="evenodd" d="M9.383 3.076A1 1 0 0110 4v12a1 1 0 01-1.707.707L4.586 13H2a1 1 0 01-1-1V8a1 1 0 011-1h2.586l3.707-3.707a1 1 0 011.09-.217zM14.657 2.929a1 1 0 011.414 0A9.972 9.972 0 0119 10a9.972 9.972 0 01-2.929 7.071 1 1 0 01-1.414-1.414A7.971 7.971 0 0017 10c0-2.21-.894-4.208-2.343-5.657a1 1 0 010-1.414zm-2.829 2.828a1 1 0 011.415 0A5.983 5.983 0 0115 10a5.984 5.984 0 01-1.757 4.243 1 1 0 01-1.415-1.415A3.984 3.984 0 0013 10a3.983 3.983 0 00-1.172-2.828 1 1 0 010-1.415z" clipRule="evenodd" />
                      </svg>
                    </button>

                    {isVolumeVisible && (
                      <div className="flex items-center space-x-2">
                        <input
                          type="range"
                          id="volume-slider"
                          min="0"
                          max="1"
                          step="0.01"
                          value={volume}
                          onChange={handleVolumeChange}
                          className="w-16 h-2 bg-neutral-200 rounded-lg appearance-none cursor-pointer accent-primary-600"
                          aria-label="Control de volumen"
                          aria-valuemin={0}
                          aria-valuemax={1}
                          aria-valuenow={volume}
                        />
                      </div>
                    )}
                  </div>
                </div>
              </div>
            )}

            <audio
              ref={audioRef}
              src={currentEpisode?.audioUrl}
              aria-hidden="true"
            />
          </div>
        </div>
      </div>
    </>
  );
}
