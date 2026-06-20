/**
 * app/dashboard/layout.tsx  (EXAMPLE)
 * ---------------------------------------------------------------------------
 * The dashboard is a private app surface, not SEO content. Mark the whole
 * route group noindex so Google stops trying to index it (it was sharing the
 * homepage title + canonical before). Applies to all nested dashboard pages.
 * ---------------------------------------------------------------------------
 */
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Dashboard",
  robots: { index: false, follow: false, nocache: true },
  alternates: { canonical: undefined },
};

export default function DashboardLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
