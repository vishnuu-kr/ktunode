import type { Metadata } from "next";
import "./globals.css";
import { Plus_Jakarta_Sans } from "next/font/google";

const plusJakartaSans = Plus_Jakarta_Sans({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800"],
  variable: "--font-plus-jakarta",
  display: "swap",
});

export const metadata: Metadata = {
  title: "KTUNODE | Ace KTU Exams. Faster.",
  description: "Select your branch and semester to instantly unlock premium notes, interactive checklists, and PYQs designed for the 2024 KTU scheme.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      {/* Apply both the CSS variable AND the font-sans utility so the font actually renders */}
      <body className={`${plusJakartaSans.variable} font-sans`} suppressHydrationWarning>
        {children}
      </body>
    </html>
  );
}
