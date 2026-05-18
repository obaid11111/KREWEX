import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "KREWEX | The Centralized Infrastructure for Global Human Capital",
  description: "KREWEX is the master data exchange connecting verified human capital with the world's most critical mega-projects.",
  openGraph: {
    siteName: "KREWEX",
    url: "https://krewex.com",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'WebSite',
    name: 'KREWEX',
    url: 'https://krewex.com/',
    sameAs: [
      'https://linkedin.com/company/krewexco',
      'https://x.com/KREWEXC0',
      'https://facebook.com/krewexco',
      'https://instagram.com/krewexco'
    ]
  };

  return (
    <html lang="en" className={`${inter.variable} h-full antialiased`}>
      <body className="min-h-full flex flex-col font-sans">
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
        {children}
      </body>
    </html>
  );
}
