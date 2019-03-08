'use strict';

const path = require('path');
const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const util = require('./util');

const basePlugins = [
  new webpack.DefinePlugin({
    __DEV__: util.isDevelopment,
    __TEST__: JSON.stringify(process.env.TEST || false),
    'process.env.NODE_ENV': JSON.stringify(process.env.NODE_ENV),
  }),
  new HtmlWebpackPlugin({
    template: './src/index.html',
    inject: 'body',
  }),
  new webpack.NoErrorsPlugin(),
];

const shouldSourceMap = process.env.TEST || util.isDevelopment;

const sourceMapPlugins = [
  new webpack.SourceMapDevToolPlugin({filename: null, test: /\.jsx?$/})
];

const shouldOptimize = util.isProduction;

const optimizePlugins = [
  new webpack.optimize.UglifyJsPlugin({
    compress: {
      warnings: false,
    },
  }),
];

module.exports = basePlugins
  .concat(shouldSourceMap ? sourceMapPlugins : [])
  .concat(shouldOptimize ? optimizePlugins : []);
