/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        russo: ['Russo One', 'sans-serif'],
        bagel: ['Bagel Fat One', 'serif'],
        dmSerif: ["DM Serif Display", 'serif'],
        gummy: ["Sour Gummy", 'serif'],
        roboto: ['Roboto', 'serif'],
      }
    },
  },
  plugins: [],
}