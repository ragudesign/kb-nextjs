
const path = require('path')

module.exports = {
  sassOptions: {
    includePaths: [path.join(__dirname, 'styles/abstracts')],
    prependData: `
          @import "vars.scss";
          @import "mixins.scss";
        `
  },
  webpack: (config, { isServer }) => {
    if (isServer) {
      require('./scripts/build-search');
    }

    return config;
  }
}