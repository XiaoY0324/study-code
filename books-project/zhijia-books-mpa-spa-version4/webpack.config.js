const HtmlWebpackPlugin = require('html-webpack-plugin')
const htmlAfterPlugin = require('./config/htmlAfterPlugin');
const { join } = require('path');
const merge = require('webpack-merge');
const argv = require('yargs-parser')(process.argv.slice(2)); // 取命令行参数
const _mode = argv.mode || 'development';   // 区分开发环境和上线环境的配置
const __modeFlag = _mode == 'development'; 
// const _module = argv.modules || 'nomodule'; // 是否启用babel编译 如果支持module 则不编译 因为浏览器对新的js的优化很多
const _mergeConfig = require(`./config/webpack.${_mode}.js`);
// const _mergeModuleConfig = require(`./config/webpack.${_module}.js`);
const glob = require('glob'); // 查找文件

// 寻找_entry
const files = glob.sync('./src/client/views/**/*.entry.js');
let _entry = {};
let _plugins = [];

for(let item of files) {
    console.log(item, '-----------'); 
    // ./src/client/views/books/books-index.entry.js
    // ./src/client/views/books/books-list.entry.js
    // 通过路径文件名 获取入口的key值
    if (/.+\/([a-zA-Z]+-[a-zA-Z]+)(\.entry\.js$)/g.test(item) == true) { 
        const entryKey = RegExp.$1;

        // books-index
        // books-list 
        const [dist, template] = entryKey.split('-');
        _entry[entryKey] = item;

        _plugins.push(new HtmlWebpackPlugin({ // 打包多页 去获取每个页面需要用到的js
            filename: `../views/${dist}/pages/${template}.html`, // 扔到dist目录
            template: `src/client/views/${dist}/pages/${template}.html`,
            inject: false,
            chunks: [entryKey]
        }));
    }
}

// console.log('用户的参数', _mode, _module);
console.log(_entry, 'entry');
const webpackConfig = {
    entry: _entry,
    output: {
        path: join(__dirname, './dist/assets'),
        publicPath: '/',
        filename: "scripts/[name].bundle.js"
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
          },
          {
            test: /\.css$/,
            use: [
              'style-loader',
              { loader: 'css-loader', options: { importLoaders: 1 } },
              'postcss-loader'
            ]
          }
        ]
    },
    plugins: [
        // new HtmlWebpackPlugin({
        //     template: _module == 'nomodule' ? `src/index.html` : `dist/index.html`, // 第二次打包追加scripts标签
        //     filename: `index.html`
        // }),
        ..._plugins,
        new htmlAfterPlugin
    ],
    watch: __modeFlag
}

// module.exports = merge(webpackConfig, _mergeModuleConfig, _mergeConfig);
module.exports = merge(webpackConfig, _mergeConfig);