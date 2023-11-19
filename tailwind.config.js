/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {
      container: {
        center: true,
      },
      padding: {
        DEFAULT: '1rem',
        sm: '2rem',
        lg: '4rem',
        xl: '5rem',
        '2xl': '6rem',
      },
      screens: {
        lg: '900px',
      },
    },
    fontFamily: {
      montserrat: 'Montserrat',
      tinos: 'Tinos',
    },
  },
  darkMode: 'class',
  plugins: [],
};
