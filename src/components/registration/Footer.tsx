const FooterPendaftaran = () => {
  return (
    <footer className="bg-gray-50 border-t border-gray-200">
      <div className="w-full py-4 sm:py-6">
        <div className="flex flex-col md:flex-row md:justify-center md:items-center text-gray-600 text-sm sm:text-base">
          <p className="text-center md:inline">
            &copy; {new Date().getFullYear()} Copyright{' '}
            <span className="font-semibold">LISMA UNPAS</span>
          </p>
          <p className="text-center mt-1 md:mt-0 md:ml-1">
            <span className="hidden md:inline"> </span>Powered by{' '}
            <a 
              href="https://www.kodingkeliling.com/" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="text-lisma font-semibold hover:underline"
            >
              Koding Keliling
            </a>
          </p>
        </div>
      </div>
    </footer>
  );
};

export default FooterPendaftaran;
