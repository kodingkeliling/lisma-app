import Container from '../common/Container';
import Image from 'next/image';

export default function AboutUs() {
  return (
    <section id="tentang" className="py-20 bg-white">
      <Container>
        <div className="mx-auto px-8 md:px-12">
          <div className="mx-auto mt-16 grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16 lg:mx-0 lg:mt-20 lg:max-w-none lg:grid-cols-2 lg:items-center lg:gap-y-12">
            <div className="lg:order-last lg:max-w-2xl">
              <div>
                <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">Tentang Kami</h2>
              </div>
              
              <div className="space-y-4 text-base leading-7 text-gray-700">
                <p className="mt-2 text-xl font-medium text-gray-700">
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
            <div className="flex items-center justify-center w-full h-full lg:order-first">
              <div className="relative w-full max-w-sm flex items-center justify-center h-full py-8">
                <div className="relative w-full" style={{ height: '100%', minHeight: '300px' }}>
                  <Image
                    src="/images/lisma.png"
                    alt="LISMA"
                    fill
                    className="object-contain"
                    sizes="(max-width: 1024px) 100vw, 50vw"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
