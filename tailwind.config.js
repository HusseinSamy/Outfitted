module.exports = {
  content: ['./src/**/*.{html,ts}'],
  theme: {
    screens: {
      'sm': '640px',
      'md': '790px',
      'lg': '1120px',
      'xl': '1410px',
      '2xl': '1536px'
    },
    colors: {
      'transparent': 'transparent',
      'primary_red': '#f33a47',
      'primary_off_white': '#fefdfc',
      'secondary_off_white': '#fcf9f2',
      'black': '#313131'
    },
    fontFamily: {
      'poppins': ['poppins']
    },
    extend: {
      gridTemplateRows: {
        // 'col-custom-layout': 'repeat(12,minmax(900px, 1fr))',
        'row-custom-layout': '88px repeat(4, minmax(200px, 1fr))'
      },
    },
    plugins: [],
  }
}
