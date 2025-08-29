"use client";

import { useState } from 'react';
import { MotionDiv, AnimatePresence } from '../common/MotionComponents';
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
      'Ada biaya pendaftaran sebesar Rp 50.000 untuk biaya administrasi dan mendapatkan kartu anggota. Biaya ini hanya dibayarkan sekali saat mendaftar.',
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
const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { 
    opacity: 1, 
    y: 0, 
    transition: { 
      duration: 0.5 
    } 
  }
};

export default function QuestionSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const toggleAccordion = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section id="faq" className="py-20 bg-gray-50">
      <Container>
        <MotionDiv 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl font-bold text-gray-900 mb-4">Pertanyaan yang Sering Ditanyakan</h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Temukan jawaban atas pertanyaan umum seputar LISMA dan kegiatan kami.
          </p>
        </MotionDiv>

        <div className="max-w-3xl mx-auto">
          {faqs.map((faq, index) => (
            <div key={index} className="mb-4">
              <button
                className="flex items-center justify-between w-full p-6 text-left bg-white rounded-lg shadow-sm hover:shadow transition-shadow duration-200"
                onClick={() => toggleAccordion(index)}
              >
                <span className="text-lg font-medium text-gray-900">{faq.question}</span>
                <svg
                  className={`w-5 h-5 text-gray-500 transition-transform duration-200 ${
                    openIndex === index ? 'transform rotate-180' : ''
                  }`}
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
              </button>
              <AnimatePresence>
                {openIndex === index && (
                  <MotionDiv
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: 'auto', opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.3 }}
                    className="overflow-hidden"
                  >
                    <div className="p-6 bg-white border-t border-gray-200 rounded-b-lg">
                      <p className="text-gray-600">{faq.answer}</p>
                    </div>
                  </MotionDiv>
                )}
              </AnimatePresence>
            </div>
          ))}
        </div>

        <MotionDiv
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
          className="mt-16 text-center px-4 sm:px-6 lg:px-8"
        >
          <p className="text-gray-600 mb-6 text-lg">
            Masih ada pertanyaan lain?
          </p>
          <a
            href="#kontak"
            className="inline-flex items-center px-8 py-3 border border-transparent text-base font-medium rounded-full text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 transition-all duration-300 transform hover:-translate-y-1"
          >
            Hubungi Kami
            <svg className="ml-2 -mr-1 w-5 h-5" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
              <path fillRule="evenodd" d="M10.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L12.586 11H5a1 1 0 110-2h7.586l-2.293-2.293a1 1 0 010-1.414z" clipRule="evenodd" />
            </svg>
          </a>
        </MotionDiv>
      </Container>
    </section>
  );
}
