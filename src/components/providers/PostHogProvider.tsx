'use client';

import posthog from 'posthog-js';
import { PostHogProvider } from 'posthog-js/react';
import { useEffect, Suspense, useRef } from 'react';
import { usePathname, useSearchParams } from 'next/navigation';
import { trackPageView } from '@/app/admin/actions';

let posthogInitialized = false;

function initPostHog() {
  if (posthogInitialized || typeof window === 'undefined') return;
  const isLocalhost = window.location.hostname === 'localhost' || window.location.hostname === '127.0.0.1';
  const key = process.env.NEXT_PUBLIC_POSTHOG_KEY;
  const host = process.env.NEXT_PUBLIC_POSTHOG_HOST || 'https://us.i.posthog.com';

  if (key && !isLocalhost) {
    posthog.init(key, {
      api_host: '/ingest',
      ui_host: host,
      person_profiles: 'identified_only',
      capture_pageview: false,
      capture_heatmaps: true,
    });
    posthogInitialized = true;
  }
}

function PostHogPageView() {
  const pathname = usePathname();
  const searchParams = useSearchParams();
  const initRef = useRef(false);

  useEffect(() => {
    if (!initRef.current) {
      initRef.current = true;
      if (typeof requestIdleCallback !== "undefined") {
        requestIdleCallback(initPostHog, { timeout: 2000 });
      } else {
        setTimeout(initPostHog, 100);
      }
    }
  }, []);

  useEffect(() => {
    const isLocalhost = window.location.hostname === 'localhost' || window.location.hostname === '127.0.0.1';
    if (pathname && typeof window !== 'undefined' && process.env.NEXT_PUBLIC_POSTHOG_KEY && !isLocalhost) {
      let url = window.origin + pathname;
      if (searchParams.toString()) {
        url = url + `?${searchParams.toString()}`;
      }
      if (posthogInitialized) {
        posthog.capture('$pageview', { $current_url: url });
      }
      trackPageView(pathname).catch(() => {});
    }
  }, [pathname, searchParams]);

  return null;
}

export function CSPostHogProvider({ children }: { children: React.ReactNode }) {
  return (
    <PostHogProvider client={posthog}>
      <Suspense fallback={null}>
        <PostHogPageView />
      </Suspense>
      {children}
    </PostHogProvider>
  );
}
