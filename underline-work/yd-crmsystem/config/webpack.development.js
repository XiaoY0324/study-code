const { join, resolve } = require("path");
const webpack = require("webpack");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const FriendlyErrorsPlugin = require("friendly-errors-webpack-plugin");
const WebpackBuildNotifierPlugin = require("webpack-build-notifier");
const BundleAnalyzerPlugin = require('webpack-bundle-analyzer').BundleAnalyzerPlugin;
const Jarvis = require("webpack-jarvis");
module.exports = {
  output: {
    filename: "scripts/[name].bundule.js"
  },
  devServer: {
    historyApiFallback: true,
    contentBase: join(__dirname, "../dist"),
    proxy: {
      "/api": "http://localhost:3000"
    },
    hot: true,
    quiet: true // necessary for FriendlyErrorsPlugin
  },
  plugins: [
    // new BundleAnalyzerPlugin(),
    // new Jarvis({
    //   port: 1337 // optional: set a port
    // }),
    // new webpack.HotModuleReplacementPlugin(),
    new HtmlWebpackPlugin({
      title: "京程一灯CRM",
      filename: "index.html",
      template: resolve(__dirname, "../src/web/index-dev.html")
    }),
    new WebpackBuildNotifierPlugin({
      title: "🌶 老袁的Webpack Build",
      logo: resolve("./img/favicon.png"),
      suppressSuccess: true
    }),
    new FriendlyErrorsPlugin({
      compilationSuccessInfo: {
        messages: ["You application is running here http://localhost:8022"]
        // notes: ["开发环境的Mock数据请务必与服务器报纸一致"]
      },
      clearConsole: true,
      onErrors: (severity, errors) => {
        // if (severity !== "error") {
        //   return; everity + ": " + error.name,
        // }
        // const error = errors[0];
        new WebpackBuildNotifierPlugin({
          title: "京程一灯配置环境",
          logo: resolve("../favicon.png"),
          suppressSuccess: true
        });
      }
    })
  ]
};
