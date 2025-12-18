'use client';

import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { SessionProvider } from 'next-auth/react';
import { ReactNode, useState } from 'react';
import { LanguageProvider } from '@/contexts/LanguageContext';
import PodcastWidget from './PodcastWidget';
import CookieConsent from './CookieConsent';

interface ProvidersProps {
  children: ReactNode;
}

export default function Providers({ children }: ProvidersProps) {
  const [queryClient] = useState(() => new QueryClient());
  const [isPodcastWidgetOpen, setIsPodcastWidgetOpen] = useState(false);

  return (
    <SessionProvider>
      <QueryClientProvider client={queryClient}>
        <LanguageProvider>
          {children}
          <PodcastWidget
            isOpen={isPodcastWidgetOpen}
            toggleOpen={() => setIsPodcastWidgetOpen(!isPodcastWidgetOpen)}
          />
          <CookieConsent />
        </LanguageProvider>
      </QueryClientProvider>
    </SessionProvider>
  );
}
