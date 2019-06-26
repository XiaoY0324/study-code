const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin')

module.exports = {
    entry: {
       main: './src/client/index.js'
    },
    mode: 'development',
    module: {
        rules: [
            {
                test: /\.js$/,
                exclude: /node_modules\/@webcomponents/,
                use: 'babel-loader'
            },
            {
                test: /\.css$/,
                use: ['style-loader', 'css-loader'],
            },
            {
                test: /\.html$/,
                loader: 'webcomponents-loader',
                query: {
                  // optinal parameter to use babel
                  babel: {
                    presets: 'es2015',
                    compact: true
                  },
                  // optinal parameter to use minify
                  minify: {
                    removeAttributeQuotes: true,
                    minifyCSS: true,
                    minifyJS: true,
                    removeComments: true,
                    collapseWhitespace: true
                  }
                }
            }
        ]
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: '!!ejs-compiled-loader!' + __dirname + '/src/client/views/books/book_list.html',
            inject: 'head'
        })
    ],
    output: {
        path: path.resolve(__dirname, 'dist'),
        publicPath: '/',
        filename: 'bundle.js'
    }
}