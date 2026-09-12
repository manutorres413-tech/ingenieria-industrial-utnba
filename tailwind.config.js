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
          DEFAULT: '#B71234',
          hover: '#9E0E2B',
          dark: '#850B24',
          light: '#FFF1F3',
          surface: '#FDF2F4',
        },
        'utn-charcoal': {
          DEFAULT: '#2F3336',
          dark: '#1E2124',
          light: '#4A5055',
        },
        'utn-gray': {
          bg: '#F5F6F8',
          card: '#FFFFFF',
          border: '#E2E5E9',
          muted: '#656F77',
        }
      },
      fontFamily: {
        sans: ['Segoe UI', 'system-ui', '-apple-system', 'BlinkMacSystemFont', 'Roboto', 'sans-serif'],
      },
    },
  },
  plugins: [],
}
