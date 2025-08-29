import Link from 'next/link';
import Image from 'next/image';
import Container from '../common/Container';

export default function Hero() {
  return (
    <section 
      className="relative overflow-hidden h-screen w-full flex items-center"
      style={{ 
        backgroundImage: 'url(/images/bg-hero.png)',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat'
      }}
    >
      <Container className="relative z-10 w-full h-full">
        <div className="flex flex-col lg:flex-row items-center justify-between h-full px-8 md:px-12">
          <div className="lg:w-5/12 xl:w-2/5 text-left">
            <h1 className="text-4xl font-bold tracking-tight sm:text-5xl md:text-6xl text-lisma-text">
              <div className="whitespace-nowrap">Lingkung Seni</div>
              <div className="whitespace-nowrap">Mahasiswa</div>
            </h1>
            <div className="mt-8">
              <Link 
                href="/pendaftaran"
                className="inline-flex items-center justify-center rounded-md bg-lisma hover:bg-lisma-dark px-8 py-3 text-base font-medium text-white focus:outline-none focus:ring-2 focus:ring-lisma-light focus:ring-offset-2 transition-colors duration-200"
              >
                Daftar Sekarang
              </Link>
            </div>
          </div>
          
          <div className="relative w-full lg:w-7/12 xl:w-1/2 flex items-center justify-center mt-8 lg:mt-0">
            <div className="relative w-full max-w-4xl">
              <Image
                src="/images/hero-unit2.png"
                alt="Aktivitas LISMA"
                width={1600}
                height={1200}
                className="h-auto w-full"
                style={{ 
                  transform: 'scale(1.1)',
                  transformOrigin: 'center',
                  imageRendering: 'crisp-edges',
                  maxHeight: '75vh'
                }}
                quality={100}
                priority
                sizes="(max-width: 1024px) 90vw, 60vw"
              />
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
