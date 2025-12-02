import type { Config } from 'tailwindcss';

export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        brand: {
          green: '#3B7A57',
          sand: '#F2E8CF',
          dark: '#1F2A2E',
        },
      },
    },
  },
  plugins: [],
} satisfies Config;
