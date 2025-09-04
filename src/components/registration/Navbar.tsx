import Link from 'next/link';
import Image from 'next/image';
import Container from '../common/Container'; // pastikan path sesuai

const Navbar = () => {
  return (
    <nav className="bg-white shadow-sm">
      <Container>
        <div className="flex h-16 items-center justify-between md:px-12">
          <Link 
            href="/" 
            className="flex items-center h-16"
          >
            <div className="relative h-10 w-32 md:h-12 md:w-40">
              <Image 
                src="/images/lisma.png" 
                alt="LISMA Logo"
                fill
                className="object-contain object-left"
                priority
              />
            </div>
          </Link>

          <div className="flex items-center">
            <Link 
              href="/" 
              className="text-[18px] font-semibold transition-colors hover:text-lisma text-lisma-text"
            >
              Beranda
            </Link>
          </div>
        </div>
      </Container>
    </nav>
  );
};

export default Navbar;
