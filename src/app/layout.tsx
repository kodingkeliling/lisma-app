'use client';

import React from 'react';
import { Montserrat } from "next/font/google";
import { usePathname } from 'next/navigation';
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

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const pathname = usePathname();
  const isRegistrationPage = pathname?.startsWith('/pendaftaran');

  return (
    <html lang="id" className="scroll-smooth">
      <body className={`${montserrat.variable} font-sans antialiased text-gray-900 bg-white`}>
        <Providers>
          <div className="flex flex-col min-h-screen">
            {!isRegistrationPage && <Navbar />}
            <main className="flex-1">
              {children}
            </main>
            {!isRegistrationPage && <Footer />}
            <Toaster position="top-center" />
          </div>
        </Providers>
      </body>
    </html>
  );
}
