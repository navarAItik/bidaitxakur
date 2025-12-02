import type { Config } from 'tailwindcss';

export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        brand: {
          green: '#1B4332',
          sand: '#F3EED9',
          dark: '#14281D',
          cream: '#FFF8ED',
          sky: '#D9E4DD',
          blush: '#F4DCC4',
          night: '#0F2016',
          earth: '#A68A64',
        },
      },
      fontFamily: {
        sans: ['"Montserrat"', 'system-ui', '-apple-system', 'BlinkMacSystemFont', 'Segoe UI', 'sans-serif'],
        display: ['"Montserrat"', 'system-ui', 'sans-serif'],
      },
      boxShadow: {
        soft: '0 25px 80px rgba(20, 40, 29, 0.12)',
        accent: '0 15px 50px rgba(166, 138, 100, 0.25)',
      },
    },
  },
  plugins: [],
} satisfies Config;
