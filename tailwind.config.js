module.exports = {
  purge: [],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        'color-white':'#FFFFFF',
        'color-dark':'#000000',
        'color-pink':'#C7C7C7',
        'color-input':'#D3D4D9',
        'color-green':'#ACD9B2'
      },
      fontFamily: {
        'quick': ['Quicksand', 'sans-serif'],
        'roboto': ['Roboto', 'sans-serif']
      },
      gridTemplateRows: {
        'login':'auto fr auto'
      },
      gridTemplateColumns: {
        "articles-grid": "repeat(auto-fill, 240px)",
      }
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
