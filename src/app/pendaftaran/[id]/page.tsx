"use client";

import { useState, useEffect } from 'react';
import { useParams } from 'next/navigation';
import { Toaster } from 'react-hot-toast';
import Navbar from '@/components/registration/Navbar';
import Footer from '@/components/registration/Footer';

interface MemberData {
  "Submission ID": string;
  "Respondent ID": string;
  "Submitted at": string;
  kode: string;
  Nama: string;
  "Tempat Lahir": string;
  "Tanggal Lahir": string;
  Unit: string;
  Alamat: string;
  "Metode \nPembayaran": string;
  "Bukti Bayar": string;
  Email: string;
  "No HP": number;
  Instagram: string;
  Jurusan: string;
  [key: string]: string | number | boolean | null | undefined;
}

export default function RegistrationHistoryPage() {
  const params = useParams();
  const kode = params.id as string;
  const [memberData, setMemberData] = useState<MemberData | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchMemberData = async () => {
      try {
        setLoading(true);
        const response = await fetch(`/api/get-member-data?kode=${kode}`);
        const result = await response.json();

        if (!response.ok) {
          throw new Error(result.error || 'Failed to fetch member data');
        }

        setMemberData(result.data);
      } catch (err) {
        setError(err instanceof Error ? err.message : 'Terjadi kesalahan');
      } finally {
        setLoading(false);
      }
    };

    if (kode) {
      fetchMemberData();
    }
  }, [kode]);

  const formatDate = (dateString: string) => {
    if (!dateString) return '-';
    try {
      const date = new Date(dateString);
      return date.toLocaleDateString('id-ID', {
        year: 'numeric',
        month: 'long',
        day: 'numeric',
        hour: '2-digit',
        minute: '2-digit'
      });
    } catch {
      return dateString;
    }
  };

  const formatPhoneNumber = (phone: number | string) => {
    if (!phone) return '-';
    const phoneStr = phone.toString();
    if (phoneStr.startsWith('62')) {
      return `+${phoneStr}`;
    }
    return phoneStr;
  };

  const formatBirthDate = (dateString: string) => {
    if (!dateString) return '-';
    try {
      const date = new Date(dateString);
      return date.toLocaleDateString('id-ID', {
        year: 'numeric',
        month: 'long',
        day: 'numeric'
      });
    } catch {
      return dateString;
    }
  };

  if (loading) {
    return (
      <div className="min-h-screen flex flex-col">
        <Navbar />
        <main className="flex-grow flex items-center justify-center p-4 bg-gray-50">
          <div className="text-center">
            <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-lisma mx-auto mb-4"></div>
            <p className="text-gray-600">Memuat data pendaftaran...</p>
          </div>
        </main>
        <Footer />
      </div>
    );
  }

  if (error) {
    return (
      <div className="min-h-screen flex flex-col">
        <Navbar />
        <main className="flex-grow flex items-center justify-center p-4 bg-gray-50">
          <div className="w-full max-w-md bg-white rounded-lg shadow-md p-6 text-center">
            <div className="text-red-500 text-6xl mb-4">⚠️</div>
            <h2 className="text-xl font-bold text-gray-900 mb-2">Data Tidak Ditemukan</h2>
            <p className="text-gray-600 mb-4">{error}</p>
            <button
              onClick={() => window.location.href = '/pendaftaran'}
              className="bg-lisma text-white px-4 py-2 rounded-lg hover:bg-lisma-dark transition-colors"
            >
              Kembali ke Pendaftaran
            </button>
          </div>
        </main>
        <Footer />
      </div>
    );
  }

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-grow p-4 bg-gray-50">
        <div className="max-w-4xl mx-auto">
          <div className="bg-white rounded-lg shadow-md overflow-hidden">
            {/* Header */}
            <div className="bg-lisma text-white p-6">
              <h1 className="text-2xl font-bold">Riwayat Pendaftaran</h1>
              <p className="text-white mt-1">Detail informasi pendaftaran Anda</p>
            </div>

            {/* Content */}
            <div className="p-6">
              {memberData ? (
                <div className="space-y-6">
                  {/* Success Messages */}
                  <div className="space-y-3 no-print">
                    <div className="bg-green-100 border border-green-200 rounded-lg p-4">
                      <p className="text-green-800 text-sm font-medium">
                        🎉 Selamat yaa, kamu udah berhasil melakukan pendaftaran awal.
                      </p>
                    </div>
                    <div className="bg-blue-100 border border-blue-200 rounded-lg p-4">
                      <p className="text-blue-800 text-sm font-medium">
                        ⚠️ Eitss, masih ada tahap selanjutnya loh ...
                      </p>
                    </div>
                  </div>

                  {/* Registration Information */}
                  <div className="bg-gray-50 rounded-lg p-6">
                    <h3 className="text-lg font-semibold text-gray-900 mb-4">Informasi Pendaftaran</h3>
                    
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div>
                        <label className="block text-sm font-medium text-gray-700">ID Pendaftaran</label>
                        <p className="mt-1 text-sm text-gray-900 font-mono">
                          LISMA-{memberData["Submission ID"] || '-'}
                        </p>
                      </div>

                      <div>
                        <label className="block text-sm font-medium text-gray-700">Nama Lengkap</label>
                        <p className="mt-1 text-sm text-gray-900 font-semibold">{memberData.Nama || '-'}</p>
                      </div>

                      <div>
                        <label className="block text-sm font-medium text-gray-700">Email</label>
                        <p className="mt-1 text-sm text-gray-900">{memberData.Email || '-'}</p>
                      </div>

                      <div>
                        <label className="block text-sm font-medium text-gray-700">Jurusan</label>
                        <p className="mt-1 text-sm text-gray-900">{memberData.Jurusan || '-'}</p>
                      </div>

                      <div className="md:col-span-2">
                        <label className="block text-sm font-medium text-gray-700">Unit yang Dipilih</label>
                        <p className="mt-1 text-sm text-gray-900 font-semibold text-lisma text-lg">{memberData.Unit || '-'}</p>
                      </div>
                    </div>
                  </div>

                  {/* Action Buttons */}
                  <div className="flex flex-col sm:flex-row gap-4 pt-6 border-t no-print">
                    <button
                      onClick={() => window.location.href = '/pendaftaran'}
                      className="flex-1 bg-gray-500 text-white px-4 py-2 rounded-lg hover:bg-gray-600 transition-colors"
                    >
                      Kembali ke Pendaftaran
                    </button>
                    <button
                      onClick={() => window.print()}
                      className="flex-1 bg-lisma text-white px-4 py-2 rounded-lg hover:bg-lisma-dark transition-colors"
                    >
                      Cetak Riwayat
                    </button>
                  </div>
                </div>
              ) : (
                <div className="text-center py-8">
                  <p className="text-gray-500">Data tidak tersedia</p>
                </div>
              )}
            </div>
          </div>
        </div>
      </main>
      <Footer />
      <Toaster position="top-center" />
      <style jsx global>{`
        @media print {
          .no-print {
            display: none !important;
          }
        }
      `}</style>
    </div>
  );
}
