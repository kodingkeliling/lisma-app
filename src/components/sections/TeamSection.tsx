import Container from '../common/Container';
import Image from 'next/image';

const team = [
  {
    name: 'Budi Santoso',
    role: 'Ketua Umum',
    image: '/images/team/budi-santoso.jpg',
    instagram: 'budisantoso'
  },
  {
    name: 'Dewi Lestari',
    role: 'Sekretaris Umum',
    image: '/images/team/dewi-lestari.jpg',
    instagram: 'dewi.lestari'
  },
  {
    name: 'Ahmad Fauzi',
    role: 'Bendahara Umum',
    image: '/images/team/ahmad-fauzi.jpg',
    instagram: 'ahmadfauzi'
  },
  {
    name: 'Siti Rahayu',
    role: 'Ketua 1',
    image: '/images/team/siti-rahayu.jpg',
    instagram: 'siti.rahayu'
  },
  {
    name: 'Budi Santoso',
    role: 'Ketua 2',
    image: '/images/team/budi-santoso.jpg',
    instagram: 'budisantoso2'
  },
  {
    name: 'Dewi Lestari',
    role: 'Ketua 3',
    image: '/images/team/dewi-lestari.jpg',
    instagram: 'dewi.lestari'
  },
  {
    name: 'Ahmad Fauzi',
    role: 'Koordinator Tesas',
    image: '/images/team/ahmad-fauzi.jpg',
    instagram: 'ahmadfauzi.tesas'
  },
  {
    name: 'Siti Rahayu',
    role: 'Wakil Koordinator Tesas',
    image: '/images/team/siti-rahayu.jpg',
    instagram: 'siti.rahayu.tesas'
  },
  {
    name: 'Budi Santoso',
    role: 'Koordinator KDS',
    image: '/images/team/budi-santoso.jpg',
    instagram: 'budisantoso.kds'
  },
  {
    name: 'Dewi Lestari',
    role: 'Wakil Koordinator KDS',
    image: '/images/team/dewi-lestari.jpg',
    instagram: 'dewi.lestari.kds'
  },
  {
    name: 'Ahmad Fauzi',
    role: 'Koordinator PSM',
    image: '/images/team/ahmad-fauzi.jpg',
    instagram: 'ahmadfauzi.psm'
  },
  {
    name: 'Siti Rahayu',
    role: 'Wakil Koordinator Psm',
    image: '/images/team/siti-rahayu.jpg',
    instagram: 'siti.rahayu.psm'
  },
  {
    name: 'Budi Santoso',
    role: 'Koordinator Takre',
    image: '/images/team/budi-santoso.jpg',
    instagram: 'budisantoso.takre'
  },
  {
    name: 'Dewi Lestari',
    role: 'Koordinator FG',
    image: '/images/team/dewi-lestari.jpg',
    instagram: 'dewi.lestari.fg'
  },
  {
    name: 'Dewi Lestari',
    role: 'Sarana Prasarana',
    image: '/images/team/dewi-lestari.jpg',
    instagram: 'dewi.lestari.sarpras'
  },
  {
    name: 'Ahmad Fauzi',
    role: 'Digital Content',
    image: '/images/team/ahmad-fauzi.jpg',
    instagram: 'ahmadfauzi.digital'
  },
  {
    name: 'Siti Rahayu',
    role: 'Humas Internal',
    image: '/images/team/siti-rahayu.jpg',
    instagram: 'siti.rahayu.humas'
  },
  {
    name: 'Budi Santoso',
    role: 'Humas Eksternal',
    image: '/images/team/budi-santoso.jpg',
    instagram: 'budisantoso.humas'
  },
];

