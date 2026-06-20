import type { Metadata } from "next";
import "./globals.css";
import { Plus_Jakarta_Sans, Outfit, Poppins } from "next/font/google";
import { ThemeProvider } from "next-themes";
import { CSPostHogProvider } from "@/components/providers/PostHogProvider";
import Script from "next/script";
import { headers, cookies } from "next/headers";
import LockdownGate from "@/components/ui/LockdownGate";
import DismissibleBanner from "@/components/ui/DismissibleBanner";
import { parseKeywords, readSiteConfig, SITE_URL } from "@/lib/siteConfig";
import { logEnvironmentStatus } from "@/lib/envValidation";
import { siteConfig as seoSiteConfig } from "@/lib/site";
import { JsonLd } from "@/components/seo/JsonLd";
import { graph, organizationSchema, webSiteSchema, educationalOrgSchema } from "@/components/seo/schema";
import { validateLockdownSession } from "@/lib/session";
import { SpeedInsights } from "@vercel/speed-insights/next";

logEnvironmentStatus();


const plusJakartaSans = Plus_Jakarta_Sans({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800"],
  variable: "--font-plus-jakarta",
  display: "swap",
});

const outfit = Outfit({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800", "900"],
  variable: "--font-outfit",
  display: "swap",
});

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700", "800"],
  variable: "--font-poppins",
  display: "swap",
});

import type { Viewport } from "next";

export const viewport: Viewport = {
  themeColor: "#f8fafc",
  width: "device-width",
  initialScale: 1,
  viewportFit: "cover",
};

