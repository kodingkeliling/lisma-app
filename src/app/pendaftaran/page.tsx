"use client";

import { useEffect } from 'react';
import { Toaster } from 'react-hot-toast';
import Navbar from '@/components/registration/Navbar';
import Footer from '@/components/registration/Footer';

export default function RegistrationPage() {

  // Load Tally embeds when component mounts
  useEffect(() => {
    const loadTallyEmbeds = () => {
      if (typeof window !== 'undefined' && (window as unknown as { Tally?: { loadEmbeds: () => void } }).Tally) {
        (window as unknown as { Tally: { loadEmbeds: () => void } }).Tally.loadEmbeds();
      }
    };

    // Load Tally script if not already loaded
    if (typeof window !== 'undefined' && !document.querySelector('script[src="https://tally.so/widgets/embed.js"]')) {
      const script = document.createElement('script');
      script.src = 'https://tally.so/widgets/embed.js';
      script.async = true;
      script.onload = loadTallyEmbeds;
      document.head.appendChild(script);
    } else {
      loadTallyEmbeds();
    }
  }, []);

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-grow flex items-center justify-center p-4 bg-gray-50">
        <div className="w-full max-w-4xl bg-white rounded-lg shadow-md overflow-hidden">
          <div className="p-6 sm:p-8">
            <div className="text-start mb-8">
              <h2 className="text-3xl font-bold text-lisma-text">
                <span className="block">Pendaftaran Anggota Baru</span>
                <span className="block mt-2 text-2xl font-semibold text-lisma">LISMA UNPAS 2025</span>
              </h2>
            </div>
            
            {/* Tally Form Embed */}
            <div className="w-full">
              <iframe 
                data-tally-src="https://tally.so/embed/woqJyM?alignLeft=1&hideTitle=1&transparentBackground=1&dynamicHeight=1" 
                loading="lazy" 
                width="100%" 
                height={1086} 
                frameBorder="0" 
                marginHeight={0} 
                marginWidth={0} 
                title="PENDAFTARAN ANGGOTA"
                className="w-full border-0"
              />
            </div>
          </div>
        </div>

      </main>
      <Footer />
      <Toaster position="top-center" />
      <style jsx global>{`
        html, body {
          height: 100%;
          overflow: auto;
        }
      `}</style>
    </div>
  );
}
