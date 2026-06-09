"use client";

export default function GlobalError({
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  return (
    <html lang="en">
      <body className="min-h-screen bg-[var(--color-bg, #fef2f2)] flex items-center justify-center px-4 font-sans">
        <div className="text-center max-w-md">
          <div className="w-16 h-16 mx-auto mb-6 rounded-full bg-red-50 dark:bg-red-950/30 flex items-center justify-center">
            <svg className="w-8 h-8 text-red-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />
            </svg>
          </div>
          <h2 className="text-2xl font-bold text-[var(--color-fg, #1e293b)] mb-2">Something went wrong</h2>
          <p className="text-[var(--color-muted, #64748b)] mb-6">
            An unexpected error occurred. Please try again.
          </p>
          <div className="flex flex-col sm:flex-row gap-3 justify-center">
            <button
              onClick={() => reset()}
              className="px-6 py-3 bg-[var(--color-accent, #3b82f6)] text-white rounded-xl font-semibold hover:opacity-90 transition-colors cursor-pointer"
            >
              Try Again
            </button>
            <a
              href="/"
              className="px-6 py-3 bg-[var(--color-surface, #f1f5f9)] border border-[var(--color-border, #e2e8f0)] text-[var(--color-fg, #1e293b)] rounded-xl font-semibold hover:bg-[var(--color-accent-light, #eff6ff)] transition-colors"
            >
              Go Home
            </a>
          </div>
        </div>
      </body>
    </html>
  );
}
