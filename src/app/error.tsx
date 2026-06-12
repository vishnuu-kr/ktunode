"use client";

import { useEffect } from "react";
import Link from "next/link";

export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  useEffect(() => {
    console.error("Route error:", error);
  }, [error]);

  return (
    <div className="min-h-screen bg-[var(--color-bg)] flex items-center justify-center px-4">
      <div className="text-center max-w-md">
        <div className="w-16 h-16 mx-auto mb-6 rounded-full bg-red-50 flex items-center justify-center">
          <svg className="w-8 h-8 text-red-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />
          </svg>
        </div>
        <h2 className="text-2xl font-bold text-[var(--color-fg)] mb-2">Something went wrong</h2>
        <p className="text-[var(--color-muted)] mb-6">
          An error occurred while loading this page. Please try again.
        </p>
        <div className="flex flex-col sm:flex-row gap-3 justify-center">
          <button
            onClick={reset}
            className="px-6 py-3 bg-[var(--color-accent)] text-white rounded-xl font-semibold hover:opacity-90 hover:bg-[var(--color-accent)] transition-colors"
          >
            Try again
          </button>
          <Link
            href="/?landing=true"
            className="px-6 py-3 bg-[var(--color-surface)] border border-[var(--color-border)] text-[var(--color-fg)] rounded-xl font-semibold hover:bg-[var(--color-accent-light)] transition-colors"
          >
            Go home
          </Link>
        </div>
      </div>
    </div>
  );
}
