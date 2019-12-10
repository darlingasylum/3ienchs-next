const withLess = require('@zeit/next-less');
const path = require('path');

module.exports = withLess({
  webpack(config, options) {
    config.module.rules.push({
      test: /\.(png|jpg|gif|svg|eot|ttf|woff|woff2)$/,
      use: {
        loader: 'url-loader',
        options: {
          limit: 100000
        }
      }
    });
    config.resolve.alias['@'] = path.resolve(__dirname);
    return config;
  }
});
