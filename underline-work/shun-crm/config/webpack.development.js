const { join, resolve } = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const FriendlyErrorsWebpackPlugin = require('friendly-errors-webpack-plugin'); // 友好的错误提示
const WebpackBuildNotifierPlugin = require('webpack-build-notifier'); // webpack 弹窗提示
const BundleAnalyzerPlugin = require('webpack-bundle-analyzer').BundleAnalyzerPlugin; // 包文件分析
const setTitle = require('node-bash-title'); // 设置小黑板窗口title
const setIterm2Badge = require('set-iterm2-badge'); // 小黑板水印
const { CleanWebpackPlugin } = require("clean-webpack-plugin"); // 清理dist

setTitle('🍊开发环境配置');
// setIterm2Badge('8000');

module.exports = {
    devServer: {
        contentBase: join(__dirname , '../dist'),
        hot: true,
        proxy: {
            "/api": "http://localhost:3000"
        },
        quiet: true, // necessary for FriendlyErrorsPlugin
        historyApiFallback: true // 解决假路由刷新的问题
    },
    plugins: [
        // new BundleAnalyzerPlugin(),
        // new webpack.HotModuleReplacementPlugin(),
        new HtmlWebpackPlugin({
          title: "crm模板",
          filename: "index.html",
          template: resolve(__dirname, "../src/web/index-dev.html")
        }),
        new CleanWebpackPlugin(),
        new WebpackBuildNotifierPlugin({
            title: "🌶 Webpack Build",
            logo: join(__dirname, '../dogs.png'),
            suppressSuccess: true
        }),
        new FriendlyErrorsWebpackPlugin({
            compilationSuccessInfo: { // 启动成功
                messages: ['You application is running'],
                notes: ['编译成功']
            },
            clearConsole: true,
            onErrors: (severity, errors) => {
                new WebpackBuildNotifierPlugin({
                  title: "环境配置出错",
                  logo: resolve("../favicon.png"),
                  suppressSuccess: true
                });
              }
        })
    ]
}