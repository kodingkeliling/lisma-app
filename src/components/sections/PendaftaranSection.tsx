"use client";

import Container from '../common/Container';
import Link from 'next/link';

export default function PendaftaranSection() {
  return (
    <section id="daftar" className="py-12 bg-lisma-dark-purple">
      <Container>
        <div className="flex flex-col md:flex-row items-center justify-between gap-6 md:px-12">
          <div className="text-white text-center md:text-left">
            <h2 className="text-2xl font-bold sm:text-3xl whitespace-nowrap">
              Pendaftaran Anggota Baru
            </h2>
            <p className="text-blue-100 mt-2 text-sm sm:text-base">
              UDAH DIBUKA NIH!
            </p>
          </div>
          <Link 
            href="/pendaftaran"
            className="px-8 py-3 bg-white text-lisma-text font-semibold rounded-lg hover:bg-lisma hover:text-white transform hover:-translate-y-1 transition-all duration-300 ease-in-out shadow-md hover:shadow-lg whitespace-nowrap"
          >
            Daftar Sekarang
          </Link>
        </div>
      </Container>
    </section>
  );
}
