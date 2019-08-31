// const BundleAnalyzerPlugin = require('webpack-bundle-analyzer').BundleAnalyzerPlugin;
const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const OptimizeCSSAssetsPlugin = require("optimize-css-assets-webpack-plugin"); // 压缩 css


module.exports = {
    plugins: [
      new OptimizeCSSAssetsPlugin({
	      assetNameRegExp: /\.css$/g,
	      cssProcessor: require("cssnano"),
	      cssProcessorPluginOptions: {
	        preset: [
	          "default",
	          {
	            discardComments: {
	              removeAll: true
	            }
	          }
	        ]
	      },
	      canPrint: true
	    }),
	    new HtmlWebpackPlugin({
	      title: "crm模板",
	      filename: "../views/index.html",
	      template: path.resolve(__dirname, "../src/web/index-prod.html"),
	      inject: true,
	      minify: {
	        // minifyJS: true,
	        // removeComments: true,
	        // collapseWhitespace: true,
	        // removeAttributeQuotes: true
	      }
	    })
    ]
}