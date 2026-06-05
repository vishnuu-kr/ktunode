import type { Metadata } from "next";
import "./globals.css";
import { Plus_Jakarta_Sans, Outfit } from "next/font/google";
import { ThemeProvider } from "next-themes";

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

import type { Viewport } from "next";

export const viewport: Viewport = {
  themeColor: "#f8fafc",
  width: "device-width",
  initialScale: 1,
  viewportFit: "cover",
};

export const metadata: Metadata = {
  metadataBase: new URL("https://ktunode.com"),
  manifest: "/manifest.json",
  title: "KTU Notes, Syllabus & PYQs — 2024 Scheme | KTUNODE",
  description: "Free module-wise KTU notes, previous year question papers, and syllabus tracker for the 2024 B.Tech scheme. CS, EC, ME, CE, EE — all semesters covered.",
  keywords: [
    "KTU notes",
    "KTU syllabus 2024 scheme",
    "KTU previous year question papers",
    "KTU B.Tech notes",
    "KTU study materials",
    "KTU PYQ",
    "KTU S1 notes",
    "KTU S2 notes",
    "KTU S3 notes",
    "KTU CSE notes 2024",
    "KTU model question papers",
    "KTU module wise notes",
    "APJ Abdul Kalam Technological University syllabus",
    "KTU exam preparation",
    "KTUNODE",
    "KTU 2024 scheme subjects",
    "KTU chapter wise notes",
    "Kerala Technological University"
  ],
  authors: [{ name: "KTUNODE Team" }],
  creator: "KTUNODE",
  appleWebApp: {
    capable: true,
    statusBarStyle: "default",
    title: "KTUNODE",
  },
  icons: {
    icon: "/logo.webp",
    apple: "/logo.webp",
  },
  openGraph: {
    title: "KTU Notes, Syllabus & PYQs — 2024 Scheme | KTUNODE",
    description: "Free module-wise KTU notes, previous year question papers, and syllabus tracker for the 2024 B.Tech scheme. CS, EC, ME, CE, EE — all semesters covered.",
    url: "https://ktunode.com",
    siteName: "KTUNODE",
    locale: "en_US",
    type: "website",
    images: [
      {
        url: "/og-main.webp",
        width: 1200,
        height: 630,
        alt: "KTUNODE — Free KTU Notes, Syllabus & PYQs for 2024 Scheme",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "KTU Notes, Syllabus & PYQs — 2024 Scheme | KTUNODE",
    description: "Free module-wise KTU notes, previous year question papers, and syllabus tracker for the 2024 B.Tech scheme.",
    images: ["/og-main.webp"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const jsonLd = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Organization",
        "@id": "https://ktunode.com/#organization",
        name: "KTUNODE",
        url: "https://ktunode.com",
        logo: {
          "@type": "ImageObject",
          url: "https://ktunode.com/logo.webp",
        },
        description:
          "Free module-wise KTU notes, previous year question papers, and syllabus tracker for the 2024 B.Tech scheme.",
      },
      {
        "@type": "WebSite",
        "@id": "https://ktunode.com/#website",
        url: "https://ktunode.com",
        name: "KTUNODE",
        publisher: { "@id": "https://ktunode.com/#organization" },
      },
      {
        "@type": "FAQPage",
        "@id": "https://ktunode.com/#faq",
        mainEntity: [
          {
            "@type": "Question",
            name: "Is KTUNODE free to use?",
            acceptedAnswer: {
              "@type": "Answer",
              text: "Yes, KTUNODE is completely free. All notes, PYQs, and syllabus tracking features are available without any subscription or account creation.",
            },
          },
          {
            "@type": "Question",
            name: "Which KTU scheme does KTUNODE cover?",
            acceptedAnswer: {
              "@type": "Answer",
              text: "KTUNODE is built specifically for the 2024 KTU scheme. All notes, syllabi, and PYQs are mapped to the latest curriculum from APJ Abdul Kalam Technological University.",
            },
          },
          {
            "@type": "Question",
            name: "Which branches are supported?",
            acceptedAnswer: {
              "@type": "Answer",
              text: "We currently support Computer Science (CS), Electronics & Communication (EC), Mechanical (ME), Civil (CE), and Electrical & Electronics (EE).",
            },
          },
          {
            "@type": "Question",
            name: "Do I need to create an account?",
            acceptedAnswer: {
              "@type": "Answer",
              text: "No account is required. Just select your branch and semester on the homepage and you're instantly taken to your personalized dashboard.",
            },
          },
          {
            "@type": "Question",
            name: "How does the syllabus tracker work?",
            acceptedAnswer: {
              "@type": "Answer",
              text: "The syllabus tracker lets you mark modules as complete as you study. Your progress is saved locally so you can always see what you've covered and what's left before exams.",
            },
          },
          {
            "@type": "Question",
            name: "Is KTUNODE affiliated with KTU?",
            acceptedAnswer: {
              "@type": "Answer",
              text: "No. KTUNODE is an independent student resource platform and is not affiliated with or endorsed by APJ Abdul Kalam Technological University.",
            },
          },
        ],
      },
    ],
  };

  return (
    <html lang="en" suppressHydrationWarning>
      {/* Apply both the CSS variable AND the font-sans utility so the font actually renders */}
      <body className={`${plusJakartaSans.variable} ${outfit.variable} font-sans`} suppressHydrationWarning>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
        <ThemeProvider attribute="class" defaultTheme="light" enableSystem={false}>
          <a href="#main-content" className="sr-only focus:not-sr-only focus:absolute focus:top-4 focus:left-4 focus:z-50 focus:px-4 focus:py-2 focus:bg-blue-600 focus:text-white focus:rounded-md focus:outline-none">
            Skip to content
          </a>
          {children}
        </ThemeProvider>
        <script
          dangerouslySetInnerHTML={{
            __html: `
              if (typeof window !== 'undefined' && 'serviceWorker' in navigator) {
                window.addEventListener('load', function() {
                  navigator.serviceWorker.register('/sw.js').then(function(reg) {
                    console.log('ServiceWorker registered with scope: ', reg.scope);
                  }).catch(function(err) {
                    console.error('ServiceWorker registration failed: ', err);
                  });
                });
              }
            `
          }}
        />
      </body>
    </html>
  );
}
