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
    '@type': 'Organization',
    '@id': 'https://krewex.com/#organization',
    name: 'Krewex Technologies Private Limited',
    legalName: 'Krewex Technologies Private Limited',
    url: 'https://krewex.com/',
    logo: 'https://krewex.com/logo.png',
    email: 'info@krewex.com',
    sameAs: [
      'https://linkedin.com/company/krewexco',
      'https://x.com/KREWEXC0',
      'https://facebook.com/krewexco',
      'https://instagram.com/krewexco'
    ],
    subOrganization: [
      {
        "@type": "Organization",
        "name": "Taj HR Services",
        "url": "https://tajhrservices.com"
      },
      {
        "@type": "Organization",
        "name": "Aegis Krew International",
        "url": "https://aegiskrew.com"
      },
      {
        "@type": "Organization",
        "name": "Mahad Manpower Consultant",
        "url": "https://www.mahadmanpowers.co.in"
      },
      {
        "@type": "Organization",
        "name": "Neuraforge Tech",
        "url": "https://neuraforge.tech"
      }
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
