'use client';

import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { SessionProvider } from 'next-auth/react';
import { ReactNode, useState } from 'react';
import { LanguageProvider } from '@/contexts/LanguageContext';
import PodcastPlayer from './PodcastPlayer';

interface ProvidersProps {
  children: ReactNode;
}

export default function Providers({ children }: ProvidersProps) {
  const [queryClient] = useState(() => new QueryClient());
  const [isPodcastPlayerOpen, setIsPodcastPlayerOpen] = useState(false);

  return (
    <SessionProvider>
      <QueryClientProvider client={queryClient}>
        <LanguageProvider>
          {children}
          <PodcastPlayer
            isOpen={isPodcastPlayerOpen}
            toggleOpen={() => setIsPodcastPlayerOpen(!isPodcastPlayerOpen)}
          />
        </LanguageProvider>
      </QueryClientProvider>
    </SessionProvider>
  );
}
