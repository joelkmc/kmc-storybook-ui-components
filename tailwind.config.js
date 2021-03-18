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
        kmcBlueLite: '#56CCF2',
        kmcBlueBase: '#2D9CDB',
        kmcBlueDark: '#2F80ED',
        kmcGreenLite: '#6FCF97',
        kmcGreenBase: '#27AE60',
        kmcGreenDark: '#219653',
        kmcGrayLite: '#E0E0E0',
        kmcGrayBase: '#838383',
        kmcGrayDark: '#333333',
        kmcOrange: '#f99d3a',
        kmcYellow: '#f2c94c',
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
