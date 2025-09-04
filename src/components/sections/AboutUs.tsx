import Container from '../common/Container';
import Image from 'next/image';

export default function AboutUs() {
  return (
    <section id="tentang" className="py-20 bg-white">
      <Container>
      <div className="md:px-12">
      <div className="w-full">
            {/* Logo - Tampil di atas di mobile, di kiri di desktop */}
            <div className="flex justify-center lg:hidden mb-12">
              <div className="relative w-full max-w-xs h-64">
                <Image
                  src="/images/lisma.png"
                  alt="LISMA"
                  fill
                  className="object-contain"
                  sizes="(max-width: 1024px) 100vw, 50vw"
                  priority
                />
              </div>
            </div>

            <div className="lg:flex lg:items-stretch lg:gap-12">
              {/* Gambar - Tampil di kiri di desktop */}
              <div className="hidden lg:flex lg:flex-1 lg:items-center">
                <div className="relative w-full h-full min-h-[400px]">
                  <Image
                    src="/images/lisma.png"
                    alt="LISMA"
                    fill
                    className="object-contain"
                    sizes="(max-width: 1024px) 100vw, 50vw"
                    priority
                  />
                </div>
              </div>

              {/* Teks - Selalu di kanan di desktop, di bawah logo di mobile */}
              <div className="lg:flex-1 lg:flex lg:flex-col lg:justify-center">
                <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl text-left lg:text-left">Tentang Kami</h2>
                
                <div className="space-y-4 text-base leading-7 text-gray-700 mt-6 text-left">
                  <p className="text-xl font-medium text-gray-700 text-left lg:text-left">
                    Lingkung Seni Mahasiswa, Universitas Pasundan
                  </p>
                  <p>
                    Lingkung Seni Mahasiswa (LISMA) adalah sebuah organisasi Universitas Pasundan Bandung yang mewadahi minat dan bakat anggotanya dibidang seni.
                  </p>
                  <p>
                    Lisma merupakan salah satu unit kegiatan mahasiswa yang ada di Universitas Pasundan yang merupakan perkembangan dari &quot;Klinik Teater&quot; yang berdiri dari tahun 1979 yang bergerak dibidang teater atau seni pemeranan, kemudian sejak tanggal 19 April 1984 &quot;Klinik Teater&quot; berubah menjadi Lingkung Seni Mahasiswa. 
                  </p>
                  <p>
                    Tidak hanya nama yang berubah tapi juga ada penambahan bidang kesenian yaitu Kesenian Daerah Sunda (KDS) dan Paduan Suara dan Musik (PSM).
                  </p>
                  <p>
                    Pada tahun 1990 bertambah satu bidang yaitu Tari Kontemporer, yang kemudian diganti menjadi Tari Kreasi Baru dan sekarang menjadi Tari Kreasi. Lalu pada tahun 1994 lahir lah bidang kesenian baru di Lisma yaitu Fotografi.
                  </p>
                </div>
              </div>

            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
