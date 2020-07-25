const IS_PRODUCTION = process.env.NODE_ENV === 'production'

module.exports = {
  baseUrl: IS_PRODUCTION ? 'https://djangobat-media.s3-ap-southeast-1.amazonaws.com/static' : '/'
}
