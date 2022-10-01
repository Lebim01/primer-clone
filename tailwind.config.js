/** @type {import('tailwindcss').Config} */
const defaultTheme = require('tailwindcss/defaultTheme')

module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontSize: {
        'xxs': '.60rem',
        'xs': '.75rem',
      },
      colors: {
        primary: "#362ff9",
        "primary-thin": "#8682fb",
        "hover-card": "#f5f5f5"
      },
      transitionProperty: {
        'width': 'width'
      },
    },
  },
  plugins: [],
}
