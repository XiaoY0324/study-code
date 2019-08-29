const path = require('path');

module.exports = {
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /(node_modules|bower_components)/,
        use: {
          loader: path.resolve('./loader/index.js'),
          options: {
            data: "自定义的配置项"
          }
        }
      }
    ]
  }
}