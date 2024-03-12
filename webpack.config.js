const path = require('path');
const htmlWebpackPlugin = require('html-webpack-plugin');
const { type } = require('os');

module.exports = {
  entry: {
    index: path.resolve(__dirname, './src/index.js')
  },
  output: {
    path: path.resolve(__dirname, './dist'),
    filename: '[name].bundle.js'
  },
  plugins: [
    new htmlWebpackPlugin(
      {
        template: path.resolve(__dirname, './src/index.html')
      }
    )
  ],
  module: {
    rules: [
      {
        test: /\.css$/,
        use: ['style-loader', 'css-loader']
    }
    ]
  }
};