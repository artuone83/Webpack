const path = require('path');
const common = require('./webpack.common');
const merge = require('webpack-merge');
// const BrowserSyncWebpackPlugin = require('browser-sync-webpack-plugin');

module.exports = merge(common, {
  mode: 'development',
  devServer: {
    historyApiFallback: true
  },
  output: {
    publicPath: '/',
    filename: './scripts/main.js',
    path: path.resolve(__dirname, 'dist')
  },
  // plugins: [
  //   // new BrowserSyncWebpackPlugin({
  //   //   host: 'localhost',
  //   //   port: 9100,
  //   //   proxy: 'http://localhost:8888',
  //   // }, {
  //   //   reload: false
  //   // })
  // ]
});
