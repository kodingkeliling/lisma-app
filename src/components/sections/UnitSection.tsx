"use client";

import Container from '../common/Container';
import { motion } from 'framer-motion';
import React from 'react';

const units = [
  {
    name: 'Kesenian Daerah Sunda',
    description: 'Mengembangkan dan melestarikan seni tari tradisional Indonesia dengan kreasi kontemporer.',
    bgImage: '/images/kds.jpg',
  },
  {
    name: 'Teater & Sastra',
    description: 'Wadah berekspresi melalui seni peran dengan berbagai pementasan teater modern dan tradisional.',
    bgImage: '/images/tesas.jpg',
  },
  {
    name: 'Paduan Suara & Musik',
    description: 'Menggali dan mengembangkan musik tradisional dengan sentuhan modern yang inovatif.',
    bgImage: '/images/psm.jpg',
  },
  {
    name: 'Tari Kreasi',
    description: 'Mengasah vokal dan harmoni dalam paduan suara dengan berbagai repertoar musik.',
    bgImage: '/images/takre.jpg',
  },
  {
    name: 'Fotografi',
    description: 'Belajar teknik fotografi dan pembuatan film dari dasar hingga produksi.',
    bgImage: '/images/fg.jpg',
  },
];

const fadeIn = {
  hidden: { opacity: 0, y: 20 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay: i * 0.1,
      duration: 0.6,
    },
  }),
} as const;

function ImageWithFallback({ src, alt, className }: { src: string; alt: string; className?: string }) {
  const [imageError, setImageError] = React.useState(false);
  
  return (
    <div className={className}>
      {!imageError ? (
        <img
          src={src}
          alt={alt}
          onError={() => {
            console.error(`Failed to load image: ${src}`);
            setImageError(true);
          }}
          className="w-full h-full object-cover"
        />
      ) : (
        <div className="w-full h-full bg-gray-200 flex items-center justify-center">
          <span className="text-gray-500">Image not found</span>
        </div>
      )}
    </div>
  );
}

export default function UnitSection() {
  // Debug: Log the image paths
  React.useEffect(() => {
    units.forEach(unit => {
      const img = new Image();
      img.onload = () => console.log(`Loaded: ${unit.bgImage}`);
      img.onerror = () => console.error(`Failed to load: ${unit.bgImage}`);
      img.src = unit.bgImage;
    });
  }, []);

  return (
    <section id="unit" className="py-20 bg-gray-50">
      <Container>
        <div className="px-4 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-7xl">
            <div className="mx-auto max-w-3xl text-center">
              <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">Unit Kegiatan Kami</h2>
              <p className="mt-4 text-lg leading-8 text-gray-600">
              Lingkung Seni Mahasiswa memilik 5 unit kesenian, sebagai berikut:
              </p>
            </div>
            
            <div className="mx-auto mt-16 max-w-5xl space-y-8">
              {/* First Row - 3 Units */}
              <div className="grid grid-cols-1 gap-8 sm:grid-cols-3">
                {units.slice(0, 3).map((unit, index) => (
                  <motion.div
                    key={unit.name}
                    className="relative overflow-hidden rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 h-64 group"
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true }}
                    custom={index}
                  >
                    <div className="absolute inset-0 overflow-hidden transition-transform duration-700 group-hover:scale-110">
                      <ImageWithFallback 
                        src={unit.bgImage}
                        alt={unit.name}
                        className="w-full h-full"
                      />
                      <div className="absolute inset-0 bg-black/60 backdrop-blur-[1px] transition-all duration-300 group-hover:bg-black/70 flex flex-col justify-center items-center p-6 text-center">
                        <h3 className="text-xl font-bold text-white mb-3">{unit.name}</h3>
                        <p className="text-gray-200">{unit.description}</p>
                      </div>
                    </div>
                  </motion.div>
                ))}
              </div>
              
              {/* Second Row - 2 Units (centered) */}
              <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 sm:max-w-2xl sm:mx-auto">
                {units.slice(3).map((unit, index) => (
                  <motion.div
                    key={unit.name}
                    className="relative overflow-hidden rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 h-64 group"
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true }}
                    custom={index + 3}
                  >
                    <div className="absolute inset-0 overflow-hidden transition-transform duration-700 group-hover:scale-110">
                      <ImageWithFallback 
                        src={unit.bgImage}
                        alt={unit.name}
                        className="w-full h-full"
                      />
                      <div className="absolute inset-0 bg-black/60 backdrop-blur-[1px] transition-all duration-300 group-hover:bg-black/70 flex flex-col justify-center items-center p-6 text-center">
                        <h3 className="text-xl font-bold text-white mb-3">{unit.name}</h3>
                        <p className="text-gray-200">{unit.description}</p>
                      </div>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
