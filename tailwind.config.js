/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontSize: {
        'xxs': '.65rem',
        'xs': '.75rem',
      },
      colors: {
        primary: "#362ff9",
        "primary-thin": "#8682fb"
      },
      transitionProperty: {
        'width': 'width'
      },
    },
  },
  plugins: [],
}
