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
          cream: '#FFF9EB',
          sky: '#E0F4FF',
          blush: '#FFE5E0',
          night: '#0F172A',
        },
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', '-apple-system', 'BlinkMacSystemFont', 'Segoe UI', 'sans-serif'],
        display: ['Space Grotesk', 'Inter', 'system-ui', 'sans-serif'],
      },
      boxShadow: {
        soft: '0 20px 80px rgba(31, 42, 46, 0.08)',
      },
    },
  },
  plugins: [],
} satisfies Config;
