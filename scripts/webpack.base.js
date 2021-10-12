const path = require('path');

module.exports = {
  entry: {
    index: path.resolve(__dirname, '../src/client/index.js')
  },
  mode: 'development',
  devtool: 'cheap-module-source-map',
  output: {
    filename: '[name].[contenthash].bundle.js',
    path: path.resolve(__dirname, '../dist'),
    clean: true,
    publicPath: './',
  },
  cache: false,
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: '/node_modules/',
        use: [{
          loader: 'babel-loader',
        }]
      }
    ]
  }
};