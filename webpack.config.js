const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const { type } = require('os');

module.exports = {
  mode: 'production',
  entry: {
    index: path.resolve(__dirname, './src/index.js')
  },
  output: {
    path: path.resolve(__dirname, './dist'),
    filename: '[name].bundle.js'
  },
  plugins: [
    new HtmlWebpackPlugin(
      {
        template: path.resolve(__dirname, './src/index.html')
      }
    ),
    new MiniCssExtractPlugin(
      {
      filename: 'index.css',
      }
    ),
  ],
  module: {
    rules: [
      {
        test: /\.css$/,
        use: [MiniCssExtractPlugin.loader, "css-loader"],
    }
    ]
  },
  watchOptions: {
    ignored: /node_modules/,
  }
};