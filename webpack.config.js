/* eslint-disable @typescript-eslint/no-var-requires */
const path = require('path');
const webpack = require('webpack');
const HtmlWebPackPlugin = require('html-webpack-plugin');

const isDev = process.env.NODE_ENV === 'development';

module.exports = {
  context: path.resolve(__dirname, 'src'),
  mode: 'development',
  entry: [path.resolve(__dirname, 'src')],
  devtool: 'inline-source-map',
  output: {
    filename: '[name].build.js',
    publicPath: '/',
    path: path.resolve(__dirname, 'dist'),
  },
  resolve: {
    alias: {
      '@components': path.resolve(__dirname, 'src/components'),
      '@styles': path.resolve(__dirname, 'src/styles'),
    },
    extensions: ['.ts', '.tsx', '.js', '.jsx'],
  },
  plugins: [
    new HtmlWebPackPlugin({
      template: path.resolve(__dirname, 'public/index.html'),
      filename: 'index.html',
      minify: {
        collapseWhitespace: !isDev,
      },
    }),
  ],
  devServer: {
    historyApiFallback: true,
    open: true,
    compress: true,
    hot: true,
    port: 3000,
  },
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        use: ['babel-loader'],
      },
      {
        test: /\.(ts|tsx)$/,
        exclude: /node_modules/,
        use: ['ts-loader'],
      },
      {
        test: /\.css$/i,
        use: ['style-loader', 'css-loader'],
      },
      {
        test: /\.s[ac]ss$/i,
        use: ['style-loader', 'css-loader', 'sass-loader'],
      },
      {
        test: /\.(png|svg|jpg|jpeg|gif)$/i,
        type: 'asset/resource',
      },
    ],
  },
};
