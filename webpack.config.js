var webpack = require('webpack');

var production = JSON.parse(process.env.PROD_ENV || 'false');

module.exports = {
  entry: './public/src/main.js',
  output: {
    filename: 'main.js',
    path: './public/build/'
  },
  module: {
    loaders: [
      {
        test: /\.html$/,
        loader: 'html'
      },
      {
        test: /\.scss$/,
        loaders: ["style-loader", "css-loader", "sass-loader"]
      },
      {
        test: /\.(jpe?g|png|gif|svg)$/i,
        loaders: [
          'file?hash=sha512&digest=hex&publicPath=build/&name=[hash].[ext]'
        ]
      },
      {
        test: /isotope\-|fizzy\-ui\-utils|desandro\-|masonry|outlayer|get\-size|doc\-ready|eventie|eventemitter/,
        loader: 'imports?define=>false&this=>window'
      }
    ]
  },
  plugins: production ? [
      new webpack.optimize.UglifyJsPlugin({
        compress: { warnings: false },
        output: {
          comments: false
        },
      })
    ] : []
};