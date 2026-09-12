/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'utn-red': {
          DEFAULT: '#A31235', // Manual de Marca UTN.BA (Pantone 200 C)
          hover: '#870E2B',
          dark: '#6E0B23',
          light: '#FFF0F3',
          surface: '#FDF2F4',
        },
        'utn-charcoal': {
          DEFAULT: '#231F20', // Manual de Marca UTN.BA Negro Institucional
          dark: '#141414',
          light: '#3D393A',
        },
        'utn-gray': {
          DEFAULT: '#9C9E9F', // Manual de Marca UTN.BA Pantone 429 C
          bg: '#F5F6F8',
          card: '#FFFFFF',
          border: '#E2E5E9',
          muted: '#656F77',
        },
        'utn-industrial': {
          DEFAULT: '#BED600', // Manual de Marca UTN.BA Pantone 382 (Ingeniería Industrial)
          dark: '#9CB000',
          light: '#F4F9D1',
        }
      },
      fontFamily: {
        sans: ['"Helvetica Neue"', 'Helvetica', 'Arial', '-apple-system', 'BlinkMacSystemFont', '"Segoe UI"', 'Roboto', 'sans-serif'],
      },
    },
  },
  plugins: [],
}
