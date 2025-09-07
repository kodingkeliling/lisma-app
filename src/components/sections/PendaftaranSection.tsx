"use client";

import { Variants } from 'framer-motion';
import { MotionDiv } from '../common/MotionComponents';
import Container from '../common/Container';
import Link from 'next/link';

export default function PendaftaranSection() {
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
    },
    hover: {
      scale: 1.05,
      transition: { duration: 0.2 }
    }
  };

  return (
    <section id="daftar" className="py-12 bg-lisma-dark-purple">
      <Container>
        <MotionDiv 
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-50px" }}
          className="flex flex-col md:flex-row items-center justify-between gap-6 md:px-12"
        >
          <MotionDiv 
            variants={item}
            className="text-white text-center md:text-left"
          >
            <h2 className="text-2xl font-bold sm:text-3xl whitespace-nowrap">
              Pendaftaran Anggota Baru
            </h2>
            <p className="text-blue-100 mt-2 text-sm sm:text-base">
              UDAH DIBUKA NIH!
            </p>
          </MotionDiv>
          <MotionDiv 
            variants={item}
            whileHover="hover"
          >
            <Link 
              href="/pendaftaran"
              className="px-8 py-3 bg-white text-lisma-text font-semibold rounded-lg hover:bg-lisma hover:text-white transform hover:-translate-y-1 transition-all duration-300 ease-in-out shadow-md hover:shadow-lg whitespace-nowrap block"
            >
              Daftar Sekarang
            </Link>
          </MotionDiv>
        </MotionDiv>
      </Container>
    </section>
  );
}
