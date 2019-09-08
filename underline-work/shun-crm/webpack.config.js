const argv = require('yargs-parser')(process.argv.slice(2)); // 取命令行参数
const path = require('path');
const _mode = argv.mode || 'development';   // 区分开发环境和上线环境的配置
const _modeflag = _mode === "production";
const merge = require('webpack-merge');
const _mergeConfig = require(`./config/webpack.${_mode}.js`);
const MiniCssExtractPlugin = require('mini-css-extract-plugin'); // 提取css
const ProgressBarPlugin = require("progress-bar-webpack-plugin"); // 进度条

const webpackConfig = {
  entry: "./src/web/index.tsx",
  output: {
    filename: 'js/bundle.[hash].js',
    path: path.resolve(__dirname, 'dist'),
    publicPath: '/'  // 根目录加载静态资源
  },
  mode: argv.mode,
  devtool: "source-map",
  resolve: {
    extensions: [".ts", ".tsx", ".js", ".json"],
    alias: {
      '@components': path.resolve(__dirname, 'src/web/components/'),
      '@pages': path.resolve(__dirname, 'src/web/pages/'),
      "@models": path.resolve(__dirname, 'src/web/models/'),
      "@assets": path.resolve(__dirname, 'src/web/assets/'),
    }
  },

  module: {
    rules: [
      {
        test: /\.css$/,
        use: [
          { 
            loader: MiniCssExtractPlugin.loader,
            options: {
              hmr: !_modeflag // 开发环境 css 热刷新 切记一定配上这个
            }
          },
          { loader: 'css-loader', options: { importLoaders: 1 } },
          'postcss-loader'
        ]
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
      },
      {
        test: /\.(png|jpg|gif|jpeg)$/i,
        use: [
          {
            loader: 'url-loader',
            options: {
              limit: 8192,
              name: 'images/[name].[contenthash:5].[ext]'
            },
          },
        ],
      }
    ]
  },
  externals: { // 把包从 bundle 里排除 但是入口 html 需要引入 生产环境生效
    "react": "React",
    "react-dom": "ReactDOM"
  },
  plugins: [
    new ProgressBarPlugin(), // 进度条
    new MiniCssExtractPlugin({ // 抽离css
      filename: _modeflag
        ? "styles/[name].[contenthash:5].css"
        : "styles/[name].css",
      chunkFilename: _modeflag
        ? "styles/[name].[contenthash:5].css"
        : "styles/[name].css"
    })
  ]
};

module.exports = merge(webpackConfig, _mergeConfig);