export default function TeamSection() {
  return (
    <section id="tim" className="py-20 bg-white">
      <Container>
        <div className="mx-auto max-w-4xl text-center mb-16">
          <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
            Dewan Pengurus Harian
          </h2>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          {team.map((member, index) => (
            <div 
              key={index}
              className="group relative overflow-hidden rounded-lg shadow-md transition-all duration-300 hover:shadow-xl"
            >
              {/* Foto anggota */}
              <div className="aspect-[3/4] w-full overflow-hidden">
                <Image
                  src={member.image}
                  alt={member.name}
                  width={300}
                  height={400}
                  className="h-full w-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
              </div>

              {/* Overlay dengan animasi naik */}
              <div className="absolute bottom-0 left-0 right-0 
                              bg-black/70 backdrop-blur-sm
                              transform translate-y-16 group-hover:translate-y-0
                              transition-transform duration-500 ease-out p-4">
                <h3 className="text-white font-semibold text-center">{member.name}</h3>
                <p className="text-white/80 text-sm text-center">{member.role}</p>

                {/* Instagram Icon */}
                <a 
                  href={`https://instagram.com/${member.instagram}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex justify-center mt-3 opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                >
                  <div className="bg-white p-2 rounded-full">
                    <svg 
                      className="w-5 h-5 text-pink-600"
                      fill="currentColor"
                      viewBox="0 0 24 24"
                      aria-hidden="true"
                    >
                      <path
                        fillRule="evenodd"
                        d="M12.315 2c2.43 0 2.784.013 3.808.06 1.064.049 1.791.218 2.427.465a4.902 4.902 0 011.772 1.153 4.902 4.902 0 011.153 1.772c.247.636.416 1.363.465 2.427.048 1.067.06 1.407.06 4.123v.08c0 2.643-.012 2.987-.06 4.043-.049 1.064-.218 1.791-.465 2.427a4.902 4.902 0 01-1.153 1.772 4.902 4.902 0 01-1.772 1.153c-.636.247-1.363.415-2.427.465-1.067.048-1.407.06-4.123.06h-.08c-2.643 0-2.987-.012-4.043-.06-1.064-.049-1.791-.218-2.427-.465a4.902 4.902 0 01-1.772-1.153 4.902 4.902 0 01-1.153-1.772c-.247-.636-.416-1.363-.465-2.427-.047-1.024-.06-1.379-.06-3.808v-.63c0-2.43.013-2.784.06-3.808.049-1.064.218-1.791.465-2.427a4.902 4.902 0 011.153-1.772A4.902 4.902 0 015.45 2.525c.636-.247 1.363-.416 2.427-.465C8.901 2.013 9.256 2 11.685 2h.63zm-.081 1.802h-.468c-2.456 0-2.784.011-3.807.058-.976.045-1.505.207-1.858.344-.467.182-.8.398-1.15.748-.35.35-.566.683-.748 1.15-.137.353-.3.882-.344 1.857-.047 1.023-.058 1.351-.058 3.807v.468c0 2.456.011 2.784.058 3.807.045.976.207 1.505.344 1.858.182.466.399.8.748 1.15.35.35.683.566 1.15.748.353.137.882.3 1.857.344 1.054.048 1.37.058 4.041.058h.08c2.597 0 2.917-.01 3.96-.058.976-.045 1.505-.207 1.858-.344.466-.182.8-.398 1.15-.748.35-.35.566-.683.748-1.15.137-.353.3-.882.344-1.857.048-1.055.058-1.37.058-4.041v-.08c0-2.597-.01-2.917-.058-3.96-.045-.976-.207-1.505-.344-1.858a3.097 3.097 0 00-.748-1.15 3.098 3.098 0 00-1.15-.748c-.353-.137-.882-.3-1.857-.344-1.023-.047-1.351-.058-3.807-.058zM12 6.865a5.135 5.135 0 110 10.27 5.135 5.135 0 010-10.27zm0 1.802a3.333 3.333 0 100 6.666 3.333 3.333 0 000-6.666zm5.338-3.205a1.2 1.2 0 110 2.4 1.2 1.2 0 010-2.4z"
                        clipRule="evenodd"
                      />
                    </svg>
                  </div>
                </a>
              </div>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}
