'use client';

import { useEffect, useMemo, useRef, useState } from 'react';
import { useLanguage } from '@/contexts/LanguageContext';
import type { LanguageCode } from '@/lib/i18n';
import {
  PODCAST_PLATFORM_INFO,
  getCuratedPodcasts,
  type PodcastEpisode,
  type PodcastPlatform,
  type PodcastShow,
} from '@/lib/podcastService';

interface PodcastWidgetProps {
  isOpen: boolean;
  toggleOpen: () => void;
}

type PlatformFilter = 'all' | PodcastPlatform;

const LANGUAGE_TO_LOCALE: Record<LanguageCode, string> = {
  es: 'es-ES',
  gl: 'gl-ES',
  ast: 'es-ES',
  eu: 'eu-ES',
  fr: 'fr-FR',
  en: 'en-GB',
};

export default function PodcastWidget({ isOpen, toggleOpen }: PodcastWidgetProps) {
  const { translations, language } = useLanguage();
  const copy = translations.podcastWidget;
  const podcasts = useMemo(() => getCuratedPodcasts(), []);

  const [searchTerm, setSearchTerm] = useState('');
  const [platformFilter, setPlatformFilter] = useState<PlatformFilter>('all');
  const [selectedShowId, setSelectedShowId] = useState<string | null>(podcasts[0]?.id ?? null);
  const [currentEpisode, setCurrentEpisode] = useState<PodcastEpisode | null>(
    podcasts[0]?.episodes[0] ?? null,
  );
  const [isPlaying, setIsPlaying] = useState(false);
  const [progress, setProgress] = useState(0);

  const audioRef = useRef<HTMLAudioElement>(null);
  const autoplayRef = useRef(false);

  const locale = LANGUAGE_TO_LOCALE[language] ?? 'es-ES';
  const dateFormatter = useMemo(
    () => new Intl.DateTimeFormat(locale, { dateStyle: 'medium' }),
    [locale],
  );

  const filteredShows = useMemo(() => {
    const normalized = searchTerm.trim().toLowerCase();
    return podcasts.filter((show) => {
      const matchesSearch =
        !normalized ||
        show.name.toLowerCase().includes(normalized) ||
        show.theme.toLowerCase().includes(normalized) ||
        show.description.toLowerCase().includes(normalized) ||
        show.tags.some((tag) => tag.toLowerCase().includes(normalized));

      const matchesPlatform =
        platformFilter === 'all' ||
        show.platformLinks.some((link) => link.platform === platformFilter);

      return matchesSearch && matchesPlatform;
    });
  }, [podcasts, searchTerm, platformFilter]);

  useEffect(() => {
    if (filteredShows.length === 0) {
      setSelectedShowId(null);
      autoplayRef.current = false;
      setCurrentEpisode(null);
      setIsPlaying(false);
      setProgress(0);
      return;
    }

    if (!selectedShowId) {
      setSelectedShowId(filteredShows[0].id);
      return;
    }

    const stillVisible = filteredShows.some((show) => show.id === selectedShowId);
    if (!stillVisible) {
      setSelectedShowId(filteredShows[0].id);
    }
  }, [filteredShows, selectedShowId]);

  const selectedShow = useMemo<PodcastShow | null>(() => {
    if (!selectedShowId) return null;
    return podcasts.find((show) => show.id === selectedShowId) ?? null;
  }, [podcasts, selectedShowId]);

  useEffect(() => {
    if (!selectedShow) {
      setCurrentEpisode(null);
      setIsPlaying(false);
      setProgress(0);
      return;
    }

    if (!currentEpisode || currentEpisode.podcastId !== selectedShow.id) {
      autoplayRef.current = false;
      setCurrentEpisode(selectedShow.episodes[0] ?? null);
      setIsPlaying(false);
      setProgress(0);
    }
  }, [selectedShow, currentEpisode]);

  useEffect(() => {
    const audio = audioRef.current;
    if (!audio) return;

    const updateProgress = () => {
      if (!audio.duration) {
        setProgress(0);
        return;
      }
      setProgress((audio.currentTime / audio.duration) * 100);
    };

    const handleEnded = () => {
      setIsPlaying(false);
    };

    audio.addEventListener('timeupdate', updateProgress);
    audio.addEventListener('ended', handleEnded);

    return () => {
      audio.removeEventListener('timeupdate', updateProgress);
      audio.removeEventListener('ended', handleEnded);
    };
  }, []);

  useEffect(() => {
    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'Escape' && isOpen) {
        toggleOpen();
      }
    };

    window.addEventListener('keydown', onKeyDown);
    return () => window.removeEventListener('keydown', onKeyDown);
  }, [isOpen, toggleOpen]);

  useEffect(() => {
    const audio = audioRef.current;
    if (!audio || !currentEpisode) {
      setIsPlaying(false);
      setProgress(0);
      return;
    }

    audio.src = currentEpisode.audioUrl;
    audio.load();

    if (autoplayRef.current) {
      const playPromise = audio.play();
      if (playPromise) {
        playPromise
          .then(() => setIsPlaying(true))
          .catch((error) => {
            console.error('Playback failed', error);
            setIsPlaying(false);
          });
      } else {
        setIsPlaying(true);
      }
    } else {
      audio.pause();
      audio.currentTime = 0;
      setIsPlaying(false);
    }

    autoplayRef.current = false;
  }, [currentEpisode]);

  const togglePlay = () => {
    const audio = audioRef.current;
    if (!audio || !currentEpisode) return;

    if (isPlaying) {
      audio.pause();
      setIsPlaying(false);
      return;
    }

    audio
      .play()
      .then(() => setIsPlaying(true))
      .catch((error) => {
        console.error('Playback failed', error);
        setIsPlaying(false);
      });
  };

  const handleEpisodeSelect = (episode: PodcastEpisode) => {
    autoplayRef.current = true;
    setCurrentEpisode(episode);
    setProgress(0);
  };

  const handleProgressChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const value = Number(event.target.value);
    setProgress(value);
    if (audioRef.current && audioRef.current.duration) {
      audioRef.current.currentTime = (value / 100) * audioRef.current.duration;
    }
  };

  const panelId = 'podcast-widget-panel';
  const titleId = 'podcast-widget-title';
  const subtitleId = 'podcast-widget-subtitle';

  return (
    <>
      <button
        type="button"
        onClick={toggleOpen}
        className={`fixed bottom-6 right-6 z-50 flex items-center justify-center rounded-full bg-primary-600 p-4 text-white shadow-2xl transition-all duration-300 focus-visible:outline-none focus-visible:ring-4 focus-visible:ring-primary-300 sm:p-5 ${
          isOpen ? 'pointer-events-none scale-90 opacity-0' : 'scale-100 opacity-100'
        }`}
        aria-label={copy.openLabel}
        aria-haspopup="dialog"
        aria-controls={panelId}
        aria-expanded={isOpen}
      >
        <span className="sr-only">{copy.openLabel}</span>
        <span className="relative flex h-12 w-12 items-center justify-center sm:h-14 sm:w-14">
          <span className="absolute inset-0 rounded-full bg-white/20 blur" aria-hidden="true" />
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            className="h-8 w-8 text-white"
            aria-hidden="true"
          >
            <path
              fill="currentColor"
              d="M11.25 3.5c0-1.1.9-2 2-2 1.1 0 2 .9 2 2s-.9 2-2 2a2 2 0 01-2-2zm-6 3.5c0-1.1.9-2 2-2s2 .9 2 2-.9 2-2 2a2 2 0 01-2-2zm11.5 4.75c0-1.38 1.12-2.5 2.5-2.5s2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5-2.5-1.12-2.5-2.5zM3 12c0-1.1.9-2 2-2s2 .9 2 2-2 3.5-2 3.5S3 13.1 3 12zm5.5 6.25A2.75 2.75 0 0111.25 15h.5c.69 0 1.25.56 1.25 1.25v4.5c0 .69-.56 1.25-1.25 1.25h-.5A2.75 2.75 0 018.5 18.25z"
            />
          </svg>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 20 20"
            className="absolute h-4 w-4 text-primary-100"
            aria-hidden="true"
          >
            <path d="M8 6l6 4-6 4V6z" fill="currentColor" />
          </svg>
        </span>
      </button>

      <div
        className={`fixed inset-0 z-40 transition-opacity duration-300 ${
          isOpen ? 'pointer-events-auto opacity-100' : 'pointer-events-none opacity-0'
        }`}
        aria-hidden={!isOpen}
      >
        <div
          className="absolute inset-0 bg-neutral-900/50"
          onClick={toggleOpen}
          aria-hidden="true"
        />
        <section
          id={panelId}
          role="dialog"
          aria-modal="true"
          aria-labelledby={titleId}
          aria-describedby={subtitleId}
          className={`absolute inset-y-0 right-0 w-full max-w-xl transform bg-white shadow-2xl transition-transform duration-300 ${
            isOpen ? 'translate-x-0' : 'translate-x-full'
          }`}
        >
          <div className="flex h-full flex-col">
            <header className="border-b border-neutral-200 p-6">
              <div className="flex items-start justify-between gap-4">
                <div>
                  <p className="text-sm font-semibold uppercase tracking-wide text-primary-600">
                    {copy.title}
                  </p>
                  <h2 id={titleId} className="text-2xl font-bold text-neutral-900">
                    {copy.subtitle}
                  </h2>
                  <p id={subtitleId} className="mt-2 text-sm text-neutral-600">
                    {copy.accessibilityHint}
                  </p>
                </div>
                <button
                  type="button"
                  onClick={toggleOpen}
                  className="rounded-full border border-neutral-200 p-2 text-neutral-500 transition hover:text-neutral-700 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary-500"
                  aria-label={copy.closeLabel}
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    className="h-5 w-5"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth={2}
                    aria-hidden="true"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                  </svg>
                </button>
              </div>
            </header>

            <div className="flex-1 overflow-y-auto p-6">
              <div className="flex flex-col gap-4 sm:flex-row">
                <label className="flex-1 text-sm font-semibold text-neutral-700">
                  {copy.searchLabel}
                  <div className="mt-1 flex items-center rounded-full border border-neutral-200 px-3 focus-within:ring-2 focus-within:ring-primary-500">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 24 24"
                      className="h-4 w-4 text-neutral-400"
                      aria-hidden="true"
                    >
                      <path
                        fill="currentColor"
                        d="M10 4a6 6 0 014.472 9.993l4.267 4.268-1.414 1.414-4.268-4.267A6 6 0 1110 4zm0 2a4 4 0 100 8 4 4 0 000-8z"
                      />
                    </svg>
                    <input
                      type="search"
                      className="w-full border-0 bg-transparent px-2 py-2 text-sm text-neutral-800 placeholder-neutral-400 focus:outline-none"
                      placeholder={copy.searchPlaceholder}
                      value={searchTerm}
                      onChange={(event) => setSearchTerm(event.target.value)}
                      aria-label={copy.searchLabel}
                    />
                  </div>
                </label>
                <label className="text-sm font-semibold text-neutral-700">
                  {copy.platformLabel}
                  <select
                    className="mt-1 w-full rounded-full border border-neutral-200 px-3 py-2 text-sm text-neutral-800 focus:outline-none focus:ring-2 focus:ring-primary-500"
                    value={platformFilter}
                    onChange={(event) => setPlatformFilter(event.target.value as PlatformFilter)}
                  >
                    <option value="all">{copy.platformAll}</option>
                    {Object.entries(PODCAST_PLATFORM_INFO).map(([key, info]) => (
                      <option key={key} value={key}>
                        {info.label}
                      </option>
                    ))}
                  </select>
                </label>
              </div>

              <div className="mt-6 grid gap-6 lg:grid-cols-[0.95fr_1.05fr]">
                <section aria-label={copy.listLabel} className="space-y-3">
                  {filteredShows.length === 0 && (
                    <p className="rounded-2xl border border-dashed border-neutral-300 bg-neutral-50 p-4 text-sm text-neutral-600">
                      {copy.emptyState}
                    </p>
                  )}

                  {filteredShows.map((show) => {
                    const isSelected = show.id === selectedShowId;
                    return (
                      <button
                        type="button"
                        key={show.id}
                        onClick={() => setSelectedShowId(show.id)}
                        className={`w-full rounded-2xl border p-4 text-left transition focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary-500 ${
                          isSelected
                            ? 'border-primary-500 bg-primary-50 shadow-lg'
                            : 'border-neutral-200 bg-white hover:border-primary-200'
                        }`}
                        aria-pressed={isSelected}
                      >
                        <div className="flex items-center gap-4">
                          <div
                            className="flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-2xl text-base font-semibold text-neutral-800"
                            style={{ backgroundColor: show.accentColor }}
                            aria-hidden="true"
                          >
                            {show.name
                              .split(' ')
                              .slice(0, 2)
                              .map((word) => word[0])
                              .join('')
                              .toUpperCase()}
                          </div>
                          <div className="flex-1">
                            <p className="text-base font-semibold text-neutral-900">{show.name}</p>
                            <p className="text-sm text-neutral-500">{show.theme}</p>
                            <div className="mt-2 flex flex-wrap gap-2">
                              {show.platformLinks.map((link) => {
                                const info = PODCAST_PLATFORM_INFO[link.platform];
                                return (
                                  <span
                                    key={`${show.id}-${link.platform}`}
                                    className={`rounded-full px-2 py-0.5 text-xs font-medium ${info.accent}`}
                                  >
                                    {info.label}
                                  </span>
                                );
                              })}
                            </div>
                          </div>
                        </div>
                        <div className="mt-3 flex flex-wrap gap-2">
                          {show.tags.map((tag) => (
                            <span
                              key={`${show.id}-${tag}`}
                              className="rounded-full bg-neutral-100 px-2 py-0.5 text-xs text-neutral-600"
                            >
                              {tag}
                            </span>
                          ))}
                        </div>
                      </button>
                    );
                  })}
                </section>

                <section className="space-y-4" aria-live="polite">
                  {selectedShow ? (
                    <div className="rounded-2xl border border-neutral-200 p-4 shadow-sm">
                      <p className="text-sm font-semibold uppercase tracking-wide text-primary-600">
                        {selectedShow.host}
                      </p>
                      <h3 className="mt-1 text-xl font-bold text-neutral-900">{selectedShow.name}</h3>
                      <p className="mt-2 text-sm text-neutral-600">{selectedShow.description}</p>

                      <dl className="mt-4 grid gap-3 text-xs text-neutral-500 sm:grid-cols-3">
                        <div>
                          <dt className="font-semibold text-neutral-800">{copy.metadata.duration}</dt>
                          <dd>{selectedShow.typicalDuration}</dd>
                        </div>
                        <div>
                          <dt className="font-semibold text-neutral-800">{copy.metadata.theme}</dt>
                          <dd>{selectedShow.theme}</dd>
                        </div>
                        <div>
                          <dt className="font-semibold text-neutral-800">
                            {copy.metadata.lastUpdate}
                          </dt>
                          <dd>{dateFormatter.format(new Date(selectedShow.lastUpdate))}</dd>
                        </div>
                      </dl>

                      {selectedShow.embedUrl && (
                        <div className="mt-4 rounded-xl border border-neutral-200 bg-neutral-50 p-3">
                          <p className="text-xs font-semibold uppercase tracking-wide text-neutral-500">
                            {copy.embedTitle}
                          </p>
                          <iframe
                            src={selectedShow.embedUrl}
                            title={`${selectedShow.name} ${copy.embedTitle}`}
                            loading="lazy"
                            className="mt-2 h-32 w-full rounded-lg border-0"
                            allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
                          />
                        </div>
                      )}

                      <div className="mt-4 flex flex-wrap gap-2">
                        {selectedShow.platformLinks.map((link) => {
                          const info = PODCAST_PLATFORM_INFO[link.platform];
                          const label = copy.player.visitPlatform.replace('{platform}', info.label);
                          return (
                            <a
                              key={`${selectedShow.id}-${link.platform}`}
                              href={link.url}
                              target="_blank"
                              rel="noreferrer noopener"
                              className="inline-flex items-center gap-1 rounded-full border border-primary-200 px-3 py-1 text-xs font-semibold text-primary-700 transition hover:border-primary-400 hover:text-primary-900 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary-500"
                            >
                              {label}
                              <svg
                                xmlns="http://www.w3.org/2000/svg"
                                viewBox="0 0 24 24"
                                className="h-3 w-3"
                                fill="none"
                                stroke="currentColor"
                                strokeWidth={2}
                                aria-hidden="true"
                              >
                                <path strokeLinecap="round" strokeLinejoin="round" d="M5 12h14m-6-6l6 6-6 6" />
                              </svg>
                            </a>
                          );
                        })}
                      </div>
                    </div>
                  ) : (
                    <p className="rounded-2xl border border-dashed border-neutral-300 bg-neutral-50 p-4 text-sm text-neutral-600">
                      {copy.emptyState}
                    </p>
                  )}

                  {selectedShow && selectedShow.episodes.length > 0 && (
                    <div className="rounded-2xl border border-neutral-200 p-4 shadow-sm">
                      <p className="text-sm font-semibold text-neutral-900">{copy.episodesTitle}</p>
                      <div className="mt-3 space-y-3">
                        {selectedShow.episodes.map((episode) => {
                          const isActive = currentEpisode?.id === episode.id;
                          return (
                            <button
                              type="button"
                              key={episode.id}
                              onClick={() => handleEpisodeSelect(episode)}
                              className={`w-full rounded-xl border p-3 text-left transition focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary-500 ${
                                isActive
                                  ? 'border-primary-500 bg-primary-50'
                                  : 'border-neutral-200 bg-white hover:border-primary-200'
                              }`}
                              aria-pressed={isActive}
                            >
                              <div className="flex items-start justify-between gap-3">
                                <div>
                                  <p className="text-sm font-semibold text-neutral-900">
                                    {episode.title}
                                  </p>
                                  <p className="mt-1 text-sm text-neutral-600">{episode.summary}</p>
                                </div>
                                <span className="text-xs font-medium text-neutral-500">
                                  {episode.duration}
                                </span>
                              </div>
                              <p className="mt-2 text-xs text-neutral-500">
                                {dateFormatter.format(new Date(episode.publishedAt))}
                              </p>
                            </button>
                          );
                        })}
                      </div>
                    </div>
                  )}

                  <div className="rounded-2xl border border-neutral-200 p-4 shadow-sm">
                    <p className="text-xs font-semibold uppercase tracking-wide text-neutral-500">
                      {copy.player.heading}
                    </p>
                    {currentEpisode ? (
                      <>
                        <div className="mt-2">
                          <p className="text-lg font-semibold text-neutral-900">
                            {currentEpisode.title}
                          </p>
                          <p className="text-sm text-neutral-600">{currentEpisode.summary}</p>
                        </div>
                        <div className="sr-only" aria-live="polite">
                          {copy.player.nowPlaying}: {currentEpisode.title}
                        </div>
                        <input
                          type="range"
                          min={0}
                          max={100}
                          value={progress}
                          onChange={handleProgressChange}
                          className="mt-4 w-full accent-primary-600"
                          aria-label={copy.player.progressLabel}
                          aria-valuemin={0}
                          aria-valuemax={100}
                          aria-valuenow={Math.round(progress)}
                        />
                        <div className="mt-3 flex items-center justify-between">
                          <button
                            type="button"
                            onClick={togglePlay}
                            className="flex h-12 w-12 items-center justify-center rounded-full bg-primary-600 text-white shadow-lg transition hover:bg-primary-700 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary-500"
                            aria-label={isPlaying ? copy.player.pause : copy.player.play}
                            aria-pressed={isPlaying}
                          >
                            {isPlaying ? (
                              <svg
                                xmlns="http://www.w3.org/2000/svg"
                                viewBox="0 0 24 24"
                                className="h-6 w-6"
                                fill="currentColor"
                                aria-hidden="true"
                              >
                                <path d="M7 5h3v14H7zm7 0h3v14h-3z" />
                              </svg>
                            ) : (
                              <svg
                                xmlns="http://www.w3.org/2000/svg"
                                viewBox="0 0 24 24"
                                className="h-6 w-6"
                                fill="currentColor"
                                aria-hidden="true"
                              >
                                <path d="M8 5v14l11-7z" />
                              </svg>
                            )}
                          </button>
                          <span className="text-xs font-semibold text-neutral-500">
                            {copy.player.durationLabel}: {currentEpisode.duration}
                          </span>
                        </div>
                      </>
                    ) : (
                      <p className="mt-2 text-sm text-neutral-600">{copy.emptyState}</p>
                    )}
                  </div>

                  <p className="text-xs text-neutral-500">{copy.legalReminder}</p>
                </section>
              </div>
            </div>
          </div>
        </section>
      </div>

      <audio ref={audioRef} aria-hidden="true" />
    </>
  );
}
