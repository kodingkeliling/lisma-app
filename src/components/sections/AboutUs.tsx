import { Variants } from 'framer-motion';
import { MotionDiv } from '../common/MotionComponents';
import Container from '../common/Container';
import Image from 'next/image';

export default function AboutUs() {
  // Animation variants
  const container: Variants = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const item: Variants = {
    hidden: { opacity: 0, y: 20 },
    show: { 
      opacity: 1, 
      y: 0, 
      transition: { 
        duration: 0.5,
        ease: [0.16, 1, 0.3, 1] // easeOutExpo
      } 
    }
  };

  return (
    <section id="tentang" className="py-20 bg-white">
      <Container>
        <div className="md:px-12">
          <div className="w-full">
            {/* Logo - Tampil di atas di mobile, di kiri di desktop */}
            <MotionDiv 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="flex justify-center lg:hidden mb-12"
            >
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
            </MotionDiv>

            <MotionDiv 
              variants={container}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true, margin: "-100px" }}
              className="lg:flex lg:items-stretch lg:gap-12"
            >
              {/* Gambar - Tampil di kiri di desktop */}
              <MotionDiv 
                variants={item}
                className="hidden lg:flex lg:flex-1 lg:items-center"
              >
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
              </MotionDiv>

              {/* Teks - Selalu di kanan di desktop, di bawah logo di mobile */}
              <MotionDiv 
                variants={container}
                className="lg:flex-1 lg:flex lg:flex-col lg:justify-center"
              >
                <MotionDiv variants={item}>
                  <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl text-left lg:text-left">Tentang Kami</h2>
                </MotionDiv>
                
                <MotionDiv 
                  variants={container}
                  className="space-y-4 text-base leading-7 text-gray-700 mt-6 text-left"
                >
                  <MotionDiv variants={item} className="space-y-4">
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
                  </MotionDiv>
                </MotionDiv>
              </MotionDiv>

            </MotionDiv>
          </div>
        </div>
      </Container>
    </section>
  );
}
