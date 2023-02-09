/** @type {import('tailwindcss').Config} */
const defaultTheme = require('tailwindcss/defaultTheme')

module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: 'class',
  theme: {
    fontWeight: {
      normal: '300',
      medium: '400',
      semibold: '600',
      bold: '700',
    },
    extend: {
      fontSize: {
        'xxs': '.60rem',
        'xs': '.75rem',
      },
      colors: {
        primary: "#362ff9",
        "primary-thin": "#8682fb",
        "hover-card": "#f5f5f5",
        "dark-card": "rgba(var(--color-gray-600), 0.3)"
      },
      transitionProperty: {
        'width': 'width'
      },
      blur: {
        'xs': "1px"
      }
    },
  },
  plugins: [
    function({ addBase, theme }) {
      function extractColorVars(colorObj, colorGroup = '') {
        return Object.keys(colorObj).reduce((vars, colorKey) => {
          const value = colorObj[colorKey];

          const newVars =
            typeof value === 'string'
              ? { [`--color${colorGroup}-${colorKey}`]: value }
              : extractColorVars(value, `-${colorKey}`);

          return { ...vars, ...newVars };
        }, {});
      }

      addBase({
        ':root': extractColorVars(theme('colors')),
      });
    },
  ],
}
