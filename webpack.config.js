const fs = require('fs');
const path = require('path');
const dotenv = require('dotenv');
const { DefinePlugin } = require('webpack');
const nodeExternals = require('webpack-node-externals');

const baseConfig = {
  entry: './src/index.js',
  devtool: 'inline-source-map',
  externals: [nodeExternals()],
  target: 'node',
  plugins: [
    new DefinePlugin({
      'process.env': JSON.stringify(dotenv.config().parsed),
    }),
  ],
  module: {
    rules: [
      {
        test: /\.ts?$/,
        use: ['babel-loader'],
        exclude: /node_modules/,
      },
    ],
  },
  resolve: {
    extensions: ['.tsx', '.ts', '.js', '.json'],
  },
  output: {
    filename: 'index.js',
    path: path.resolve(__dirname, 'build'),
  },
};

module.exports = [
  baseConfig,
];
