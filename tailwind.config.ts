import type { Config } from 'tailwindcss';

const config: Config = {
  content: [
    './src/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ['var(--font-montserrat)', 'sans-serif'],
      },
      colors: {
        primary: {
          DEFAULT: '#1e40af',
          dark: '#1e3a8a',
          light: '#3b82f6',
        },
        secondary: {
          DEFAULT: '#4f46e5',
          dark: '#4338ca',
        },
        lisma: {
          light: '#8a4baf',     // Ungu LISMA muda
          DEFAULT: '#693884',   // Ungu LISMA utama
          dark: '#4e2a63',      // Ungu LISMA tua
          text: '#413E66',      // Warna teks navbar
          hover: '#5E35B1',     // Warna hover (ungu LISMA)
          'dark-purple': '#2d2b46' // Warna ungu gelap untuk pendaftaran
        },
      },
    },
  },
  plugins: [],
};

export default config;
