'use client';

import { useState, useRef, useEffect } from 'react';
import { useRouter } from 'next/navigation';
import { Toaster } from 'react-hot-toast';

export default function RegistrationPage() {
  const router = useRouter();
  const [accessCode, setAccessCode] = useState('');
  const [showModal, setShowModal] = useState(false);
  const modalRef = useRef<HTMLDivElement>(null);

  // Close modal when clicking outside
  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (modalRef.current && !modalRef.current.contains(event.target as Node)) {
        setShowModal(false);
      }
    }

    if (showModal) {
      document.addEventListener('mousedown', handleClickOutside);
    }
    
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [showModal]);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission
    console.log('Access code:', accessCode);
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-md w-full bg-white rounded-lg shadow-md mx-4 md:mx-0 overflow-hidden">
        <div className="p-8">
          <div className="text-center mb-10">
            <h2 className="text-3xl font-bold text-lisma-text">
              <span className="block">Pendaftaran</span>
              <span className="block mt-2 text-2xl font-semibold text-lisma">Mahasiswa Baru</span>
            </h2>
          </div>
          
          <form className="space-y-8" onSubmit={handleSubmit}>
            <div className="space-y-6">
              <div>
                <label htmlFor="access-code" className="block text-sm font-medium text-lisma-text mb-2">
                  Masukan Kode Akses
                </label>
                <input
                  id="access-code"
                  name="access-code"
                  type="text"
                  required
                  className="appearance-none relative block w-full px-4 py-3 border border-gray-300 placeholder-gray-400 text-lisma-text rounded-lg focus:outline-none focus:ring-2 focus:ring-lisma focus:border-lisma focus:z-10 text-base"
                  placeholder="Kode akses Anda"
                  value={accessCode}
                  onChange={(e) => setAccessCode(e.target.value)}
                />
              </div>
              
              <div className="text-center pt-2">
                <button
                  type="button"
                  onClick={() => setShowModal(true)}
                  className="text-sm font-medium text-lisma hover:text-lisma-dark transition-colors"
                >
                  Belum memiliki kode akses? Klik sini
                </button>
              </div>
            </div>

            <div className="space-y-4 pt-4">
              <button
                type="submit"
                className="group relative w-full flex justify-center py-3 px-4 border border-transparent text-base font-medium rounded-lg text-white bg-lisma hover:bg-lisma-dark focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-lisma transition-colors"
              >
                Login
              </button>
              <button
                onClick={(e) => {
                  e.preventDefault();
                  router.push('/');
                }}
                className="w-full flex items-center justify-center text-lisma-text hover:text-lisma-dark transition-colors text-sm py-2"
              >
                <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 mr-1.5" viewBox="0 0 20 20" fill="currentColor">
                  <path fillRule="evenodd" d="M9.707 16.707a1 1 0 01-1.414 0l-6-6a1 1 0 010-1.414l6-6a1 1 0 011.414 1.414L5.414 9H17a1 1 0 110 2H5.414l4.293 4.293a1 1 0 010 1.414z" clipRule="evenodd" />
                </svg>
                Kembali ke Beranda
              </button>
            </div>
          </form>
        </div>
      </div>

      {/* Modal */}
      {showModal && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4 z-50">
          <div 
            ref={modalRef}
            className="bg-white rounded-lg max-w-md w-full p-6 relative animate-fade-in"
          >
            <button
              onClick={() => setShowModal(false)}
              className="absolute top-4 right-4 text-gray-500 hover:text-gray-700 transition-colors"
              aria-label="Tutup"
            >
              <span className="text-2xl">&times;</span>
            </button>
            
            <h3 className="text-lg font-bold mb-4">Kode Akses</h3>
            
            <div className="space-y-4 text-sm text-gray-700">
              <p>Lakukan pembelian kode akses seharga Rp. 30.000 melalui:</p>
              
              <div className="bg-gray-50 p-4 rounded-md">
                <p className="font-medium">BCA: 4373094547</p>
                <p className="text-gray-600">a/n Rizkiani Tri</p>
                
                <div className="my-3 border-t border-gray-200"></div>
                
                <p className="font-medium">DANA: 081322593964</p>
                <p className="text-gray-600">a/n Rizkiani Tri</p>
              </div>
              
              <p>
                Jika sudah melakukan pembayaran, silakan konfirmasi pembayaran ke Contact Person untuk mendapatkan kode akses.
              </p>
              
              <div className="mt-4 p-3 bg-blue-50 rounded-md">
                <p className="font-medium">Contact Person:</p>
                <p>089667950775 (Talitha R)</p>
              </div>
            </div>
          </div>
        </div>
      )}
      <Toaster position="top-center" />
    </div>
  );
}
