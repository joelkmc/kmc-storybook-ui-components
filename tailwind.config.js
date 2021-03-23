module.exports = {
  purge: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
  darkMode: 'class', // or 'media' or 'class'
  theme: {
    extend: {
      screens: {
        xs: '320px',
      },
      colors: {
        transparent: 'transparent',
        current: 'currentColor',
        'kmc-red': '#eb5757',
        'kmc-blue-200': '#2D9CDB',
        'kmc-blue-300': '#2F80ED',
        'kmc-green-100': '#6FCF97',
        'kmc-green-200': '#27AE60',
        'kmc-green-300': '#219653',
        'kmc-gray-100': '#E0E0E0',
        'kmc-gray-200': '##BDBDBD',
        'kmc-gray-300': '##828282',
        'kmc-gray-400': '#4F4F4F',
        'kmc-gray-500': '#333333',
        'kmc-primary': '#0b2535',
        'kmc-secondary': '#e55239',
        kmcVisitedLinks: '#733d90',
      },
      fontFamily: {
        proxiRegular: ['ProximanovaRegular'],
        proxiSemiBold: ['ProximanovaSemiBold'],
        proxiExtraBold: ['ProximanovaExtraBold'],
        sans: [
          'ProximanovaRegular',
          'ui-sans-serif',
          'system-ui',
          '-apple-system',
          'BlinkMacSystemFont',
          '"Segoe UI"',
          'Roboto',
          '"Helvetica Neue"',
          'Arial',
          '"Noto Sans"',
          'sans-serif',
          '"Apple Color Emoji"',
          '"Segoe UI Emoji"',
          '"Segoe UI Symbol"',
          '"Noto Color Emoji"',
        ],
      },
    },
  },
  variants: {
    extend: {
      backgroundColor: ['active'],
    },

    backgroundColor: [
      'responsive',
      'dark',
      'group-hover',
      'focus-within',
      'hover',
      'focus',
    ],
    backgroundImage: ['responsive'],
    backgroundOpacity: [
      'responsive',
      'group-hover',
      'focus-within',
      'hover',
      'focus',
    ],
    borderColor: [
      'responsive',
      'dark',
      'group-hover',
      'focus-within',
      'hover',
      'focus',
      'active',
    ],

    boxShadow: ['responsive', 'group-hover', 'focus-within', 'hover', 'focus'],

    width: ['responsive', 'group-hover', 'focus', 'focus-within'],
  },
  plugins: [],
};
