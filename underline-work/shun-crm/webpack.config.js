const argv = require('yargs-parser')(process.argv.slice(2)); // 取命令行参数
const path = require('path');
const _mode = argv.mode || 'development';   // 区分开发环境和上线环境的配置
const merge = require('webpack-merge');
const _mergeConfig = require(`./config/webpack.${_mode}.js`);
const HtmlWebpackPlugin = require('html-webpack-plugin')
const BundleAnalyzerPlugin = require('webpack-bundle-analyzer').BundleAnalyzerPlugin;

console.log(`./src/web/index-${_mode}.html`);
const webpackConfig = {
  entry: "./src/web/index.tsx",
  output: {
    filename: "bundle.[hash].js",
    path: __dirname + "/dist"
  },
  mode: argv.mode,
  devtool: "source-map",
  resolve: {
    extensions: [".ts", ".tsx", ".js", ".json"],
    alias: {
      '@components': path.resolve(__dirname, 'src/web/components/'),
      '@pages': path.resolve(__dirname, 'src/web/pages/')
    }
  },

  module: {
    rules: [
      {
        test: /\.css$/i,
        use: ['style-loader', 'css-loader'],
      },
      // -------- awesome-typescript-loader --------------
      // { test: /\.tsx?$/, loader: "awesome-typescript-loader" },
      // { enforce: "pre", test: /\.js$/, loader: "source-map-loader" }
      
      // -------- ts-loader --------------
      // { test: /\.tsx?$/, loader: "ts-loader" } 

      // -------- babel --------------
      { 
        test: /\.tsx?$/, 
        loader: 'babel-loader'
      }
    ]
  },
  externals: { // 把包从 bundle 里排除 但是入口 html 需要引入 生产环境生效
    "react": "React",
    "react-dom": "ReactDOM"
  },
  plugins: [
    new HtmlWebpackPlugin({ // 打包多页 去获取每个页面需要用到的js
      template: `./src/web/index-${ _mode }.html`,
      filename: `index.html`, // 扔到dist目录
    })
  ]
};

module.exports = merge(webpackConfig, _mergeConfig);