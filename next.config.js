const { i18n } = require('./next-i18next.config')

module.exports = {
  reactStrictMode: true,
  swcMinify: true,
  images: {
    loader: 'default',
  },
  i18n,
}
