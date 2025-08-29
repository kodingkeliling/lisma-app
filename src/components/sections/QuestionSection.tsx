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

export default function QuestionSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const toggleAccordion = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section id="faq" className="py-20 bg-white">
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
      </Container>
    </section>
  );
}
