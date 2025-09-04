const FooterPendaftaran = () => {
  return (
    <footer className="bg-gray-50 border-t border-gray-200">
      <div className="w-full py-4 sm:py-6">
        <p className="text-center text-gray-500 text-[10px] sm:text-[12px] md:text-[13px] whitespace-nowrap px-2">
          &copy; {new Date().getFullYear()} Copyright{" "}
          <span className="font-bold">LISMA UNPAS</span>. Powered by{" "}
          <a
            href="https://www.kodingkeliling.com/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-lisma font-bold"
          >
            Koding Keliling
          </a>
        </p>
      </div>
    </footer>
  );
};

export default FooterPendaftaran;
