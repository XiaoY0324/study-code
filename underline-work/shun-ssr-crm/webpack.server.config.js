const { join, resolve } = require("path");

module.exports = {
  mode: "development",
  entry: {
    app: join(__dirname, "./src/web/index-server-entry")
  },
  module: {
    rules: [
        {
            test: /\.(js|jsx|ts|tsx)$/,
            include: [resolve("src")],
            exclude: /node_modules/,
            loader: "babel-loader"
        }
    ]
  },
  // server 端的项目必要的包 从 server 里面挤掉 不参与打包
  externals: Object.keys(require("./package.json").dependencies),
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
  target: "node",
  output: {
    filename: "server-entry.js",
    libraryTarget: "commonjs2" // 将 server-entry.js 的返回值分配给 module.exports 正如名字所指，这个选项可以使用在 CommonJS 环境
  }
}