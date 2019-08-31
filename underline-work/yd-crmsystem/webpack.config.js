const merge = require("webpack-merge");
const { join, resolve } = require("path");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const argv = require("yargs-parser")(process.argv.slice(2));
const _mode = argv.mode || "development";
const _mergeConfig = require(`./config/webpack.${_mode}.js`);
const _modeflag = _mode == "production" ? true : false;
const ProgressBarPlugin = require("progress-bar-webpack-plugin");
// const { CheckerPlugin } = require("awesome-typescript-loader");
//公共选项配置区域
let cssLoaders = [
  MiniCssExtractPlugin.loader,
  {
    loader: "css-loader",
    options: {
      importLoaders: 1 
    }
  },
  {
    loader: "postcss-loader"
  }
];
//如果是开发环境 把热更新的loader放进来
// !_modeflag && cssLoaders.unshift("css-hot-loader");
const webpackBaseConfig = {
  entry: {
    app: resolve("src/web/index.tsx")
  },
  output: {
    path: join(__dirname, "./dist/assets"),
    publicPath: "/"
  },
  module: {
    rules: [
      {
        test: /\.(js|jsx|ts|tsx)$/,
        include: [resolve("src")],
        exclude: /node_modules/,
        loader: "babel-loader"
        // loader:"awesome-typescript-loader"
      },
      {
        test: /\.css$/,
        //include: [resolve("src")], //限制范围，提高打包速度
        // exclude: /node_modules/,
        use: cssLoaders
      },
      {
        test: /\.(png|jpg|jpeg|gif|eot|woff|woff2|ttf|svg|otf)$/,
        use: [
          {
            // loader: 'file-loader',
            loader: "url-loader",
            options: {
              // 小于 10kB(10240字节）的内联文件
              limit: 10 * 1024,
              name: _modeflag
                ? "images/[name].[hash:5].[ext]"
                : "images/[name].[ext]"
            }
          }
        ]
      }
    ]
  },
  externals: {
    react: "React",
    "react-router-dom": "ReactRouterDOM",
    mobx: "mobx"
    // "mobx-react-lite": "mobx-react-lite"
  },
  optimization: {
    minimize: _modeflag ? true : false,
    runtimeChunk: {
      name: "runtime"
    },
    splitChunks: {
      chunks: "async",
      minSize: 30000,
      minChunks: 1,
      maxAsyncRequests: 5,
      maxInitialRequests: 3,
      name: false,
      cacheGroups: {
        commons: {
          chunks: "initial",
          minChunks: 2,
          maxInitialRequests: 5,
          minSize: 0,
          name: "commons"
        }
      }
    }
  },
  resolve: {
    alias: {
      "@assets": resolve("src/web/assets"),
      "@components": resolve("src/web/components"),
      "@models": resolve("src/web/models"),
      "@pages": resolve("src/web/pages"),
      "@utils": resolve("src/web/utils")
    },
    modules: ["node_modules", resolve("src")],
    extensions: [".js", ".ts", ".tsx", "jsx"]
  },
  plugins: [
    // new CheckerPlugin(),
    new ProgressBarPlugin(),
    new MiniCssExtractPlugin({
      filename: _modeflag
        ? "styles/[name].[contenthash:5].css"
        : "styles/[name].css",
      chunkFilename: _modeflag
        ? "styles/[name].[contenthash:5].css"
        : "styles/[name].css"
    })
  ]
};
module.exports = merge(_mergeConfig, webpackBaseConfig);
