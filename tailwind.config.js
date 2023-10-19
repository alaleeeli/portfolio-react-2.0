const {nextui} = require("@nextui-org/react");

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}",
  "./node_modules/@nextui-org/theme/dist/**/*.{js,ts,jsx,tsx}",],
  theme: {
    extend: {
      colors: {
        'coffee-50': '#F0EDEA',
        'coffee-100': '#E7E1DC',
        'coffee-200': '#DDD4CD',
        'coffee-300': '#C3B5A9',
        'coffee-400': '#A68F7E',
        'coffee-500': '#886A53',
        'coffee-600': '#75553C',
        'coffee-700': '#624025',
        'coffee-800': '#4E331D',
        'coffee-900': '#322113',
        'gray-true-50': '#F5F5F5',
        'gray-true-100': '#E5E5E5',
        'gray-true-200': '#D6D6D6',
        'gray-true-300': '#A3A3A3',
        'gray-true-400': '#737373',
        'gray-true-500': '#525252',
        'gray-true-600': '#424242',
        'gray-true-650': '#313131',
        'gray-true-700': '#292929',
        'gray-true-800': '#141414',
      },
      grayscale: {
        50: '20%',
      },
      brightness: {
        40: '.40',
        60: '.60',
      },

      fontFamily: {
        custom: ['Inter', 'sans'],
        butler: ['Butler', 'sans']
      },
      fontWeight: {
        thin: 100,
        extralight: 200,
        light: 300,
        normal: 400,
        medium: 500,
        semibold: 600,
        bold: 700,
      },
    },
  },
  darkMode: "class",
  plugins: [nextui()],
}

