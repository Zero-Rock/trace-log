/**
 * Created by Zero<mobius_pan@yeah.net> on 2021/1/3 10:09 下午.
 */
const path = require('path');
const PKG = require('../package.json');
module.exports = {
  mode: 'production',
  entry: {
    [PKG.name]: './src/index.ts'
  },
  module: {
    rules: [{
      test: /\.tsx?$/,
      use: 'ts-loader',
      exclude: /node_modules/
    }]
  },
  output: {
    path: path.resolve(__dirname, '../dist')
  }
}
