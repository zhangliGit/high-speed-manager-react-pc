const webpack = require('webpack');
const baseConfig = require('./webpack.base.config.js');
const merge = require('webpack-merge');
const utils = require('./build/utils');
const devConfig = merge(baseConfig, {
  mode: 'development',
  devServer: {
    host: "localhost",
    port: "8090",
    open: true, // 开启浏览器
    hot: true,   // 开启热更新
  },
  /**
   * loadoer配置
   */
  module: {
    rules: [
      {
        test: /\.(css|less|scss)$/,
        use: [
          'style-loader',
          'css-loader',
          'less-loader',
          'sass-loader'
        ]
      }
    ]
  },
  plugins: [
    new webpack.HotModuleReplacementPlugin(),
    /**
     * 指定编译的html模板，并把打包后的文件自动的引入
     */
    ...utils.devHttpPlugins()
  ]
});

module.exports = devConfig;