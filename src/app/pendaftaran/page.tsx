"use client";

import { useState } from 'react';
import { Toaster } from 'react-hot-toast';
import Navbar from '@/components/registration/Navbar';
import Footer from '@/components/registration/Footer';
import AccessCodeForm from '@/components/registration/AccessCodeForm';
import TallyRegistrationForm from '@/components/registration/TallyRegistrationForm';

export default function RegistrationPage() {
  const [isCodeVerified, setIsCodeVerified] = useState(false);
  const [verifiedAccessCode, setVerifiedAccessCode] = useState('');

  const handleCodeVerified = (accessCode: string) => {
    setVerifiedAccessCode(accessCode);
    setIsCodeVerified(true);
  };

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-grow flex items-center justify-center p-4 bg-gray-50">
        {!isCodeVerified ? (
          <AccessCodeForm onCodeVerified={handleCodeVerified} />
        ) : (
          <TallyRegistrationForm accessCode={verifiedAccessCode} />
        )}
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