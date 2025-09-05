import { Montserrat } from "next/font/google";
import "./globals.css";
import { Providers } from './providers';
import { Metadata } from 'next';
import ClientLayoutWrapper from './ClientLayoutWrapper';
import JsonLd from '@/components/seo/JsonLd';

const montserrat = Montserrat({
  subsets: ["latin"],
  variable: "--font-montserrat",
  display: "swap",
  weight: ['400', '500', '600', '700'],
});

const SITE_NAME = 'Lingkung Seni Mahasiswa';
const SITE_DESCRIPTION = 'Lingkung Seni Mahasiswa Universitas Pasundan - Wadah pengembangan bakat seni mahasiswa Unpas';
const SITE_URL = 'https://lismaunpas.com'; // Ganti dengan domain Anda

const defaultMetadata: Metadata = {
  title: {
    default: SITE_NAME,
    template: `%s | ${SITE_NAME}`
  },
  description: SITE_DESCRIPTION,
  manifest: '/favicon/site.webmanifest',
  keywords: ['Lingkung Seni Mahasiswa', 'LISMA', 'Universitas Pasundan', 'UKM Seni', 'Kesenian Mahasiswa', 'Ekstrakurikuler Seni'],
  authors: [{ name: 'Lingkung Seni Mahasiswa' }],
  creator: 'Lingkung Seni Mahasiswa',
  publisher: 'Universitas Pasundan',
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  metadataBase: new URL(SITE_URL),
  alternates: {
    canonical: '/',
    languages: {
      'id-ID': '/',
    },
  },
  openGraph: {
    type: 'website',
    locale: 'id_ID',
    url: SITE_URL,
    title: SITE_NAME,
    description: SITE_DESCRIPTION,
    siteName: SITE_NAME,
    images: [
      {
        url: `${SITE_URL}/images/og-image.jpg`,
        width: 1200,
        height: 630,
        alt: SITE_NAME,
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: SITE_NAME,
    description: SITE_DESCRIPTION,
    images: [`${SITE_URL}/images/og-image.jpg`],
    creator: '@lisma_unpas', // Ganti dengan username Twitter resmi
  },
  icons: {
    icon: [
      { url: '/favicon/favicon.ico' },
      { url: '/favicon/favicon-16x16.png', sizes: '16x16', type: 'image/png' },
      { url: '/favicon/favicon-32x32.png', sizes: '32x32', type: 'image/png' },
    ],
    apple: [
      { url: '/favicon/apple-touch-icon.png' },
    ],
    other: [
      {
        rel: 'android-chrome-192x192',
        url: '/favicon/android-chrome-192x192.png',
      },
      {
        rel: 'android-chrome-512x512',
        url: '/favicon/android-chrome-512x512.png',
      },
    ],
  },
};

export const metadata: Metadata = defaultMetadata;

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  
  // Organization structured data
  const jsonLd = {
    name: 'Lingkung Seni Mahasiswa',
    alternateName: 'LISMA',
    url: SITE_URL,
    logo: `${SITE_URL}/images/logo-lisma.png`,
    sameAs: [
      'https://www.instagram.com/lisma_unpas',
      'https://www.youtube.com/@lismapasundan',
      // Tambahkan link media sosial lainnya
    ],
    contactPoint: [
      {
        '@type': 'ContactPoint',
        telephone: '+62-xxx-xxxx-xxxx', // Ganti dengan nomor kontak resmi
        contactType: 'customer service',
        email: 'lisma@unpas.ac.id', // Ganti dengan email resmi
      },
    ],
    address: {
      '@type': 'PostalAddress',
      streetAddress: 'Jl. Dr. Setiabudhi No.193, Bandung',
      addressLocality: 'Bandung',
      postalCode: '40153',
      addressCountry: 'ID',
    },
  };

  return (
    <html lang="id" className="scroll-smooth">
      <head>
        <JsonLd type="Organization" data={jsonLd} />
      </head>
      <body className={`font-sans antialiased text-gray-900 bg-white ${montserrat.variable}`}>
        <Providers>
          <ClientLayoutWrapper>
            {children}
          </ClientLayoutWrapper>
        </Providers>
      </body>
    </html>
  );
}
