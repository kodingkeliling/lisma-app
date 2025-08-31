import Link from 'next/link';
import Image from 'next/image';
import Container from '../common/Container';

export default function Hero() {
  return (
    <section 
      className="relative overflow-hidden min-h-screen w-full flex items-center py-12 lg:py-0"
      style={{ 
        backgroundImage: 'url(/images/bg-hero.png)',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat'
      }}
    >
      <Container className="relative z-10 w-full">
        <div className="flex flex-col-reverse lg:flex-row items-center justify-between lg:h-[80vh] px-4 sm:px-6 lg:px-8">
          <div className="w-full lg:w-5/12 xl:w-2/5 text-center lg:text-left mt-12 lg:mt-0">
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight text-lisma-text mb-6">
              <div>Lingkung Seni</div>
              <div>Mahasiswa</div>
            </h1>
            <div className="mt-6 lg:mt-8">
              <Link 
                href="/pendaftaran"
                className="inline-flex items-center justify-center rounded-md bg-lisma hover:bg-lisma-dark px-6 py-3 text-sm sm:text-base font-medium text-white focus:outline-none focus:ring-2 focus:ring-lisma-light focus:ring-offset-2 transition-colors duration-200 w-full sm:w-auto"
              >
                Daftar Sekarang
              </Link>
            </div>
          </div>
          
          <div className="relative w-full lg:w-7/12 xl:w-1/2 flex items-center justify-center mb-8 lg:mb-0">
            <div className="relative w-full max-w-2xl lg:max-w-4xl">
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
                  maxHeight: '50vh',
                  objectFit: 'contain'
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
