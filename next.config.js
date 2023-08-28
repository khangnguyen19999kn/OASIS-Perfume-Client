module.exports = (phase, { defaultConfig }) => {
  if ('sassOptions' in defaultConfig) {
    // eslint-disable-next-line no-param-reassign
    defaultConfig.sassOptions = {
      includePaths: ['./src'],

      prependData: `@import "./src/styles/index.scss";`
    }
  }

  return defaultConfig
}
module.exports = {
  images: {
    domains: [
      'chuanperfume.com',
      'localhost',
      'res.cloudinary.com',
      'product.hstatic.net'
    ]
  }
}
