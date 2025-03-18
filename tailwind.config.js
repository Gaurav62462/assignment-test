/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        blue_500: '#603AE5',
        velvel_curtain:'#8181A5',
        black_500:'#1C1D21',
        gray_200:'#EEEEEE'
      },
    },
  },
  plugins: [],
}

