const HtmlWebpackPlugin = require('html-webpack-plugin')
const htmlAfterPlugin = require('./config/htmlAfterPlugin');
const merge = require('webpack-merge');
const argv = require('yargs-parser')(process.argv.slice(2)); // 取命令行参数
const _mode = argv.mode || 'development';   // 区分开发环境和上线环境的配置
const _module = argv.modules || 'nomodule'; // 是否启用babel编译 如果支持module 则不编译 因为浏览器对新的js的优化很多
const _mergeConfig = require(`./config/webpack.${_mode}.js`);
const _mergeModuleConfig = require(`./config/webpack.${_module}.js`);

console.log('用户的参数', _mode, _module);

const webpackConfig = {
    output: {
        filename: "[name].bundle.js"
    },
    module: {
        rules: [
          {
            test: /\.?js$/,
            exclude: /(node_modules|bower_components)/,
            use: {
              loader: 'babel-loader',
              options: {
                presets: ['@babel/preset-env']
              }
            }
          }
        ]
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: _module == 'nomodule' ? `src/index.html` : `dist/index.html`, // 第二次打包追加scripts标签
            filename: `index.html`
        }),
        new htmlAfterPlugin
    ]
}

module.exports = merge(webpackConfig, _mergeModuleConfig, _mergeConfig);
module.exports = merge(webpackConfig, _mergeConfig);