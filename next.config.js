const withTM = require('next-transpile-modules')([
  '@matthill8286/atomic-ui',
  '@matthill8286/atomic-icon-library'
])

const withFonts = require('next-fonts')

module.exports = withTM(
  withFonts({
    i18n: {
      locales: ['en', 'en'],
      defaultLocale: 'en'
    },
    images: {
      domains: ['media.graphcms.com']
    }
  })
)
