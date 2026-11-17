/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Inter', 'system-ui', 'sans-serif'],
      },
      colors: {
        navy: {
          50: '#eef4fb',
          100: '#d9e6f5',
          200: '#b3cde9',
          300: '#7fa8d8',
          400: '#4d82c4',
          500: '#2a66ab',
          600: '#1e4f8c',
          700: '#173e6e',
          800: '#122e51',
          900: '#0d2140',
        },
      },
    },
  },
  plugins: [],
};
