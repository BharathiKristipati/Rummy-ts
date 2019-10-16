var path = require("path");

module.exports = {
  entry: "index.ts",
  output: {
    filename: "game.js"
  },
  resolve: {
    modules: [path.resolve(__dirname, "src"), "node_modules"],
    extensions: [".webpack.js", ".web.js", ".ts", ".js"],
    alias: {
      "pixi.js": "pixi.js/lib/index.js",
      robotlegs: "robotlegs/lib/index.js"
    }
  },
  externals: {
    'react-native-sqlite-storage': 'react-native-sqlite-storage'
  },
  module: {
    rules: [{ test: /\.ts$/, loader: "ts-loader" }],
    noParse: [/.*(pixi-particles\.js).*/]
  },
  watch: false,
  mode: "development"
};