import Link from "next/link";

export default function NotFound() {
  return (
    <div className="min-h-screen bg-[var(--color-bg)] flex items-center justify-center px-4">
      <div className="text-center max-w-md">
        <div className="w-20 h-20 mx-auto mb-6 rounded-full bg-blue-50 dark:bg-blue-950/30 flex items-center justify-center">
          <span className="text-3xl font-black text-blue-500">404</span>
        </div>
        <h1 className="text-3xl font-bold text-[var(--color-fg)] mb-2 tracking-tight">Page not found</h1>
        <p className="text-[var(--color-muted)] mb-8 leading-relaxed">
          The page you are looking for does not exist or has been moved.
        </p>
        <div className="flex flex-col sm:flex-row gap-3 justify-center">
          <Link
            href="/"
            className="px-6 py-3 bg-[var(--color-accent)] text-white rounded-xl font-semibold hover:opacity-90 transition-colors text-center"
          >
            Go to Home
          </Link>
          <Link
            href="/dashboard"
            className="px-6 py-3 bg-[var(--color-surface)] border border-[var(--color-border)] text-[var(--color-fg)] rounded-xl font-semibold hover:bg-[var(--color-accent-light)] transition-colors text-center"
          >
            Open Dashboard
          </Link>
        </div>
      </div>
    </div>
  );
}
