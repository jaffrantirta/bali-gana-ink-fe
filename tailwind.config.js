/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      colors: {
        primary: '#000',
        secondary: '#01010101',
        dark: '#2B2B39',
        dark2: '#20202D'
      },
      fontFamily: {
        primary: ['Inter', 'sans-serif'],
        fredoka: ['Fredoka', 'sans-serif'],
        zeyada: ['Zeyada', 'cursive']
      }
    },
  },
  plugins: [],
}