export const metadata: Metadata = {
  metadataBase: new URL(seoSiteConfig.url),
  title: {
    default: seoSiteConfig.defaultTitle,
    template: seoSiteConfig.titleTemplate,
  },
  description: seoSiteConfig.description,
  applicationName: seoSiteConfig.name,
  manifest: "/manifest.webmanifest",
  alternates: {
    canonical: "/",
    types: { "application/rss+xml": [{ url: "/feed.xml", title: "KTUNODE Blog" }] },
  },
  icons: {
    icon: "/logo.webp",
    apple: "/logo.webp",
  },
  openGraph: {
    type: "website",
    locale: seoSiteConfig.locale,
    url: seoSiteConfig.url,
    siteName: seoSiteConfig.name,
    title: seoSiteConfig.defaultTitle,
    description: seoSiteConfig.description,
    images: [{ url: seoSiteConfig.ogImage, width: 1200, height: 630, alt: seoSiteConfig.name }],
  },
  twitter: {
    card: "summary_large_image",
    site: seoSiteConfig.twitter,
    creator: seoSiteConfig.twitter,
  },
  robots: {
    index: true,
    follow: true,
    googleBot: { index: true, follow: true, "max-image-preview": "large", "max-snippet": -1 },
  },
};

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const config = await readSiteConfig();
  const cookieStore = await cookies();

  const headerList = await headers();
  const pathname = headerList.get("x-pathname") || "";

  const isLockdownActive = config.lockdownMode === true && !pathname.startsWith("/admin") && !pathname.startsWith("/api");
  const lockdownSessionToken = cookieStore.get("ktunode_lockdown_session")?.value;
  const isAuthorized = lockdownSessionToken ? await validateLockdownSession(lockdownSessionToken) : false;

  const isUnderMaintenance = config.maintenanceMode && !pathname.startsWith("/admin") && !pathname.startsWith("/api");

  const primaryAccent = config.primaryAccent || "blue";
  const accentHues = {
    blue: "255",
    indigo: "240",
    violet: "270",
    emerald: "150",
    amber: "75",
    rose: "360"
  };
  const hue = accentHues[primaryAccent as keyof typeof accentHues] || "255";

  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <style suppressHydrationWarning dangerouslySetInnerHTML={{ __html: `
          :root {
            --color-accent: oklch(56% 0.18 ${hue});
            --color-accent-light: oklch(56% 0.18 ${hue} / 8%);
            --color-accent-mid: oklch(56% 0.18 ${hue} / 15%);
          }
          .dark {
            --color-accent: oklch(68% 0.2 ${hue});
            --color-accent-light: oklch(68% 0.2 ${hue} / 12%);
            --color-accent-mid: oklch(68% 0.2 ${hue} / 22%);
          }
        `}} />
        <JsonLd data={graph(organizationSchema(), webSiteSchema(), educationalOrgSchema())} />
      </head>
      {/* Apply both the CSS variable AND the font-sans utility so the font actually renders */}
      <body className={`${plusJakartaSans.variable} ${outfit.variable} ${poppins.variable} font-sans antialiased`} suppressHydrationWarning>
        <ThemeProvider attribute="class" defaultTheme="light" enableSystem={false}>
          <CSPostHogProvider>
            {isUnderMaintenance ? (
              <div className="min-h-screen bg-[#070709] text-white flex flex-col items-center justify-center p-6 text-center font-sans relative overflow-hidden">
                <div className="absolute inset-0 overflow-hidden pointer-events-none z-0">
                  <div className="absolute top-[30%] left-[50%] -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] rounded-full bg-amber-500/10 blur-[130px] animate-pulse" />
                </div>
                
                <div className="relative z-10 max-w-md w-full bg-white/[0.02] border border-white/5 rounded-3xl p-8 backdrop-blur-2xl shadow-2xl">
                  <div className="inline-flex p-4 bg-amber-500/10 rounded-2xl text-amber-500 mb-6">
                    <svg className="w-8 h-8 animate-pulse text-amber-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" />
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                    </svg>
                  </div>
                  <h1 className="text-2xl font-bold tracking-tight mb-2">Platform Update in Progress</h1>
                  <p className="text-gray-400 text-sm leading-relaxed mb-6">
                    {config.siteName} is currently undergoing a scheduled database restructure and notes payload sync. We will return shortly.
                  </p>
                  <div className="inline-flex items-center gap-2 px-3 py-1 bg-white/5 border border-white/5 rounded-full text-[10px] text-gray-400 uppercase tracking-widest">
                    <span>Target Regulation: {config.activeScheme}</span>
                  </div>
                </div>
              </div>
            ) : isLockdownActive && !isAuthorized ? (
              <LockdownGate />
            ) : (
              <>
                {config.bannerEnabled && config.bannerText && (() => {
                  const now = new Date();
                  const start = config.bannerStart ? new Date(config.bannerStart) : null;
                  const end = config.bannerEnd ? new Date(config.bannerEnd) : null;
                  if (start && now < start) return null;
                  if (end && now > end) return null;
                  return (
                    <DismissibleBanner
                      bannerText={config.bannerText}
                      severity={config.bannerSeverity || "info"}
                      dismissible={config.bannerDismissible !== false}
                    />
                  );
                })()}
                <a href="#main-content" className="sr-only focus:not-sr-only focus:absolute focus:top-4 focus:left-4 focus:z-50 focus:px-4 focus:py-2 focus:bg-blue-600 focus:text-white focus:rounded-md focus:outline-none">
                  Skip to content
                </a>
                {children}
              </>
            )}
          </CSPostHogProvider>
        </ThemeProvider>
        <SpeedInsights />
        <Script
          id="register-sw"
          strategy="afterInteractive"
          dangerouslySetInnerHTML={{
            __html: `
              if ('serviceWorker' in navigator) {
                if (window.location.hostname === 'localhost' || window.location.hostname === '127.0.0.1') {
                  navigator.serviceWorker.getRegistrations().then(function(registrations) {
                    for (var registration of registrations) {
                      registration.unregister().then(function(boolean) {
                        console.log('ServiceWorker unregistered from localhost:', boolean);
                      });
                    }
                  });
                } else {
                  window.addEventListener('load', function() {
                    navigator.serviceWorker.register('/sw.js').then(function(reg) {
                      console.log('ServiceWorker registered with scope: ', reg.scope);
                    }).catch(function(err) {
                      console.error('ServiceWorker registration failed: ', err);
                    });
                  });
                }
              }
            `
          }}
        />
      </body>
    </html>
  );
}

