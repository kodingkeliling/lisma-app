import type { Metadata } from "next";
import { Montserrat } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import { Toaster } from "react-hot-toast";
import { Providers } from './providers';

const montserrat = Montserrat({
  subsets: ["latin"],
  variable: "--font-montserrat",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Lingkung Seni Mahasiswa",
  description: "Wadah kreativitas dan pengembangan bakat seni mahasiswa Universitas Pasundan",
  keywords: ["LISMA", "Lingkung Seni Mahasiswa", "UNPAS", "Universitas Pasundan", "Seni", "Budaya", "Mahasiswa"],
  authors: [{ name: 'LISMA UNPAS' }],
  themeColor: '#1e40af',
  viewport: 'width=device-width, initial-scale=1',
  icons: {
    icon: [
      { url: '/favicon.ico' },
      { url: '/images/lisma.png', type: 'image/png', sizes: '32x32' },
      { url: '/images/lisma.png', type: 'image/png', sizes: '192x192' },
    ],
    apple: [
      { url: '/images/lisma.png' },
    ],
  },
  openGraph: {
    type: 'website',
    locale: 'id_ID',
    url: 'https://www.lismaunpas.com/',
    title: 'LISMA UNPAS - Lingkung Seni Mahasiswa',
    description: 'Wadah kreativitas dan pengembangan bakat seni mahasiswa Universitas Pasundan',
    siteName: 'LISMA UNPAS',
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="id" className="scroll-smooth">
      <body className={`${montserrat.variable} font-sans antialiased text-gray-900 bg-white`}>
        <Providers>
          <div className="flex flex-col min-h-screen">
            <Navbar />
            <main className="flex-1">
              {children}
            </main>
            <Footer />
            <Toaster position="top-center" />
          </div>
        </Providers>
      </body>
    </html>
  );
}
