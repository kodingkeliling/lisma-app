"use client";

import { useState } from 'react';
import { motion, AnimatePresence, Variants } from 'framer-motion';
// Using motion from framer-motion directly instead of custom MotionDiv
import Container from '../common/Container';

const faqs = [
  {
    question: 'Apa itu LISMA?',
    answer:
      'LISMA (Lingkung Seni Mahasiswa) adalah unit kegiatan mahasiswa di Universitas Pasundan yang berfokus pada pengembangan bakat seni mahasiswa dalam berbagai bidang seperti tari, musik, teater, dan seni rupa.',
  },
  {
    question: 'Bagaimana cara bergabung dengan LISMA?',
    answer:
      'Anda bisa mendaftar melalui formulir pendaftaran online di website ini atau datang langsung ke sekretariat LISMA di Gedung Student Center Lt. 2 Universitas Pasundan pada jam kerja.',
  },
  {
    question: 'Apakah ada biaya pendaftaran?',
    answer:
      'Ada biaya pendaftaran sebesar Rp 30.000 untuk biaya administrasi dan mendapatkan kartu anggota. Biaya ini hanya dibayarkan sekali saat mendaftar.',
  },
  {
    question: 'Apa saja unit kegiatan yang ada di LISMA?',
    answer:
      'LISMA memiliki beberapa unit kegiatan antara lain Tari Tradisional, Teater, Musik Tradisional, Paduan Suara, Seni Rupa, dan Fotografi & Film.',
  },
  {
    question: 'Apakah ada jadwal latihan rutin?',
    answer:
      'Ya, setiap unit memiliki jadwal latihan rutin yang berbeda-beda. Informasi jadwal lengkap bisa dilihat di papan pengumuman LISMA atau melalui media sosial resmi kami.'
  }
];

// Animation variants
const container: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1
    }
  }
};

const item: Variants = {
  hidden: { opacity: 0, y: 10 },
  visible: (i: number) => ({
    opacity: 1, 
    y: 0,
    transition: { 
      delay: i * 0.1,
      duration: 0.4,
      ease: [0.16, 1, 0.3, 1]
    } 
  })
};

export default function QuestionSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const toggleAccordion = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section id="faq" className="py-20 bg-white">
      <Container>
        <div className="md:px-12">
          <motion.div 
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={container}
          >
          <motion.div 
            variants={item}
            className="text-center mb-12"
            custom={0}
          >
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Pertanyaan yang Sering Ditanyakan</h2>
            <motion.p 
              className="text-lg text-gray-600 max-w-3xl mx-auto"
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1, duration: 0.4 }}
            >
              Temukan jawaban atas pertanyaan umum seputar LISMA dan kegiatan kami.
            </motion.p>
          </motion.div>

          <div className="w-full max-w-3xl mx-auto space-y-4">
          {faqs.map((faq, index) => (
            <motion.div 
              key={index} 
              className="mb-4"
              variants={item}
              custom={index}
            >
              <motion.button
                className="flex items-center justify-between w-full p-6 text-left bg-white rounded-lg shadow-sm hover:shadow transition-all duration-200"
                onClick={() => toggleAccordion(index)}
                whileHover={{ scale: 1.01 }}
                whileTap={{ scale: 0.99 }}
                type="button"
              >
                <span className="text-lg font-medium text-gray-900">{faq.question}</span>
                <motion.div
                  animate={{
                    rotate: openIndex === index ? 180 : 0
                  }}
                  transition={{ duration: 0.3, ease: "easeInOut" }}
                >
                  <svg
                    className="w-5 h-5 text-gray-500"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M19 9l-7 7-7-7"
                    />
                  </svg>
                </motion.div>
              </motion.button>
              <AnimatePresence>
                {openIndex === index && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ 
                      height: 'auto', 
                      opacity: 1,
                      transition: {
                        height: { duration: 0.3, ease: [0.16, 1, 0.3, 1] as const },
                        opacity: { duration: 0.2, delay: 0.1 }
                      }
                    }}
                    exit={{ 
                      height: 0, 
                      opacity: 0,
                      transition: {
                        height: { duration: 0.2, ease: [0.16, 1, 0.3, 1] as const },
                        opacity: { duration: 0.1 }
                      }
                    }}
                    className="overflow-hidden"
                  >
                    <div className="p-6 bg-white border-t border-gray-200 rounded-b-lg">
                      <motion.p 
                        className="text-gray-600"
                        initial={{ opacity: 0, y: -10 }}
                        animate={{ 
                          opacity: 1, 
                          y: 0,
                          transition: { 
                            delay: 0.15,
                            duration: 0.3,
                            ease: [0.16, 1, 0.3, 1] as const
                          }
                        }}
                        exit={{ 
                          opacity: 0,
                          y: -10,
                          transition: { duration: 0.2 }
                        }}
                      >
                        {faq.answer}
                      </motion.p>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          ))}
          </div>
          </motion.div>
        </div>
      </Container>
    </section>
  );
}
