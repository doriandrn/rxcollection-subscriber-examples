
module.exports = {
  plugins: {
    'postcss-pxtorem': {},
    'autoprefixer': {},
    'postcss-short': {},
    'postcss-font-magician': {
      protocol: 'https:',
      display: 'swap',
      variants: {
          'Roboto Condensed': {
              '300': [],
              '400': [],
              '700': []
          },
          'IBM Plex Mono': {
            '400': ['woff, eot, woff2'],
            '600': ['woff, eot, woff2']
          }
      },
      foundries: ['google']
    }
  }
}
