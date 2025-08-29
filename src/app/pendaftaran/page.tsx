"use client";

import { useState } from 'react';
import { useRouter } from 'next/navigation';
import Image from 'next/image';
import Link from 'next/link';

export default function PendaftaranPage() {
  const [accessCode, setAccessCode] = useState('');
  const [showModal, setShowModal] = useState(false);
  const router = useRouter();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Add your access code validation logic here
    console.log('Access code:', accessCode);
  };

  return (
    <div className="min-h-screen bg-gray-50 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-md w-full mx-auto">
        <div className="text-center mb-8">
          <h1 className="text-3xl font-bold text-gray-900 mb-2">Pendaftaran Anggota Baru</h1>
          <p className="text-gray-600">Silakan masukkan kode akses untuk melanjutkan pendaftaran</p>
        </div>
        
        <div className="bg-white py-8 px-6 shadow rounded-lg">
          <form onSubmit={handleSubmit} className="space-y-6">
            <div>
              <label htmlFor="accessCode" className="block text-sm font-medium text-gray-700 mb-1">
                Masukkan Kode Akses
              </label>
              <input
                id="accessCode"
                name="accessCode"
                type="password"
                required
                value={accessCode}
                onChange={(e) => setAccessCode(e.target.value)}
                className="appearance-none block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-lisma focus:border-lisma sm:text-sm"
                placeholder="Ketik kode akses di sini..."
              />
            </div>

            <div className="text-center text-sm">
              <button
                type="button"
                onClick={() => setShowModal(true)}
                className="font-medium text-lisma hover:text-lisma/80 transition-colors"
              >
                Belum memiliki kode akses? Klik sini
              </button>
            </div>

            <div>
              <button
                type="submit"
                className="w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-lisma hover:bg-lisma/90 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-lisma transition-colors"
              >
                Login
              </button>
            </div>
          </form>
        </div>
      </div>

      {/* Modal */}
      {showModal && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4 z-50">
          <div className="bg-white rounded-lg max-w-md w-full p-6 relative">
            <button
              onClick={() => setShowModal(false)}
              className="absolute top-4 right-4 text-gray-400 hover:text-gray-600"
            >
              <span className="text-2xl">&times;</span>
            </button>
            
            <h2 className="text-xl font-bold text-gray-900 mb-4">Kode Akses</h2>
            
            <div className="space-y-4 text-sm text-gray-700">
              <p>Lakukan pembelian kode akses seharga Rp. 30.000 melalui :</p>
              
              <div className="bg-gray-50 p-4 rounded-md">
                <p className="font-medium">BCA: 4373094547</p>
                <p className="text-gray-600">a/n Rizkiani Tri</p>
                
                <div className="h-px bg-gray-200 my-3"></div>
                
                <p className="font-medium">DANA: 081322593964</p>
                <p className="text-gray-600">a/n Rizkiani Tri</p>
              </div>
              
              <p>Jika sudah melakukan pembayaran, silakan konfirmasi pembayaran ke Contact Person untuk mendapatkan kode akses</p>
              
              <div className="mt-4">
                <p className="font-medium">Contact Person :</p>
                <p className="text-gray-600">089667950775 (Talitha R)</p>
              </div>
            </div>
            
            <div className="mt-6">
              <button
                onClick={() => setShowModal(false)}
                className="w-full bg-lisma text-white py-2 px-4 rounded-md hover:bg-lisma/90 transition-colors"
              >
                Tutup
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
