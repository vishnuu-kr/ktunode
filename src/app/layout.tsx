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
  maximumScale: 1,
};

export const metadata: Metadata = {
  metadataBase: new URL("https://ktunode.com"),
  title: "KTUNODE | Ace KTU Exams. Faster.",
  description: "Select your branch and semester to instantly unlock premium notes, interactive checklists, and PYQs designed for the 2024 KTU scheme.",
  keywords: [
    "KTU",
    "KTUNODE",
    "KTU Notes",
    "KTU Syllabus",
    "KTU 2024 Scheme",
    "KTU PYQ",
    "B.Tech Notes",
    "Kerala Technological University",
    "KTU study materials",
    "KTU checklist",
    "KTU exams"
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
    title: "KTUNODE | Ace KTU Exams. Faster.",
    description: "Unlock premium notes, syllabus checklists, and PYQs designed specifically for the 2024 KTU scheme. Ace your semesters with ease.",
    url: "https://ktunode.com",
    siteName: "KTUNODE",
    locale: "en_US",
    type: "website",
    images: [
      {
        url: "/logo.webp",
        width: 512,
        height: 512,
        alt: "KTUNODE Logo",
      },
    ],
  },
  twitter: {
    card: "summary",
    title: "KTUNODE | Ace KTU Exams. Faster.",
    description: "Unlock premium notes, syllabus checklists, and PYQs designed specifically for the 2024 KTU scheme.",
    images: ["/logo.webp"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      {/* Apply both the CSS variable AND the font-sans utility so the font actually renders */}
      <body className={`${plusJakartaSans.variable} ${outfit.variable} font-sans`} suppressHydrationWarning>
        <ThemeProvider attribute="class" defaultTheme="light" enableSystem={false}>
          <a href="#main-content" className="sr-only focus:not-sr-only focus:absolute focus:top-4 focus:left-4 focus:z-50 focus:px-4 focus:py-2 focus:bg-blue-600 focus:text-white focus:rounded-md focus:outline-none">
            Skip to content
          </a>
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
