'use client';

import { usePathname } from 'next/navigation';
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import { Toaster } from "react-hot-toast";

export default function ClientLayoutWrapper({ children }: { children: React.ReactNode }) {
  const pathname = usePathname();
  const isRegistrationPage = pathname?.startsWith('/pendaftaran');

  return (
    <div className="flex flex-col min-h-screen">
      {!isRegistrationPage && <Navbar />}
      <main className="flex-1">
        {children}
      </main>
      {!isRegistrationPage && <Footer />}
      <Toaster position="top-center" />
    </div>
  );
}
