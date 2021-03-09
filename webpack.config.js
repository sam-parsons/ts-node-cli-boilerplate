const path = require("path");

module.exports = {
  entry: "./lib/index.ts",
  mode: "production",
  output: {
    path: path.join(__dirname, "dist"),
    filename: "index.js",
    libraryTarget: "commonjs"
  },
  module: {
    rules: [
      {
        test: /\.(ts|js)x?$/,
        use: "babel-loader"
      }
    ]
  },
  resolve: {
    modules: ["node_modules"]
  }
};
